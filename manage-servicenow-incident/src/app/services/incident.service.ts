import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Incident } from './../models/incident';

@Injectable({ providedIn: 'root' })
export class IncidentService {
    constructor(private http: HttpClient) { }

    getAllIncidents() {
        const httpOptions = {
            headers: new HttpHeaders({
                client_id : environment.clientId,
                client_secret : environment.clientSecret,
            }),
            params: { sys_created_by : 'mulesoft.int' }
        };
        return this.http.get<Incident[]>(environment.incidentUrl + 'incidents', httpOptions);
    }

    getIncidentById(searchId: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                client_id : environment.clientId,
                client_secret : environment.clientSecret,
            }),
            params: { sys_id : searchId }
        };
        return this.http.get<Incident>(environment.incidentUrl + 'incident', httpOptions);
    }
    
    createIncident(incident: Incident) {
        const httpOptions = {
            headers: new HttpHeaders({
                client_id : environment.clientId,
                client_secret : environment.clientSecret,
            })
        };
        return this.http.post<Incident>(environment.incidentUrl + 'incident', incident, httpOptions);
    }
    
    updateIncident(incident: Incident) {
        const httpOptions = {
            headers: new HttpHeaders({
                client_id : environment.clientId,
                client_secret : environment.clientSecret,
            })
        };
        return this.http.put<Incident>(environment.incidentUrl + 'incident', incident, httpOptions);
    }
    
    uploadFile(file: File, uploadIncidentId: string) {
        console.log('uploadFile : ', uploadIncidentId);
        const httpOptions = {
            headers: new HttpHeaders({
                client_id : environment.clientId,
                client_secret : environment.clientSecret,
            }),
            params: { fileName : file.name }
        };
        return this.http.post<Incident>(environment.incidentUrl + 'incident/upload-file/' + uploadIncidentId, file, httpOptions);
    }
}