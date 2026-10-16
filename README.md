# Order helpers

A small standalone CommonJS module using integer cents and in-memory arrays.
It has no dependencies, network calls, persistence, or customer data.

- `quoteOrder(lines, options)`: sums line quantities and unit prices. Shipping
  defaults to 500 cents when omitted; an explicit zero represents pickup.
- `reserveStock(available, requested)`: returns the quantity remaining after a
  reservation, allowing a reservation to consume all available stock.
- `listOrders(orders, page, pageSize)`: returns one page using a one-based page
  number. Defaults are page 1 and a page size of 10.

Inputs are assumed to be valid non-negative integers; page and page size are
positive integers. Order records are supplied by callers.

Example:

```javascript
const { quoteOrder } = require('./order-utils');
const quote = quoteOrder([{ quantity: 2, unitPriceCents: 1000 }]);
console.log(quote.totalCents);
```
