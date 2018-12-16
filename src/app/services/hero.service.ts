export class HeroService {

    heroes = [
        {
            name: 'Batman & Robin',
            in_battle: false,
            life: 6,
            max_life: 10,
            strengh: 11,
            defence: 9,
            experience: 300,
            level: 0
        },
        {
            name: 'Superman',
            in_battle: true,
            life: 0,
            max_life: 12,
            strengh: 9,
            defence: 10,
            experience: 200,
            level: 0
        },

        {
            name: 'Felix The Cat',
            in_battle: false,
            life: 0,
            max_life: 7,
            strengh: 13,
            defence: 6,
            experience: 0,
            level: 0
        }
    ];

    restCost: Number = 100;


    combat(index: number) {

        // Cas où le héros n'a plus de PV mais a encore de l'XP pour se soigner => doit se reposer
        if (this.heroes[index].life <= 0) {

            if (this.heroes[index].experience >= this.restCost) {
                alert(this.heroes[index].name + ' doit se reposer avant de combattre !');

            } else {
                alert(this.heroes[index].name + ' est KO, il ne pourra plus combattre :(');

            }

            return false;
        }

        // Cas où le héros n'a plus de PV et plus de XP pour se soigner => mort

        // Sinon, on combat

        /**
         * Combat
         */

        // On génère un monstre selon le niveau du héros

        // On effectue le combat

        // On accorde de l'expérience au héros

        // On gère la montée de niveau le cas échéant
    }

    rest(index: number) {

        // Si le héros a suffisamment d'expérience pour se repose
        if (this.heroes[index].experience >= this.restCost) {

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
        }
    }

}
