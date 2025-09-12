# Stretch ideas

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Memoize</summary>

Cache translations by input string in an object that lives outside the click handler.

</details>

<details>
  <summary>Plural handling</summary>

If a token ends with "s", try lookup without the "s" and append it back (e.g., "dogs" → "🐶s").

</details>

<details>
  <summary>Punctuation</summary>

Detect punctuation like "!", ".", "?" at the end. Lookup the word without punctuation, then append the punctuation back.

</details>

<details>
  <summary>Editable dictionary</summary>

Add small inputs + a button to insert `{ key: value }` into your dictionary object at runtime.

</details>
