# manage-servicenow-incident
![angular_mulesoft_servicenow](https://github.com/anky123/ankuran.online.mule4/assets/13630010/5edc718c-62a5-45aa-91e0-a9d816f677ec)

* version 1.0.0
* AngularJS App to manage the serviceNow incidents
* This project was generated with AngularJS version 16.2.1.

## Development process         
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Application details
* This App is designed to communicate with Mulesoft API and to fulfill the requiremnt of an incident management process.
* In this version we use pre-defined users (admin and user). But that should be replace with Role based Access control(Okta) in upcoming version.

## Configuration check before execute the APP
* Once the backend (mulesoft API) deployed either in local system or in cloudHub, make sure the enviorment configurations are correct.
```
export const environment = {
    production: false,
    
    apiUrl: 'http://localhost:4000',
    
    // LOCAL Experience API URL
    incidentUrl: 'http://localhost:8081/v1/',
    
    // DEV Experience API URL
    //incidentUrl: 'http://incident-app.us-e2.cloudhub.io/v1/',
    
    // DEV Client ID needed by experience API
    clientId: "test",
  
    // DEV Client SECRET needed by experience API
    clientSecret: "test"
};
```
## How to use the App
* Below are functionality user can perform once the backend and frontend APP deployed succesfully.

### Login page
* This is the landing page. User can use below credentials,
  * For normal user
    * username : user
    * Password : user
    * Accesses : A normal user can only create an incident. In upcoming version we have to include the other features (example : serach, view and update incident).
  * For admin user
    * username : admin
    * Password : admin
    * Accesses : A admin user can create, view and update an incident. Also view the list of incidents that belong to mulesoft group.

#### Preview : login
![login](https://github.com/anky123/ankuran.online.mule4/assets/13630010/07e8d982-2ab7-4e36-9a68-9efb5093542e)


### Home page
* Once user sucessfully logged in, it will redirect to the home page. 
* User can create an incident by providing the details, in backend it will create the incident in service now portal.
* In current version, a normal user only can create an incident.

#### Preview : home
![home](https://github.com/anky123/ankuran.online.mule4/assets/13630010/8dfaa167-d98e-4d4e-ad79-f823fa5f19ec)


### Admin page (list of incidents)
* This page contains most of the features for an user.
* An admin user can view list of incident that belong to mulesoft user group.
  
#### Preview : list of incidents
![list of incidents](https://github.com/anky123/ankuran.online.mule4/assets/13630010/12d8d3ab-920c-4a93-9640-7f26711497a7)


### Admin page (view an incident)
* User can view an incident details that will fetch from servicenow portal based on user click.
  
#### Preview : view an incident
![view an incident](https://github.com/anky123/ankuran.online.mule4/assets/13630010/6a9c38d4-245a-463d-a4da-903c40830ed8)


### Admin page (update an incident)
* User can update an incident and backend will update the same in servicenow portal.
  * User can update detail description of an incident.
  * User can change the icident Impact and Urgency.
  * User can close or cancel the ticket if user resolve the issue by themselves. 
  * User can upload the attachment of an issue.
  
#### Preview : update an incident
![update an incident](https://github.com/anky123/ankuran.online.mule4/assets/13630010/8eecfe23-bbb2-42d5-9200-2215100093eb)


##### Preview : update response
![update response](https://github.com/anky123/ankuran.online.mule4/assets/13630010/e3d6bd37-5737-4611-8e9e-dbd29636caa6)


##### Admin page (upload an attahment)
* User can upload an attachment related to an issue.
* In backend it will upload into servicenow for the specified incident.

##### Preview : upload an attahment
![upload an attahment](https://github.com/anky123/ankuran.online.mule4/assets/13630010/ce3060bb-05c1-48f7-9b91-839ee47f64d4)


##### Preview : upload response
![upload response](https://github.com/anky123/ankuran.online.mule4/assets/13630010/6c118d0a-9169-4a5c-9589-3b8c58cc0609)
