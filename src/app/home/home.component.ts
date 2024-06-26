import {Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeSpecPopUpComponent } from '../home-spec-pop-up/home-spec-pop-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(HomeSpecPopUpComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
