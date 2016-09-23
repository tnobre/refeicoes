import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
	  `<h1>Refeições</h1>
	  <nav>
	  	<a routerLink="/dia" routerLinkActive="active">Dia</a>
	  	<a routerLink="/semana" routerLinkActive="active">Semana</a>
	  </nav>
	  <router-outlet></router-outlet>
	  `
})

export class AppComponent {
}