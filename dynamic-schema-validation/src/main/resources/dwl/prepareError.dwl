%dw 2.0
output application/json

var prepareError = error.errorMessage.payload map ((item, index) -> { message : item.message })
var schemaHonouredError = if(error.errorType.identifier == "SCHEMA_NOT_HONOURED") { 
	error : prepareError.message
} else null
---
{
	correlationId: correlationId,
	
	"exception": {
   		exceptionCode: error.errorType.identifier,
    	timeStamp: now() as String { format: "yyyy-MM-dd'T'HH:mm:ss" },
   		cause: if(schemaHonouredError != null) schemaHonouredError.error else error.description
   	}
}