const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export function formatCurrency(num: number) {
  return CURRENCY_FORMAT.format(num);
}
