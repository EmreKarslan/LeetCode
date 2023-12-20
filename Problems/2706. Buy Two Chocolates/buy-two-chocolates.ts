//Solution 1: 91ms 47.70 MB
function buyChoco(prices: number[], money: number): number {
  prices.sort((a, b) => a - b);

  const cost = prices[0] + prices[1];
  return cost <= money ? money - cost : money;
}

//Solution 2: 89ms 46.10 MB
function buyChoco(prices: number[], money: number): number {
  let [min1, min2] = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];

  for (const price of prices) {
    if (price <= min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const leftMoney = money - (min1 + min2);
  return leftMoney >= 0 ? leftMoney : money;
}

//Solution 3: 83ms 46.40 MB
function buyChoco(prices: number[], money: number): number {
  let [min1, min2] = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];

  for (const price of prices) {
    if (min1 === 1 && min2 === 1) {
      break;
    }

    if (price <= min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const leftMoney = money - (min1 + min2);
  return leftMoney >= 0 ? leftMoney : money;
}

//Solution 4: 82ms 46.90MB;
function buyChoco(prices: number[], money: number): number {
  let [min1, min2] = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];

  for (const price of prices) {
    if (min1 === 1 && min2 === 1) {
      break;
    }

    if (price <= min1) {
      min2 = min1;
      min1 = price;
      continue;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const leftMoney = money - (min1 + min2);
  return leftMoney >= 0 ? leftMoney : money;
}
