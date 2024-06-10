import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
