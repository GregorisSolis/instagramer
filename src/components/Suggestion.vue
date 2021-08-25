<template>
	<div class="container_suggestion-profile">
		<div class="barra_profile-photo">
            <img :src="imgURL" alt="photo_profile">
          </div>

          <div class="displayNameUsername">
            <p>{{username}}</p>
            <p class="usernameGray">{{name}}</p>
          </div>

          <div class="action_p">
              <a href="#">Follow</a>
          </div>
	</div>
</template>

<script>
	export default{
		name: 'Suggestion',
		props: ['username', 'name', 'imgURL']
	}
</script>

<style scoped>
	.container_suggestion-profile{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto 2% auto;
	}

	.container_suggestion-profile .barra_profile-photo img{
		width: 40px;
		height: 40px;
		border-radius: 100%
	}

	.container_suggestion-profile .displayNameUsername{
		width: 70%;
		margin: 0 0 0 4%;
	}
</style>