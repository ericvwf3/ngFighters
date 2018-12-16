export class MonsterService {

    generate(heroLevel: number) {


        const monsterStrengh: Number = Math.floor((Math.random() * 10) + 1) + heroLevel;
        const monsterDefense: Number = Math.floor((Math.random() * 10) + 1) + heroLevel;
        const monsterLife: Number = Math.floor((Math.random() * 10) + 1) + heroLevel;

        const monster = {
            strengh: monsterStrengh,
            defense: monsterDefense,
            life: monsterLife
        };

        return monster;
    }
}
