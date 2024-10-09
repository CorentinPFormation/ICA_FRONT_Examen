import {Component, ElementRef, HostListener, inject, OnInit, ViewChild} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AsyncPipe, NgForOf, NgIf, NgStyle} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {map, Observable, startWith} from 'rxjs';
import {MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MatOption } from '@angular/material/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-hook-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, NgStyle, AsyncPipe, MatAutocomplete, MatAutocompleteTrigger, MatOption, NgForOf, NgIf],
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

  ngOnInit() {

    this.event();
    this.client();
  }

  loginForm : FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      Purchase_order: [false, Validators.required],
      Purchase_requisition: [false, Validators.required],
      Payable_invoice: [false, Validators.required],
      Payable_credit_note: [false, Validators.required],
      Sales_invoice: [false, Validators.required],
      Sales_credit_note: [false, Validators.required],
      Payable_invoice_PO_based: [false, Validators.required],
      Other_document: [false, Validators.required],
      hook_name_fr: ['', Validators.required],
      hook_name_en: ['', Validators.required],
      hook_name_us: ['', Validators.required],
      hook_name_es: ['', Validators.required],
      description_fr: ['', Validators.required],
      description_en: ['', Validators.required],
      description_us: ['', Validators.required],
      description_es: ['', Validators.required],

      nom_du_champ: ['', Validators.required],
      position: ['', Validators.required],
      event: ['', Validators.required],

      cas_fonctionnel: ['', Validators.required],
      cas_derreur: ['', Validators.required],
      resultats_attendus: ['', Validators.required],
      user: ['', Validators.required],
      phase: ['', Validators.required],
      etape: ['', Validators.required],
      cas_particulier: [''],
      client: ['', Validators.required],
      nom_spec: ['', Validators.required],
      etatSpec: ['', Validators.required],

    })
  }

  events: any[] = [];
  clientData: any[] = [];

  event() {
    this.http.get('http://localhost:3000/events').pipe(map((dataApi: any) => dataApi)).subscribe((data: any[]) => {
      this.events = data;
    });
  }

  client() {
    this.http.get('http://localhost:3000/client').pipe(map((dataApi: any) => dataApi)).subscribe((data: any[]) => {
      this.clientData = data;
    });
  }

  save() {
    const {
      Purchase_order, Purchase_requisition, Payable_invoice, Payable_credit_note, Sales_invoice, Sales_credit_note, Payable_invoice_PO_based, Other_document,
      hook_name_fr, hook_name_en, hook_name_us, hook_name_es,
      description_fr, description_en, description_us, description_es,
      nom_du_champ, position, event,
      cas_fonctionnel, cas_derreur, resultats_attendus,
      user, phase, etape,
      cas_particulier,
      client, nom_spec, etatSpec
    } = this.loginForm.value;

    this.authService.hookNameFr(
      Purchase_order, Purchase_requisition, Payable_invoice, Payable_credit_note, Sales_invoice, Sales_credit_note,Payable_invoice_PO_based, Other_document,
      hook_name_fr, hook_name_en, hook_name_us, hook_name_es,
      description_fr, description_en, description_us, description_es,
      nom_du_champ, position, event,
      cas_fonctionnel, cas_derreur, resultats_attendus,
      user, phase, etape,
      cas_particulier,
      client, nom_spec, etatSpec
      ).subscribe({
      next: () => this.router.navigate(['/list-hook']),
      error: () => alert('formulaire pas entierement rempli'),
    })
  }
}
