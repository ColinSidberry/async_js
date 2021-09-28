"use strict";

function part_1() {
    const baseURL = "http://numbersapi.com";

    const $container = $('#container');

    const nums = [1, 2, 3, 4].join(','); //string is immutable! should be const.

    /**Accepts a string of comma separated numbers and sends a get request
     *  to numbers api. Returns an object of number facts. 
     * !!!Describe and/or show example of object
      */
    async function getNumberFacts(nums) {
        //do CSV-ing here so the func accepts an array instead
        const resp = await axios({
            url: `${baseURL}/${nums}?json`,
            method: 'get',
        });
        return resp.data;
    }

    /**Calls getNumberFacts and appends each fact to the container.
      */
     //split getting data & pasting to DOM (which takes list of facts)
    async function pasteToDOM() {
        const numFacts = await getNumberFacts(nums);
        for (let fact in numFacts) {
            $container.append(`<div>${numFacts[fact]}</div>`);
        }
    }

    pasteToDOM(); 
}

const BASE_URL = "http://deckofcardsapi.com/api/deck";

const $container = $('#container');

/** Sends a get request to the Cards API and returns a deck_id of 
 * the shuffled deck. 
 */
async function shuffleNewDeck() {
    const resp = await axios({
        url: `${BASE_URL}/new/shuffle/?deck_count=1`,
        method: 'get',
    });
    const deckID = resp.data.deck_id;
    return deckID;
}

/** Accepts a deck_id and draws a card from that deck. Returns [card
 * image URL, remaining number of cards]
 */
async function drawCard(deckID) {
    const resp = await axios({
        url: `${BASE_URL}/${deckID}/draw/?count=1`,
        method: 'get',
    });

    const card = resp.data.cards[0];
    return [card.image, resp.data.remaining];
}

/** Handles clicking - accepts an event object & deck_id, calls on drawCard,
 * appends image to DOM. If there are no remaining cards, display message to user.
 */
async function handleClick(evt, deckID) {
    let [cardImageURL, remainingCards] = await drawCard(deckID);

    $container.append(`<img src="${cardImageURL}" style="width: 50px" alt="Card image">`);

    if (remainingCards === 0) {
        $container.append(`<div>No more cards to draw!</div>`);
        //could call main function to reset the game
    }
}

/** Calls shuffleNewDeck and adds event listener for the draw button */
async function main() {
    let deckID = await shuffleNewDeck();
    $("#draw-button").on('click', (evt) => handleClick(evt, deckID));
}
//best way to delete the event listener since it's anonymous


main();


pokemon1 = get ..
pokemon1 = get ..
pokemon1 = get ..

promise.all([pokemon1, 2, 3])
_.Sample([list of pokemon], 3) --> random thing of 3