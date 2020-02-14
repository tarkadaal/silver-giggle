import { readFile } from 'fs'
// import { setDictionary as dictionary } from './setDictionary/setDictionary'
import { treeDictionary as dictionary } from './treeDictionary/treeDictionary'

readFile('words.txt', 'utf8', function (err, contents) {
  if (err) console.log(err)
  const items = contents.split('\n').filter(x => !!x)
  const lookup = dictionary(items)

  console.log(lookup('zoetrope')) // true
  console.log(lookup('nugget')) // true
  console.log(lookup('effingawesome')) // false
  console.log(lookup('zoetr')) // false with setDictionary
  // but true with treeDictionary

  console.log('Press any key to exit')

  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', process.exit.bind(process, 0))
})
