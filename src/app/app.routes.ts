import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './layout/main/main.component';
import { StackComponent } from './features/betting/components/stack/stack.component';
import { PassbookComponent } from './features/betting/components/passbook/passbook.component';
import { MyLedgerComponent } from './features/betting/components/my-ladger/my-ledger.component';
import { ChangePasswordComponent } from './features/auth/components/change-password/change-password.component';
import { RulesComponent } from './features/betting/components/rules/rules.component';
import { LoginComponent } from './features/auth/components/login/login.component';

export const routes: Routes = [
        {path:'',canActivate: [AuthGuard],component:MainComponent,children:[
                {path:'',canActivate:[AuthGuard],loadChildren:()=>import('./features/betting/components/games/games.routing').then(m=>m.gameRoutes)},
        ]},
        { path:'play-match/:matchcode',pathMatch:'full', canActivate: [AuthGuard], loadComponent:() => import('./features/betting/components/games/inplay-match-details/inplay-match-details.component').then(m=>m.InplayMatchDetailsComponent)},
        {path:'stack',canActivate: [AuthGuard],component:StackComponent},
        {path:'sports',canActivate: [AuthGuard],component:MainComponent},
        {path:'passbook',canActivate: [AuthGuard],component:PassbookComponent},
        {path:'ledger',canActivate: [AuthGuard],component:MyLedgerComponent},
        {path:'password',canActivate: [AuthGuard],component:ChangePasswordComponent},
        {path:'rules',canActivate: [AuthGuard],component:RulesComponent},
        

        
{ path:'login',pathMatch:'full', component:LoginComponent},


];
