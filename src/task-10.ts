const users = ["alice", "bob", "charlie"];

function toUserObjects(usernames: string[]): { id: number, name: string }[] {
    return usernames.map((name, index) => ({ id: index + 1, name }));
}
console.log(toUserObjects(users));
console.log("----------------------");