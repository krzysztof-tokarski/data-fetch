import { Component, OnInit } from '@angular/core';
import { WorkOrder } from './shared/models/work-order/work-order.model';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public workOrders: Promise<WorkOrder[]> = this.getWorkOrders();
  public workOrders: Promise<WorkOrder[]> = this.getWorkOrders();

  constructor(private apiService: ApiService) {}

  private async getWorkOrders() {
    return await this.apiService.getWorkOrders().then((apiResponse) => {
      const {
        response: { data: workOrders },
      } = apiResponse;
      return workOrders;
    });
  }
}
