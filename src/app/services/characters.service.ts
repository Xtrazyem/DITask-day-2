import { Injectable, OnDestroy, inject } from '@angular/core';
import { Character, Characters, CharactersRes } from './types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService implements OnDestroy {
  characters$ = new BehaviorSubject<Characters>([]);
  #favoriteIds: number[] = [];
  private readonly client = inject(HttpClient);
  private readonly destroy$ = new Subject<void>();

  getCharacters(): void {
    this.client.get<CharactersRes>('https://rickandmortyapi.com/api/character');
  }

  getCharacter(id: string): Observable<Character | undefined> {
    return this.characters$.pipe(
      map((characters) =>
        characters.find((charcter: Character) => charcter.id === +id),
      ),
    );
  }

  filterCharacters(name: string): void {}

  toggleFavorite(id: number): void {}

  ngOnDestroy(): void {}
}
