

<template>
<center>
 <div id="container3">
  <div>
    <h2>恭喜您過關</h2>
    <button class="submit" variant="danger" type="submit">查看過關數據</button>
    <form @submit.prevent="viewdata"  variant="danger">
      <div ></div>
   
    </form>

    <!-- <p>{{ userId }}</p> -->
    <!-- 
                        
      <h3 > 抽象具象思考  : {{userList.G0}} </h3>
      <h3> 理解力 執行力 : {{userList.G1}} </h3>
      <h3> 定向        :  {{userList.G2}} </h3>
      <h3> 專注力     :   {{userList.G3}} </h3>
      <h3> 計算       :  {{userList.G4}} </h3>
      <h3> 記憶        :  {{userList.G5}} </h3>
                        "array.length == 0"
                        
        <div id="London" class="tabcontent">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>
    -->
    <div  v-if="open === true">
    <div  class="b" v-for="(item, index) in userList" v-bind:item="item" v-bind:key="item.UserID" >

                        <h3 class="title">{{index+1}}</h3>
                        <h3 class="title">使用者名稱:{{item.Alias}}</h3>
                        <h3 class="title">生日:{{item.Birthday}}</h3>
                      
                        <h3 class="title">總時長:{{item.T}}</h3>
                        <h3 class="title">分數:{{item.P}}</h3>
                      
                        <h3 class="title">性別:{{item.Gender}}</h3>
                        <h3 class="title">手機:{{item.Phone}}</h3>  
                        
    </div> 
   
    </div>
    




<div v-else style="border:2px #ACACAC solid;" >
                                             

   <div    class="b" v-for="(item, index) in userList" v-bind:item="item" v-bind:key="item.ID" >
  
                     <!--   <h3 class="title">{{index+1}}</h3> 
      -->
      
     
      <div style="border:3px #DC143C solid;" v-if="index%13 === 0 ">
        <h3 >玩家:{{item.UserName}} </h3>
        
        <h3 v-if="item.CreatedAt"> 完成時間 : {{item.CreatedAt}} </h3>
         <h3 v-if="item.T">關卡總時長 : {{item.T}} </h3>
         <h3 v-if="item.P">分數:{{item.P}}</h3>
         <h3 v-if="item.C">獲得金幣:{{item.C}}</h3>
      <h3 v-if="item.T0"> 任務1時間  :       {{item.T0}} </h3>
      <h3 v-if="item.T1"> 任務2時間        :  {{item.T1}} </h3>
      <h3 v-if="item.T2"> 任務3時間     :     {{item.T2}} </h3>
      <h3 v-if="item.T3"> 任務4時間      :    {{item.T3}} </h3>
      <h3 v-if="item.T4"> 任務5時間       :   {{item.T4}} </h3>
      <h3 v-if="item.G"> 抽象具象思考  :     {{index.G0}} </h3>
      <h3 v-if="item.G0"> 理解力 執行力 :     {{item.G1}} </h3>
      <h3 v-if="item.G1"> 定向        :       {{item.G2}} </h3>
      <h3 v-if="item.G2"> 專注力     :        {{item.G3}} </h3>
      <h3 v-if="item.G3"> 計算       :       {{item.G4}} </h3>
      <h3 v-if="item.G4"> 記憶        :      {{item.G5}} </h3>
     <!-- <h3 v-if="item.ZC"> 小孩        :      {{item.ZC}} </h3>
      <h3 v-if="item.ZS"> 配偶      :      {{item.ZS}} </h3>-->
      <h3 v-if="item.ZN"> 指定動作的次數        :      {{item.ZN}} </h3>
      <h3 v-if="item.ZR"> ZR        :      {{item.ZR}} </h3>
      <h3 v-if="item.Y"> 年   :      {{item.Y}} </h3>
      <h3 v-if="item.M"> 月  :      {{item.M}} </h3>
      <h3 v-if="item.D"> 日   :    {{item.D}} </h3>
      <h3 v-if="item.W"> 星期        :      {{item.W}} </h3>
      <h3 v-if="item.I"> 地點        :      {{item.I}} </h3>
      </div>
    <div v-else>
    
    <h3>關卡:{{index%13}}</h3>
         <h3 v-if="item.T">關卡總時長 : {{item.T}} </h3>
         <h3 v-if="item.P">分數:{{item.P}}</h3>
         <h3 v-if="item.C">分數:{{item.C}}</h3>
      <h3 v-if="item.T0"> 任務1時間  :       {{item.T0}} </h3>
      <h3 v-if="item.T1"> 任務2時間        :  {{item.T1}} </h3>
      <h3 v-if="item.T2"> 任務3時間     :     {{item.T2}} </h3>
      <h3 v-if="item.T3"> 任務4時間      :    {{item.T3}} </h3>
      <h3 v-if="item.T4"> 任務5時間       :   {{item.T4}} </h3>
      <h3 v-if="item.G"> 抽象具象思考  :     {{index.G0}} </h3>
      <h3 v-if="item.G0"> 理解力 執行力 :     {{item.G1}} </h3>
      <h3 v-if="item.G1"> 定向        :       {{item.G2}} </h3>
      <h3 v-if="item.G2"> 專注力     :        {{item.G3}} </h3>
      <h3 v-if="item.G3"> 計算       :       {{item.G4}} </h3>
      <h3 v-if="item.G4"> 記憶        :      {{item.G5}} </h3>
      <h3 v-if="item.ZN"> 指定動作的次數        :      {{item.ZN}} </h3>
      <h3 v-if="item.ZR"> ZR        :      {{item.ZR}} </h3>
      <!-- <h3 v-if="item.ZC"> 小孩        :      {{item.ZC}} </h3>
      <h3 v-if="item.ZS"> 配偶      :      {{item.ZS}} </h3>-->
      <h3 v-if="item.Y"> 年   :      {{item.Y}} </h3>
      <h3 v-if="item.M"> 月  :      {{item.M}} </h3>
      <h3 v-if="item.D"> 日   :    {{item.D}} </h3>
      <h3 v-if="item.W"> 星期        :      {{item.W}} </h3>
      <h3 v-if="item.I"> 地點        :      {{item.I}} </h3>
      </div>   
    </div> 
   </div> 
                  
                     <!-- 使用者渲染模組 -->
       
                     <!-- v for 將數據處理成 item index 綁定-->
        
    <div >
                <a href="/home">
                  <small class="text-muted">回到大廳</small>
                </a>
                 <a href="/viewdata">
                  <small class="text-muted">圖表</small>
                </a>
                 <a href="/create">
                  <small class="text-muted">創建帳號</small>
                </a>
              </div>
             
  </div>
