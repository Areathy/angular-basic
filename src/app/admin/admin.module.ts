import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { TeamSizeValidatorDirective } from '../team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../project-idunique-validator.directive';
import { CheckBoxPrinterComponent } from '../admin/check-box-printer/check-box-printer.component';
import { NumberToWordsPipe } from '../number-to-words.pipe';
import { FilterPipe } from '../filter.pipe';
import { PagingPipe } from '../paging.pipe';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { EmployeeRoutingModule } from '../employee/employee-routing/employee-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent,
    CheckBoxPrinterComponent,
    NumberToWordsPipe,
    FilterPipe,
    PagingPipe,
    ProjectsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  exports: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectsComponent,
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    ProjectComponent,
    CheckBoxPrinterComponent,
    NumberToWordsPipe,
    FilterPipe,
    PagingPipe,
    ProjectsDetailsComponent
  ],
  providers: [
    DashboardService
  ]
})
export class AdminModule { }
