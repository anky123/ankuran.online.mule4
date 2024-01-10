%dw 2.0
output application/json

---
{
	correlationId: correlationId,
	
	"exception": {
   		exceptionCode: error.errorType.identifier,
    	timeStamp: now() as String { format: "yyyy-MM-dd'T'HH:mm:ss" },
   		cause: error.description
   	}
}