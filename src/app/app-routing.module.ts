import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./admin/about/about.component";
import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { linkIndex: 2 } },
  { path: "signup", component: SignUpComponent, canDeactivate: [ CanDeactivateGuardService ], data: { linkIndex: 3 } },
  { path: "about", component: AboutComponent, data: { linkIndex: 1 } },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) }
];

@NgModule({
  //, enableTracing: true; will show the browser console for the router events
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  // imports: [RouterModule.forRoot(routes, { useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule {
}