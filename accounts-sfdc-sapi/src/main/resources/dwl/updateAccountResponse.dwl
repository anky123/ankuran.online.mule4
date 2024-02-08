%dw 2.0
output application/json
---
{
  "id": if (vars.responseData.items[0].id != null and vars.responseData.items[0].id != "") vars.responseData.items[0].id else vars.accountId,
  "status": if (vars.responseData.items[0].successful) 1 else 0,
  "message": if(vars.responseData.items[0].successful) "Account updated successfully" else "Account couldn't update successfully"
}