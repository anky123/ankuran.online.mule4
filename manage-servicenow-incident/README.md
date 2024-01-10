# manage-servicenow-incident
![integration](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/5b7d35e1-fa16-4363-baa5-0cd1044baf34)

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
![login page](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/3baadc80-b3fc-4398-89a8-1149f5fc9871)

### Home page
* Once user sucessfully logged in, it will redirect to the home page. 
* User can create an incident by providing the details, in backend it will create the incident in service now portal.
* In current version, a normal user only can create an incident.

#### Preview : home
![home](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/57a80904-032c-4002-8a51-9602a0e6515f)

### Admin page (list of incidents)
* This page contains most of the features for an user.
* An admin user can view list of incident that belong to mulesoft user group.
  
#### Preview : list of incidents
![list of incidents](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/0e4f8b85-942d-4f6b-b1cc-5e8f896a2915)

### Admin page (view an incident)
* User can view an incident details that will fetch from servicenow portal based on user click.
  
#### Preview : view an incident
![view an incident](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/2f7497ff-f00d-4375-bff7-d71d72298a05)

### Admin page (update an incident)
* User can update an incident and backend will update the same in servicenow portal.
  * User can update detail description of an incident.
  * User can change the icident Impact and Urgency.
  * User can close or cancel the ticket if user resolve the issue by themselves. 
  * User can upload the attachment of an issue.
  
#### Preview : update an incident
![update an icident](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/d921073e-d082-40af-8b59-a01799e871ad)

##### Preview : update response
![update response](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/71a0637e-e8a6-4dc4-8046-d03982a42531)

##### Admin page (upload an attahment)
* User can upload an attachment related to an issue.
* In backend it will upload into servicenow for the specified incident.

##### Preview : upload an attahment
![upload an attahment](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/b778be73-3b37-45cf-939b-04aa99d1bd4b)

##### Preview : upload response
![upload response](https://github.com/firstqa-systems/manage-servicenow-incident/assets/144072711/a460e221-d90c-488f-8b84-9628449ccf5a)
