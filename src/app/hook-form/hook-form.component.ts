import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgForOf, NgStyle} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {map, Observable, startWith} from 'rxjs';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-hook-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, NgStyle, AsyncPipe, MatAutocomplete, MatAutocompleteTrigger, MatOption, NgForOf],
  templateUrl: './hook-form.component.html',
  styleUrl: './hook-form.component.css'
})
export class HookFormComponent implements OnInit {

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

  /*autocomplet form*/
  myControl = new FormControl('');
  myControl1 = new FormControl('');
  options: string[] = ['Alpine', 'Leclerc', 'Socipar', 'PPI', 'Biscuiterie_réuni'];
  erp: string[] = ['2024', 'DIFFERENT DAY', 'H00DBYAIR', 'EVILJ0RDAN', 'RED M0NEY'];
  filteredOptions: Observable<string[]> | undefined;
  filteredOptions1: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value || '')),
    );

    this.toto();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.erp.filter(erpl => erpl.toLowerCase().includes(filterValue));
  }

  constructor(private http: HttpClient) { }

  events: any[] = [];

  toto() {
    this.http.get('http://localhost:3000/events').pipe(map((dataApi: any) => dataApi)).subscribe((data: any[]) => {
      this.events = data;
    });
  }
}
