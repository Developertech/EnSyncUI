export class EmployeeResultModel {

  employeeId : number;
  firstName : string;
  lastName : string;
  gender : string;
  DOB : Date;
  controlId : string;

  constructor(obj?: any) { 
    this.employeeId = obj.employeeId || null;
    this.firstName = obj.firstName || null;
    this.lastName = obj.lastName || null;
    this.gender = obj.gender || null;
    this.DOB = obj.DOB || null;
    this.controlId = obj.controlId || null;
  }

}
