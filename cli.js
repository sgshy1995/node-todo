const program = require('commander')
//program.version('0.0.1');
const api = require('./index')

program
    .option('-s, --small', 'small pizza size')

program
    .command('add')
    .description('add a task')
    .action((...args) => {
        let words = args[args.length - 1].join(' ')
        api.add(words).then(() => {
            console.log('Add Successful!')
        }, () => {
            console.log('Add Fail!')
        })
    })

program
    .command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear().then(() => {
            console.log('Clear Successful!')
        }, () => {
            console.log('Clear Fail!')
        })
    })

program.parse(process.argv)

console.log('process.argv', process.argv)

if (process.argv.length === 2) {
    void api.showAll()
}
