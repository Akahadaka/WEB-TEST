// angular
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    headerImageRatio: number = 236/619;
    bgHeight: number = window.innerWidth * this.headerImageRatio;

    /**
     * 
     */
    constructor() {
    }
    
    /**
     * Resize the height by the ratio of the background image
     */
    @HostListener('window:resize', ['$event'])
    resizeHeaderHeight(event: any) {
        this.bgHeight = event.target.innerWidth * this.headerImageRatio;
    }
}
