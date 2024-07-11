import { log } from "console"

function Lesson07(){
    let hero:string = 'batman'

    console.log(hero);

    interface ISuperhero {
        id: number
        name: string
        nickname: string
        age?: number | string;
        abilities?: string[]
    }

    interface ISpaceHeroes extends ISuperhero {
        homePlanet: string
    }


    let hero1: ISpaceHeroes = {
        id: 1,
        name: 'Clark Kent',
        nickname: 'Superman',
        abilities: ['super vision', 'can fly'],
        homePlanet: 'Crypton'
    }

    let hero2 = {
        id: 2,
        name: 'Bruce Wane',
        nickname: 'Batman',
        abilities: []
    }

    const heroes:ISuperhero[] = [hero1, hero2]



    console.log(heroes);
    

    return (
        <div className="lesson-container">
            <h4>Lesson 07</h4>
            <p>Урок 'TypeScript часть 2' в комментариях к
                коду урока 🐆</p>
                <ul>
                    {heroes.map(hero =>(
                        <li key={hero.id}>🦸🏼‍♀️: {hero.name}</li>
                ))}
                </ul>
                
        </div>
    )
}

export default Lesson07;