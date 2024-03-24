import { Component, inject, input } from '@angular/core';
import { Character } from '../../types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  character = input<Character>();
  private readonly router = inject(Router);

  onDetailsClick(): void {
    this.router.navigate(['characters', this.character()?.id]);
  }

  getComputedStyles() {
    return {
      ['background-image']: `url(${this.character()?.image})`,
      ['background-size']: `cover`,
    };
  }
}
