%dw 2.0
output application/java
---
[{
	Id: vars.accountId,
	(Name: payload.name) if (payload.name != null and payload.name != ""),
	(AccountNumber: payload.number) if (payload.number != null and payload.number != ""),
	(Phone: payload.phone as Number) if (payload.phone != null and payload.phone != ""),
	(Fax: payload.fax) if (payload.fax != null and payload.fax != ""),
	(BillingStreet: payload.billingAddress.street) if (payload.billingAddress.street != null and payload.billingAddress.street != ""),
	(BillingCity: payload.billingAddress.city) if (payload.billingAddress.city != null and payload.billingAddress.city != ""),
	(BillingState: payload.billingAddress.state) if (payload.billingAddress.state != null and payload.billingAddress.state != ""),
	(BillingPostalCode: payload.billingAddress.postalCode) if (payload.billingAddress.postalCode != null and payload.billingAddress.postalCode != ""),
	(BillingCountry: payload.billingAddress.country) if (payload.billingAddress.country != null and payload.billingAddress.country != ""),
	(ShippingStreet: payload.shippingAddress.street) if (payload.shippingAddress.street != null and payload.shippingAddress.street != ""),
	(ShippingCity: payload.shippingAddress.city) if (payload.shippingAddress.city != null and payload.shippingAddress.city != ""),
	(ShippingState: payload.shippingAddress.state) if (payload.shippingAddress.state != null and payload.shippingAddress.state != ""),
	(ShippingPostalCode: payload.shippingAddress.postalCode) if (payload.shippingAddress.postalCode != null and payload.shippingAddress.postalCode != ""),
	(ShippingCountry: payload.shippingAddress.country) if (payload.shippingAddress.country != null and payload.shippingAddress.country != ""),
}]