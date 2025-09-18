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
//keep adding edge cases to make it more specific and fine tuned ; since the emoji dict, check how they're in common and how they're different

// TODO: Write a translate function
// - Input: (sentence, dict)
// - Output: new string with words replaced by emojis when there's a match
// - Keep this function PURE (no DOM work inside)
function translate(sentence) {
  if (typeof sentence !== 'string') {
    return 'Enter a sentence! ';
  }
  const emojiArr = Object.keys(emojiDict); //array of dictionary keys
  // console.log(sentence);

  let emojiSentence = sentence.trim().toLowerCase();
  // console.log(emojiSentence);

  const sentArr = emojiSentence.split(' ');
  console.log(sentArr);
  // console.log(emojiArr);
  // console.log(sentArr[0][sentArr[0].length-1)
  // console.log(emojiArr.includes(sentArr[0][sentArr[0].length-1])); //sentArr of
  // console.log(sentArr[i][sentArr[i].length-1] === 's' || sentArr[i].slice(sentArr[i].length - 2, 0) === 'es')
  //testing whether we get es -
  // console.log(sentArr[8][sentArr[8].length-2]) //simple lookup, we only get e
  // console.log(sentArr[8].slice(-2)); //simple lookup // we get es
  // console.log(sentArr[8].slice(0, -2)); //simple lookup // we get fish
  // emojiArr.includes(sentArr[8].slice(0,-2)) //returns true for fish
  // if (emojiArr.includes(sentArr[8].slice(0, -2))) {
  //   console.log(emojiDict['fish']);
  //   console.log(emojiDict[sentArr[8].slice(0, -2)]);
  //   console.log(`${emojiDict[sentArr[8].slice(0, -2)]}es`);
  //   console.log(sentArr[8].slice(-2) === 'es');
  // }

  // if (emojiArr.includes(sentArr[8].slice(0,-2))){
  // console.log(sentArr[8]) returns fish
  // console.log(`${emojiDict[sentArr[8].slice(0,-2)]}es`) //returns fishes
  // }

  // console.log(sentArr[0].slice(-1)) //using a method
  // console.log(sentArr[0].slice(0, sentArr[0].length-1)) //using a method
  // console.log(`${emojiDict[sentArr[8].slice(0,-2)]}es`) //this gets fishes
  // console.log(emojiArr.includes(sentArr[0].slice(0, sentArr[0].length-1)) )
  // console.log(sentArr[8].slice(-2) === 'es') returns true for fishes cause fish - es
  for (let i = 0; i < sentArr.length; i++) {
    // console.log(sentArr[i][sentArr[i].length-1] === 's' || sentArr[i].slice(sentArr[i].length - 2, 0) === 'es')

    // console.log(sentArr);
    if (
      emojiArr.includes(sentArr[i].slice(0, -2)) || //catch es
      // emojiArr.includes(sentArr[i].slice(0,sentArr[i].length-2)) ||
      emojiArr.includes(sentArr[i].slice(0, sentArr[i].length - 1)) || //catch s
      emojiArr.includes(sentArr[i]) //dog
      // ||  emojiArr.includes(sentArr[i][sentArr[i].length - 1]) //just 's'
      // || emojiArr.includes(sentArr[i].slice(-1))  //just 's'
      // ||  emojiArr.includes(sentArr[i].slice(-2))//es
      //catch es
    ) {
      //fires / fire
      // console.log('sent arr ' + (sentArr[i][sentArr[i].length-1] === 's'))
      // console.log(`${emojiDict[sentArr[i].slice(0, sentArr[i].length-1)]}s`);
      //sentArr[i].length-2 returns a num
      // console.log((sentArr[i].slice(0,-1)))
      if (
        sentArr[i].slice(-2) === 'es' &&
        emojiArr.includes(sentArr[i].slice(0, -2))
      ) {
        //possibly an and case to catch "fire"s, emojiArr.includes //if the word ends in e, && !emojiArr.includes(sentArr[i].length-1)
        //
        // console.log('catch es');
        // console.log(sentArr)
        //this is correct based on test cases above.

        sentArr[i] = `${emojiDict[sentArr[i].slice(0, -2)]}es`;
        // console.log(sentArr)
      } else if (sentArr[i][sentArr[i].length - 1] === 's') {
        // console.log('sent arr ' + (sentArr[i][sentArr[i].length-1] === 's'))
        sentArr[i] = `${
          emojiDict[sentArr[i].slice(0, sentArr[i].length - 1)]
        }s`;
        // console.log(sentArr)

        // sentArr[i] = `${emojiDict[sentArr[i]]}s`; //doesn't work, undefined
      }
      //   if (sentArr[i] === emojiDict[sentArr[i]]){
      //     sentArr[i] = emojiDict[sentArr[i]]
      // }
      else {
        sentArr[i] = emojiDict[sentArr[i]];
      }
    }
    //test case to check why the else if isn't working
    // if (sentArr[i].slice(-2) === 'es') {
    //   console.log(sentArr[i])
    //   console.log(sentArr[8].slice(-2) === 'es');
    //   console.log(`${emojiDict[sentArr[8].slice(0, -2)]}es`);
    // }
  } //for
  // console.log(sentArr)
  return (emojiSentence = sentArr.join(' '));
}
let testSent = 'dog likes pizza with fire';
// console.log(translate(testSent));
let testSent2 = 'dogs likes pizza with fires and brain or fishes';
//  console.log(translate(testSent2));
// console.log(translate('fishes fires'))
const testSent2Arr = testSent2.split(' ');
// console.log(translate(testSent2));
// console.log(testSent2);
// console.log(testSent2Arr);
// console.log(emojiDict[testSent2Arr[2]]);
// console.log(emojiDict[testSent2Arr[8].split(0, -2)]);

// for (let i = 0; i < testSent2Arr.length; i++) {
//   console.log(testSent2Arr[i]);
//   if (testSent2Arr[i].slice(-2) === 'es') {
//     console.log(testSent2Arr[i]);
//     console.log(testSent2Arr[8].slice(-2) === 'es');
//     console.log(`${emojiDict[testSent2Arr[8].slice(0, -2)]}es`);
//   }
// }

//tests to get s and es
let word = 'dogs';
// console.log(word[word.length-1]);
let word2 = 'fishes';
// console.log(word2.slice(word2.length-2))
// const testArr = ['string', 'web', 'long'];
// console.log(testArr);
// console.log(testArr[0]);
// console.log(testArr[0][testArr[0].length - 1]);

// TODO: Wire up the DOM
// - Grab the textarea/input, the "Translate" button, and the output area
// - On click, call translate(...) and update the output on the page

// Optional: Add features like memoization, plural handling, punctuation, or editing the dictionary via the UI
