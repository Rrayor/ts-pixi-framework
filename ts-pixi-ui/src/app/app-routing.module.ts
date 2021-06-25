import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                children: []
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
