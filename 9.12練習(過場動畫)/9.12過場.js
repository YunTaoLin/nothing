
    let data = {
        index: 0,
        menu: [
          { type: '主廚的話', title: '餐點簡介與相關說明', link: 'javascript:;' },
          { type: '餐具擺盤', title: '萬用白瓷 VS Code 與套裝工具組', link: 'javascript:;' },
          { type: '開胃餐點', title: '中式資料綁定佐無毒 jQuery 畫面處理', link: 'javascript:;' },
          { type: '開胃餐點', title: '古早味事件燉畫面綁定', link: 'javascript:;' },
          { type: '開胃餐點', title: '清爽表單處理佐雙向資料', link: 'javascript:;' },
          { type: '開胃餐點', title: '使用者輸入焗列表呈現', link: 'javascript:;' },
          { type: '開胃餐點', title: '期間限定篩選佐資料轉換', link: 'javascript:;' },
          { type: '開胃餐點', title: '峰峰相連互動式資料表單', link: 'javascript:;' },
          { type: '風味沙拉', title: '天然 CSS 過場佐 jQuery 動畫', link: 'javascript:;' },
          { type: '風味沙拉', title: '異國風情資料觀測與設定', link: 'javascript:;' },
          { type: '風味沙拉', title: '有機發酵生命週期', link: 'javascript:;' },
          { type: '總匯拼盤', title: '家鄉通訊錄佐手作 API #1', link: 'javascript:;' },
          { type: '總匯拼盤', title: '家鄉通訊錄佐手作 API #2', link: 'javascript:;' },
          { type: '用餐插曲', title: '怎麼沒有魯肉飯!? 其他菜色瀏覽', link: 'javascript:;' },
          { type: '餐具擺盤', title: '特製雕花 Vue-cli 3.0 與 Node.js 開發環境', link: 'javascript:;' },
          { type: '主廚推薦', title: '科學單檔模組化料理', link: 'javascript:;' },
          { type: '主廚推薦', title: '清燉嫩煮百頁路由', link: 'javascript:;' },
          { type: '主廚推薦', title: '蜂蜜燴巢狀路由', link: 'javascript:;' },
          { type: '主廚推薦', title: '五彩繽紛路由參數與監控', link: 'javascript:;' },
          { type: '主廚推薦', title: '共享式集中數據管理大雜匯', link: 'javascript:;' },
          { type: '主廚推薦', title: '精緻模組化數據塔', link: 'javascript:;' },
          { type: '用餐插曲', title: '我吃不下了!! 食用順序的選擇與進程', link: 'javascript:;' },
          { type: '總匯拼盤', title: '復古總匯 TodoList 燴路由模組', link: 'javascript:;' },
          { type: '總匯拼盤', title: '復古總匯 TodoList 燴資料模組', link: 'javascript:;' },
          { type: '總匯拼盤', title: '復古總匯 TodoList 燴頁面模組 #1', link: 'javascript:;' },
          { type: '總匯拼盤', title: '復古總匯 TodoList 燴頁面模組 #2', link: 'javascript:;' },
          { type: '總匯拼盤', title: '復古總匯 TodoList 燴頁面模組 #3', link: 'javascript:;' },
          { type: '精選甜點', title: '靜態渲染 VuePress 漸層飲', link: 'javascript:;' },
          { type: '精選甜點', title: '風情萬種 Nuxt.js 千層糕', link: 'javascript:;' },
          { type: '主廚的話', title: '餐後心得與其他資訊', link: 'javascript:;' }
        ]
      }
  
      let vm = new Vue({
        el: '#app',
        data: data,
        computed: {
          today() {
            return this.menu[this.index]
          },
          total() {
            return this.menu.length
          }
        },
        methods: {
          changeIndex(change) {
            this.index = (this.index + change + this.total) % this.total
          },
          beforeEnterHandler(el) {
            $(el).css({ opacity: 0 })
          },
          enterHandler(el, done) {
            $(el).animate({ opacity: 1 }, 1000, done)
          },
          afterEnterHandler(el) {
            $(el).css({ opacity: '' })
          },
          beforeleaveHandler(el) {
            $(el).css({ opacity: 1 })
          },
          leaveHandler(el, done) {
            $(el).animate({ opacity: 0 }, 1000, done)
          },
          afterleaveHandler(el) {
            $(el).css({ opacity: '' })
          }
        }
      })