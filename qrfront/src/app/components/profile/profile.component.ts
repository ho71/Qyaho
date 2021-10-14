import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  birth: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile) => {
        this.name = profile.user.name;
        this.username = profile.user.username;
        this.email = profile.user.email;
        this.birth = profile.user.birth;
      },
      (err) => {
        console.log(err);
        return false;
      }
    );
  }
}
