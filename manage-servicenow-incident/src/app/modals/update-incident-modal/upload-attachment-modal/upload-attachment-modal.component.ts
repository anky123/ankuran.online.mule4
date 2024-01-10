import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentService } from './../../../services/incident.service';
import { fromEvent, defer, merge } from 'rxjs';
import { tap, switchMap, takeUntil, mergeMap, first } from 'rxjs/operators';

import { UploadAttachmentSuccessfulModalComponent } from './upload-attachment-successful-modal/upload-attachment-successful-modal.component';

@Component({
  selector: 'upload-attachment-modal',
  templateUrl: './upload-attachment-modal.component.html',
  styleUrls: ['./upload-attachment-modal.component.css']
})
export class UploadAttachmentModalComponent {
    @Input() uploadIncidentId: string;
    shortLink: string = ""; 
    loading: boolean = false; // Flag variable 
    file: File;
    uploadForm!: FormGroup;
    submitted = false;
    uploadFile = null;
    
    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private incidentService: IncidentService,private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.loading = false;
        this.uploadForm = this.formBuilder.group({
            uploadFile: ['', Validators.required]
        });
    }
    get g() { return this.uploadForm.controls; }
    
    close() {
        window.location.reload();
    }
  
  onChange(event: any) { 
        this.file = event.target.files[0]; 
    } 
  
    onUpload() { 
        this.submitted = true;
        
        if (this.uploadForm.invalid) {
            return;
        }
        
        this.loading = !this.loading; 
        this.incidentService.uploadFile(this.file, this.uploadIncidentId).subscribe((data:any) => {
            const modalRef = this.modalService.open(UploadAttachmentSuccessfulModalComponent);
            modalRef.componentInstance.uploadedFile = data.file_name;
        });
        
    } 
}