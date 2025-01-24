import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-custom-interop-team',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './custom-interop-team.component.html',
  styleUrl: './custom-interop-team.component.css'
})
export class CustomInteropTeamComponent implements OnInit {
  ngOnInit() {}

  updateLivraisonForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.updateLivraisonForm = this.fb.group({
      updateLivraison: ['', Validators.required],
    })
  }

  updateLivraison() {
    const {
      updateLivraison
    } = this.updateLivraisonForm.value;

    this.authService.sendLivraisonToDb(updateLivraison).subscribe({
      next: () => alert('Le temps de livraison a bien été mis à jours'),
      error: () => alert('Veuillez renseigner le temps de livraison'),
    })

  }

}
