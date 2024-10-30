import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AirportsComponent } from './airports/airports.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageAboutusComponent } from './manage-aboutus/manage-aboutus.component';
import { ManageContactusComponent } from './manage-contactus/manage-contactus.component';
import { ManageTestimonialsComponent } from './manage-testimonials/manage-testimonials.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'airlines',
    component: AirlinesComponent
  },
  {
    path: 'airports',
    component: AirportsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'viewprofile',
    component: ViewProfileComponent
  },
  {
    path: 'manage-home',
    component: ManageHomeComponent
  },
  {
    path: 'manage-aboutus',
    component: ManageAboutusComponent
  },
  {
    path: 'manage-contactus',
    component: ManageContactusComponent
  },
  {
    path: 'manage-testimonials',
    component: ManageTestimonialsComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }










];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
