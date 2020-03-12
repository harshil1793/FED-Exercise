import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './app.service';
import { Series } from './shared/models/series.model';
import { ErrorDialog } from './shared/error-dialog/error.dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscription: Subscription;
  seriesData: Series;

  constructor(
    private appService: AppService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getEnglish();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  changeLanguage(language: string) {
    language === 'english' ? this.getEnglish(true) : this.getLatin();
  }

  getEnglish(requestToChange?: boolean) {
    this.appService.getEnglish()
        .subscribe((data: Series) => {
          this.seriesData = data;
          if (requestToChange) {
            this.openSnackBar('English successfully updated.');
          }
        },
        error => {
          this.openDialog(error.erroe.message);
        });
  }

  getLatin() {
    this.subscription = this.appService.getLatin()
        .subscribe((data: Series) => {
          this.seriesData = data;
          this.openSnackBar('Latin successfully updated.');
          },
        error => {
          this.openDialog(error.erroe.message);
        });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Done', { duration: 2000})
  }

  openDialog(message: string) {
    const dialogRef = this.dialog.open(ErrorDialog, {
      width: '300px',
      data: { message: message}
    });
  }

}
