export const totalQuantity = (quantity) =>
  quantity.map((obj) => obj.quantity).reduce((acc, cur) => acc + cur, 0);
