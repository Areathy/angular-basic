import { NgModule } from '@angular/core';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MyProfileComponent } from "./components/my-profile/my-profile.component";
import { DashboardService } from "../services/dashboard.service";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ProjectComponent } from './components/project/project.component';
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { ProjectsDetailsComponent } from './components/projects-details/projects-details.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountriesComponent } from './components/countries/countries.component';
import { ClientLocationsComponent } from './components/client-locations/client-locations.component';
import { TaskPrioritiesComponent } from './components/task-priorities/task-priorities.component';
import { TaskStatusComponent } from './components/task-status/task-status.component';
import { MastersComponent } from './components/masters/masters.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent,
    ProjectComponent,
    CheckBoxPrinterComponent,
    ProjectsDetailsComponent,
    CountriesComponent,
    ClientLocationsComponent,
    TaskPrioritiesComponent,
    TaskStatusComponent,
    MastersComponent
  ],
  imports: [ SharedModule, AdminRoutingModule ],
  exports: [ DashboardComponent, MyProfileComponent, ProjectsComponent, ProjectsDetailsComponent ],
  providers: [ DashboardService ]
})
export class AdminModule
{
}
