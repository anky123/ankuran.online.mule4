%dw 2.0
output application/json
---
{
  ("id": vars.responseData.items[0].id) if (vars.responseData.items[0].id != null and vars.responseData.items[0].id != ""),
  "status": if (vars.responseData.items[0].successful) 1 else 0,
  "message": if(vars.responseData.items[0].successful) "Account created successfully" else "Account couldn't create successfully"
}