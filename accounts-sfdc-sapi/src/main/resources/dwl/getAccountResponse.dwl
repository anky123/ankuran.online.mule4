%dw 2.0
output application/json
---
{
  ("name": vars.responseData[0].Name) if (vars.responseData[0].Name != null and vars.responseData[0].Name != ""),
  ("number": vars.responseData[0].AccountNumber) if (vars.responseData[0].AccountNumber != null and vars.responseData[0].AccountNumber != ""),
  ("phone": vars.responseData[0].Phone) if (vars.responseData[0].Phone != null and vars.responseData[0].Phone != ""),
  ("fax": vars.responseData[0].Fax) if (vars.responseData[0].Fax != null and vars.responseData[0].Fax != ""),
  ("billingAddress": {
    ("street": vars.responseData[0].BillingStreet) if (vars.responseData[0].BillingStreet != null and vars.responseData[0].BillingStreet != ""),
    ("city": vars.responseData[0].BillingCity) if (vars.responseData[0].BillingCity != null and vars.responseData[0].BillingCity != ""),
    ("state": vars.responseData[0].BillingState) if (vars.responseData[0].BillingState != null and vars.responseData[0].BillingState != ""),
    ("postalCode": vars.responseData[0].BillingPostalCode) if (vars.responseData[0].BillingPostalCode != null and vars.responseData[0].BillingPostalCode != ""),
    ("country": vars.responseData[0].BillingCountry) if (vars.responseData[0].BillingCountry != null and vars.responseData[0].BillingCountry != ""),
  }) if (vars.responseData[0].BillingStreet != null and vars.responseData[0].BillingStreet != ""),
  ("shippingAddress": {
    ("street": vars.responseData[0].ShippingStreet) if (vars.responseData[0].ShippingStreet != null and vars.responseData[0].ShippingStreet != ""),
    ("city": vars.responseData[0].ShippingCity) if (vars.responseData[0].ShippingCity != null and vars.responseData[0].ShippingCity != ""),
    ("state": vars.responseData[0].ShippingState) if (vars.responseData[0].ShippingState != null and vars.responseData[0].ShippingState != ""),
    ("postalCode": vars.responseData[0].ShippingPostalCode) if (vars.responseData[0].ShippingPostalCode != null and vars.responseData[0].ShippingPostalCode != ""),
    ("country": vars.responseData[0].ShippingCountry) if (vars.responseData[0].ShippingCountry != null and vars.responseData[0].ShippingCountry != ""),
  }) if (vars.responseData[0].ShippingStreet != null and vars.responseData[0].ShippingStreet != "")
}