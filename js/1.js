// const pi = 3.14;
// const name = 'Lera';
// console.log('Hello! My name is ' + name);
// let a = 234232;
// let b = 2342343;
// console.log(a + ' * ' + b + ' = ' + a * b);
// a = 7;
// console.log(`${a} * ${b} = ${a * b}`);
// const oldText = "This is a text.\nBla bla bla...\nThe end!";
// console.log(oldText);
// const text = `
// This is a text.
// Bla bla bla...
// The end!
// `;
// console.log(text);

// const isItTrue = false;
// const something1 = null;
// const something2 = undefined;

// const lera = {
//     firstName: 'Lera',
//     surname: 'Sokolova',
//     age: 11,
//     address: {
//         country: 'Ukraine',
//         city: 'Kharkov',
//         zipCode: 61170,
//         street: '...',
//         building: 111
//     }
// };

const payers = [
    {
        firstName: 'Lera',
        surname: 'Sokolova',
        age: 11,
        address: {
            country: 'Ukraine',
            city: 'Kharkov',
            zipCode: 61170,
            street: '...',
            building: 111
        },
        toPay: {
            taxes: [1,2,10],
            bank: [5]

        }
    },
    {
        firstName: 'Ira',
        surname: 'Chub',
        age: 12,
        address: {
            country: 'Ukraine',
            city: 'Kharkov',
            zipCode: 61171,
            street: '...',
            building: 7
        },
        toPay: {
            taxes: [10,1,6],
            bank: [7]
        }
    },    
];

const aPayer = payers[1];
const payment = `
  Document N1
  Recepient: ${aPayer.firstName} ${aPayer.surname}
  Address:
  ${aPayer.address.country} ${aPayer.address.zipCode} ${aPayer.address.city} ${aPayer.address.street}, building ${aPayer.address.building}
`;
console.log(payment);
