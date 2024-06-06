//Solution 1: 122ms 54.97 MB
function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  if (groupSize === 1) return true;
  hand.sort((a, b) => a - b);
  const groupCount = Math.floor(hand.length / groupSize);

  for (let i = 0; i < groupCount; i++) {
    let min = hand[0];
    for (let j = 1; j < groupSize; j++) {
      let next = min + j;
      const nextIndex = hand.indexOf(next);

      if (nextIndex === -1) {
        return false;
      } else {
        hand.splice(nextIndex, 1);
      }
    }
    hand.splice(0, 1);
  }

  return hand.length === 0;
}

//Solution 2: 105ms 62.17 MB
function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  if (groupSize === 1) return true;

  hand.sort((a, b) => a - b);
  const cardCount = new Map<number, number>();

  for (const card of hand) {
    cardCount.set(card, (cardCount.get(card) || 0) + 1);
  }

  for (const card of hand) {
    if (cardCount.get(card) === 0) continue;

    for (let j = 0; j < groupSize; j++) {
      const currentCard = card + j;
      if (!cardCount.has(currentCard) || cardCount.get(currentCard) === 0) {
        return false;
      }
      cardCount.set(currentCard, cardCount.get(currentCard)! - 1);
    }
  }

  return true;
}

//Solution 3: 79ms 59.54 MB
function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  if (groupSize === 1) return true;

  hand.sort((a, b) => a - b);
  const cardCount = new Map<number, number>();

  for (const card of hand) {
    cardCount.set(card, (cardCount.get(card) || 0) + 1);
  }

  for (const card of hand) {
    if (cardCount.get(card) === 0) continue;

    for (let j = 0; j < groupSize; j++) {
      const currentCard = card + j;
      const currentCardCount = cardCount.get(currentCard) || 0;
      if (currentCardCount === 0) {
        return false;
      }

      cardCount.set(currentCard, currentCardCount - 1);
    }
  }

  return true;
}
