<template>
	
	<div class="container_post">

		<img class="image_post" :src=urlPost alt="post">

		<div class="background_hover">
			<img class="heart_like" src="./../assets/heart_white.png" alt="heart_like"><p>{{numLikes}}</p>
			<img class="comment_post" src="./../assets/comments_white.png" alt="comments"><p>{{numComments}}</p>
		</div>
	</div>

</template>

<script>
	export default{
		name: 'Post',
		props: ['urlPost', 'numLikes', 'numComments']
	}
</script>

<style>
	
	.container_post{
		position: relative;
		height: 230px;
		width: 230px;
		overflow: hidden;
		margin: 1%;
	}

	.container_post .background_hover{
		background: rgba(0, 0, 0, 0);
		width: 100%;
		height: 100%;
		position: absolute;
		color: #fff;
		opacity: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container_post .background_hover:hover {
		background: rgba(0, 0, 0, .5);
		opacity: 1;
	}

	.background_hover .heart_like,
	.background_hover .comment_post{
		width: 30px;
		height: 30px;
		margin: 0 4%;
	}

	.container_post .image_post{
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	@media only screen and (max-width:  799px){
		.container_post{
			height: 196px;
			width: 196px;
			margin: 1% 0;
		}
	}


	@media only screen and (max-width: 599px){
	.container_post{
		position: relative;
		height: 130px;
		width: 100%;
		overflow: hidden;
		margin: 0 auto;
	}

	.container_post .image_post{margin: 1%;}

	.container_post .background_hover{display: none;}
	}
</style>