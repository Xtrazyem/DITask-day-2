import { Injectable, inject } from '@angular/core';
import { Character, Characters, CharactersRes } from '../types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly client = inject(HttpClient);

  getCharacters(): Observable<CharactersRes> {
    return this.client.get<CharactersRes>(
      'https://rickandmortyapi.com/api/character',
    );
  }

  // getCharacter(id: string): Character {
  //   return this.getCharacters().find((character) => character.id === +id)!;
  // }
}
