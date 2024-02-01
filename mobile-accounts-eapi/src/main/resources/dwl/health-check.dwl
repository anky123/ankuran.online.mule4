%dw 2.0
output application/json
---
{
  code: 200,
  message: 'Health is OK, currentTime :: ' ++ now()
}