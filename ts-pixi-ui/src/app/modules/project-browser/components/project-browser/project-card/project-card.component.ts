import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@core/models/Project.model';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    @Input()
    project: Project;
}