</div>
       </center>
</template>
<script>

import axios from 'axios'


export default {
    data () {
      return {
        Token:'',
      
        remainder: 0,
        userList: [],
        userdata: '',
        open: false,
      }
    },
     mounted: function() {
        this.queryAllUser();
    },
    methods: {
      queryAllUser(){
        let newGet = {
        Token: '',
        items: [],
        isUser: false,
       }
        let self = this
        const local = 'http://127.0.0.1:'
       const aws = 'http://18.183.17.66:'
       console.log(local,aws)
        this.userList = []
        this.open= false
        this.remainder = 0
       //銜接數據 
       newGet.Token = window.sessionStorage.getItem('token')
       // aws
        axios.post(aws+'9487/Account/List', newGet)
          .then((response) => {

          if(
            response.ErrorCode === '200')
            {
               console.log(newGet,"<br>",self.userList)
            }
        else{
          newGet.items= JSON.stringify(response.data.Data)
          
          self.userList = JSON.parse(JSON.stringify(response.data.Data))
          // //陣列內容有撈到Alias 判斷為管理者 調出用戶列表
          if (self.userList[0].Alias.length>0) {
                self.open = true
          }
          // if (self.userList.length % y===0)
          // {this.open= true}
          // var x = self.userList.length ;
          //  self.remainder = y % x; //3 Y除以X 於三
          }
          })
          .catch((error) => {
          console.log(error);
          })
         
    }
    
  }
  }
  
</script>


<style>
.title {
}
.content {
 
     /* 這個 #CONTENT 設定左間距可以避免多出來的內容文字和上面的 <div> 重疊 */
 
}
.a {
  list-style-position: outside;
}
.b {
   text-align:left;
   background: #eeeeee;
}
.submit{
  color: white;  
  background: #df5334;
  width: 150px;
  height: 30px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 0px;
}
.midbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    left: inherit;
}

#username, #password, h3, #fullname, #comfirm_password,#username2, #password2{
  
  height: 20px;
  color: #df5334;
}
.h4{
  
width:170px; /* <div> 要設定寬度，才能配合 float 做水平靠左或靠右排列 */
 
    float:left; /* 使用 float 讓這個 <div> 做水平靠左排列 */
  height: 20px;
  color: #FFFFFF;
}
*{
  font-family:微軟正黑體;  
}

.h3left{
   width:auto; /* 設定 auto 就會自動伸縮，這是 <div> 的預設值，所以可以省略不寫 */
 
    margin-left:250px; /* 上面的 #SIDE <div> 寬度是 170px */
                         
  height: 20px;
  color: #df5334;
}
*{
  font-family:微軟正黑體;  
}

#container1{
  margin: 50px;
  padding: 10px;
  width: 900px;
  background-color: white;
  border-radius: 8px;
  border-top: 10px solid #df5354;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  padding: 2px 16px;
  /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
  //text-align:center;  
}
 #container3{
  margin: 50px;
  padding: 10px;
  width: 530px;
  background-color: white;
  border-radius: 8px;
  border-top: 10px solid #df5354;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  padding: 2px 16px;
  /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
  //text-align:center;  
}
.body_bg {
    background-color: WhiteSmoke;
}

.list_div {
    margin: 0 auto;
    width: 480px;
    text-align: center;
}

.user_div {
    float: right;
    position: fixed;
    top: 10px;
    right: 10px;
    width: 250px;
    background-color: WhiteSmoke;
    text-align: center;
}

.user_input {
    width: 120px;
    min-width: 120px;
    margin-top: 5px;
}
.colum {
    margin-top: 5px;
    margin:-1px 0 0 -1px
}
 ;  ;
.user_table {
    background: white;
    border: 1px solid lightgray;
    width: 100%;
}

.user_table_th {
    text-align: left;
    background: lightgray;
}

.user_table_td_num {
    text-align: left;
    border-right: 1px solid lightgray;
}

.user_table_td_text {
    text-align: left;
    border-right: 1px solid lightgray;
}

.user_table_td_func {
    text-align: left;
}
</style>