import { Component, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavigationExtras } from "@angular/router";

import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { AuthenticationService } from './../services/authentication.service';

import { Incident } from './../models/incident';
import { Search } from './../models/search';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IncidentService } from './../services/incident.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateIncidentModalComponent } from './../modals/create-incident-modal/create-incident-modal.component';
import { SearchIncidentModalComponent } from './../modals/search-incident-modal/search-incident-modal.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    loading = false;
    user: User;
    userFromApi?: User;
    
    incident: Incident = new Incident();
    search = new Search();
    incidentForm!: FormGroup;
    searchForm!: FormGroup;
    submitted = false;
    searched = false;
    error = '';
    createdIncidentId: string = "";
    
    constructor(private modalService: NgbModal, private formBuilder: FormBuilder,private userService: UserService,private authenticationService: AuthenticationService,private incidentService: IncidentService, private httpClient: HttpClient, private router: Router) {
        this.user = <User>this.authenticationService.userValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
        this.incidentForm = this.formBuilder.group({
            short_description: ['', [Validators.required, Validators.minLength(10)]],
            urgency: ['', Validators.required]
        });
    }
    
    get f() { return this.incidentForm.controls; }
    get g() { return this.searchForm.controls; }
    
    onSubmit() {
        this.submitted = true;
        
        // stop here if form is invalid
        if (this.incidentForm.invalid) {
            return;
        }
        this.incidentService.createIncident(this.incident).subscribe((data:any) => {
            this.createdIncidentId = data.number;
            const modalRef = this.modalService.open(CreateIncidentModalComponent);
            modalRef.componentInstance.createdIncidentId = data.number;
        });
    }
    
    onReset(): void {
        this.submitted = false;
        this.incidentForm.reset();
    }
    
    searchId() {
        this.searched = true;
        
        // stop here if form is invalid
        if (this.searchForm.invalid) {
            return;
        }
        this.incidentService.getIncidentById(this.searchForm.value.searchId).subscribe((data:any) => {
            this.incident.short_description = data.short_description;
            this.incident.sys_id = data.sys_id;
            this.incident.urgency = data.urgency;
            const modalRef = this.modalService.open(SearchIncidentModalComponent);
            modalRef.componentInstance.incident = this.incident;
        });
    }
}