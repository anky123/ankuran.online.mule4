%dw 2.0
output application/xml
ns ns0 http://www.service-now.com/incident
---
{
	ns0#get: {
		(ns0#sys_id: attributes.queryParams.sys_id) if (attributes.queryParams.sys_id != null),
		(ns0#number: attributes.queryParams.number) if (attributes.queryParams.number != null),
		(ns0#caller_id: attributes.queryParams.caller_id) if (attributes.queryParams.caller_id != null)
	}
}