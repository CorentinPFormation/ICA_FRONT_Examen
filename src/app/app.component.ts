import {Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('burger') burger!: ElementRef<HTMLInputElement>;
  isMenu: boolean = false;

  toggleMenu() {
    this.isMenu = this.burger.nativeElement.checked;
  }

}
