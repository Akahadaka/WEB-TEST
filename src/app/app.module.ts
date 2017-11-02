// angular
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule }     from '@angular/router';

// app
import { MaterialModule } from './shared/material/material.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
