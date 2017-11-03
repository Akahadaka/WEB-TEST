import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Input()
    backgroundHeight;
    toolbarAlpha: number = 0;

    constructor() { }

    ngOnInit() {
    }

    /**
     * Add toolbar background color when scrolling up
     */
    @HostListener('window:scroll', ['$event'])
    colorToolbar(event: any) {
        let scrollTop = event.target.documentElement.scrollTop;
        
        if (scrollTop < this.backgroundHeight) {
            this.toolbarAlpha = scrollTop/this.backgroundHeight;
        } else {
            this.toolbarAlpha = 1;
        }
    }

}
