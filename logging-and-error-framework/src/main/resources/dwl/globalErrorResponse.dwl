%dw 2.0
output application/json
var requestStartTime = (if(vars.requestStartTime != null) vars.requestStartTime else "Request Start Time could not be determined")
---
{
	correlationId: correlationId,
	"exception": {
		exceptionCode: if(vars.errorCode != null) vars.errorCode else error.errorType.identifier,
		timeStamp: now() as String { format: "yyyy-MM-dd'T'HH:mm:ss" },
		(message: vars.errorMessage) if (vars.errorMessage != null),
		cause: 'Description: ' ++  if(!isEmpty(error.description)) (error.description) else error.errorMessage.payload default  "Generic Error"
	}
}