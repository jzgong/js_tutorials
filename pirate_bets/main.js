// Returns a random int in the range [m,n]
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

// Random returns a string representing one of six faces
function randFace() {
  return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

let funds = 50; // starting conditions
let round = 0;

while (funds > 1 && funds < 100) {
  round += 1;
  console.log(`round${round}: `);
  console.log(`\tstarting funds: ${funds}p`);
  // Place bets
  const bets = {
    crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0,
  };

  let totalBet = rand(1, funds);

  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    let remaining = totalBet;
    do {
      const bet = rand(1, remaining);
      const face = randFace();
      bets[face] += bet;
      remaining -= bet;
    } while (remaining > 0);
  }
  funds -= totalBet;
  // roll dice
  const hand = [];
  for (let roll = 0; roll < 3; roll += 1) {
    hand.push(randFace());
  }

  // collect winnings
  let winnings = 0;
  for (let dice = 0; dice < hand.length; dice += 1) {
    const face = hand[dice];
    if (bets[face] > 0) {
      winnings += bets[face];
    }
  }
  funds += winnings;
  console.log(`\twinnings: ${winnings}`);
}

console.log(`\tending funds: ${funds}`);
