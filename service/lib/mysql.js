const mysql = require('mysql')
const config = require('../config/default')
const createTables = require('../config/createTables.js')

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
})

let query = function (sql, values) {
    console.log(sql, values)
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

let createTable = function (sql) {
    return query(sql, [])
}
query("show tables").then(d => {
    if (d.length !== 0) {
        console.log("数据表已经创建")
    } else {
        console.log("即将创建。。。。")
        createTable(createTables.users)
        createTable(createTables.role)
        createTable(createTables.permission)
        createTable(createTables.userRole)
        createTable(createTables.rolePermission)
    }
})

// 查询用户是否存在
let findUser = async function (id) {
    let _sql = `
        SELECT * FROM user_info where user_id="${id}" limit 1;
    `
    let result = await query(_sql)

    if (Array.isArray(result) && result.length > 0) {
        result = result[0]
    } else {
        result = null
    }
    return result
}
// 查询用户以及用户角色
let findUserAndRole = async function (id) {
    let _sql = `
      SELECT u.*,r.role_name FROM user_info u,user_role ur,role_info r where u.id=(SELECT id FROM user_info where user_id="${id}" limit 1) and ur.user_id=u.id and r.id=ur.user_id limit 1;
    `
    let result = await query(_sql)

    if (Array.isArray(result) && result.length > 0) {
        result = result[0]
    } else {
        result = null
    }
    return result
}

// 更新用户登录次数和登录时间
let UpdataUserInfo = async function (value) {
    let _sql =
        'UPDATE user_info SET user_count = ?, user_login_time = ? WHERE id = ?;'
    return query(_sql, value)
}

//用户注册
let insertUserinfo = async function (value) {
    let _sql = "insert into user_info(user_id, user_name, user_pwd) values(?,?,?);";
    return query(_sql, value);

};
module.exports = {
    //暴露方法
    createTable,
    findUser,
    findUserAndRole,
    UpdataUserInfo,
    insertUserinfo,
}
