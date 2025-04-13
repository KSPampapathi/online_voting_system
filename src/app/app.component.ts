import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HomeComponent],
  template: `
  
  <app-home></app-home>
    <h1>Welcome to {{title}}!</h1>
    <h2>var1: {{var1}}</h2>
    <h1>Welcome to {{title}}!</h1>
   
    <app-home></app-home>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'onlinevotingsystem';
  var1=10;
}
