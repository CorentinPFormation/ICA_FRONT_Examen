import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HookFormComponent} from './hook-form/hook-form.component';
import {SpecComponent} from './spec/spec.component';
import {AuthGuard} from './auth.guard';
import {NgModule} from '@angular/core';
import {LoginGuard} from './login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'connexion', component: ConnexionComponent, canActivate: [LoginGuard] },
  { path: 'new-hook', component: HookFormComponent, canActivate: [AuthGuard]  },
  { path: 'spec', component: SpecComponent, canActivate: [AuthGuard]  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModules {}
