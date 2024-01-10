import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'create-incident-modal',
  templateUrl: './create-incident-modal.component.html',
  styleUrls: ['./create-incident-modal.component.css']
})
export class CreateIncidentModalComponent {
    @Input() createdIncidentId: string;
    constructor(public activeModal: NgbActiveModal) { }
    
    close() {
        window.location.reload();
    }
}