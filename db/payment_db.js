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
function MakePaymenttable()
{
    var query =
        "create table Payment(Payment_ID int PRIMARY KEY,"+
        "Booking_ID int REFERENCES Bookings(Bid)," +
        "Payment_Date DATE," +
        "type varchar(100)," +
        "number varchar(12)," +
        "cvv varchar(3)," +
        "Status varchar(100) NOT NULL," +
        "Amount int NOT NULL,"+
        "Pcode int REFERENCES Package(Pcode)"
    connection.query(query,
        function(err,results,fields){
            console.log(err)
            console.log(results)
            console.log(fields)
        })
}

module.exports={
    paymenttable: MakePaymenttable
}