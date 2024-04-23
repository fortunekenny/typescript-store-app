export const formatAsDollars = (price: string | number): string => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(Number(price) * 10);
//   }).format(Number(price) / 100);
  return dollarsAmount;
};