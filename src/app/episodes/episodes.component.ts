import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Series, EpisodeList } from '../shared/models/series.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnChanges {

  @Input() seriesData: Series;
  episodes: EpisodeList[];
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['seriesData'].currentValue) {
      this.seriesData = changes['seriesData'].currentValue;
      this.storeEpisodes();
    }
  }

  storeEpisodes() {
    if (this.seriesData) {
      this.episodes = this.seriesData['episode-list']
    }
  }
  sortByLowestRating() {
    this.episodes.sort((episodeA, episodeB) => episodeA.rating - episodeB.rating);
    this.openSnackBar('lowest');
  }

  sortByHighestRating() {
    this.episodes.sort((episodeA, episodeB) => episodeB.rating - episodeA.rating);
    this.openSnackBar('highest');
  }

  openSnackBar(order: string) {
    this._snackBar.open(`Episodes sorted by ${order} rating.`, 'Done', { duration: 2000})
  }
}
