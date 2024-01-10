%dw 2.0
output application/xml
ns ns0 http://www.service-now.com/incident
---
{
	ns0#getRecords: attributes.queryParams
}