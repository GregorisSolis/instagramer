<template>
	<div class="public_Friends-container">
		<div class="barra_info">
			<div class="info_user">
				<div class="img_user"><img :src="url_photo_profile" alt="photo_profile"></div>
				<div class="name">{{username}}</div>
			</div>
			<div class="config"><img src="./../assets/config.png" alt="config"></div>
		</div>

		<div class="public_Friend-img">
			<img :src="url_public_img" alt="post_friend">
		</div>

		<div class="public_Friend-options">
			<div class="heart_show_share_save">
				<img class="heart_btn" src="./../assets/heart_red.png" v-bind:style="coloor" alt="iconLike">
				<img class="comments_btn" src="./../assets/comments.png" alt="iconComment">
				<img class="share_btn" src="./../assets/share.png" alt="iconShare">
				<div class="scroll"></div>
				<img class="save_btn" src="./../assets/save.png" alt="iconSave">
			</div>
			<div class="number_views">
				<p>4,915 others</p>
			</div>
			<div class="descriptions">
				<p>{{description}}</p>
			</div>
			<div class="comments">
				<p><strong>{{nameUserComment}} </strong> {{comment_res}}</p>
			</div>
			<div class="number_comments">
				<p>View all {{numberComment}} comments</p>
			</div>

			<div class="new_comment">
				<a href="#"><img src="./../assets/emoji.png" alt="iconEmoji"></a>
				<input type="text" name="comment" placeholder="Add a comment...">
				<a href="#">Post</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Public_friend',
		props: [
			'username', 
			'url_public_img', 
			'url_photo_profile', 
			'coloor', 
			'description',
			'numberComment',
			'nameUserComment',
			'comment_res'
		],
	}


</script>

<style scoped>
	.public_Friends-container{
		margin: 0 0 5% 0;
		background-color: white;
	}

	.public_Friends-container .barra_info{
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		height: 60px;
		border: 1px solid rgba(219,219,219,1);
		border-bottom: none;
		border-radius: 3px;
	}

	.public_Friend-options{
		border: 1px solid rgba(219,219,219,1);
		border-top: none;
		border-radius: 3px;
	}

	.public_Friends-container .info_user{
		display: flex;
		align-items: center;
		color: black;
		padding: 0 2%;
	}

	.info_user .name{
		margin: 0 0 0 8%;
	}

	.public_Friends-container .img_user img{
		width: 35px;
		height: 35px;
		cursor: pointer;
		border-radius: 100%;
	}

	.public_Friend-img img{
		width: 100%;
	}

	.config{width: 4%; margin: 0 4% 0 0;}
	.config img{width: 100%;cursor: pointer;}

	.public_Friend-options img{ height: 30px;}

	.public_Friend-options .heart_show_share_save{
		display: grid;
		grid-template-columns: 8% 8% 8% 1fr 8%;
		margin: 0 0 2% 0;
	}

	.number_views img{height: 18px; margin: 0; border-radius: 100%;}

	.heart_btn, .comments_btn, .share_btn, .save_btn{
		margin: 0 auto;
		cursor: pointer;
	}

	.heart_btn_red{background-color: red;}

	.number_views p, .descriptions p, .number_comments p, .comments p{
		margin: 1% 2%; 
		color: black;
		cursor: pointer;
	}
	.number_comments p{color: gray;}

	.number_views, .descriptions, .number_comments, .comments{
		display: flex;
		align-items: center;
	}

	.number_views img{
		margin: 0 0 0 2%;
	}

	.new_comment{
		display: grid;
		grid-template-columns: 40px 1fr 40px;
		padding: 2%;
		margin: 1% 0 0 0;
		border-top: 1px solid rgba(225,225,225,1);
	}

	.new_comment input{
		border: none;
		margin: 0 2%;
	}

	.new_comment a{
		display: flex;
		color: #0095f6;
		margin: auto;
	}
</style>