type CreateUserParams = {
    name: string;
    age: number;
}

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

function createUser({ name, age }: CreateUserParams): User {
  return {
    name,
    age,
    isAdmin: false
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
console.log("----------------------");