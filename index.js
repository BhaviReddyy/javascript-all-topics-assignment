// =============================================================
// 1. Template Literals + Expressions
// =============================================================

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiline = `
Line 1
Line 2
Line 3
`;
console.log(multiline);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// =============================================================
// 2. Arrow Functions & this
// =============================================================

// a)
const square = (n) => n * n;
console.log(square(5));

// b) Explanation:
// Arrow functions do NOT have their own 'this'. They take 'this' from the outer scope.
// So inside obj.test(), 'this' does NOT refer to obj, so this.value is undefined.

const obj = {
    value: 50,
    test: () => console.log(this.value) // undefined
};
obj.test();

// c) Fix using normal function
const obj2 = {
    value: 50,
    test() {
        console.log(this.value); // works
    }
};
obj2.test();


// =============================================================
// 3. Rest, Spread & Copying Objects
// =============================================================

// a)
const product = { name: "Pen", price: 10 };
const productCopy = {...product };
console.log(productCopy);

// b)
const a = { x: 1 };
const b = { y: 2 };
const mergedObj = {...a, ...b };
console.log(mergedObj);

// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 5, 2, 10));


// =============================================================
// 4. Destructuring & Optional Chaining
// =============================================================

// a)
const arr = [10, 20, 30];
const [a1, a2] = arr;
console.log(a1, a2);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info ? .user ? .profile); // undefined, no error


// =============================================================
// 5. Scoping (let/var/const)
// =============================================================

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// c) Why const?
// const prevents reassignment to avoid accidental changes and improve code safety.


// =============================================================
// 6. Ternary Operator – Practice
// =============================================================

// a)
let speed;
let kmph = 70;
speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b)
let age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

// c)
let num = -1;
let check = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(check);


// =============================================================
// 7. Spread, Rest & Arrays
// =============================================================

// a)
const nums = [1, 2, 3];
const nums2 = [...nums, 4, 5];
console.log(nums2);

// b)
const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];
console.log(combined);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// =============================================================
// 8. Object Destructuring & Shorthand
// =============================================================

// a)
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

// b)
const id2 = 101;
const role = "admin";
const user2 = {
    id2,
    role
};
console.log(user2);

// c)
const name = "Bhavya";
const age2 = 21;

const person = {
    name,
    age2,
    greet() {
        return `Hello ${this.name}`;
    }
};
console.log(person.greet());


// =============================================================
// 9. Template Literals (More Practice)
// =============================================================

// a)
console.log(`Today is: ${new Date().toDateString()}`);

// b)
const NAME = "John";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// =============================================================
// 10. Arrow Function Shorthands
// =============================================================

// a)
const add = (a, b) => a + b;
console.log(add(5, 7));

// b)
const isAdult = (age) => age >= 18;
console.log(isAdult(20));

// c)
const double = (n) => n * 2;
console.log(double(6));


// =============================================================
// 11. Spread Operator (Arrays & Objects)
// =============================================================

// a)
const arrClone = [...nums];
console.log(arrClone);

// b)
const arrWith100 = [100, ...nums];
console.log(arrWith100);

// c)
const objA = { name: "A", age: 20 };
const objB = { age: 30 };
const mergedOverride = {...objA, ...objB };
console.log(mergedOverride);


// =============================================================
// 12. Optional Chaining (More Practice)
// =============================================================

const user3 = {
    name: "Alex",
    address: {
        city: "Bangalore"
    }
};

// a)
console.log(user3 ? .address ? .city);

// b)
console.log(user3 ? .job ? .title); // undefined

// c)
const data2 = {};
console.log(data2 ? .user ? .details ? .email); // prevents error, prints undefined