# DOM wiring

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Hint 1: Query elements</summary>

```js
const inputEl = document.getElementById('input');
const btn = document.getElementById('translate-btn');
const outputEl = document.getElementById('output');
```

</details> <details> <summary>Hint 2: Hook the button</summary>

```js
btn.addEventListener('click', () => {
  const sentence = inputEl.value;
  const result = translate(sentence, EMOJI_DICT);
  outputEl.textContent = result;
});
```

</details> <details> <summary>Hint 3: Keep translate() pure</summary>

The translate function should not touch the DOM — only return a string.

</details> ```
