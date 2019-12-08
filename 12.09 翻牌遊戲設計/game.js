var numTimeout = null; //計數
function num_click(length) {
    document.getElementById("startBtn").disabled = true;
    let ccount = 0,
        tt = 0;
    let RememberTime = 10;
    let box_num = document.querySelector('#box_num');

    //產生1~length的數字    
    let nums = Array.from(Array(length + 1).keys()).slice(1);

    for (let j, i = 0; i < length; i++) {
        j = Math.floor(Math.random() * i);
        [nums[i], nums[j]] = [nums[j], nums[i]] //打亂
    }

    //依排列後的數字產生按鈕
    nums.forEach(function(value, key) {
        let divtag = document.createElement("div");
        divtag.className = "div_num";
        divtag.id = nums[key];
        divtag.innerHTML = nums[key];
        document.getElementById('box_num').appendChild(divtag);
    })

    //遊戲說明
    var playtag = document.createElement("div");
    playtag.id = "playMask";
    playtag.innerHTML = "請開始記牌，10秒後依序按下蓋牌的順序";
    document.body.appendChild(playtag);
    startTimer();

    //利用setTimeout設定10秒後開始
    setTimeout(() => {
        stopTimer();

        //移除提示訊息Mask
        if (document.getElementById("playMask")) {
            document.body.removeChild(document.getElementById("playMask"));
        }
        //隱藏方塊裡的數字
        let d1 = document.querySelectorAll('.div_num');
        for (let i = 0; i < d1.length; i++) {
            d1[i].innerHTML = "";
        }

        startTimer();

        //將按鈕click監聽綁定在外層的box_num元件
        let box_num = document.getElementById('box_num');
        box_num.addEventListener('click', addbox = (e) => {
            if (e.target.tagName.toLowerCase() === 'div') {
                ccount++;

                if (Number(e.target.id) != ccount) { //答錯
                    stopTimer();
                    var masktag = document.createElement("div");
                    masktag.id = "mask";
                    masktag.innerHTML = "<div id='maskcell'><img src='game/images/cry.png'><br>失敗QQ<br><input type='button' id='reset' value='重來'></div>";
                    document.body.appendChild(masktag);
                    reset.addEventListener('click', closeMask);

                } else {
                    e.target.style.background = "#ff4e50"; //答對就改變div顏色
                    e.target.innerHTML = e.target.id;

                    if (Number(e.target.id) == length) //全部答對
                    {
                        stopTimer();
                        var masktag = document.createElement("div");
                        masktag.id = "mask";
                        masktag.innerHTML = "<div id='maskcell'><img src='game/images/smile.png'><br>恭喜成功!<br><input type='button' id='reset' value='再玩一次' onclick='document.body.removeChild(document.getElementById(\"mask\"));'></div>";
                        document.body.appendChild(masktag);
                        reset.addEventListener('click', closeMask)
                    }
                }
            }
        })
    }, RememberTime * 1000);

    function startTimer() {
        numTimeout = setInterval(() => {
            tt++;
            document.getElementById('show_timer').innerHTML = tt;
        }, 1000);
    }

    function stopTimer() {
        tt = 0;
        ccount = 0;
        document.getElementById('show_timer').innerHTML = "0";
        if (numTimeout) {
            clearInterval(numTimeout);
            numTimeout = null;
        }
    }

    function closeMask() {
        if (document.getElementById("mask")) {
            document.body.removeChild(document.getElementById("mask"));
        }
        //清空box_num
        document.getElementById("box_num").innerHTML = "";
        document.getElementById('box_num').removeEventListener("click", addbox);
        document.getElementById("startBtn").disabled = false;
        stopTimer();
    }


};

window.addEventListener('load', () => {
    startBtn.addEventListener('click', musicTarget = (e) => {
        num_click(9);
    })
})