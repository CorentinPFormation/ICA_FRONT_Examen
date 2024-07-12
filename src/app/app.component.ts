import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, RouterOutlet} from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {NgIf, NgStyle} from '@angular/common';
import {Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, NgStyle, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  @ViewChild('burger') burger!: ElementRef<HTMLInputElement>;
  isMenu: boolean = false;
  connexion: boolean = false;

  toggleMenu() {
    this.isMenu = this.burger.nativeElement.checked;
  }

  constructor(private router: Router) { }

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

}
