const randomNames = [
    "Oleg",
    "Fedor",
    "Svetlana",
    "Anton",
    "Evgeniy",
    "Darya",
    "Olga",
    "Ekaterina",
    "Pavel",
    "Petr",
    "Antonio",
    "Evgeniya",
    "Viktoriya",
    "Viktor"
];

const hobbies = [
    "Music",
    "Books",
    "Sport",
    "Travelling",
    "Beauty",
    "Science",
    "Web programming"
]

const data = [];

const createObject = (index) => {
    let name = randomNames[Math.floor(Math.random() * randomNames.length)];
    return {
        id: index,
        name: name,
        hobby: hobbies[Math.floor(Math.random() * hobbies.length)],
        age: Math.floor(Math.random() * 30) + 18,
        gender: name.endsWith('a') ? 'female' : 'male'
    }
}

for (let i = 0; i < 280; i++) {
    data.push(createObject(i + 1));
}

export default data;