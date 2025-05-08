import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableModule } from '@spryker/datatable';
import { CustomerTableComponent } from './customer-table.component';

@NgModule({
  imports: [CommonModule, DatatableModule],
  declarations: [CustomerTableComponent],
  exports: [CustomerTableComponent]
})
export class CustomerTableModule {}