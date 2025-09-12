# translate(sentence, dict)

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Hint 1: Tokenize</summary>

Split on spaces to start:

```js
const tokens = sentence.split(' ');
```

(This is naive but fine for a first pass.)

</details> <details> <summary>Hint 2: Map tokens</summary>

```js
const out = tokens.map((t) => {
  const key = t.toLowerCase();
  return dict[key] ?? t;
});
```

</details> <details> <summary>Hint 3: Join</summary>

```js
return out.join(' ');
```

</details> <details> <summary>Hint 4: Punctuation (optional)</summary>

Strip trailing punctuation to look up, then add it back (e.g., "pizza!" → lookup "pizza", then append "!").

</details> ```
