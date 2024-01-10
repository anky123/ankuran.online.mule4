import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'upload-attachment-successful-modal',
  templateUrl: './upload-attachment-successful-modal.component.html',
  styleUrls: ['./upload-attachment-successful-modal.component.css']
})
export class UploadAttachmentSuccessfulModalComponent {
    @Input() uploadedFile: string;
    
    constructor(public activeModal: NgbActiveModal) { }
    
    close() {
        window.location.reload();
    }
  
}