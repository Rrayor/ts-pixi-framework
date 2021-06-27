import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLayoutContainerComponent } from '@modules/project-browser/components/project-browser/card-layout-container/card-layout-container.component';
import { ProjectCardComponent } from '@modules/project-browser/components/project-browser/project-card/project-card.component';

@NgModule({
    declarations: [CardLayoutContainerComponent, ProjectCardComponent],
    imports: [CommonModule]
})
export class ProjectBrowserModule {}
