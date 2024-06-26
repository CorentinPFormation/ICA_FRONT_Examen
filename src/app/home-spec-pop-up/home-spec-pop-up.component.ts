import {Component, inject} from '@angular/core';
import {
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-home-spec-pop-up',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './home-spec-pop-up.component.html',
  styleUrl: './home-spec-pop-up.component.css'
})
export class HomeSpecPopUpComponent {
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
}
