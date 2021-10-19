import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CustomerNumService } from 'src/app/services/customers_num.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  customersQuantity: number = 0;

  constructor(
    private authService: AuthService,
    private customer1Service: CustomerNumService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe((profile) => {
      this.name = profile.user.name;
      this.username = profile.user.username;
      this.email = profile.user.email;
    });

    setInterval(() => {
      this.customer1Service.getCustomerNums().subscribe((data) => {
        this.customersQuantity = data.length;
      });
    }, 1000);
  }

  onLogoutClick() {
    this.authService.logout();
    Swal.fire({
      title: '로그아웃 성공! ',
      icon: 'success',
      confirmButtonText: '확인',
    });
    this.router.navigate(['/login']);
    return false;
  }
  checkLoggedIn() {
    return this.authService.loggedIn();
  }
}
