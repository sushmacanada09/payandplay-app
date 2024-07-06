import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
currentUrl: string;
isBackGrd:boolean;
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  ngOnInit() {
    this.currentUrl =  this.router.url;
    console.log(this.currentUrl);
  }

  isLoginPage(): boolean {
    return this.router.url == '/login';
  }
}
