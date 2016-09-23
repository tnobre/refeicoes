import {Injectable} from '@angular/core';

/*
@Injectable()
export class DiaService {
	getDias() {
		return REFSDIA;
	}
}
*/

export class Ref {
  ref: string;
  state: string;
}

export class Dia {
	constructor(public dia: string, public refs: Ref[]) { }
}

const REFSDIA: Dia[] = [

	{dia: 'Segunda', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	},
	{dia: 'Terça', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	},
	{dia: 'Quarta', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	},
	{dia: 'Quinta', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	},
	{dia: 'Sexta', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	},
	{dia: 'Sábado', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	},
	{dia: 'Domingo', 
		refs: [{ref:'café', state:'active'}, 
			   {ref:'almoço', state:'active'}, 
			   {ref:'jantar', state:'active'}]
	}
];