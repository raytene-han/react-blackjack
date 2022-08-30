
import Card from "./Card";

const cardValue = [0,2,3,4,5,6,7,8,9,"J","Q","K","A"];
const cardSuit = ["S","C","H","D"];

const BASE_URL = "https://www.deckofcardsapi.com/static/img/";

function pickACard() {
  let value = cardValue[Math.floor(Math.random() * cardValue.length)];
  const suit = cardSuit[Math.floor(Math.random() * cardSuit.length)];

  const image = `${BASE_URL}${value}${suit}.png`

  if (value === "A") value = 11;
  if (isNaN(Number(value)) || value === 0) value = 10;
  else value = Number(value);

  return {value, image};

}

function Table() {

  const c1 = pickACard();
  const c2 = pickACard();

  const total = c1.value + c2.value;

    return (
    <div>
      <Card image={c1.image} />
      <Card image={c2.image} />
      <b>Score: {total}</b>
      <b>{total === 21 ? <b>BLACKJACK!</b> : ""}</b>
    </div>
  )

}

export default Table;




// const BASE_SHUFFLE_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
// const BASE_DRAW_URL = "https://www.deckofcardsapi.com/api/deck/";

// https://deckofcardsapi.com/static/img/9H.png

// async function shuffleDeck() {
//   const deckResp = await axios.get(BASE_SHUFFLE_URL);
//   return deckResp.deck_id;
// }

// async function drawTwoCards(deckId) {
//   const cardRes = await axios.get(`${BASE_DRAW_URL}${deckId}/draw/?count=2`);
//   return (
//     cardRes.cards.map(c => ({ image: c.image, value: convertFaceCard(c.value) }))
//   )
// }

// function convertFaceCard(value) {

//   if (value === "ACE") return 11;
//   if (isNaN(Number(value))) return 10;
//   else return Number(value);

// }

// async function Table() {

//   const deckId = await shuffleDeck();
//   const pairOfCards = await drawTwoCards(deckId);

//   const total = pairOfCards[0].value + pairOfCards[1].value;

//   return (
//     <div>
//       <Card img={pairOfCards[0].image} />
//       <Card img={pairOfCards[1].image} />
//       <b>Score: {total}</b>
//       <b>{total === 21 ? <b>BLACKJACK!</b> : ""}</b>
//     </div>
//   )

// }
