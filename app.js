// Emoji Translator - Starter
// ==========================

// TODO: Create a dictionary object for word -> emoji mappings
// Example (put this in your own words/emojis):
// const EMOJI_DICT = { pizza: "🍕", dog: "🐶", fire: "🔥" };

const emojiDict = {
  pizza: '🍕',
  dog: '🐶',
  fire: '🔥',
  fish: '🐟',
  egg: '🥚',
  brain: '🧠',
};

// TODO: Write a translate function
// - Input: (sentence, dict)
// - Output: new string with words replaced by emojis when there's a match
// - Keep this function PURE (no DOM work inside)
function translate(sentence) {
  if (typeof sentence !== 'string') {
    return 'Enter a sentence! ';
  }
  const emojiArr = Object.keys(emojiDict);
  console.log(sentence);
  let emojiSentence = sentence.trim().toLowerCase();
  console.log(emojiSentence);
  const sentArr = emojiSentence.split(' ');
  for (let i = 0; i < sentArr.length; i++) {
    if (emojiArr.includes(sentArr[i])) {
      if (sentArr[i][sentArr.length] === 's') {
        console.log(sentArr[i]);
        sentArr[i] = `${emojiDict[sentArr[i]]}s`;
        // console.log(sentArr[i]);
      } else if (sentArr[i].slice(sentArr[i].length - 2, 0) === 'es') {
        console.log('catch es');
        sentArr[i] = `${emojiDict[sentArr[i]]}es`;
      } else {
        sentArr[i] = emojiDict[sentArr[i]];ls
      }
    }
  }
  return (emojiSentence = sentArr.join(' '));
}
let testSent = 'dog likes pizza with fire';
// console.log(translate(testSent));
let testSent2 = 'dogs likes pizza with fires and brain or fishes';
console.log(translate(testSent2));

//tests to get s and es
let word = 'dogs';
// console.log(word[word.length-1]);
let word2 = 'fishes';
// console.log(word2.slice(word2.length-2))

// TODO: Wire up the DOM
// - Grab the textarea/input, the "Translate" button, and the output area
// - On click, call translate(...) and update the output on the page

// Optional: Add features like memoization, plural handling, punctuation, or editing the dictionary via the UI
