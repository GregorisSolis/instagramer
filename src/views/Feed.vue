<template>
  <div class="feed_container">
   <Loading/> 
  <Nav/>

  <div class="feed">

  <div class="content">
      
      <div class="fiends_history">
        <HistoryImg 
          username="Your Story" 
          urlImg="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg"
        /> 
        <HistoryImg 
          username="Gregor" 
          urlImg="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg"
        />        
        <HistoryImg 
          username="Lucas" 
          urlImg="https://cdn.pixabay.com/photo/2018/10/13/07/41/red-robin-3743702_960_720.png"
        />
        <HistoryImg 
          username="Frank" 
          urlImg="https://cdn.pixabay.com/photo/2018/08/13/22/29/horse-3604162_960_720.jpg"
        />
        <HistoryImg 
          username="James" 
          urlImg="https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_960_720.jpg"
        />
        <HistoryImg 
          username="smith" 
          urlImg="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg"
        />
        <HistoryImg 
          username="Moon" 
          urlImg="https://cdn.pixabay.com/photo/2017/10/19/14/47/snail-2867882_960_720.jpg"
        />
        <HistoryImg 
          username="Jonas" 
          urlImg="https://cdn.pixabay.com/photo/2017/08/10/03/47/guy-2617866_960_720.jpg"
        />
        <HistoryImg 
          username="Ferb" 
          urlImg="https://cdn.pixabay.com/photo/2015/03/26/09/48/girl-690327_960_720.jpg"
        />
      </div>

      <Public_friend 
        username="Jonas"
        url_photo_profile="https://cdn.pixabay.com/photo/2017/08/10/03/47/guy-2617866_960_720.jpg"
        url_public_img="https://cdn.pixabay.com/photo/2021/08/03/05/36/flowers-6518496_960_720.jpg"
        description="Imagine a new story for your life and credit it."
        numberComment="420"
        nameUserComment="James"
        comment_res="beautiful"
      />
      <Public_friend 
        username="smith"
        url_photo_profile="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg"
        url_public_img="https://cdn.pixabay.com/photo/2021/07/23/14/52/submarine-6487509_960_720.png"
        description="New draw"
        numberComment="1,050"
        nameUserComment="Gregor"
        comment_res="amazing your drawing"
      />
      <Public_friend
        username="Frank"
        url_photo_profile="https://cdn.pixabay.com/photo/2018/08/13/22/29/horse-3604162_960_720.jpg"
        url_public_img="https://cdn.pixabay.com/photo/2017/12/07/13/48/siberian-husky-3003813_960_720.jpg"
        description="my best friend. I love you"
        numberComment="302"
        nameUserComment="Moon"
        comment_res="awww cute"
      />
  
  </div>

  <div class="barra_fixed">

    <div class="barra_profile">
        <div class="barra_profile-photo">
            <img src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg">
        </div>
        <div class="displayNameUsername">
            <p>username</p>
            <p class="usernameGray">User name</p>
        </div>
        <div class="action_p">
              <a href="#">Switch</a>
        </div>
    </div>

    <div class="suggestion_for_you">
        <div class="tittle_suggestion">
          <p>Suggestions For You</p> <a href="#">See All</a>
        </div>
        <Suggestion 
          imgURL="https://cdn.pixabay.com/photo/2015/03/30/12/37/pioneer-698515_960_720.jpg"
          username="amusic"
          name="amusic"
        />
        <Suggestion 
          imgURL="https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_960_720.jpg"
          username="sport_tv"
          name="sport"
        />
        <Suggestion 
          imgURL="https://cdn.pixabay.com/photo/2016/02/19/11/51/terminal-1210006_960_720.jpg"
          username="peralta07"
          name="jake peralta"
        />
        <Suggestion 
          imgURL="https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374_960_720.jpg"
          username="codex"
          name="academy"
        />
        <Suggestion 
          imgURL="https://cdn.pixabay.com/photo/2014/03/21/03/50/dog-291758_960_720.jpg"
          username="mydogs"
          name="dogs"
        />
      </div>

    </div>
  </div> 
  </div>

</template>

<script>
  import Nav from './../components/Nav.vue'
  import HistoryImg from './../components/HistoryImg.vue'
  import Suggestion from './../components/Suggestion.vue'
  import Public_friend from './../components/Public_friend.vue'
  import Loading from './../components/Loading.vue'


  export default {
    components: {
      Nav,
      HistoryImg,
      Suggestion,
      Public_friend,
      Loading
    },
  }
</script>

<style>

  .feed{
    max-width: 62%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 65% 35%;
    padding-top: 4%
  }

  .fiends_history{
    background-color: #fff;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 4% 0;
    padding: 2% 0;
    border: 1px solid rgba(219,219,219,1);
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .fiends_history::-webkit-scrollbar{width: 2px;}

  .barra_fixed{margin: 0 0 0 10%;}

  .barra_profile{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    height: 90px;
    margin: 8% 1% 0 1%;
  }

  .barra_profile .barra_profile-photo{
    width: 60px;
    margin: 0 4% 0 0;
    box-sizing: border-box;
  }

  .barra_profile-photo img{width: 100%; border-radius: 100%;}
  .displayNameUsername{width: 50%;}
  .displayNameUsername p, .action_p{margin:0; display: flex; font-size: .9em;}
  .displayNameUsername .usernameGray,.suggestion_for_you .tittle_suggestion p{color: gray;}
  .suggestion_for_you .usernameBlack{color: black;}
  .action_p a{color: #0095f6;}

  .suggestion_for_you .tittle_suggestion{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .suggestion_for_you .tittle_suggestion p{
    margin: 0 0 6% 0;
  }

  .suggestion_for_you .tittle_suggestion p,
  .suggestion_for_you .tittle_suggestion a{
    font-size: .9em;
  }



  .suggestion_for_you .tittle_suggestion a{color: black; margin: 0;}

  @media only screen and (max-width: 900px){
    .feed{max-width: 100%; display: block; margin: 5% 0 14% 0}
    .barra_fixed{display: none;}
    .fiends_history{border-top: none}
  }

  @media only screen and (max-width: 720px){
    .barra_fixed{display: none;}
    .feed{max-width: 99%; display: block; margin: 5% 0 14% 0}
    .content{margin: 0 auto;}
    .fiends_history{ margin-bottom: 0; background-color: #fafafa; border-top: none}
  }
</style>
