import { Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Dia } from './dia.service';
import { ApiService } from './api.service';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
	templateUrl: 'app/semana.component.html',
	providers: [ApiService],
	animations: [
	    trigger('estadoRef', [
	      state('inactive', style({
	        backgroundColor: 'Tomato',
	        transform: 'scale(1)'
	      })),
	      state('active',   style({
	        backgroundColor: 'DodgerBlue',
	        transform: 'scale(1.0)'
	      })),
	      transition('inactive => active', animate('100ms ease-in')),
	      transition('active => inactive', animate('100ms ease-out'))
	    ])
    ]
})

export class SemanaComponent implements OnInit {
	errorMessage: string;
	dias: Dia[];
	mode = 'Observable';

/*
	constructor(diaService: DiaService) {
		this.dias = diaService.getDias();
	}
*/
	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.getDias();
	}

	getDias() {
		this.apiService.getDias()
			.subscribe(
				dias => this.dias = dias,
				error => this.errorMessage = <any>error);
	}

	mudaEstadoRef(ref) {

	  	if (ref.state == "active") {
	  		ref.state = "inactive";
	  	} else {
	  		ref.state = "active";
	  	}

	}

}
/*
const REFEICOESS: Ref[] = [

	{ref:'café', 	state:'active'},
	{ref:'almoço',	state:'inactive'},
	{ref:'jantar',	state:'active'}

];

const REFEICOEST: Ref[] = [

	{ref:'café', 	state:'active'},
	{ref:'almoço',	state:'active'},
	{ref:'jantar',	state:'active'}

];
*/