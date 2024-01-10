import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Incident } from './../../models/incident';
@Component({
  selector: 'view-incident-modal',
  templateUrl: './view-incident-modal.component.html',
  styleUrls: ['./view-incident-modal.component.css']
})
export class ViewIncidentModalComponent {
    @Input() incident: Incident;
    constructor(public activeModal: NgbActiveModal) { }
    
    close() {
        window.location.reload();
    }
                
}