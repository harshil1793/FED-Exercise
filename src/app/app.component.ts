import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from './app.service';
import { Series } from './shared/models/series.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscription: Subscription;
  seriesData: Series;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getEnglish();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  changeLanguage(language: string) {
    language === 'english' ? this.getEnglish() : this.getLatin();
  }

  getEnglish() {
    this.appService.getEnglish()
        .subscribe((data: Series) => {
          this.seriesData = data;
          },
          error => {
            console.log(error);
        });
  }

  getLatin() {
    this.subscription = this.appService.getLatin()
        .subscribe((data: Series) => {
          this.seriesData = data;
          },
          error => {
            console.log(error);
        });
  }
}
