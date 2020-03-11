import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Series } from '../shared/models/series.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  @Input() seriesData: Series;
  videoEmbed: string;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['seriesData'].currentValue !== undefined) {
      this.videoEmbed = this.seriesData['video-embed'];
    }
  }

  ngOnInit(): void {
  }

}
