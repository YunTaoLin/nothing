let data ={
    input:{
        type:'類型貳',
        title:'',
        link:'javascript:;'
    },
    menu : [
        {type: '類型壹' , title:'混血王子的背叛', link: 'javascript:;'},
        {type: '類型貳' , title:'神秘的魔法石', link: 'javascript:;'},
        {type: '類型參' , title:'消失的密室', link: 'javascript:;'},
        {type: '類型肆' , title:'阿茲卡班的逃犯', link: 'javascript:;'},
        {type: '類型壹' , title:'火盃的考驗', link: 'javascript:;'},
        {type: '類型貳' , title:'精靈寶可夢', link: 'javascript:;'},
        {type: '類型貳' , title:'忍者哈特利', link: 'javascript:;'},
        {type: '類型肆' , title:'魔法咪嚕咪嚕', link: 'javascript:;'},
        {type: '類型貳' , title:'玩偶遊戲', link: 'javascript:;'},
        {type: '類型貳' , title:'數碼寶貝', link: 'javascript:;'},
        {type: '類型壹' , title:'爆走兄弟', link: 'javascript:;'},
        {type: '類型貳' , title:'戰鬥陀螺', link: 'javascript:;'},
        {type: '類型貳' , title:'遊戲王怪獸之決鬥',link: 'javascript:;'},
        {type: '類型貳' , title:'天空之城', link: 'javascript:;'},
        {type: '類型肆' , title:'魔法公主', link: 'javascript:;'},
        {type: '類型壹' , title:'魔女的考驗', link: 'javascript:;'},
        {type: '類型貳' , title:'守護甜心', link: 'javascript:;'},
        {type: '類型參' , title:'海賊王', link: 'javascript:;'},
        {type: '類型參' , title:'烏龍派出所', link: 'javascript:;'},
        {type: '類型肆' , title:'七大罪', link: 'javascript:;'},
        {type: '類型貳' , title:'降世神通', link: 'javascript:;'}
        
    ]
} 


let vm = new Vue({
    el:'#app',
    data : data,
    methods:{
        inputhandler(){
            let {type , title} = this.input
            if(this.input.context){
                this.menu.push({
                    type : type , 
                    title : title , 
                    link:  'javascript:;'
                });
                this.input.context='';


            }
        }
    }






})