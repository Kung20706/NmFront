
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
   <center>
  <div id="container1">
    <form @submit.prevent="reset">
  
    <h2>請輸入您的信箱</h2>
      <input type="text" placeholder="帳號"  v-model="userName" required>
      <br>
      <div style="height: 30px;"></div>
      <br>
       <a href="/login"><button class="submit" type="submit">發送確認信</button></a>
      
      
      <a href="/create"><h3>註冊新帳號</h3> </a>
      
     
               
    </form>
  
    </div>
       </center>
</template>

<script >

import axios from 'axios';
  export default {
    data () {
      return {
        userName: ''
      }
    },
    methods: {
      reset(username){
        const newTodo = {
        username: this.userName
       }
        var local = 'http://127.0.0.1:'
       var aws = 'http://52.68.137.41:'
       const token = window.sessionStorage.getItem('token')
        var myObj = {};
        var vm = this
        console.log(newTodo)
        
        axios.get(aws+'9487/Account/MailReset/'+this.userName)
          .then((response) => {
          if( 
            response.data.ErrorCode === '200')
            
            {alert('已發送驗證信,請至信箱確認')
            window.sessionStorage.setItem('token',response.data.Data.Token),
            this.$router.push({ path: 'login' });
            }
          else{alert('login failed')}
         
          console.log(response.data);
          })
          .catch((error) => {
          this.$router.push('/');
            })
         
    }
  }
}
</script>

<style>
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
  width: 200px;
  height: 20px;
  color: #df5334;
}

*{
  font-family:微軟正黑體;  
}

#container1, #container2{
  //margin: 50px;
  padding: 10px;
  width: 230px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  border-top: 10px solid #df5354;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  
  /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
  //text-align:center;  
}
</style>