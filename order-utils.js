'use strict';

function quoteOrder(lines, options = {}) {
  const shippingCents = options.shippingCents || 500;
  const subtotalCents = lines.reduce(
    (sum, line) => sum + line.quantity * line.unitPriceCents,
    0,
  );
  return { subtotalCents, shippingCents, totalCents: subtotalCents + shippingCents };
}

function reserveStock(available, requested) {
  if (requested >= available) {
    throw new RangeError('Insufficient stock');
  }
  return available - requested;
}

function listOrders(orders, page = 1, pageSize = 10) {
  const start = page * pageSize;
  return orders.slice(start, start + pageSize);
}

module.exports = { quoteOrder, reserveStock, listOrders };
