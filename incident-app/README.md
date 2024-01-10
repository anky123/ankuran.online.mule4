![mulesoft_servicenow](https://github.com/anky123/ankuran.online.mule4/assets/13630010/7d00dce0-7cc9-4ea3-9261-e558bd10af96)

# [incident-app](#incident-app)

This is an utility app related to mulesoft and serviceNow integration



## [Key features](https://github.com/anky123/ankuran.online.mule4/blob/project10-mulesoft-serviceNow-angularJS/incident-app/README.md)
- End user can create , update and get an incident from servicenow by invoking an REST API call.
- Also user can get list of incidents.
- It covers all the life cycle of an incident process in servicenow portal

## [Postman collection](https://github.com/anky123/ankuran.online.mule4/tree/project10-mulesoft-serviceNow-angularJS/incident-app/src/main/resources/postman_collections)

## [RAML defination](https://github.com/anky123/ankuran.online.mule4/blob/project10-mulesoft-serviceNow-angularJS/incident-app/src/main/resources/api/incident-app.raml)

## [Requests and Response](https://github.com/anky123/ankuran.online.mule4/blob/project10-mulesoft-serviceNow-angularJS/incident-app/README.md)

### Request : Create Incident
`POST {{base_path}}/incident-app/v1/incident`

```
curl --location --request POST 'http://0.0.0.0:8081/incident-app/v1/incident' \
--header 'client_id: test' \
--header 'client_secret: test' \
--header 'Content-Type: application/json' \
--data-raw '{
    "short_description": "Mulesoft Test Incident 1",
    "urgency" : "3"
}'
```
### Response : Create Incident

    HTTP/1.1 201 Created
    Content-Type: application/json; charset=UTF-8
    Content-Length: 76
    Date: Wed, 27 Sep 2023 22:02:21 GMT
    {
      "sys_id": "db92356ddbe17d5008d241b91396197a",
      "number": "INC0010049"
    }

### Request : Update Incident
`PUT {{base_path}}/incident-app/v1/incident`

```
curl --location --request PUT 'http://0.0.0.0:8081/incident-app/v1/incident' \
--header 'client_id: test' \
--header 'client_secret: test' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sys_id": "db92356ddbe17d5008d241b91396197a",
    "urgency" : "3"
}'
```
### Response : Update Incident

    HTTP/1.1 201 Created
    Content-Type: application/json; charset=UTF-8
    Content-Length: 76
    Date: Wed, 27 Sep 2023 22:02:21 GMT
    {
      "sys_id": "db92356ddbe17d5008d241b91396197a"
    }
    
### Request : Get Incident
`GET {{base_path}}/incident-app/v1/incident?sys_id=ac5163dbdb553150469fab1c139619f6`

```
curl --location --request GET 'http://0.0.0.0:8081/incident-app/v1/incident?sys_id=ac5163dbdb553150469fab1c139619f6' \
--header 'client_id: test' \
--header 'client_secret: test'
```
### Response : Get Incident

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=UTF-8
    Content-Length: 8053
    Date: Wed, 27 Sep 2023 22:01:06 GMT
    {
    "incident": {
        "parent": "",
        "made_sla": "true",
        "caused_by": "",
        "watch_list": "",
        "upon_reject": "Cancel all future Tasks",
        "sys_updated_on": "2023-09-27 14:24:07",
        "child_incidents": "0",
        "hold_reason": "Awaiting Caller",
        "origin_table": "",
        "task_effective_number": "INC0010047",
        "approval_history": "",
        "skills": "",
        "number": "INC0010047",
        "resolved_by": "",
        "sys_updated_by": "Ankur.Jyoti",
        "opened_by": {
            "display_value": "Mulesoft Integration",
            "link": "https://service-now.com/api/now/table/sys_user/c95409a9ddewe32o4hrlwwfd97e"
        },
        "user_input": "",
        "sys_created_on": "2023-09-21 15:19:43",
        "sys_domain": {
            "display_value": "global",
            "link": "https://service-now.com/api/now/table/sys_user_group/global"
        },
        "state": "On Hold",
        "route_reason": "",
        "sys_created_by": "mulesoft.int",
        "knowledge": "false",
        "order": "",
        "calendar_stc": "",
        "closed_at": "",
        "cmdb_ci": "",
        "delivery_plan": "",
        "contract": "",
        "impact": "3 - Low",
        "active": "true",
        "work_notes_list": "",
        "business_service": "",
        "business_impact": "",
        "priority": "4 - Low",
        "sys_domain_path": "/",
        "rfc": "",
        "time_worked": "",
        "expected_start": "",
        "opened_at": "2023-09-21 15:19:43",
        "business_duration": "",
        "group_list": "",
        "work_end": "",
        "caller_id": {
            "display_value": "Mulesoft Integration",
            "link": "https://service-now.com/api/now/table/sys_user/c95dwewssdsfdsdb1c1396197e"
        },
        "reopened_time": "",
        "resolved_at": "",
        "approval_set": "",
        "subcategory": null,
        "work_notes": "2023-09-27 14:23:30 - Ankur Jyoti Bhuyan (Work notes)\nHold for test 11\n\n2023-09-27 13:47:13 - Ankur Jyoti Bhuyan (Work notes)\nTest for work notes\n\n2023-09-26 12:07:13 - Dinesh Sengodan (Work notes)\ndfgtedf dfsdfd\n\n2023-09-21 15:49:55 - Ankur Jyoti Bhuyan (Work notes)\nAssigned to mulesoft team\n\n",
        "universal_request": "",
        "short_description": "Test Incident 2",
        "close_code": null,
        "correlation_display": "",
        "delivery_task": "",
        "work_start": "",
        "assignment_group": "",
        "additional_assignee_list": "",
        "business_stc": "",
        "cause": "",
        "description": "Test details description",
        "origin_id": "",
        "calendar_duration": "",
        "close_notes": "",
        "notify": "Do Not Notify",
        "service_offering": "",
        "sys_class_name": "Incident",
        "closed_by": "",
        "follow_up": "",
        "parent_incident": "",
        "sys_id": "ac5163dbdsdsdsdfregsddsdsd9f6",
        "contact_type": null,
        "reopened_by": "",
        "incident_state": "On Hold",
        "urgency": "2 - Medium",
        "problem_id": "",
        "company": "",
        "reassignment_count": "0",
        "activity_due": "UNKNOWN",
        "assigned_to": {
            "display_value": "Ankur Jyoti Bhuyan",
            "link": "https://service-now.com/api/now/table/sys_user/ssdd318e736129[ehoub1jf"
        },
        "severity": "3 - Low",
        "comments": "2023-09-27 14:24:07 - Ankur Jyoti Bhuyan (Additional comments)\nHold for test 13\n\n2023-09-27 14:23:31 - Ankur Jyoti Bhuyan (Additional comments)\nHold for test 12\n\n2023-09-27 13:53:23 - Ankur Jyoti Bhuyan (Additional comments)\nHold for test\n\n2023-09-26 12:06:52 - Dinesh Sengodan (Additional comments)\ndferfsdfsdf sdfsdfef\n\n",
        "approval": "Not Yet Requested",
        "sla_due": "UNKNOWN",
        "comments_and_work_notes": "2023-09-27 14:24:07 - Ankur Jyoti Bhuyan (Additional comments)\nHold for test 13\n\n2023-09-27 14:23:31 - Ankur Jyoti Bhuyan (Additional comments)\nHold for test 12\n\n2023-09-27 14:23:30 - Ankur Jyoti Bhuyan (Work notes)\nHold for test 11\n\n2023-09-27 13:53:23 - Ankur Jyoti Bhuyan (Additional comments)\nHold for test\n\n2023-09-27 13:47:13 - Ankur Jyoti Bhuyan (Work notes)\nTest for work notes\n\n2023-09-26 12:07:13 - Dinesh Sengodan (Work notes)\ndfgtedf dfsdfd\n\n2023-09-26 12:06:52 - Dinesh Sengodan (Additional comments)\ndferfsdfsdf sdfsdfef\n\n2023-09-21 15:49:55 - Ankur Jyoti Bhuyan (Work notes)\nAssigned to mulesoft team\n\n",
        "due_date": "",
        "sys_mod_count": "13",
        "reopen_count": "0",
        "sys_tags": "",
        "escalation": "Normal",
        "upon_approval": "Proceed to Next Task",
        "correlation_id": "",
        "location": "",
        "category": "Inquiry / Help"
    },
    "all_comments": [
        {
            "sys_id": "702e4a11dba1weweewfsdfsdsd96198e",
            "sys_created_on": "2023-09-27T05:24:07Z",
            "name": "incident",
            "element_id": "ac5163sddsdsddsds139619f6",
            "sys_tags": "",
            "value": "Hold for test 13",
            "sys_created_by": "Ankur.Jyoti",
            "element": "comments"
        }
    ]
    }

### Request : Get list of Incidents
`GET {{base_path}}/incident-app/v1/incidents?sys_created_by=mulesoft.int`

```
curl --location --request GET 'http://0.0.0.0:8081/incident-app/v1/incidents?sys_created_by=mulesoft.int' \
--header 'client_id: test' \
--header 'client_secret: test'
```
### Response : Get list of Incidents

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=UTF-8
    Content-Length: 15238
    Date: Wed, 27 Sep 2023 22:51:11 GMT
    [
    {
        "active": "0",
        "activity_due": null,
        "additional_assignee_list": null,
        "approval": "not requested",
        "approval_set": null,
        "assigned_to": "008b3adc1dsdsdwdwdwdssdcb39",
        "assignment_group": null,
        "business_duration": "1970-01-02 02:22:44",
        "business_impact": null,
        "business_service": null,
        "business_stc": "94964",
        "calendar_duration": "1970-01-02 02:22:44",
        "calendar_stc": "94964",
        "caller_id": "c95409asdsdwewssd197e",
        "category": "inquiry",
        "cause": null,
        "caused_by": null,
        "child_incidents": "0",
        "close_code": null,
        "close_notes": null,
        "closed_at": "2023-09-21 06:20:34",
        "closed_by": "008b3adsdsddewdsdsdcb39",
        "cmdb_ci": null,
        "comments_and_work_notes": null,
        "company": null,
        "contact_type": "self-service",
        "contract": null,
        "correlation_display": null,
        "correlation_id": null,
        "delivery_plan": null,
        "delivery_task": null,
        "description": "Test Mule integration",
        "due_date": null,
        "escalation": "0",
        "expected_start": null,
        "follow_up": null,
        "group_list": null,
        "hold_reason": "0",
        "impact": "3",
        "incident_state": "8",
        "knowledge": "0",
        "location": null,
        "made_sla": "1",
        "notify": "1",
        "number": "INC0010041",
        "opened_at": "2023-09-20 03:57:50",
        "opened_by": "c95409awewddsddsds96197e",
        "order": "0",
        "origin_id": null,
        "origin_table": null,
        "parent": null,
        "parent_incident": null,
        "priority": "5",
        "problem_id": null,
        "reassignment_count": "0",
        "reopen_count": "0",
        "reopened_by": null,
        "reopened_time": null,
        "resolved_at": null,
        "resolved_by": null,
        "rfc": null,
        "route_reason": "0",
        "service_offering": null,
        "severity": "3",
        "short_description": "Test Mule integration",
        "skills": null,
        "sla_due": null,
        "state": "8",
        "subcategory": null,
        "sys_class_name": "incident",
        "sys_created_by": "mulesoft.int",
        "sys_created_on": "2023-09-20 03:57:53",
        "sys_domain": "global",
        "sys_domain_path": "/",
        "sys_id": "4b27f9cdsdsdsdsdsd19ca",
        "sys_mod_count": "3",
        "sys_updated_by": "Ankur.Jyoti",
        "sys_updated_on": "2023-09-21 06:20:34",
        "task_effective_number": "INC0010041",
        "time_worked": null,
        "universal_request": null,
        "upon_approval": "proceed",
        "upon_reject": "cancel",
        "urgency": "3",
        "user_input": null,
        "watch_list": null,
        "work_end": null,
        "work_notes_list": null,
        "work_start": null
        }
    ]
 
