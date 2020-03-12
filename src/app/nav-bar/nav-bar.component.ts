import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() selectedLanguage = new EventEmitter<string>();
  selected: string;
  showMobileMenu: boolean;
  innerWidth: number;

  constructor() {
    this.selected = 'english';
    this.showMobileMenu = true;
  }

  ngOnInit(): void {
    this.onResize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.showMobileMenu = window.innerWidth < 767 ? false : true;
  }

  toggleMenu() {
    if (this.innerWidth  < 767) {
      this.showMobileMenu = this.showMobileMenu === true ? false : true;
    }
  }

  emitValue(language: string) {
    this.selectedLanguage.emit(language);
  }

}
