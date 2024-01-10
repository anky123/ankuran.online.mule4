%dw 2.0
import * from dw::core::Strings
output application/java
---
("/schemas/" ++  payload.country ++ "_" ++ substringAfterLast(attributes.relativePath, '/') ++ "_request.json")