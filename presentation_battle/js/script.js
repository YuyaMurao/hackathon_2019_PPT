window.onload = function main() {
    display_init();
    // document.getElementById("button").addEventListener('click', display_init);
    countdown();
}

function display_init() {
    let count = 1;
    const image_div = document.getElementById("image");
    const random_num = random();
    for (let i = 0; i < 3; i++) {
        let name = random_num[i] + ".jpg";
        let tag = '<img src="../image/' + name + '"id ="img' + i + '" alt="サンプル">';
        image_div.insertAdjacentHTML('beforeend', tag);
    }
    //const button = document.getElementById("button");
    button.value = count + "枚目スタート";
    button.addEventListener('click', function () {
        document.getElementById("img0").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        display();
    }, false);

    function display() {
        const img = document.getElementById("img" + (count - 1));
        img.style.display = "block";
        // img.style.width = "70vw";
        if (count !== 3) {
            count++;
            button.value = count + "枚目スタート";
        } else {
            button.value = "評価表示";
            // button.onclick = "window.location.href ='../html/good.html'"
            button.addEventListener('click', function () {
                window.location.href = '../html/evaluation_view.html';
            }, false);
        }

    }
}

function countdown() {
    let counter = 0;
    document.querySelector('#start').addEventListener('click', function (e) {
        if (counter === 0) {
            const start = document.getElementById("start");
            start.removeAttribute("id");
            e.preventDefault();
            var count = 180;
            var id = setInterval(function () {
                count--;
                document.querySelector('#timer').textContent = "残り時間:" + count + "秒";
                if (count <= 0) clearInterval(id);
            }, 1000);

            counter++;
        }


    });

}

function random() {
    /** 重複チェック用配列 */
    let randoms = [];
    /** 最小値と最大値 */
    const min = 1, max = 13;

    /** 重複チェックしながら乱数作成 */
    for (i = min; i <= max; i++) {
        while (true) {
            let tmp = intRandom(min, max);
            if (!randoms.includes(tmp)) {
                randoms.push(tmp);
                break;
            }
        }
    }
    return randoms;

    /** min以上max以下の整数値の乱数を返す */
    function intRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}