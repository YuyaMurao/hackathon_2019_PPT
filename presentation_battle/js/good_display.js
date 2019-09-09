const database = firebase.database();
let count = 0;

read();

function read() {
    database.ref("presen").on('value', function (data) {
        count = data.val().count;
        document.getElementById("good").textContent = "good数:" + count + "回";
    });
}