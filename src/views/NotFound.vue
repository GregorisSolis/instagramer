<template>
	<div class="notfound_container">
		<Nav/>
		<h1>Sorry, Page Not Found Error 404</h1>
		<a href="/">back</a>
	</div>
</template>

<script>
	import Nav from './../components/Nav.vue'

	export default{
		Nav
	}
</script>

<style scoped>
	.notfound_container{
		width: 100%;
	}

	.notfound_container h1{color: black;}
	.notfound_container a{color: #0095f6;}
</style>