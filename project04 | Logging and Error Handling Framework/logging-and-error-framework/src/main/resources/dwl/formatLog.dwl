%dw 2.0
output application/json
fun calculateLatency () =
	now() as Number {unit: "milliseconds"} - (vars.requestStartTime as Number {unit: "milliseconds"})
	

fun requestStateFields () =
	vars.requestState match {
		case "Request received" -> 
			{
				requestStartTime: vars.requestStartTime,
				(resourcePath: attributes.requestUri) if (attributes.requestUri != null),
				(httpMethod: attributes.method) if(attributes.method != null)
			}
		case "Response returned" -> 
			{
				responseReturnedTime: vars.requestStartTime,
				(httpStatus: attributes.statusCode) if(attributes.statusCode != null),
				latency: calculateLatency() ++ " milliseconds"
			}
		case "Resource flow complete" -> 
			{
				latency: calculateLatency() ++ " milliseconds"
			}
		case "Response received" -> 
			{
				(responseStatusCode: attributes.statusCode) if(attributes.statusCode != null),
				latency: calculateLatency() ++ " milliseconds"
			}
		else -> {}
	}
---
{
	appName: app.name,
	requestState: vars.requestState,
	correlationId: correlationId,
	(requestStateFields()),
	(additionalInfo: vars.additionalLogInfo) if (vars.additionalLogInfo != null)
}