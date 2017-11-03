// angular
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    headerImageRatio: number = 700/1440;
    backgroundHeight: number = window.innerWidth * this.headerImageRatio;
    toolbarAlpha: number = 1;

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
        let bgHeight = event.target.innerWidth * this.headerImageRatio;
        if (bgHeight > 270) {
            this.backgroundHeight = bgHeight;
        }
    }

    /**
     * Add toolbar background color when scrolling up
     */
    @HostListener('window:scroll', ['$event'])
    colorToolbar(event: any) {
        let scrollTop = event.target.documentElement.scrollTop;
        
        if (scrollTop < this.backgroundHeight) {
            this.toolbarAlpha = scrollTop/this.backgroundHeight;
        }
    }

}
