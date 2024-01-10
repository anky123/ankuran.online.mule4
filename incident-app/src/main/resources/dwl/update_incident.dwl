%dw 2.0
output application/xml
ns inc http://www.service-now.com/incident
fun updateState(state: String) = state match {
    case str if str == "New" -> "1"
    case str if str == "In Progress" -> "2"
    case str if str == "On Hold" -> "3"
    case str if str == "Resolved" -> "4"
    case str if str == "Close" -> "7"
    case str if str == "Canceled" -> "8"
    else -> ""
  }
---
inc#update: {
	(sys_id: payload.sys_id) if(payload.sys_id != null or payload.sys_id != ""),
	(description: payload.description) if(payload.description != null or payload.description != ""),
	(comments: payload.comment) if(payload.comment != null or payload.comment != ""),
	(impact: payload.impact) if(payload.impact != null or payload.impact != ""),
	(urgency: payload.urgency) if(payload.urgency != null or payload.urgency != ""),
	(incident_state: updateState(payload.incident_state)) if((payload.incident_state != null or payload.incident_state != "") and (payload.incident_state != "New")),
	(incident_state: "2") if((payload.incident_state != null or payload.incident_state != "") and (payload.incident_state == "New"))
}