import { Routes } from '@angular/router';
import { BetComponent } from './bet.component';

export const BetRoutes: Routes = [
  {
    path: 'argument/:id',
    component: BetComponent
  },
];
