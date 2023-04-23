import fs from 'fs'

fs.appendFile('my-file.txt', 'Node.js created the file', (err) => {
    if (err) throw err
    console.log('File has been saved!')
})

setTimeout(() => console.log('The end'), 30000)
