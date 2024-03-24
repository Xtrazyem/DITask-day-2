import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../types';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private readonly charactersService = inject(CharactersService);
  private readonly activatedRoute = inject(ActivatedRoute);
  character!: Character;

  ngOnInit(): void {
    this.character = this.charactersService.getCharacter(
      this.activatedRoute.snapshot.params['id'],
    );
  }
}
