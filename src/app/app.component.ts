import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';
// import { RouterLoggerService } from './router-logger.service';
// import { NavigationEnd, Router } from '@angular/router';
import { fadeAnimation, slideUpAnimation, zoomUpAnimation, zoomLeftAnimation, slideLeftOrRightAnimation } from './my-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideLeftOrRightAnimation]
})
export class AppComponent
{
  constructor(public loginService: LoginService, private domSanitizer: DomSanitizer) {}

  // myProperty = "<svg>Henrietha<svg>";
  // myProperty = "<script>alert(document.cookie)</script>";
  // myProperty = this.domSanitizer.bypassSecurityTrustHtml("<iframe src='http://www.lipsum.com'></iframe>");
  // myProperty = this.domSanitizer.bypassSecurityTrustUrl("javascript:window.open('http://www.google.com')");
  // myProperty = this.domSanitizer.bypassSecurityTrustResourceUrl("https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg");

  ngOnInit() {
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd)
    //   {
    //     let userName = (this.loginService.currentUserName)? this.loginService.currentUserName : "anonymous";
        
    //     let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;

    //     this.routerLoggerService.log(logMsg).subscribe();
    //   }
    // });
  }

  onClickSearch()
  {
    // console.log(this.loginService.currentUserName);
  }

  getState(outlet: any)
  {
    return outlet.isActivated? outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"]
     : "none";
  }
}
