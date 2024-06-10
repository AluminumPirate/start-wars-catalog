import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwapiService } from '../services/swapi.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { characterUrl: string },
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    this.swapiService
      .getCharacter(this.data.characterUrl)
      .subscribe((character: Character) => {
        this.character = character;
      });
  }
}
