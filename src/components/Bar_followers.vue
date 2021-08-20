<template>
	<div class="container_bar-followers">
	<div class="bar_followers">
		<div class="post"><strong>0</strong><p>post</p></div>
		<div class="followers"><strong>0</strong><p>followers</p></div>
		<div class="following"><strong>0</strong><p>following</p></div>
	</div>

	<div class="bar_followers-mobile">
		<div class="sectionA">
			<div class="post"><strong>3</strong></div>
			<div class="followers"><strong>0</strong></div>
			<div class="following"><strong>0</strong></div>
		</div>
		<div class="sectionB">
			<div class="post"><p>post</p></div>
			<div class="followers"><p>followers</p></div>
			<div class="following"><p>following</p></div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name: 'Bar_followers'
	}
</script>

<style scoped>
	
	.bar_followers-mobile{
		display: none;
	}
	.container_bar-followers{width: 100%;}

	@media only screen and (max-width: 600px){
		.bar_followers-mobile{
			display: block;
			width: 100%;
			border: 1px solid #ddd;
			border-left: none;
			border-right: none;
			margin: 2% 0 0 0;
		}

		.bar_followers-mobile .post p,
		.bar_followers-mobile .followers p,
		.bar_followers-mobile .following p{
			margin: 0;
			color: gray;		}

		.bar_followers-mobile .post,
		.bar_followers-mobile .followers,
		.bar_followers-mobile .following,
		.sectionA,
		.sectionB
		{display: flex; margin: 1% auto;}

		.sectionA,
		.sectionB{
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

</style>