import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Incident } from './../../models/incident';
import { IncidentService } from './../../services/incident.service';

import { UpdateIncidentSuccessfulModalComponent } from './update-incident-successful-modal/update-incident-successful-modal.component';
import { UploadAttachmentModalComponent } from './upload-attachment-modal/upload-attachment-modal.component';

@Component({
  selector: 'update-incident-modal',
  templateUrl: './update-incident-modal.component.html',
  styleUrls: ['./update-incident-modal.component.css']
})
export class UpdateIncidentModalComponent {
    @Input() incident: Incident;
    putIncident: Incident = new Incident();
    responseIncident: Incident = new Incident();
    updateForm!: FormGroup;
    submitted = false;
    constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private incidentService: IncidentService) { }
    
    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            description: ['', [Validators.required, Validators.minLength(10)]],
            impact: ['', Validators.required],
            urgency: ['', Validators.required],
            incident_state: ['', Validators.required],
            comment: ['', [Validators.required, Validators.minLength(10)]]
        });
    }
    get f() { return this.updateForm.controls; }
    updateIncident(updateIncident: Incident) {
        this.submitted = true;
        if (this.updateForm.invalid) {
            return;
        }
        // TODO : Only send these 4 fileds
        this.putIncident.sys_id == updateIncident.sys_id;
        this.putIncident.comment == updateIncident.comment;
        this.putIncident.impact == updateIncident.impact;
        this.putIncident.urgency == updateIncident.impact;
        
        console.log('updateIncident : ', updateIncident);
        this.incidentService.updateIncident(updateIncident).subscribe((data:any) => {
            this.responseIncident.sys_id = data.sys_id;
            const modalRef = this.modalService.open(UpdateIncidentSuccessfulModalComponent);
            modalRef.componentInstance.updatedIncidentId = data.sys_id;
        });
        
        //window.location.reload();
    }
    uploadAttachment(uploadIncident: Incident){
        const modalRef = this.modalService.open(UploadAttachmentModalComponent);
        modalRef.componentInstance.uploadIncidentId = uploadIncident.sys_id;
    }
                
}