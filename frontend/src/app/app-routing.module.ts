import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {LoginComponent} from './login/login.component'

const routes: Routes = [

  { path: ''                , component: HomepageComponent},
  { path: 'Geolocation'     , component: GeolocationComponent},
  { path: 'About-us'        , component: AboutusComponent},
  { path: 'Login'           , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
