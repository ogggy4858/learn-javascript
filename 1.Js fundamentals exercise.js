/*
    -------------------------------------------------------------------------------
    -------------------------------JavaScript fundamentals-------------------------
    -------------------------------------------------------------------------------
    1. Khai báo biến var, let, const
    2. Kiểu dữ liệu Primitive (nguyên thủy) và Reference (tham chiếu)
    3. Kiểu null và undefined
    4. Các toán tử, phép so sánh === và ==
    5. truthy / falsy
    6. ?., ??
    7. Bóc tách object, array thành các biến (destructuring)
    8. spread (bung ra) / rest (gom lại)
    9. template literal

*/

/**
 * ex1: Lựa chọn từ khóa khai báo biến, let hoặc const
 * Khai báo biến loginCount = 0, sau đó tăng lên 1 đơn vị
 */
console.log('-----------------------------Ex1-----------------------------');
let loginCount = 0;
loginCount += 1;
console.log(`loginCount: ${loginCount}`);

/**
 * ex2: Tạo và lấy ra các biến từ object, name, age, address, sau đó lấy city từ address bằng destructuring
 */
console.log('-----------------------------Ex2-----------------------------');
const user = {
    userName: 'Duc',
    age: 18,
    address: {
        city: 'Ha Noi'
    }
};

let {userName, age, address} = user;
let {city} = address;
console.log(`userName: ${userName}`);
console.log(`age: ${age}`);
console.log(`address: ${address}`);
console.log(`city: ${city}`);

/**
 * ex3: Optional Chaining + Nullish
 */
console.log('-----------------------------Ex3-----------------------------');
const user1 = {
    company: null,
    company1: undefined,
    company2: {
        name: null
    }
};

let companyName = user1?.company?.name ?? 'Unknown Company';
let companyName1 = user1?.company1?.name ?? 'Unknown Company';
let companyName2 = user1?.company2?.name ?? 'Unknown Company';
let companyName3 = user1?.company2?.name1 ?? 'Unknown Company';
console.log(`companyName: ${companyName}`);
console.log(`companyName1: ${companyName1}`);
console.log(`companyName2: ${companyName2}`);
console.log(`companyName3: ${companyName3}`);

/**
 * ex4: Spread Object
 */
console.log('-----------------------------Ex4-----------------------------');
const updatedUser = {
    name: 'Duc',
    age: 30
};

const newUser = {
    ...updatedUser,
    age: 31,
    isActive: true
};

console.log(`newUser: {name: ${newUser.name}, age: ${newUser.age}, isActive: ${newUser.isActive}}`);

/**
 * ex5: Spread Array
 */
console.log('-----------------------------Ex5-----------------------------');
const scores = [8, 9, 7, 10];
const newScores = [6, ...scores, 9];
console.log(`newScores: [${newScores}]`);

/**
 * ex6: Rest + Destructuring
 */
console.log('-----------------------------Ex6-----------------------------');
const numbers = [10, 20, 30, 40, 50];
const [first, ...second] = numbers;
console.log(`first: ${first}`);
console.log(`second: [${second}]`);

/**
 * ex7: Rest + Destructuring
 */
console.log('-----------------------------Ex7-----------------------------');
const name7 = "Duc";
const age7 = 30;
const city7 = "Hanoi";
let mess = `${name7} is ${age7} years old and lives in ${city7}.`;
console.log(`mess: ${mess}`);

/**
 * ex8: Tổng hợp
 * 1. Destructure: name, price
 * 2. Lấy manufacturer.name
 *   bằng optional chaining
 *   Nếu không có → "Unknown"
 *
 * 3. Lấy discount
 *   Nếu null/undefined → 0
 *   Dùng ??
 *
 * 4. Tạo object mới:
 *   updatedProduct
 *
 *   giữ toàn bộ dữ liệu cũ
 *   price = 450000
 *   inStock = true
 *
 * 5. Tạo message bằng Template Literal: "Keyboard - Logitech - 450000 VND - Discount: 0"
 */
console.log('-----------------------------Ex8-----------------------------');
const product = {
    id: 100,
    name: "Keyboard",
    price: 500000,
    discount: null,
    manufacturer: {
        name: "Logitech"
    }
};

// 1
let {name: productName, price} = product;
// 2
let manufacturerName = product?.manufacturer?.name;
// 3
let discount = product?.discount ?? 0;
// 4
let updatedProduct = {
    ...product,
    price: 450000,
    inStock: true,
    print: function() {
        return `updatedProduct: {id: ${this.id}, name: ${this.name}, price: ${this.price}, discount: ${discount}, manufacturerName: ${manufacturerName}, inStock: ${this.inStock ? 'Yes' : 'No'}}`;
    }
}
// 5
let msg = `${productName} - ${manufacturerName} - ${updatedProduct?.price} VND - Discount: ${discount}`;

console.log(`productName: ${productName}`);
console.log(`price: ${price}`);
console.log(`manufacturerName: ${manufacturerName}`);
console.log(`discount: ${discount}`);
console.log(`updatedProduct: ${updatedProduct.print()}`);
console.log(`msg: ${msg}`);