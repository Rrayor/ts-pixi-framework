import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../services/project.service';
import { Project } from '../../../../core/models/Project.model';

@Component({
    selector: 'app-project-browser',
    templateUrl: './project-browser.component.html',
    styleUrls: ['./project-browser.component.scss']
})
export class ProjectBrowserComponent implements OnInit {
    data: Array<Project>;

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.data = this.projectService.getAllProjects();
    }
}
