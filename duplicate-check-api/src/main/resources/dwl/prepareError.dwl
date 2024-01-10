%dw 2.0
output application/json

---
{
	correlationId: correlationId,
	
	"exception": {
   		exceptionCode: error.errorType.identifier,
    	timeStamp: now() as String { format: "yyyy-MM-dd'T'HH:mm:ss" },
   		cause: if (error.errorType.identifier == "DUPLICATE_MESSAGE") "User already registered with given email Id" else error.description
   	}
}