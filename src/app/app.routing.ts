import { Routes, RouterModule } from '@angular/router';

import { BetRoutes } from './bet/bet.routing';
import { BetsRoutes } from './bets/bets.routing';
import { HomeRoutes } from './home/home.routing';


const appRoutes: Routes = [
    ...HomeRoutes,
    ...BetRoutes,
    ...BetsRoutes,
    {
        path: '**',
        redirectTo: 'home'
    }
];

export default RouterModule.forRoot(appRoutes);


