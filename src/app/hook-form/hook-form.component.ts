import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {NgStyle} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-hook-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, NgStyle],
  templateUrl: './hook-form.component.html',
  styleUrl: './hook-form.component.css'
})
export class HookFormComponent {

  /*@HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    event.preventDefault();
    return '';
  }*/

  @ViewChild('myCheck') myCheck!: ElementRef<HTMLInputElement>;
  isTextVisible: boolean = false;

  toggleTextVisibility() {
    this.isTextVisible = this.myCheck.nativeElement.checked;
  }

  @ViewChild('check') check!: ElementRef<HTMLInputElement>;
  isCas: boolean = false;

  toggleCas() {
    this.isCas = this.check.nativeElement.checked;
  }

}
