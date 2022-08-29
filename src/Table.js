import axios from "axios";
import Card from "./Card";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

let deckId;

async function shuffleDeck() {
  const deckResp = await axios.get(BASE_URL);
  deckId = deckResp.deck_id;
}

async function Table() {

  await shuffleDeck();
  
  return (
    <div>
      <Card deckId={deckId} />
      <Card deckId={deckId} />
      <b>Score: {score}</b>
    </div>
  )

}

export default Table;