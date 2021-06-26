import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBrowserComponent } from './modules/project-browser/components/project-browser/project-browser.component';

const routes: Routes = [
    {
        path: '/',
        component: ProjectBrowserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
