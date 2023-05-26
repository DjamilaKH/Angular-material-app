import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 isLoading : boolean = false;
 constructor(private route : Router){  }
 ngOnInit(): void {}

 login(){

  this.isLoading = true;
  setTimeout(() => {
    this.route.navigate(['/'])
  }, 2000);
 }
}
