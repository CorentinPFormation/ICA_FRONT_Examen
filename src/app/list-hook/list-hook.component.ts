import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list-hook',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './list-hook.component.html',
  styleUrl: './list-hook.component.css'
})
export class ListHookComponent implements OnInit{
  hookData: any[] = [];
  searchHook: string = '';

  ngOnInit() {
    this.listOfHook();
  }

  constructor(private http: HttpClient) { }

  listOfHook() {

    const token = document.cookie.split(';').find(row => row.startsWith('ica_tk='))?.split('=')[1];
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get('http://localhost:3000/list-hook-by-user', {withCredentials: true}).pipe(map((dataApi: any) => dataApi)).subscribe((data: any) => {
      this.hookData = data;
    });
  }

  filteredHooks() {
    if (this.searchHook) {
      return this.hookData.filter((hook) => {
        return hook.name.toLowerCase().includes(this.searchHook.toLowerCase());
      })
    } else {
      return this.hookData;
    }
  }
}
