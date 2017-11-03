// angular
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { RouterModule }            from '@angular/router';

// app
import { MaterialModule }   from './shared/material/material.module';

// components
import { AppComponent }     from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent }    from "./pages/home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
