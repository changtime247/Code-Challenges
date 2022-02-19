// 8 kyu
// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// ----------------------
// parameters: a card represented by a letter or num followed by a suit, represented as ♣, ♦, ♥, or ♠
// return corresponding suit
// examples:
// (defineSuit('Q♠') --> 'spades'
// (defineSuit('9♦') --> 'diamonds'
// (defineSuit('J♥') --> 'hearts'
// pseudocode: create an object with suits as keys and name of suit, as a string, as corresponding values
// taking simply the char at index one and finding the corresponding value, using the newly created object,
// return the value of the obj's key-value pair

function defineSuit(card) {
    let doc = {
        '♣':'clubs',
        '♦':'diamonds',
        '♥':'hearts',
        '♠':'spades',
    };
    return doc[card[card.length-1]];
}