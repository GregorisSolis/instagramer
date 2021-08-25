<template>
  <div class="home">
    
  <form id="form" @submit="checkForm">
    <div>
      <h1>Intagramer</h1>
    </div>

    <input 
      name="username" 
      type="text" 
      v-model="username" 
      placeholder="phone number, email or username">

    <input 
       name="password"
       type="password" 
       v-model="password" 
       placeholder="password">


    <button type="submit">Log In</button>

    <div class="lineaOR">  
      <div class="linea"></div>
      <p>OR</p>
      <div class="linea"></div>
    </div>

    <div class="ButtonlogFacebook">
      <a class="icon-facebook" href="#">
        <img src="./../assets/facebook.png">Log in with Facebook
      </a>
    </div>

    <div class="forgot">
      <a href="#">Forgot password?</a>
    </div>
  </form>

  <div class="new-account">
    <p>Don't have an account? <a href="#">Sign up</a></p>
  </div>

  <div class="getAPP">
    <p>Get the app.</p>
    <div class="img-app">
      <img src="./../assets/0101.png">
      <img src="./../assets/0011.png">
    </div>
  </div>

  </div>
</template>

<script>
import router from './../router'

export default {
  name: 'Login',

  data(){
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    checkForm: function (e) {
      e.preventDefault()

      if(!this.username || !this.password){
        alert('Type a random user to continue')
      }else{
        router.push("/")
      }
    }  
  }

}
</script>

<style>
  .home{margin: 0;}
  .home form, .home .new-account{
    border: 2px solid #ccc;
    max-width: 280px;
    display: grid;
    background-color: white;
    margin: 2% auto 0 auto;
  }
  .home form{padding: 1% 2%;}
  .home .new-account{
    padding: 8px 2% ;
    font-size: .9rem;
    color: black;
    margin: 10px auto 0 auto ;
  }
  .new-account a{color: #0095f6}
  .home button{
    background-color: #b2dffc;
    border: none;
    color: #fff;
    margin: 4% auto;
    width: 95%;
    padding: 3% 2%;
    border-radius: 5px;
  }
  .home button:hover{background-color: #0095f6;}
  .home input{
    width: 95%;
    height: 38px;
    margin: 1% auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 2% 3%;
    font-size: .8em;
    background-color: #fafafa;
  }
  .home .ButtonlogFacebook{color: #385185;margin: 4% auto;}
  .ButtonlogFacebook img{height: 15px;margin: 0 5px;}
  .home .lineaOR{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #8e8e8e;
    font-size: .9rem;
  }
  .home .forgot{font-size: .8rem;padding: 0;}
  .forgot a, .getAPP{color:  black; text-align: center;}
  .getAPP img{height: 40px;margin: 0 5px;}
  .home h1{
    font-family: 'Style Script', cursive;
    margin: 0 auto 6% auto;
    font-size: 50px;
    color: black;
  }

@media only screen and (max-width: 600px){
    .home form, .home .new-account{border: none; background-color: #fafafa;}
    .getAPP{display: none;}
    .ButtonlogFacebook{
      background-color: #0095f6; 
      color: white; 
      width: 95%; 
      padding: 3%  0;
      text-align: center;
      border-radius: 4px;
    }
    .ButtonlogFacebook a{color: white;}
    .forgot a{color: #0095f6}
}
</style>
