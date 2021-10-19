import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomerNumComponent } from './components/customer-num/customer-num.component';
import { PicSlideComponent } from './components/pic-slide/pic-slide.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'qrgen', component: GeneratorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'customerNum', component: CustomerNumComponent },
  { path: 'picslide', component: PicSlideComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
