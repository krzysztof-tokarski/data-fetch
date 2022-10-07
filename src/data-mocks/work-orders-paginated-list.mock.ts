import { ApiResponse } from 'src/app/shared/models/api/api-response.model';
import { PaginatedList } from 'src/app/shared/models/api/paginated-list.model';
import { EmployeeAssignmentStatus } from 'src/app/shared/models/work-order/subsidiary/employee-assignment/employee-assignment-status.enum';
import { WorkOrderPriority } from 'src/app/shared/models/work-order/subsidiary/work-order-priority.enum';
import { WorkOrderStatus } from 'src/app/shared/models/work-order/subsidiary/work-order-status.enum';
import { WorkOrder } from 'src/app/shared/models/work-order/work-order.model';

export const WorkOrdersPaginatedList: ApiResponse<PaginatedList<WorkOrder[]>> =
  {
    exec_time: 0.11,
    response: {
      current_page: 1,
      from: 1,
      last_page: 1,
      per_page: 10,
      to: 10,
      total: 8,
      data: [
        {
          work_order_id: 1,
          description: 'Create a connection to SQL database using Excel',
          received_date: '2021-07-21 00:23:03',
          assigned_to: [
            {
              person_name: 'Technician One',
              status: EmployeeAssignmentStatus.ASSIGNED,
            },
          ],
          status: WorkOrderStatus.NEW,
          priority: WorkOrderPriority.LOW,
        },

        {
          work_order_id: 2,
          description: 'Need to make update for laptop 11',
          received_date: '2021-07-20 15:23:03',
          assigned_to: [
            {
              person_name: 'Technician Two',
              status: EmployeeAssignmentStatus.ASSIGNED,
            },
          ],
          status: WorkOrderStatus.NEW,
          priority: WorkOrderPriority.LOW,
        },

        {
          work_order_id: 3,
          description: 'Setup station 2',
          received_date: '2021-07-20 14:23:03',
          assigned_to: [
            {
              person_name: 'Technician One',
              status: EmployeeAssignmentStatus.IN_PROGRESS,
            },
          ],
          status: WorkOrderStatus.CONFIRMED,
          priority: WorkOrderPriority.HIGH,
        },

        {
          work_order_id: 4,
          description: 'Setup station 3',
          received_date: '2021-07-19 12:23:03',
          assigned_to: [
            {
              person_name: 'Technician Two',
              status: EmployeeAssignmentStatus.ASSIGNED,
            },
            {
              person_name: 'Technician One',
              status: EmployeeAssignmentStatus.IN_PROGRESS,
            },
          ],
          status: WorkOrderStatus.CONFIRMED,
          priority: WorkOrderPriority.HIGH,
        },

        {
          work_order_id: 5,
          description: 'Mailbox issues',
          received_date: '2021-07-19 11:23:03',
          assigned_to: [
            {
              person_name: 'Technician Two',
              status: EmployeeAssignmentStatus.CONFIRMED,
            },
          ],
          status: WorkOrderStatus.CONFIRMED,
          priority: WorkOrderPriority.NORMAL,
        },

        {
          work_order_id: 6,
          description: 'Subject: We sent you issue last Friday',
          received_date: '2021-07-17 11:23:03',
          assigned_to: [],
          status: WorkOrderStatus.NEW,
          priority: WorkOrderPriority.LOW,
        },

        {
          work_order_id: 7,
          description: 'Internal work',
          received_date: '2021-07-17 10:23:03',
          assigned_to: [],
          status: WorkOrderStatus.CANCELED,
          priority: WorkOrderPriority.LOW,
        },

        {
          work_order_id: 8,
          description: 'Set up station for new user',
          received_date: '2021-07-16 09:23:03',
          assigned_to: [
            {
              person_name: 'Technician Two',
              status: EmployeeAssignmentStatus.COMPLETED,
            },
          ],
          status: WorkOrderStatus.COMPLETED,
          priority: WorkOrderPriority.LOW,
        },
      ],
    },
  };
