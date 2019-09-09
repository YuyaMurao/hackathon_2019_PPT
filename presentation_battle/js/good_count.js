const database = firebase.database();
let count = 0;

window.onload = function main() {
    read();
    const good_button = document.getElementById("good_button");
    good_button.addEventListener('click', counter);
}

function read() {
    database.ref("presen").on('value', function (data) {
        count = data.val().count;
        // document.getElementById("good").textContent = "good数:" + count + "回";
    });
}

function counter() {
    good_button.src = "../image/good_after.jpg";
    count++;
    // document.getElementById("good").textContent = "good数:" + count + "回";
    add_database()

    function add_database() {
        database.ref("presen").update({
            count: count
        });
    }
    setTimeout(function () {
        good_button.src = "../image/good_before.jpg";
    }, 300);
}

function reset_counter() {
    count = 0;
    database.ref("presen").update({
        count: 0
    });
}