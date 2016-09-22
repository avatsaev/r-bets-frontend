import { Routes, RouterModule } from '@angular/router';

import { BetRoutes } from './bet/bet.routing';
import { HomeRoutes } from './home/home.routing';


const appRoutes: Routes = [
    ...HomeRoutes,
    ...BetRoutes,
    {
        path: '**',
        redirectTo: 'home'
    }
];

export default RouterModule.forRoot(appRoutes);


