import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HomeComponent } from './home/home.component';
import { CreateIncidentModalComponent } from './modals/create-incident-modal/create-incident-modal.component';
import { SearchIncidentModalComponent } from './modals/search-incident-modal/search-incident-modal.component';
import { AdminSearchIncidentModalComponent } from './modals/admin-search-incident-modal/admin-search-incident-modal.component';
import { ViewIncidentModalComponent } from './modals/view-incident-modal/view-incident-modal.component';
import { UpdateIncidentModalComponent } from './modals/update-incident-modal/update-incident-modal.component';
import { UpdateIncidentSuccessfulModalComponent } from './modals/update-incident-modal/update-incident-successful-modal/update-incident-successful-modal.component';
import { UploadAttachmentModalComponent } from './modals/update-incident-modal/upload-attachment-modal/upload-attachment-modal.component';
import { UploadAttachmentSuccessfulModalComponent } from './modals/update-incident-modal/upload-attachment-modal/upload-attachment-successful-modal/upload-attachment-successful-modal.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule} from '@angular/material/sort';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule, 
        NgbModule, BrowserAnimationsModule, MatSortModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        CreateIncidentModalComponent,
        SearchIncidentModalComponent,
        AdminSearchIncidentModalComponent,
        ViewIncidentModalComponent,
        UpdateIncidentModalComponent,
        UpdateIncidentSuccessfulModalComponent,
        UploadAttachmentModalComponent,
        UploadAttachmentSuccessfulModalComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }