import { readFile } from 'fs'
import { setDictionary } from './setDictionary/setDictionary'

readFile('words.txt', 'utf8', function (err, contents) {
  if (err) console.log(err)
  const items = contents.split('\n').filter(x => !!x)
  const lookup = setDictionary(items)

  console.log(lookup('zoetrope'))
  console.log(lookup('nugget'))
  console.log(lookup('effingawesome'))

  console.log('Press any key to exit')

  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', process.exit.bind(process, 0))
})
