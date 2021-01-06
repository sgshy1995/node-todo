const fs = require("fs")
const path = require('path')
const homedir = require('os').homedir()
const home = process.env.HOME || homedir
const dbPath = path.join(home, '.todo')

const db = {
    read(path = dbPath) {
        return new Promise(((resolve, reject) => {
            fs.readFile(path, {flag: 'a+'}, (error, data) => {
                if (error) return reject(error)
                let list
                try {
                    list = JSON.parse(data.toString())
                } catch (e) {
                    list = []
                }
                resolve(list)
            })
        }))

    },
    write(list, path = dbPath) {
        const string = JSON.stringify(list)
        fs.writeFile(path, string + '\n', err => {
            return new Promise(((resolve, reject) => {
                if (err) return reject(err)
                resolve()
            }))
        })
    }
}

module.exports = db
