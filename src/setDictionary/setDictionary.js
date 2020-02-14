const setDictionary = (words) => {
  const dictionary = new Set(words)
  return (word) => dictionary.has(word)
}

export { setDictionary }
