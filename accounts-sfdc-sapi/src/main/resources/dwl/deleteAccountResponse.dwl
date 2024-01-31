%dw 2.0
output application/json
---
{
  "id": vars.responseData.items[0].id,
  "status": if (vars.responseData.items[0].successful) 1 else 0,
  "message": "Account deleted successfully"
}