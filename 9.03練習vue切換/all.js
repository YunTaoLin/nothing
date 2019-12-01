let data={
    index: 0,
    menu:[
    {title:"google翻譯" , link:"https://translate.google.com.tw/" },
    {title:"youtube", link: "https://www.youtube.com/?hl=zh-TW&gl=TW"},
    {title:"神奇寶貝百科",link: "https://wiki.52poke.com/wiki/%E4%B8%BB%E9%A1%B5"},
    {title: "好學校",link: "https://hahow.in"}
    ]
}
let vm  = new Vue({
    el:'#app',
    data: data,
    computed:{
        today(){
            return this.menu[this.index];
        },
        total(){
            return this.menu.length;
        }
    },
    methods:{
        changeIndex(x){
            this.index = (this.index + x + this.total) % this.total;
        },
        To(){
            window.location=this.menu[this.index].link ;
        }
    }

})
