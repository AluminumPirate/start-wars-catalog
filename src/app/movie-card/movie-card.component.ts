import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(public dialog: MatDialog) {}

  openMovieDetails() {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        movie: this.movie,
      },
    });
  }
}
