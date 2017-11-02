// angular
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    headerImageRatio: number = 700/1440;
    bgHeight: number = window.innerWidth * this.headerImageRatio;
    toolbarAlpha: number = 0;

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

    /**
     * Add toolbar background color when scrolling up
     */
    @HostListener('window:scroll', ['$event'])
    colorToolbar(event: any) {
        let scrollTop = event.target.documentElement.scrollTop;
        
        if (scrollTop < this.bgHeight) {
            this.toolbarAlpha = scrollTop/this.bgHeight;
            console.log(this.toolbarAlpha);
        }
    }

}
