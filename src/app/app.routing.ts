import { ModuleWithProviders } from '@angular/core';
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

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


