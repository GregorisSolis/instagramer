<template>
		<div class="container_loading">
			<h1>Intagramer</h1>
		</div>

</template>

<script>
	export default{
		name: 'Loading'
	}
</script>

<style>
	.container_loading{
		position: fixed;
		z-index: 301;
		height: 100vh;
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		display: flex;
		animation: transi 2s ease;
		transform: translateX(-10000px)
	}

	.container_loading h1{
		margin: auto;
		font-family: 'Style Script', cursive;
		font-size: 3em;
	}

	@keyframes transi{
		0%{opacity: 1; transform: translateX(0px)}
		100%{opacity: 0; transform: translateX(0px)}
	}
</style>