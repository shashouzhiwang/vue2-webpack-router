module.exports = {
    devTest: { //部署到测试服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: '192.168.12.217', //ip地址
        user: 'user1', //帐号
        pass: 'admin123456', //密码
        port: 22, //端口
        remotePath: "/home/user1/data/HERmall/report/"
    },
    devDist: { //部署正式服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: '192.168.12.217', //ip地址
        user: 'user1', //帐号
        pass: 'admin123456', //密码
        port: 22, //端口
        remotePath: "/home/user1/data/HERmall/report/"
    },
    publicPath: '/app/', //程序在网站根路径地址
    target: 'https://cnodejs.org/' //连接的服务器地址
}
