import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WorkOrder } from './shared/models/work-order/work-order.model';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public fetchedWorkOrders!: WorkOrder[];
  public filteredWorkOrders!: WorkOrder[];
  public searchByDescriptionFormControl: FormControl = new FormControl('', {
    validators: Validators.required,
  });

  constructor(private apiService: ApiService) {}

  public filterWorkOrdersByDescription() {
    this.filteredWorkOrders = this.fetchedWorkOrders.filter((order) =>
      order.description
        .toLowerCase()
        .includes(
          this.searchByDescriptionFormControl.value.toLowerCase().trim()
        )
    );
  }

  public resetFilters() {
    this.filteredWorkOrders = [...this.fetchedWorkOrders];
    this.searchByDescriptionFormControl.reset();
  }

  private async getWorkOrders() {
    return await this.apiService.getWorkOrders().then((apiResponse) => {
      const {
        response: { data: workOrders },
      } = apiResponse;
      this.fetchedWorkOrders = workOrders;
      this.filteredWorkOrders = workOrders;
    });
  }

  public ngOnInit(): void {
    this.getWorkOrders();
  }
}
