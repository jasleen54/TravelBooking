const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbms',
    password: '1234'
})
function Connect() {
    connection.connect();
    console.log("connected")
}


function createPlace() {
    var query  = "create table Place(Pid int PRIMARY KEY , name varchar(255) NOT NULL)"
    connection.query(query,
        function(err,results,fields){
            console.log(err)
            console.log(results)
            console.log(fields)
        })
}

function placename(pname,callback){
    var query=`select Pid from Place where Name='${pname}'`
    connection.query(query,
        function (err,data) {
        console.log("Inside the placename table data is");
        callback(data);

        });
}
module.exports={
    placename:placename
}




