import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdToolbarModule, MdListModule, MdExpansionModule, MdTableModule, MdTabsModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MdListModule,
        MdExpansionModule,
        MdTableModule,
        MdTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
