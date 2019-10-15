import { Component, OnInit } from '@angular/core';
import { Film, Films } from '../Film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];
  selectedFilm: Film;

  constructor() {
    this.films = Films;
  }

  ngOnInit() {
  }

  setSelectedItem(item: Film): void {
    this.selectedFilm = item;
  }

}
