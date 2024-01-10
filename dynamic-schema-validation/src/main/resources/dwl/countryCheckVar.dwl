%dw 2.0
output application/java
---
if ((p('supported_countries') contains(payload.country))) true else false