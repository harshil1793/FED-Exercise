import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChip]'
})
export class ChipDirective implements OnInit{
    @Input('appChip') chipColor: string;
    @Input('fontColor') fontColor: string;
  
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
      this.el.nativeElement.style.color = this.fontColor;
      this.el.nativeElement.style.background = this.chipColor;
      this.el.nativeElement.style.fontWeight = '600';
      this.el.nativeElement.style.borderRadius = '20px';
      this.el.nativeElement.style.padding = '5px 15px';
    }
}