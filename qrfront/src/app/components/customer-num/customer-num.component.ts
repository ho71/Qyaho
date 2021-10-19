import { Component, OnInit } from '@angular/core';
import { Cus_num } from '../../models/cus.num';
import { CustomerNumService } from '../../services/customers_num.service';

@Component({
  selector: 'app-customer-num',
  templateUrl: './customer-num.component.html',
  styleUrls: ['./customer-num.component.scss'],
})
export class CustomerNumComponent implements OnInit {
  customers: Cus_num[] = [];
  customersQuantity: number = 0;

  constructor(private customer1Service: CustomerNumService) {}

  ngOnInit() {
    setInterval(() => {
      this.customer1Service.getCustomerNums().subscribe((data) => {
        this.customers = data;
        this.customersQuantity = data.length;
        console.log(this.customers);
      });
    }, 1000);
  }
}
