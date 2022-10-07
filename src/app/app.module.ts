import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WorkOrdersTableComponent } from './features/work-orders-table/work-orders-table.component';

@NgModule({
  declarations: [AppComponent, WorkOrdersTableComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
