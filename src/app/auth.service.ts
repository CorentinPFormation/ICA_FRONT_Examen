import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }, { withCredentials: true });
  }

  logout() {
    document.cookie = 'ica_tk=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=localhost; path=/;';
    document.cookie = 'ica_em=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=localhost; path=/;';
    this.router.navigate(['/connexion']);
  }

  getToken(): string | null {
    const token = document.cookie.split(';').find(row => row.startsWith('ica_tk='))?.split('=')[1];
    return token || null;
  }

  hookNameFr(
    Purchase_order: boolean, Purchase_requisition: boolean, Payable_invoice: boolean, Payable_credit_note: boolean, Sales_invoice: boolean, Sales_credit_note: boolean, Payable_invoice_PO_based: boolean, Other_document: boolean,
    hook_name_fr: string, hook_name_en: string, hook_name_us: string, hook_name_es: string,
    description_fr: string, description_en: string, description_us: string, description_es: string,
    nom_du_champ: string, position: string, event: [string], opening_document_phase: string, opening_document_step: string,
    cas_fonctionnel: string, cas_derreur: string, resultats_attendus: string,
    user:string, phase: string, etape: string,
    cas_particulier:string,
    client: [string], nom_spec: string, etatSpec: string
  ): Observable<Object> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
    });

    return this.http.post(`${this.apiUrl}/form_hook`, {
      Purchase_order, Purchase_requisition, Payable_invoice, Payable_credit_note, Sales_invoice, Sales_credit_note, Payable_invoice_PO_based, Other_document,
      hook_name_fr, hook_name_en, hook_name_us, hook_name_es,
      description_fr, description_en, description_us, description_es,
      nom_du_champ, position, event, opening_document_phase, opening_document_step,
      cas_fonctionnel, cas_derreur, resultats_attendus,
      user, phase, etape,
      cas_particulier,
      client, nom_spec, etatSpec
    }, { headers, withCredentials: true });

  }
}
