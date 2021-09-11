import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
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

  onClickLogin(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe(
      (response) =>
      {
        this.router.navigateByUrl("/dashboard");
      },
      (error) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}
