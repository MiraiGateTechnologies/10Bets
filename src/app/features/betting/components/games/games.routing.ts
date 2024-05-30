import { Routes } from '@angular/router';
import { AuthGuard } from '../../../../core/guards/auth.guard';

export const gameRoutes: Routes = [
    { path: '', redirectTo: 'CRICKET',pathMatch:'full'},
    {path:'INPLAY', canActivate:[AuthGuard], loadComponent:()=>import('./inplay/inplay.component').then(m=>m.InplayComponent)},
    {path:'CRICKET', canActivate:[AuthGuard], loadComponent:()=>import('./inplay/inplay.component').then(m=>m.InplayComponent)},
    {path:'FOOTBALL', canActivate:[AuthGuard], loadComponent:()=>import('./inplay/inplay.component').then(m=>m.InplayComponent)},


]