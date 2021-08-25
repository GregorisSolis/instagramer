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
				<Post 
					urlPost="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg"
					numLikes="14"
					numComments="7"
				/>
				<Post 
					urlPost="https://cdn.pixabay.com/photo/2016/11/22/21/46/arches-1850730_960_720.jpg"
					numLikes="56"
					numComments="44"
				/>
				<Post 
					urlPost="https://cdn.pixabay.com/photo/2016/12/03/00/48/bridge-1878921_960_720.jpg"
					numLikes="31"
					numComments="11"
				/>
				<Post 
					urlPost="https://cdn.pixabay.com/photo/2014/12/15/13/57/sunset-569093_960_720.jpg"
					numLikes="28"
					numComments="23"
				/>
				<Post 
					urlPost="https://cdn.pixabay.com/photo/2013/04/09/08/08/building-102110_960_720.jpg"
					numLikes="27"
					numComments="17"
				/>
			</div>

	</div>
</template>

<script>
  import Nav from './../components/Nav.vue'
  import HistoryImg from './../components/HistoryImg.vue'
  import Bar_followers from './../components/Bar_followers.vue'
  import Post from './../components/Post.vue'

	export default
{		components:{
			Nav,
			HistoryImg,
			Bar_followers,
			Post
		}
	}

</script>

<style>

.number_post-followers-following-mobile{display: none;}

.container_profile{margin: 10% 0 ;}

.info_profile{
	width: 70%; 
	margin: 0 auto;
	display: flex;
}

.info_profile .image_profile{
	width: 180px;
	height: 180px;
	border-radius: 100%; 
	overflow: hidden;
}

.info_profile .image_profile img{width: 100%; height: 100%;}

.bar_info_profile{width: 45%;}

.container_name_button-settings, 
.bar_followers{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 4% 0 0 6%;
}

.container_name_button-settings p,
.container_name_button-settings .icon_settings,
.container_name_button-settings button
{margin: 0;}

.container_name_button-settings img{
	width: 30px;
}

.container_name_button-settings p{font-size: 1.9em;}
.container_name_button-settings button{
	background-color: transparent;
	border: 1px solid #ccc;
	border-radius: 3px;
	padding: 1% 4%;
}

.container_story-featured{width: 70%; display: flex; margin: 4% auto;}

.container_posts{
	width: 70%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 33.3%);
	grid-template-rows: auto;
}

@media only screen and (max-width:  800px){

	.container_profile{margin: 15% 0;}
	.container_story-featured{margin: 3% auto;}
	.number_post-followers-following-mobile{display: flex;}
	.container_posts{width: 80%;}
	.container_name_button-settings{display: block;}
	.container_name_button-settings button{width: 90%;}

	.container_story-featured,
	.info_profile,
	.bar_info_profile
	{width: 85%;}

	.info_profile .image_profile{
		width: 90px;
		height: 90px;
	}

	.container_name_button-settings .icon_settings,
	.info_profile .number_post-followers-following,
	.bar_followers
	{display: none;}
}


@media only screen and (max-width:  599px){

	.container_profile{margin: 15% 0;}

	.number_post-followers-following-mobile{display: flex;}
	.container_posts{width: 100%;}
	.container_name_button-settings{display: block;}
	.container_name_button-settings button{width: 90%;}

	.container_story-featured,
	.info_profile,
	.bar_info_profile
	{width: 95%;}

	.info_profile .image_profile{
		width: 80px;
		height: 80px;
	}

	.container_name_button-settings .icon_settings,
	.info_profile .number_post-followers-following,
	.bar_followers
	{display: none;}
}
</style>