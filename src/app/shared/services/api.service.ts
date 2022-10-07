import { Injectable } from '@angular/core';
import { WorkOrdersPaginatedList } from 'src/data-mocks/work-orders-paginated-list.mock';
import { ApiResponse } from '../models/api/api-response.model';
import { PaginatedList } from '../models/api/paginated-list.model';
import { WorkOrder } from '../models/work-order/work-order.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public getWorkOrders(): Promise<ApiResponse<PaginatedList<WorkOrder[]>>> {
    return new Promise((response) =>
      setTimeout(() => response(WorkOrdersPaginatedList), 500)
    );
  }
}
