import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly router = inject(Router);
  goToCharacters(): void {
    this.router.navigate(['characters']);
  }
  goToEpisodes(): void {
    this.router.navigate(['episodes']);
  }
  goToLocations(): void {
    this.router.navigate(['locations']);
  }
}
