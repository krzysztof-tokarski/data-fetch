import { EmployeeAssignment } from './subsidiary/employee-assignment/employee-assignment.model';
import { WorkOrderPriority } from './subsidiary/work-order-priority.enum';
import { WorkOrderStatus } from './subsidiary/work-order-status.enum';

export interface WorkOrder {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to?: EmployeeAssignment[];
  status: WorkOrderStatus;
  priority: WorkOrderPriority;
}
