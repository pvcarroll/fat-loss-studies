import { Component } from '@angular/core';

import {STUDIES} from "./study.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Fat Loss Studies';
    studies = STUDIES;
    // egcgStudies = STUDIES.EGCG;
}
