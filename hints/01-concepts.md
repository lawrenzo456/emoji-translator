# Concepts: dictionary + translation

We want to map certain words to emojis using a simple dictionary object:

- Keys: words (e.g., "cat")
- Values: emojis (e.g., "🐱")

The translator will:

- split the sentence into tokens,
- replace tokens that exist in the dictionary,
- join the tokens back into a string.
