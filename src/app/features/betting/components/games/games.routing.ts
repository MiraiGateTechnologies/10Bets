import { Routes } from '@angular/router';
import { AuthGuard } from '../../../../core/guards/auth.guard';

export const gameRoutes: Routes = [
    { path: '', redirectTo: 'cricket',pathMatch:'full'},
    {path:'cricket', canActivate:[AuthGuard], loadComponent:()=>import('./inplay-cricket/inplay-cricket.component').then(m=>m.InplayCricketComponent)},
    {path:'football',loadComponent:()=>import('./inplay-football/inplay-football.component').then(m=>m.InplayFootballComponent)},

]