import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Incident } from './../models/incident';
import { IncidentService } from './../services/incident.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminSearchIncidentModalComponent } from './../modals/admin-search-incident-modal/admin-search-incident-modal.component';
import { ViewIncidentModalComponent } from './../modals/view-incident-modal/view-incident-modal.component';
import { UpdateIncidentModalComponent } from './../modals/update-incident-modal/update-incident-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];
    updateForm!: FormGroup;
    incident: Incident = new Incident();
    incidentList: Incident[] = [];
    searched = false;
    
    constructor(private modalService: NgbModal,private userService: UserService,private incidentService: IncidentService,private formBuilder: FormBuilder,) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
        
        this.incidentService.getAllIncidents().pipe(first()).subscribe(incidentList => {
            this.incidentList = incidentList;
        });
    }
  
    sortData(sort: Sort) {
        const data = this.incidentList.slice();
        if (!sort.active || sort.direction === '') {
            this.incidentList = data;
            return;
        }
        this.incidentList = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
            case 'number':
            return compare(a.number, b.number, isAsc);
            case 'short_description':
            return compare(a.short_description, b.short_description, isAsc);
            case 'urgency':
            return compare(a.urgency, b.urgency, isAsc);
            case 'incident_state':
            return compare(a.incident_state, b.incident_state, isAsc);
            case 'sys_created_on':
            return compare(a.sys_created_on, b.sys_created_on, isAsc);
            case 'sys_updated_on':
            return compare(a.sys_updated_on, b.sys_updated_on, isAsc);
            default:
            return 0;
            }
        });
    }
    
    viewIncident(incidentFromList: Incident){
        this.incidentService.getIncidentById(incidentFromList.sys_id).subscribe((data:any) => {
            this.incident.sys_id = data.incident.sys_id;
            this.incident.short_description = data.incident.short_description;
            this.incident.description = data.incident.description;
            this.incident.urgency = data.incident.urgency;
            this.incident.priority = data.incident.priority;
            this.incident.impact = data.incident.impact;
            
            this.incident.number = data.incident.number;
            this.incident.incident_state = data.incident.incident_state;
            this.incident.hold_reason = data.incident.hold_reason;
  
            this.incident.sys_created_on = data.incident.sys_created_on;
            this.incident.sys_created_by = data.incident.sys_created_by;
            this.incident.sys_updated_on = data.incident.sys_updated_on;
            this.incident.sys_updated_by = data.incident.sys_updated_by;
  
            this.incident.assigned_to = data.incident.assigned_to.display_value;
            this.incident.assignment_group = data.incident.assignment_group;
  
            this.incident.opened_by = data.incident.opened_by;
            this.incident.opened_at = data.incident.opened_at;
            this.incident.reopened_by = data.incident.reopened_by;
            this.incident.reopened_time = data.incident.reopened_time;
  
            this.incident.sys_updated_on = data.incident.sys_updated_on;
            this.incident.sys_updated_by = data.incident.sys_updated_by;
  
            this.incident.close_code = data.incident.close_code;
            this.incident.close_notes = data.incident.close_notes;
            this.incident.closed_at = data.incident.closed_at;
            this.incident.closed_by = data.incident.closed_by.display_value;
  
            this.incident.all_comments = data.all_comments;
        });
        const modalRef = this.modalService.open(ViewIncidentModalComponent);
        modalRef.componentInstance.incident = this.incident;
    }
    
    updateIncident(incidentFromList: Incident){
        this.incidentService.getIncidentById(incidentFromList.sys_id).subscribe((data:any) => {
            this.incident.sys_id = data.incident.sys_id;
            this.incident.short_description = data.incident.short_description;
            this.incident.description = data.incident.description;
            this.incident.urgency = data.incident.urgency;
            this.incident.priority = data.incident.priority;
            this.incident.impact = data.incident.impact;
            
            this.incident.number = data.incident.number;
            this.incident.incident_state = data.incident.incident_state;
            this.incident.hold_reason = data.incident.hold_reason;
  
            this.incident.sys_created_on = data.incident.sys_created_on;
            this.incident.sys_created_by = data.incident.sys_created_by;
            this.incident.sys_updated_on = data.incident.sys_updated_on;
            this.incident.sys_updated_by = data.incident.sys_updated_by;
  
            this.incident.assigned_to = data.incident.assigned_to.display_value;
            this.incident.assignment_group = data.incident.assignment_group;
  
            this.incident.opened_by = data.incident.opened_by;
            this.incident.opened_at = data.incident.opened_at;
            this.incident.reopened_by = data.incident.reopened_by;
            this.incident.reopened_time = data.incident.reopened_time;
  
            this.incident.sys_updated_on = data.incident.sys_updated_on;
            this.incident.sys_updated_by = data.incident.sys_updated_by;
  
            this.incident.close_code = data.incident.close_code;
            this.incident.close_notes = data.incident.close_notes;
            this.incident.closed_at = data.incident.closed_at;
            this.incident.closed_by = data.incident.closed_by.display_value;
  
            this.incident.all_comments = data.all_comments;
        });
        console.log('this.incident : ', this.incident)
        const modalRef = this.modalService.open(UpdateIncidentModalComponent);
        modalRef.componentInstance.incident = this.incident;
    }
    
    get g() { return this.updateForm.controls; }
    searchId() {
        this.searched = true;
        
        // stop here if form is invalid
        if (this.updateForm.invalid) {
            return;
        }
        this.incidentService.getIncidentById(this.updateForm.value.searchId).subscribe((data:any) => {
            this.incident.short_description = data.short_description;
            this.incident.sys_id = data.sys_id;
            this.incident.urgency = data.urgency;
            
            const modalRef = this.modalService.open(AdminSearchIncidentModalComponent);
            modalRef.componentInstance.incident = this.incident;
        });
    }
    
    
    
    
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}