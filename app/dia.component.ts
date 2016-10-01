import { Component } from '@angular/core';
import { Dia } from './dia.service';

@Component({
	templateUrl: 'app/dia.component.html'
})

export class DiaComponent {

	dia : Dia;
	chosen : Date;
	dt : string;

	constructor() {
		this.chosen = new Date();
        this.dt = this.chosen.toISOString().slice(0, 10);
		this.dia = {
			dia:'hoje', refs : [
			{ref:'café',state:'active'},
			{ref:'almoço',state:'active'},
			{ref:'jantar',state:'active'},
			]};
    }

	mudaDia (quantidade : number) {
		this.chosen = new Date(this.dt);
		this.chosen.setDate(this.chosen.getDate() + quantidade);
		this.dt = this.chosen.toISOString().slice(0, 10);
	}

}