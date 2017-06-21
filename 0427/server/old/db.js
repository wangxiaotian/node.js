var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

function insertData(db,callback) {
    //  连接到表
    var collection = db.collection('test0506');
    //  插入数据
    var data = [{'name':'辰南','level': '逆天阶'},{'name': '独孤败天','level': '天阶'}];

    collection.insert(data, function(error, result) {
        if (error) {
            console.log('Error:' + error);
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(error, db) {
    console.log('连接成功!');
    insertData(db,function(result){
        console.log(result);
        db.close();
    });
});
