import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginViewModel } from '../../models/login-view-model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(){
    setTimeout(() => {
      this.userName.nativeElement.focus();
    }, 500);
  }

  @ViewChild("userName") userName!: ElementRef;

  onClickLogin(event: any) {
    this.loginService.Login(this.loginViewModel).subscribe(
      (response) => {
        if (this.loginService.currentUserRole == "Admin") {
          this.router.navigate(["/admin", "dashboard"]);
        } else {
          this.router.navigate(["/employee", "tasks"]);
        }
      },
      (error) => {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}
