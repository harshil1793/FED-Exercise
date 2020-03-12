import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Series, ShowDetails, EpisodeList } from '../shared/models/series.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  @Input() seriesData: Series;
  showDetails = new ShowDetails();
  videoEmbed: string;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['seriesData'] && this.seriesData !== undefined) {
      this.videoEmbed = this.seriesData['video-embed'];
    }
  }

  averageRating() {
    if (this.seriesData) {
      return this.seriesData['episode-list'].reduce(
        (total, next) => total + next.rating, 0) / this.seriesData['episode-list'].length;
    }
    return;
  }

}
