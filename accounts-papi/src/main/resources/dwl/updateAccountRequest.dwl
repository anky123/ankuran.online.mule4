%dw 2.0
output application/json
---
{
	name: vars.expAPIData.name,
	email: vars.expAPIData.email,
	number: vars.expAPIData.number,
	phone: vars.expAPIData.phone,
	fax: vars.expAPIData.fax,
	billingAddress: {
		street: vars.expAPIData.billingAddress.street,
		city: vars.expAPIData.billingAddress.city,
		state: vars.expAPIData.billingAddress.state,
		postalCode: vars.expAPIData.billingAddress.postalCode,
		country: vars.countryLookup.data[vars.expAPIData.billingAddress.countryCode].country
	},
	shippingAddress: {
		street: vars.expAPIData.shippingAddress.street,
		city: vars.expAPIData.shippingAddress.city,
		state: vars.expAPIData.shippingAddress.state,
		postalCode: vars.expAPIData.shippingAddress.postalCode,
		country: vars.countryLookup.data[vars.expAPIData.shippingAddress.countryCode].country
	}
}