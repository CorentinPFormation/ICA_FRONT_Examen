import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  /*fair une if utilisateur non connecté alors redirect to connexion, else rediriger vers home*/
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent },
];
