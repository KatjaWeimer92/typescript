//import { log } from "console"
import Counter from "../../components/counter/counter";
import MyButton from "../../components/myButton/MyButton";


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

    interface ISpaceHeroes {
        isAlive?: boolean
    }

    type Animal = {
        name: string;
        weight: number;
    }

    type ExoticAnimal = Animal & {
        isExotic: true,
        country: string
    }

    let panda: ExoticAnimal = {
        name: 'Po',
        weight: 100,
        country: 'China',
        isExotic: true
    }


    console.log(panda);
    
 
    console.log(heroes);

    //generics

    function makeArray<T>(first:T, second:T):T[] {
        return[first, second]
    }

    const people = makeArray('Tom', 'Harry')

    console.log(people);
    

    

    return (
        <div className="lesson-container">
            <h4>Lesson 07</h4>
            <p>Урок 'TypeScript часть 2' в комментариях к
                коду урока 🌊</p>
        <div>
        {heroes.map(el => (
        <div key={el.id}>
            <h4>🦸🏼‍♀️: {el.nickname}</h4>
            <p>Real name: {el.name}</p>
        </div>
                ))}
        </div> 

        <div>
        <MyButton name='default'/>    
        <MyButton name='click'/>  
        <MyButton name='hello'/>  
        </div> 
        <Counter/>
        </div>
    )
}

export default Lesson07;