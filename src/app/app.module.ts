import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './services/hero.service';
import { MonsterService } from './services/monster.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HeroService,
    MonsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
