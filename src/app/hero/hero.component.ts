import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() hero: Object;
  @Input() index: Number;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  heroStatus(heroInBattle: Boolean) {
    switch (heroInBattle) {
      case false:
        return 'Se repose';
        break;

      case true:
        return 'En combat';
        break;
      default:
        return false;
    }
  }

}
