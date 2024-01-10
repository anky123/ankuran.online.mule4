import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Incident } from './../../models/incident';

@Component({
  selector: 'admin-search-incident-modal',
  templateUrl: './admin-search-incident-modal.component.html',
  styleUrls: ['./admin-search-incident-modal.component.css']
})
export class AdminSearchIncidentModalComponent {
    @Input() incident: Incident;
    
    constructor(public activeModal: NgbActiveModal) { }
    
    close() {
        window.location.reload();
    }
    
    updateIncident() {
        window.location.reload();
    }
    
}