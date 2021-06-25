import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
    TranslateLoader,
    TranslateModule,
    TranslateService
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectBrowserComponent } from './modules/project-browser/components/project-browser/project-browser.component';
import { AppRoutingModule } from './app-routing.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent, ProjectBrowserComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        // TODO: May be exported from a shared module without a forRoot() call
        TranslateModule.forRoot({
            defaultLanguage: 'en-US',
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    providers: [TranslateService],
    bootstrap: [AppComponent]
})
export class AppModule {}
