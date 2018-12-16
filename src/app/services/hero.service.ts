export class HeroService {

    heroes = [
        {
            name: 'Batman & Robin',
            in_battle: false,
            life: 6,
            max_life: 10,
            strengh: 11,
            defence: 9,
            experience: 300
        },
        {
            name: 'Superman',
            in_battle: true,
            life: 12,
            max_life: 12,
            strengh: 9,
            defence: 10,
            experience: 0
        },

        {
            name: 'Felix The Cat',
            in_battle: false,
            life: 7,
            max_life: 7,
            strengh: 13,
            defence: 6,
            experience: 0
        }
    ];

    restCost: Number = 100;


    combat(index: number) {}

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
