# Dictionary hints

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Hint 1: Basic shape</summary>

```js
const EMOJI_DICT = {
  cat: '🐱',
  dog: '🐶',
  pizza: '🍕',
  happy: '😊',
  fire: '🔥',
};
```

</details> <details> <summary>Hint 2: Normalizing input</summary>

Use .toLowerCase() before lookup so "Pizza" matches "pizza".

</details> <details> <summary>Hint 3: Non-matches</summary>

If a word isn't in the dictionary, keep the original token.

</details> ```
