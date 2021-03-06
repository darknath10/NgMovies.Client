import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ScreenService } from '../../services/screen.service';

import { IMovie } from '../models/movie.model';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[];

  constructor(private route: ActivatedRoute, private screen: ScreenService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.movies = data['movies']);
  }

}
