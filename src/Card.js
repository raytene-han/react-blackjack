import axios from "axios";
import Card from "./Card";

const BASE_URL = "https://deckofcardsapi.com/api/deck/";

async function drawCard(deckId) {
  const cardRes = await axios.get(`${BASE_URL}${deckId}/draw/?count=1`);
  return cardRes.cards[0];
}


async function Card({deckId}) {

  const card = await drawCard(deckId);

}