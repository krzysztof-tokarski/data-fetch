import { EmployeeAssignmentStatus } from './employee-assignment-status.enum';

export interface EmployeeAssignment {
  person_name: string;
  status: EmployeeAssignmentStatus;
}
