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

  const lookup = (word, dictionary = _dictionary) => {
    if (word) {
      const next = word.slice(0, 1)
      const rest = word.slice(1)
      return next in dictionary ? lookup(rest, dictionary[next]) : false
    } else {
      return true
    }
  }

  words.forEach((word) => {
    processNextLetter(word, _dictionary)
  })

  return lookup
}

export { treeDictionary }
