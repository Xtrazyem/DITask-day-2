import { Injectable } from '@angular/core';
import { Character, Characters } from '../types';
import { charactersRes } from '../../data/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  getCharacters(): Characters {
    return charactersRes.results;
  }

  getCharacter(id: string): Character {
    return this.getCharacters().find((character) => character.id === +id)!;
  }
}
