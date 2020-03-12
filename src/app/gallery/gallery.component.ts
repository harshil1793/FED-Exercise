import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Series } from '../shared/models/series.model';
import { Images } from '../shared/models/image-slider.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() seriesData: Series;
  images: Images[];

  constructor() {
    this.images = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['seriesData'].currentValue) {
      this.seriesData = changes['seriesData'].currentValue;
      this.groupImages();
    }
  }

  groupImages() {
    if (this.seriesData !== undefined) {
      this.seriesData.gallery.forEach(img => {
        this.images.push({
          image: img.src,
          thumbImage: img.src,
          alt: img.text,
          title: img.text,
        });
      })
    }
  }

}
