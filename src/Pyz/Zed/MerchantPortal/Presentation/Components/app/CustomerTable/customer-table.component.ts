// src/.../CustomerTable/customer-table.component.ts
import { Component, OnInit } from '@angular/core';
import { DatatableOptions } from '@spryker/datatable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-table',
  template: `<spryker-datatable [options]="options"></spryker-datatable>`
})
export class CustomerTableComponent implements OnInit {
  options: DatatableOptions;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = {
      apiUrl: '/merchant-portal/customer',
      columns: [
        { name: 'id_customer', title: 'ID' },
        { name: 'first_name', title: 'Nome' },
        { name: 'email', title: 'E-mail' },
        { name: 'created_at', title: 'Data Registro' }
      ],
      pagination: true,
      sorting: true,
      hideableColumns: true
    };
  }
}