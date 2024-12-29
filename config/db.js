const mysql = require('mysql');

// Cấu hình kết nối
const dbConfig = {
    host: 'localhost',
    user: 'root', // Thay thế bằng username của bạn
    password: '', // Thay thế bằng password của bạn
    database: 'webbandientu', // Thay thế bằng tên database bạn muốn kết nối
    port: '3307',
};

// Tạo kết nối
const connection = mysql.createConnection(dbConfig);

// Kết nối đến cơ sở dữ liệu
connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

// Xuất kết nối để tái sử dụng
module.exports = connection;
