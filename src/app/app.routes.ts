import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HookFormComponent} from './hook-form/hook-form.component';
import {AuthGuard} from './auth.guard';
import {NgModule} from '@angular/core';
import {LoginGuard} from './login.guard';
import {ListHookComponent} from './list-hook/list-hook.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'connexion', component: ConnexionComponent, canActivate: [LoginGuard] },
  { path: 'hook/:id', component: HookFormComponent, canActivate: [AuthGuard]  },
  { path: 'new-hook', component: HookFormComponent, canActivate: [AuthGuard]  },
  { path: 'list-hook', component: ListHookComponent, canActivate: [AuthGuard]  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModules {}
