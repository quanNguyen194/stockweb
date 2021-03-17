import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji'
import Kuroshiro from 'kuroshiro'
// import { filter } from 'lodash'

export const kuroshiro = new Kuroshiro()

export async function initConverter () {
  await kuroshiro.init(new KuromojiAnalyzer({ dictPath: '/dict/' }))
  console.log('Init dict...')
}

export async function doSearchInArray (search, array) {
  search = search.trim().toLowerCase()

  if (!search.length) {
    return array
  }
  const ids = []

  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase().includes(search)) {
      ids.push(array[i])
    } else {
      const cvt = await kuroshiro.convert(search, { to: 'hiragana' })
      const cvt2 = await kuroshiro.convert(search, { to: 'katakana' })

      if (array[i].name.includes(cvt) || array[i].name.includes(cvt2)) {
        ids.push(array[i])
      }
    }
  }

  /* const tmp =  filter(array, (v)=>{
    const cvt =  kuroshiro.convert(search, { to: 'hiragana' })
    const cvt2 =  kuroshiro.convert(search, { to: 'katakana' })

    console.log(v.name, v.name.includes(cvt))

    return /!*v.name.toLowerCase().includes(search) ||*!/ v.name.includes(cvt) || v.name.includes(cvt2);
  })

  return tmp; */

  return ids
}
