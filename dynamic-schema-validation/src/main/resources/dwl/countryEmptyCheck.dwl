%dw 2.0
output application/java
---
if ( (payload.country != "") and (payload.country != null)) true else false