const ROLE_ADMIN = 0;
const ROLE_READ_ONLY = 1;
const ROLE_AUTHOR = 2;
enum Role {ADMIN = 'ADMIN',
            READ_ONLY = 100,
            AUTHOR = 'AUTHOR'}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    // role: [number ,string]; // tuple
    role: any;
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
    // role: [2, 'author']
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin','user'];
// console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(Role.ADMIN === person.role) {
    console.log(Role.ADMIN)
}