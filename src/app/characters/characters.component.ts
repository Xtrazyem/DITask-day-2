import { Component, inject } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharactersService } from '../services/characters.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterComponent, RouterOutlet],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  readonly charactersService = inject(CharactersService);
}
