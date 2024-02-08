%dw 2.0
fun checkTypeCode(errorString: String): String | Null = do{
    // body content validation check
    if(errorString matches ".*required key \\[(.+)]\\ not found") "REQUIRED_KEY"

    else if(errorString matches ".*/(.+) string \\[.+\\] does not match pattern .+") "PATTERN"
   
    else if(errorString matches ".*/(.+) expected type: .+, found: .+") "TYPE"

    else if(errorString matches ".*/(.+) expected minLength: .+, actual: [1-9][0-9]*") "MIN_LENGTH"
    
    else if(errorString matches ".*/(.+) expected maxLength: .+, actual: [1-9][0-9]*") "MAX_LENGTH"

    else if(errorString matches ".*/(.+) expected minimum item count: [0-9]+, found: [0-9]+") "MIN_ITEMS"

    else if(errorString matches ".*/(.+) expected maximum item count: [0-9]+, found: [0-9]+") "MAX_ITEMS"

    else if(errorString matches ".*/(.+) -?[0-9]+ is not greater or equal to -?[0-9]+") "MINIMUM"

    else if(errorString matches ".*/(.+) -?[0-9]+ is not less or equal to -?[0-9]+") "MAXIMUM"
    
    else if(errorString matches ".*/(.+) \\[.+\\] is not a valid date. Expected \\[yyyy-MM-dd\\]") "DATE"
    
    else if(errorString matches ".*/(.+) \\[.+\\] is not a valid time. Expected HH:mm:ss") "TIME"

    else if(errorString matches ".*/(.+) \\[.+\\] is not a valid date-time. Expected \\[yyyy-MM-dd'T'HH:mm:ssZ, yyyy-MM-dd'T'HH:mm:ss\\.\\[0-9\\]\\{1,9\\}Z, yyyy-MM-dd'T'HH:mm:ss\\[\\+-\\]HH:mm, yyyy-MM-dd'T'HH:mm:ss\\.\\[0-9\\]\\{1,9\\}\\[\\+-\\]HH:mm\\]") "DATETIME"

    else if(errorString matches ".*/(.+) \\[.+\\] is not a valid date-time-only. Expected yyyy-MM-dd'T'HH:mm:ss") "DATETIME_ONLY"

    else if(errorString matches ".*/(.+) .+ is not a valid enum value") "ENUM"

    else if(errorString matches ".*/(.+) string \\[\\] does not match pattern .+") "PATTERN_EMPTY"

    else if(errorString matches ".*/(.+) expected minLength: .+, actual: 0") "LENGTH_EMPTY"

    else if(errorString matches ".*/(.+) \\[\\] is not a valid date. Expected \\[yyyy-MM-dd\\]") "DATE_EMPTY"

    else if(errorString matches ".*/(.+) \\[\\] is not a valid time. Expected HH:mm:ss") "TIME_EMPTY"

    else if(errorString matches ".*/(.+) \\[\\] is not a valid date-time. Expected \\[yyyy-MM-dd'T'HH:mm:ssZ, yyyy-MM-dd'T'HH:mm:ss\\.\\[0-9\\]\\{1,9\\}Z, yyyy-MM-dd'T'HH:mm:ss\\[\\+-\\]HH:mm, yyyy-MM-dd'T'HH:mm:ss\\.\\[0-9\\]\\{1,9\\}\\[\\+-\\]HH:mm\\]") "DATETIME_EMPTY"

    else if(errorString matches ".*/(.+) \\[\\] is not a valid date-time-only. Expected yyyy-MM-dd'T'HH:mm:ss") "DATETIME_ONLY_EMPTY"

    else if(errorString matches ".*/(.+)  is not a valid enum value") "ENUM_EMPTY"

    else if(errorString matches ".*/(.+) expected type: .+, found: Null") "NULL"    

    // Header content validation check
    else if(errorString matches "Required header '(.+)' not specified") "REQUIRED_KEY_HEADER" 

    else if(errorString matches "Invalid value '.+' for header '(.+)'") "INVALID_VALUE_HEADER" 

    else if(errorString matches "Invalid value '' for header '(.+)'") "VALUE_EMPTY_HEADER" 

    // Query param content validation check
    else if(errorString matches "Required query parameter (.+) not specified") "REQUIRED_KEY" 

    else if(errorString matches "Invalid value '.+' for query parameter (.+)\\. (/{1}[0-9]+ {1})?string \\[.+\\] does not match pattern .+") "PATTERN" 

    else if(errorString matches "Invalid value '.+' for query parameter (.+)\\. (/{1}[0-9]+ {1})?expected type: .+, found: .+") "TYPE" 

    // Continue the same process for body content validation
    
	else "NULL"
}