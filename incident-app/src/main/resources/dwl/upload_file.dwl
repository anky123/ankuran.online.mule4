%dw 2.0
output application/java
var payloadParts=payload pluck($) default []
---
payloadParts[0] pluck($) default []