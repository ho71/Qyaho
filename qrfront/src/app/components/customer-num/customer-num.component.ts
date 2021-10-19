import { Component, OnInit } from '@angular/core';
import { Cus_num } from '../../models/cus.num';
import { CustomerNumService } from '../../services/customers_num.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-num',
  templateUrl: './customer-num.component.html',
  styleUrls: ['./customer-num.component.scss'],
})
export class CustomerNumComponent implements OnInit {
  customers: Cus_num[] = [];
  customersQuantity: number = 0;
  name: string;

  constructor(
    private customer1Service: CustomerNumService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe((profile) => {
      this.name = profile.user.name;
    });
    setInterval(() => {
      this.customer1Service.getCustomerNums().subscribe((data) => {
        this.customers = data;
        this.customersQuantity = data.length;
        console.log(this.customers);
      });
    }, 1000);
  }
}
