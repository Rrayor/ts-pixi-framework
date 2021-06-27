import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-layout-container',
    templateUrl: './card-layout-container.component.html',
    styleUrls: ['./card-layout-container.component.scss']
})
export class CardLayoutContainerComponent {
    @Input()
    data: Array<unknown>;
}
