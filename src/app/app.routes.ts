import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  /*fair une if utilisateur non connecté alors redirect to connexion, else rediriger vers home
  * si utilisateur non connecté va directement sur ica.com/home, redirigier vers ica.com/connexion
  * pareil pour l'invrse si utilisater deja connecté mais va sur ica.com/connexion, rediriger vers ica.com/home */
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '**', component: PageNotFoundComponent },
];
