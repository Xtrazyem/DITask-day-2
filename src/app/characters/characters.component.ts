import { Component, OnInit, inject } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharactersService } from '../services/characters.service';
import { RouterOutlet } from '@angular/router';
import { Characters } from '../types';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CharacterComponent, RouterOutlet],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
  readonly charactersService = inject(CharactersService);
  characters!: Characters;

  ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .subscribe((response) => (this.characters = response.results));
  }
}
