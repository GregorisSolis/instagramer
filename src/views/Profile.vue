<template>
	

	<div class="container_profile">
	<Nav/>
		
		<div class="info_profile">

			<div class="image_profile">
				<img src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg" alt="photo_profile">
			</div>

			<div class="bar_info_profile">
				<div class="container_name_button-settings">
					<p>name.user</p>
					<button><strong>Edit Profile</strong></button>
					<div class="icon_settings"><img src="./../assets/setting.png" alt="icon_settings"></div>
				</div>

				<div class="number_post-followers-following">
					<Bar_followers/>
				</div>

			</div>

			<div class="space"></div>

				<div class="container_description-profile">
					<p class="nameUser_profile"><strong>username</strong></p>
					<p class="description_profile">believe in yourself</p>
				</div>
		</div>


		<div class="container_story-featured">
		<HistoryImg 
          username="Rio" 
          urlImg="https://cdn.pixabay.com/photo/2016/04/03/02/28/rio-1303951_960_720.jpg"
        />
        <HistoryImg 
          username="Paris" 
          urlImg="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg"
        />
		</div>

		<div class="number_post-followers-following-mobile">
			<Bar_followers/>
		</div>

		<div class="container_posts">
			<Post urlPost="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg"/>
			<Post urlPost="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg"/>
			<Post urlPost="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg"/>
			<Post urlPost="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg"/>
			<Post urlPost="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg"/>
		</div>
	</div>

</template>

<script>
	import Nav from './../components/Nav.vue'
  import HistoryImg from './../components/HistoryImg.vue'
  import Bar_followers from './../components/Bar_followers.vue'
  import Post from './../components/Post.vue'

	export default{
		components:{
			Nav,
			HistoryImg,
			Bar_followers,
			Post
		}
	}

</script>

<style>
	
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

	.number_post-followers-following-mobile{display: none;}

	.container_profile{
		width: 100%;
		margin: 0 auto
	}

	.info_profile{
		width: 62%;
		margin: 5% auto 0 auto;
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-template-rows: 110px;
	}

	.container_story-featured{
		width: 62%;
		margin: 5% auto 0 auto;
		display: flex;
		align-items: center;
	}

	.info_profile .image_profile img{
		width: 170px; height: 170px;
		border-radius: 100%;
	}

	.bar_info_profile{
		width: 50%;
		margin: 0 0 0 14%;
	}

	.container_description-profile{width: 100%;margin: 0 0 0 14%;}
	.container_description-profile .description_profile,
	{margin: 0 auto;}

	.bar_info_profile .container_name_button-settings,
	.bar_info_profile .number_post-followers-following .bar_followers,
	.post,
	.followers,
	.following
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.container_name_button-settings p{font-size: 1.9em; margin: 0; font-family: 'Raleway', sans-serif;}
	
	.container_name_button-settings button{
		background: #fafafa; 
		border: 1px solid #ccc;
		color: black;
		border-radius: 4px;
		font-size: .9em;
		padding: 2% 4%;
	}

	.post p,
	.followers p,
	.following p
	{
		margin: 0 10%;
	}

	.icon_settings img{width: 30px; height: 30px; margin: 0;}
	.container_story-featured{display: flex;}

	.container_name_button-settings,
	.number_post-followers-following{
		margin: 8% auto;
	}

	.container_description-profile p{
		display: flex;
		margin: 2% 0;
	}

	.container_posts{
		width: 65%;
		display: grid;
		grid-template-columns: repeat(3, 300px);
		grid-template-rows: 300px;
		margin: 2% auto;
	}

@media only screen and (max-width: 600px){

	.bar_info_profile .number_post-followers-following,
	.post,
	.followers,
	.following,
	.icon_settings,
	.space
	{display: none;}
	
	.image_profile,
	.number_post-followers-following-mobile{display: flex;}
		
	.bar_info_profile{margin: 0;}

	.info_profile{
		margin: 14% auto 0 auto;
		width: 90%;
		display: grid;
		grid-template-columns: 100px 1fr;
	}

	.container_name_button-settings p{display: flex;}
	.container_name_button-settings{margin: 0 auto 5% auto;}

	.bar_info_profile{width: 100%;}

	.info_profile .image_profile img{
		width: 80px; height: 80px;
		border-radius: 100%;
	}

	.bar_info_profile .container_name_button-settings{width: 100%; display:block;}
	.container_name_button-settings button{width: 100%; background-color: #fafafa;}
	
	.container_story-featured{width: 90%;}
	.container_description-profile{margin: 0;}
	.container_description-profile p{width: 130%; margin: 1% 0;}

	.container_posts{
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 33.3%);
		grid-template-rows: 150px;
		margin: 0;
	}
}
</style>