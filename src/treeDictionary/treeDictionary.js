const treeDictionary = (words) => {
  const _dictionary = {}
  const processNextLetter = (word, dictionary) => {
    if (word) {
      const next = word.slice(0, 1)
      const rest = word.slice(1)
      if (!(next in dictionary)) {
        dictionary[next] = {}
      }
      processNextLetter(rest, dictionary[next])
    }
  }

  words.forEach((word) => {
    processNextLetter(word, _dictionary)
  })

  const lookup = (word, dictionary = _dictionary) => {
    if (!word) {
      return true
    } else {
      const next = word.slice(0, 1)
      const rest = word.slice(1)
      if (next in dictionary) {
        return lookup(rest, dictionary[next])
      } else {
        return false
      }
    }
  }

  return lookup
}

export { treeDictionary }
