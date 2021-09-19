import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../services/dashboard.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule } from '@angular/forms';
import { TeamSizeValidatorDirective } from '../directives/team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../directives/client-location-status-validator.directive';
import { ProjectIDUniqueValidatorDirective } from '../directives/project-idunique-validator.directive';
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { NumberToWordsPipe } from '../pipes/number-to-words.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { PagingPipe } from '../pipes/paging.pipe';
import { ProjectsDetailsComponent } from './components/projects-details/projects-details.component';
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
