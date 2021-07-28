
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<template>
 <center>
  <div id="container1">
  <div>
    <h2> 帳號創建</h2>
    <form @submit.prevent="create">
      <input type="text" placeholder="帳號"  v-model="userName" required>
      <br>
      <div style="height: 30px;"></div>
      <input type="password" placeholder="密碼"  v-model="password" required>
      <div style="height: 5px;"></div>
      <br>
      <button class="submit" variant="danger" type="submit">完成</button>
    </form>
    <div >
    
                <a href="/login">
                  <small class="text-muted">登入帳號</small>
                </a>
              </div>
  </div>

    </div>
       </center>
</template>

<script >

import axios from 'axios';
  export default {
    data () {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      create(){
        const newTodo = {
        username: this.userName,
        password: this.password,
        auth:'1'
       }
       
        var vm = this
        console.log(newTodo)
        axios.post('http://18.183.17.66:9487/Account/Create', newTodo)
          .then((response) => {
          if( 
            response.data.ErrorCode === '200')
            
            {alert('帳號創建成功')
           this.$router.push({ path: 'home' });
            }
          else{alert('create failed')}
         
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