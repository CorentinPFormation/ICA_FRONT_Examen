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
import {HookDocxGen} from './hook-form-gen';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hook-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatSelectModule, NgStyle, AsyncPipe, MatAutocomplete, MatAutocompleteTrigger, MatOption, NgForOf, NgIf],
  templateUrl: './hook-form.component.html',
  styleUrl: './hook-form.component.css'
})

export class HookFormComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    event.preventDefault();
    return '';
  }

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

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadHookdata(id);
      }
    })
  }

  loginForm : FormGroup;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private hookDocxGen: HookDocxGen,
              private route: ActivatedRoute,) {
    this.loginForm = this.fb.group({
      Purchase_order: [false, Validators.required],
      Purchase_requisition: [false, Validators.required],
      Payable_invoice: [false, Validators.required],
      Payable_credit_note: [false, Validators.required],
      Sales_invoice: [false, Validators.required],
      Sales_credit_note: [false, Validators.required],
      Payable_invoice_PO_based: [false, Validators.required],
      Other_document: [false, Validators.required],
      nom_du_hook_fr: ['', Validators.required],
      nom_du_hook_en: ['', Validators.required],
      nom_du_hook_us: ['', Validators.required],
      nom_du_hook_es: ['', Validators.required],
      description_fr: ['', Validators.required],
      description_en: ['', Validators.required],
      description_us: ['', Validators.required],
      description_es: ['', Validators.required],

      event_nom_du_champ: ['', Validators.required],
      event_position: ['', Validators.required],
      autre_action: ['', Validators.required],
      opening_document_phase: [''],
      opening_document_step: [''],

      cas_fonctionnel: ['', Validators.required],
      cas_erreur: ['', Validators.required],
      resultats_attendus: ['', Validators.required],
      cas_tests_user: ['', Validators.required],
      cas_tests_phase: ['', Validators.required],
      cas_tests_etape: ['', Validators.required],
      cas_particulier: [''],
      client: ['', Validators.required],
      nom_spec: ['', Validators.required],
      state: ['Brouillon', Validators.required],

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
      nom_du_hook_fr, nom_du_hook_en, nom_du_hook_us, nom_du_hook_es,
      description_fr, description_en, description_us, description_es,
      event_nom_du_champ, event_position, autre_action, opening_document_phase, opening_document_step,
      cas_fonctionnel, cas_erreur, resultats_attendus,
      cas_tests_user, cas_tests_phase, cas_tests_etape,
      cas_particulier,
      client, nom_spec, state
    } = this.loginForm.value;

    this.authService.hookNameFr(
      Purchase_order, Purchase_requisition, Payable_invoice, Payable_credit_note, Sales_invoice, Sales_credit_note,Payable_invoice_PO_based, Other_document,
      nom_du_hook_fr, nom_du_hook_en, nom_du_hook_us, nom_du_hook_es,
      description_fr, description_en, description_us, description_es,
      event_nom_du_champ, event_position, autre_action, opening_document_phase, opening_document_step,
      cas_fonctionnel, cas_erreur, resultats_attendus,
      cas_tests_user, cas_tests_phase, cas_tests_etape,
      cas_particulier,
      client, nom_spec, state
      ).subscribe({
      next: () => this.router.navigate(['/list-hook']),
      error: () => alert('Veuillez renseigner au minimum le nom du client avant de pouvoir enregistrer'),
    })
  }

  genSpec() {
    this.hookDocxGen.hookGen(this.loginForm.value, this.imageBase64Fonct, this.imageBase64Err, this.imageBase64Res, this.imageBase64Cas)
  }

  loadHookdata(id: number) {
    this.http.get(`http://localhost:3000/hooks/${id}`).subscribe((data: any) => {
      if (data) {

        const emptyArray: Array<string> = [''];

        this.loginForm.patchValue({
          Purchase_order: data.Purchase_order,
          Purchase_requisition: data.Purchase_requisition,
          Payable_invoice: data.Payable_invoice,
          Payable_credit_note: data.Payable_credit_note,
          Sales_invoice: data.Sales_invoice,
          Sales_credit_note: data.Sales_credit_note,
          Payable_invoice_PO_based: data.Payable_invoice_PO_based,
          Other_document: data.Other_document,
          nom_du_hook_fr: data.nom_du_hook_fr,
          nom_du_hook_en: data.nom_du_hook_en,
          nom_du_hook_us: data.nom_du_hook_us,
          nom_du_hook_es: data.nom_du_hook_es,
          description_fr: data.description_fr,
          description_en: data.description_en,
          description_us: data.description_us,
          description_es: data.description_es,
          event_nom_du_champ: data.event_nom_du_champ,
          event_position: data.event_position,
          autre_action: data.autre_action ? data.autre_action.replace("{", '').replace("}", "").split(",").map((item: string) => item.replace(/"/g, '')) : emptyArray,
          opening_document_phase: data.opening_document_phase,
          opening_document_step: data.opening_document_step,
          cas_fonctionnel: data.cas_fonctionnel,
          cas_erreur: data.cas_erreur,
          resultats_attendus: data.resultats_attendus,
          cas_tests_user: data.cas_tests_user,
          cas_tests_phase: data.cas_tests_phase,
          cas_tests_etape: data.cas_tests_etape,
          cas_particulier: data.cas_particulier,
          client: data.client,
          nom_spec: data.nom_spec,
          state: data.state.replace("[", "").replace("]", ""),
        })
      }

      console.log(this.loginForm.value);

    })
  }

  imageBase64Fonct: string | ArrayBuffer | null | undefined = null;
  imageBase64Err: string | ArrayBuffer | null | undefined = null;
  imageBase64Res: string | ArrayBuffer | null | undefined = null;
  imageBase64Cas: string | ArrayBuffer | null | undefined = null;

  onFileSelected1(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageBase64Fonct = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected2(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageBase64Err = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected3(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageBase64Res = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected4(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageBase64Cas = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
