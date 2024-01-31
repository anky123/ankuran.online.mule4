%dw 2.0
output application/json
---
{
  "name": vars.responseData[0].Name,
  "email": "ankur.bhuyan@gmail.com",
  "number": vars.responseData[0].AccountNumber,
  "phone": vars.responseData[0].Phone,
  "fax": vars.responseData[0].Fax,
  "billingAddress": {
    "street": vars.responseData[0].BillingStreet,
    "city": vars.responseData[0].BillingCity,
    "state": vars.responseData[0].BillingState,
    "postalCode": vars.responseData[0].BillingPostalCode,
    "country": vars.responseData[0].BillingCountry
  },
  "shippingAddress": {
    "street": vars.responseData[0].ShippingStreet,
    "city": vars.responseData[0].ShippingCity,
    "state": vars.responseData[0].ShippingState,
    "postalCode": vars.responseData[0].ShippingPostalCode,
    "country": vars.responseData[0].ShippingCountry
  }
}