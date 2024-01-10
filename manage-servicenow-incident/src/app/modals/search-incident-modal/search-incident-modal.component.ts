import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Incident } from './../../models/incident';

@Component({
  selector: 'search-incident-modal',
  templateUrl: './search-incident-modal.component.html',
  styleUrls: ['./search-incident-modal.component.css']
})
export class SearchIncidentModalComponent {
    @Input() incident: Incident;
    
    constructor(public activeModal: NgbActiveModal) { }
    
    close() {
        window.location.reload();
    }
    
    
}