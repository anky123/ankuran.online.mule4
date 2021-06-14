%dw 2.0
output application/json
fun calculateLatency () =
	now() as Number {unit: "milliseconds"} - (vars.requestStartTime as Number {unit: "milliseconds"})
	
---
{
	appName: app.name,
	requestState: "Error",
	correlationId: correlationId,
	correlationStartTime: vars.requestStartTime,
	(resourcePath: attributes.requestUri) if (attributes.requestUri != null),
	(httpMethod: attributes.method) if(attributes.method != null),
	(additionalInfo: vars.additionalLogInfo) if (vars.additionalLogInfo != null),
	exceptionPayload: payload
}