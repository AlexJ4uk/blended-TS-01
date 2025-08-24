interface Container<T> {
    items: T[];
    addItem(item: T): void;
    getItem(index: number): T | undefined;
}

const numberContainer: Container<number> = {
    items: [],
    addItem(item: number) {
        this.items.push(item);
    },
    getItem(index: number) {
        return this.items[index];
    }
};

const stringContainer: Container<string> = {
    items: [],
    addItem(item: string) {
        this.items.push(item);
    },
    getItem(index: number) {
        return this.items[index];
    }
};

function getLastElement<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItem(0));
console.log(getLastElement(numberContainer.items));

stringContainer.addItem("Hello");
stringContainer.addItem("World");
console.log(stringContainer.getItem(0));
console.log(getLastElement(stringContainer.items));
console.log("----------------------");