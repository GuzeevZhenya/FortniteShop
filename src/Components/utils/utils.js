export const totalQuantity = (quantity) =>
  quantity.map((obj) => obj.quantity).reduce((acc, cur) => acc + cur, 0);

export const totalPriceAllItems = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

export const totalCountAllItems = (items) =>
  items.reduce((total, item) => total + item.quantity, 0);
