<template>
	<div class="history_container">
		<div class="border_handle">
			<div class="freind_profile">
				<a href="#"><img v-bind:src="urlImg" alt="photo_profile_friend" /></a>
			</div>
		</div>

		<div class="friend_username">
			<p>{{username}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'HistoryImg',
		props: [ 'urlImg', 'username' ]
	}

</script>

<style>
	.history_container{
		width: 60px;
		margin: 0 0 0 3%;
	}

	.history_container img{
		width: 60px;
		display: flex;
		border-radius: 100%;
		height: 60px;
	}

	.border_handle{
		border: 3px solid rgb(225,48,108);
		border-radius: 100%;
		width: 100%;
		padding: 2px;
	}

	.feed .friend_username p{color: black; margin: 5% auto 0 auto; font-size: .7em;}

	.container_profile .history_container img,
	.container_profile .border_handle
	{width: 80px; height: 80px;}

	.container_profile .history_container{margin: 0 6% 0 0;}
	.container_profile .friend_username p{
		display: flex; 
		align-items: center;
		 justify-content: center;
		 width: 100%; 
		 margin: 8% 0 0 24%;
	}

	.friend_username{text-align: center;}

	.container_profile .history_container .border_handle{border: 1px solid #ccc;}

	@media only screen and (max-width: 600px){
		.friend_username p{font-size: .8em}
		.history_container{margin: 0 3%}

		.container_profile .friend_username p{width: initial;}
		.container_profile .history_container img,
		.container_profile .border_handle
		{
			width: 60px;
			height: 60px;
		}
	}

	@media only screen and (max-width: 350px){
		.container_profile .history_container img,
		.container_profile .border_handle
		{
			width: 32px;
			height: 32px;
		}
	}
</style>