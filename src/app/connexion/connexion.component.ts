import {Component, ViewEncapsulation, signal} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, NgIf],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ConnexionComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';


  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Veuillez remplir ce champ';
    } else if (this.email.hasError('email')) {
      this.errorMessage = "Cet email n'est pas valide";
    } else {
      this.errorMessage = '';
    }
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }

  loginForm : FormGroup;

  constructor(private http: HttpClient, private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  login() {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => alert('Email ou mot de passe incorrect'),
      })
  }
}

// trouver une autre solution, meilleurs que celle ci pour ne plus avoir le bug du header qui s'affiche sur le page de connexion
if (window.localStorage) {

  if (!localStorage.getItem('reload')) {

    localStorage['reload'] = true;

    window.setTimeout(() => {
      window.location.reload();
    }, 1)

  } else {
    localStorage.removeItem('reload');
  }
}
