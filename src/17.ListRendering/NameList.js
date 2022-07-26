import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        }, 
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        }, 
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map((person) => <Person key={person.id} person={person}/>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* {names.map((name) => <h2>{name}</h2>)} */}

            {nameList}

            {personList}
        </div>
    )
}

export default NameList

/* Lists and keys summary:
1. A "key" is a special string attribute you need to include when creating lists of elements.
2. Keys give the elements a stable identity. 
3. Keys help React identify which items have changed, are added, or are removed.
4. It help in efficient update of the user interface.*/