const db = require('./db')
module.exports.add = async (title) => {
    // 读取
    const list = await db.read()
    // 构造对象
    list.push({
        title,
        done: false
    })
    // 写入
    await db.write(list)
}
module.exports.clear = async ()=>{
    await db.write([])
}
module.exports.showAll = async ()=>{
    console.log('show all')
}
