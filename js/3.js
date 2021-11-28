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
            taxes: [{value: 1, currency: '$'}, {value: 2, currency: '$'}, {value: 10, currency: 'EUR'}],
            bank: [{value: 5, currency: '$'}]

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
            taxes: [{value: 10, currency: 'EUR'}, {value: 1, currency: 'EUR'}, {value: 6, currency: '$'}],
            bank: [{value: 117, currency: '$'}]
        }
    },    
];

const expectedCurrency = '$';
let total = 0;
for (const payer of payers) {
    const payment = `
    Document N1
    Recepient: ${payer.firstName} ${payer.surname}
    Address:
    ${payer.address.country} ${payer.address.zipCode} ${payer.address.city} ${payer.address.street}, building ${payer.address.building}
  `;
  console.log(payment); 
  // ---
  for (const tax of payer.toPay.taxes) {
      if (tax.currency == expectedCurrency) {
        total = total + tax.value;
      }
  }

  for (const b of payer.toPay.bank) {
      if (b.currency == expectedCurrency) {
        total = total + b.value;
      }
  }
}
console.log('-----------');
console.log(total);
