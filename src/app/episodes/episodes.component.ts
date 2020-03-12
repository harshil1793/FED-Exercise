import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Series, EpisodeList } from '../shared/models/series.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnChanges {

  @Input() seriesData: Series;
  episodes: EpisodeList[];
  
  constructor() { }

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
}
