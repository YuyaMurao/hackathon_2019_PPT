const database = firebase.database();
let logic = interest = confidence = ad_lib = 0;
var ctx = document.getElementById("myRaderChart");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {

        labels: ["論理性", "話の面白さ", "自信", "アドリブ力"],
        datasets: [{
            label: 'Aさん',
            data: [logic, interest, confidence, ad_lib],
            backgroundColor: 'RGBA(225,95,150, 0.5)',
            borderColor: 'RGBA(225,95,150, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'RGB(46,106,177)'
        }]
    },
    options: {
        title: {
            display: true,
            text: '評価結果'
        },
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 5,
                stepSize: 1,
                callback: function (value, index, values) {
                    return value
                }
            }
        }
    }
});
database.ref("presen").on('value', function (data) {
    logic = data.val().logic;
    interest = data.val().interest;
    confidence = data.val().confidence;
    ad_lib = data.val().ad_lib;
    count = data.val().count;
    score = document.getElementById("score");
    score.textContent = count;
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {

            labels: ["論理性", "話の面白さ", "自信", "アドリブ力"],
            datasets: [{
                label: 'Aさん',
                data: [logic, interest, confidence, ad_lib],
                backgroundColor: 'RGBA(225,95,150, 0.5)',
                borderColor: 'RGBA(225,95,150, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }]
        },
        options: {
            title: {
                display: true,
                text: '評価結果'
            },
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                    callback: function (value, index, values) {
                        return value
                    }
                }
            }
        }
    });
});

function retop() {
    database.ref("presen").update({
        logic: 0,
        interest: 0,
        confidence: 0,
        ad_lib: 0,
        count: 0
    });
    location_top();
}
function location_top() {
    window.location.href = '../index.html';
}