import { Routes, RouterModule } from '@angular/router';

import { DiaComponent }      from './dia.component';
import { SemanaComponent }      from './semana.component';

const appRoutes: Routes = [
  {
    path: 'dia',
    component: DiaComponent
  },
  {
    path: 'semana',
    component: SemanaComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);