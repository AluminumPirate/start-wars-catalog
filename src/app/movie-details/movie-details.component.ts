import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Movie } from '../models/movie.model';
import { SwapiService } from '../services/swapi.service';
import { CharacterDetailsComponent } from '../character-details/character-details.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  characterNames: { [url: string]: string } = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { movie: Movie },
    public dialog: MatDialog,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.data.movie.characters.forEach((url) => {
      this.swapiService.getCharacter(url).subscribe((character) => {
        this.characterNames[url] = character.name;
      });
    });
  }

  openCharacterDetails(characterUrl: string) {
    this.dialog.open(CharacterDetailsComponent, {
      data: { characterUrl },
    });
  }
}
