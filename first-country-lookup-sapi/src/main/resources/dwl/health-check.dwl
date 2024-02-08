%dw 2.0
output application/json
---
{
  code: "200",
  message: 'Health is OK. Environment :: ' ++ Mule::p('mule.env') ++ ', CurrentTime :: ' ++ now()
}