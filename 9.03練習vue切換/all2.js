let data = {
    index: 0,
    menu: [
        { title: "google翻譯", link: "https://translate.google.com.tw/" },
        { title: "youtube", link: "https://www.youtube.com/?hl=zh-TW&gl=TW" },
        { title: "神奇寶貝百科", link: "https://wiki.52poke.com/wiki/%E4%B8%BB%E9%A1%B5" },
        { title: "好學校", link: "https://hahow.in" }
    ]
}
let vm = new Vue({
    el: '#app',
    data: data,
    computed: {
        today() {
            return this.menu[this.index];
        },
        total() {
            return this.menu.length;
        }
    },
    methods: {
        changeIndex(x) {
            this.index = (this.index + x + this.total) % this.total;
        },
        To() {
            window.location = this.menu[this.index].link;
        },
        beforeEnterH(e) {
            $(e).css({ opacity: 0 })
        },
        enterH(e, done) {
            $(e).animate({ opacity: 1 }, 1000, done)
        },
        afterEnterH(e) {
            $(e).css({ opacity: '' })
        }
    }

});
$(function() {
    let time = 1800;
    let newTime = time;
    let min = Math.floor((time / 100) / 60);
    let sec = Math.floor((time / 100) % 60);
    let ms = time % 100;
    Number(time);
    $('#time').on("click", function() {
        let id = setInterval(() => {
            $('#time').css({ "cursor": " default", "background-color": "#F00", "pointer-events": "none" })
            newTime--;
            min = Math.floor((newTime / 100) / 60);
            sec = Math.floor((newTime / 100) % 60);
            if (sec < 10) {
                sec = "0" + sec;
            }
            ms = newTime % 100;
            if (ms < 10) {
                ms = "0" + ms;
            }
            $('#time').html(min + "分" + sec + "秒" + ms);
            if (newTime === 0) {
                clearInterval(id);
                $('#time').css({ "cursor": " pointer", "background-color": "rgb(19, 64, 163)", "pointer-events": "auto" })
                $('#time').html("重新倒數");
                newTime = time;
            }
        }, 10)
    })
});