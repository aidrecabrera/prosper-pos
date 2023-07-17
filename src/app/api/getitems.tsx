import { faker } from "@faker-js/faker";

export default function GetItems() {
  const arrayOfItems = [
    {
      Product: faker.datatype.number({
        min: 1000000000000,
        max: 1000000000999,
      }),
      Description: faker.commerce.productDescription(),
      Quantity: faker.datatype.number({ min: 1, max: 20 }),
      Price: faker.commerce.price(),
    },
  ];
  return arrayOfItems;
}

export function addItem(
  arrayOfItems: {
    Product: number;
    Description: string;
    Quantity: number;
    Price: string;
  }[]
) {
  const newItemInformation = {
    Product: faker.datatype.number({
      min: 1000000000000,
      max: 1000000000999,
    }),
    Description: faker.commerce.productDescription(),
    Quantity: faker.datatype.number({ min: 1, max: 20 }),
    Price: faker.commerce.price(),
  };
  arrayOfItems.push(newItemInformation);
}
