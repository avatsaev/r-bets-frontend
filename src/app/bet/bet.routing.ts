import { Routes } from '@angular/router';
import { BetComponent } from './bet.component';

export const BetRoutes: Routes = [
  {
    path: 'bet/:id',
    component: BetComponent
  },
];
