interface User {
    readonly id: number | string;
    name: string;
    age: number;
    active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };
console.log(user);
console.log("----------------------");