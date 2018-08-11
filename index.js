const fs = require('fs')

function readDirFileName (dir) {
  const stat = fs.statSync(dir)
  let files
  switch (stat.isDirectory()) {
    case true:
      const dirs = fs.readdirSync(dir).filter(item => !item.startsWith('.'))
      let results = dirs.map(sub => readDirFileName(`${dir}/${sub}`))
      files = [].concat(...results)
      break
    case false:
      files = dir
      break
  }
  return files
}

module.exports = readDirFileName
