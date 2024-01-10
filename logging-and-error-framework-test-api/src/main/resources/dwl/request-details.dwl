%dw 2.0
output application/json skipNullOn = "everywhere"
---
if((attributes.relativePath) contains "process") {
	firstName: attributes.queryParams.firstName,
	lastName: attributes.queryParams.lastName,
	email: attributes.queryParams.email,
	country: attributes.queryParams.country,
	created: attributes.queryParams.created,
	relativePath: attributes.relativePath
}
else null