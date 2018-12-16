import { MonsterService } from './monster.service';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

@Injectable()
export class HeroService {

    constructor(private monsterService: MonsterService) { }

    heroes = [
        {
            name: 'Batman & Robin',
            in_battle: false,
            life: 6,
            max_life: 10,
            strengh: 11,
            defense: 9,
            experience: 300,
            level: 0
        },
        {
            name: 'Superman',
            in_battle: true,
            life: 0,
            max_life: 12,
            strengh: 9,
            defense: 10,
            experience: 200,
            level: 0
        },

        {
            name: 'Felix The Cat',
            in_battle: false,
            life: 0,
            max_life: 7,
            strengh: 13,
            defense: 6,
            experience: 0,
            level: 0
        },

        {
            name: 'The Joker',
            in_battle: true,
            life: 20,
            max_life: 20,
            strengh: 20,
            defense: 20,
            experience: 900,
            level: 0
        },

        {
            name: 'Iron Man',
            in_battle: true,
            life: 10,
            max_life: 17,
            strengh: 13,
            defense: 6,
            experience: 0,
            level: 0
        },

        {
            name: 'Aquaman',
            in_battle: true,
            life: 1,
            max_life: 1,
            strengh: 1,
            defense: 1,
            experience: 0,
            level: 0
        },

        {
            name: 'Hulk',
            in_battle: true,
            life: 100,
            max_life: 100,
            strengh: 100,
            defense: 100,
            experience: 0,
            level: 0
        }
    ];

    restCost = 100;
    xpGainPerCombat = 100;
    maxXpPerLevel = 1000;


    combat(index: number) {

        // Cas où le héros n'a plus de PV mais a encore de l'XP pour se soigner => doit se reposer
        if (this.heroes[index].life <= 0) {

            if (this.heroes[index].experience >= this.restCost) {
                alert(this.heroes[index].name + ' doit se reposer avant de combattre !');

            } else {
                // Cas où le héros n'a plus de PV et plus de XP pour se soigner => mort
                alert(this.heroes[index].name + ' est KO, il ne pourra plus combattre :(');

            }

            return false;
        } else {
            // Sinon, on combat
            this.heroes[index].in_battle = true;

            // On génère un monstre selon le niveau du héros
            const monster = this.monsterService.generate(this.heroes[index].level);

            // tslint:disable-next-line:max-line-length
            alert('Un monstre apparaît contre ' + this.heroes[index].name + ' ! Il possède les stats suivantes :\nForce: ' + monster.strengh + ', Défense: ' + monster.defense + ' Points de vie: ' + monster.life);


            // On effectue le combat
            this.fight(index, monster);

            // On accorde de l'expérience au héros
            this.gainExperience(index);

        }

    }

    rest(index: number) {

        // Si le héros a suffisamment d'expérience pour se reposer
        if (this.heroes[index].experience >= this.restCost) {

            this.heroes[index].in_battle = false;

            // Le héros ne peut se reposer que si sa vie est inférieure à son max_life
            if (this.heroes[index].life < this.heroes[index].max_life) {

                // On soustrait son expérience
                this.heroes[index].experience = this.heroes[index].experience - 100;

                // On ajoute de la vie
                this.heroes[index].life++;

                // On ne peut pas descendre à moins de 0 en expérience
                if (this.heroes[index].experience < 0) {
                    this.heroes[index].experience = 0;
                }

            } else {
                return false;
            }

        } else {
            alert(this.heroes[index].name + ' ne peut pas se reposer, il n\'a plus d\'expérience !');
        }
    }

    fight(index: number, monster) {

        // L'attaque réelle est l'attaque du personnage moins la défense de l'autre.
        let monsterRealAttack = monster.strengh - this.heroes[index].defense;
        let heroRealAttack = this.heroes[index].strengh - monster.defense;

        // Si l'attaque est moins forte que la défense, alors elle est égale à 0.
        if (monsterRealAttack < 0) {
            monsterRealAttack = 0;
        }

        if (heroRealAttack < 0) {
            heroRealAttack = 0;
        }


        // On combat tant que l'un ou l'autre n'est pas KO
        while (this.heroes[index].life > 0 && monster.life > 0) {

            alert('PV de ' + this.heroes[index].name + ': ' + this.heroes[index].life + '\nPV du Monstre: ' + monster.life);

            this.heroes[index].life = this.heroes[index].life - monsterRealAttack;
            monster.life = monster.life - heroRealAttack;

        }

        // Cas où le héros est KO
        if (this.heroes[index].life <= 0) {

            this.heroes[index].life = 0;
            alert('Fin du match: ' + this.heroes[index].name + ' est tombé KO...');
        }

        // Cas où le héros est KO
        if (monster.life <= 0) {
            alert('Fin du match: BRAVO ! Le monstre est tombé KO !');
        }

    }

    gainExperience(index: number) {

        this.heroes[index].experience = this.heroes[index].experience + this.xpGainPerCombat;

        // On gère la montée de niveau le cas échéant
        if (this.heroes[index].experience >= this.maxXpPerLevel) {

            this.heroes[index].max_life++;
            this.heroes[index].life = this.heroes[index].max_life;
            this.heroes[index].strengh++;
            this.heroes[index].defense++;
            this.heroes[index].experience = 0;
            this.heroes[index].level++;

            alert('Hourra ! ' + this.heroes[index].name + ' a gagné un niveau !');
        }
    }
}
