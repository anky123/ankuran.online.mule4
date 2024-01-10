export class Incident {
  public sys_id: string = "";
  public short_description: string = "";
  public description: string = "";
  public urgency: string = "";
  public priority: string = "";
  public impact: string = "";
  
  public number: string = "";
  public incident_state: string = "";
  public hold_reason: string = "";
  
  public sys_created_on: string = "";
  public sys_created_by: string = "";
  public sys_updated_on: string = "";
  public sys_updated_by: string = "";
  
  public assigned_to: string = "";
  public assignment_group: string = "";
  
  public opened_by: string = "";
  public opened_at: string = "";
  public reopened_by: string = "";
  public reopened_time: string = "";
  
  public close_code: string = "";
  public close_notes: string = "";
  public closed_at: string = "";
  public closed_by: string = "";
  
  public comment: string = "";
  
  public all_comments: Array<any> = [];
  
}