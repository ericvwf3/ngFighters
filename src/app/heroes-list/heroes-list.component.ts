import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {


  heroes: Array<Object>;

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.heroes = this.heroService.heroes;

  }

}
