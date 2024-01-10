import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'update-incident-successful-modal',
  templateUrl: './update-incident-successful-modal.component.html',
  styleUrls: ['./update-incident-successful-modal.component.css']
})
export class UpdateIncidentSuccessfulModalComponent {
    @Input() updatedIncidentId: string;
    constructor(public activeModal: NgbActiveModal) { }
    close() {
        window.location.reload();
    }
}