import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, RouterOutlet} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {AsyncPipe, NgForOf, NgIf, NgStyle} from '@angular/common';
import {Router} from '@angular/router';
import {filter, map} from 'rxjs';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {ThemeService} from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, NgStyle, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  isDarkTheme$ = this.themeService.isDarkTheme$;





  @ViewChild('burger') burger!: ElementRef<HTMLInputElement>;
  isMenu: boolean = false;
  connexion: boolean = false;

  toggleMenu() {
    this.isMenu = this.burger.nativeElement.checked;
  }

  constructor(private router: Router, private authService: AuthService, private http: HttpClient, private themeService: ThemeService) { }
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnInit(): void {

    this.updateConnexion(this.router.url);

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateConnexion(event.url);
    });
  }

  private updateConnexion(url: string): void {
    this.connexion = url.startsWith('/connexion');
  }

  logout() {
    this.authService.logout();
  }

  currentUserMail = document.cookie ? document.cookie.split('=')[2].replace('%40', '@') : '';
  currentUser = document.cookie ? document.cookie.split('=')[2].replace('%40getyooz.com', '').replace('.', ' ') : '';
  currentUserUC = this.currentUser.split(" ");
  totototttoto = this.toto();

  toto(){
    if(this.currentUser) {
      for(let i = 0 ; i < this.currentUserUC.length; i++) {
        this.currentUserUC[i] = this.currentUserUC[i][0].toUpperCase() + this.currentUserUC[i].substring(1);
      }
    }

    return this.currentUserUC.join(" ") || '';
  }

}
