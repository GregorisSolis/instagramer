<template>
	<div class="nav_container">
		
		<nav class="nav_container-desktop">
			<div class="camera">
				<a href="#" class="icon-camera"><img src="./../assets/camera.png" alt="iconCamera"></a>
				<a href="#" class="profile_nav"><img src="./../assets/setting.png" alt="iconSetting"></a>
			</div>

			<div class="logo">
				<h3 class="logo_tittle">Intagramer</h3>
				<h3 class="profile_nav">username</h3>
			</div>
			<div class="search">
				<input type="text" name="search" placeholder="Search">
			</div>
			<div class="icons">
				<a href="/" class="icons-home"><img src="./../assets/home.png" alt="iconHome"></a>
				<a href="#" class="icons-messenger"><img src="./../assets/messenger.png" alt="iconMessenger"></a>
				<a href="#" class="icons-compass"><img src="./../assets/compass.png" alt="iconCompass"></a>
				<a href="#" class="icons-heart"><img src="./../assets/heart.png" alt="iconHeart"></a>
				<a href="/profile" class="icons-img"><img src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg" alt="photo_profile"></a>

				<a href="/" class="profile_nav icons-add_friends"><img src="./../assets/add_friends.png"></a>
			</div>
		</nav>


		<div class="nav_container-mobile">
				<div class="icons">
				<a href="/" class="icons-home"><img src="./../assets/home.png" alt="iconHome"></a>
				<a href="#" class="icons-search"><img src="./../assets/search.png" alt="iconSearch"></a>
				<a href="#" class="icons-plus"><img src="./../assets/plus.png" alt="iconPlus"></a>
				<a href="#" class="icons-heart"><img src="./../assets/heart.png" alt="iconHeart"></a>
				<a href="/profile" class="icons-img"><img src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg" alt="photo_profile"></a>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Nav',
}	

</script>

<style scoped>
	
	.camera,
	.nav_container-mobile,
	.profile_nav,
	.icons .profile_nav
	{display: none;}

	.nav_container{
		border-bottom: 1px solid rgba(209,209,209,1);
		height: 7%;
		overflow: hidden;
		position: fixed;
		width: 100%;
		background-color: white;
		z-index: 300;
		top: 0
	}

	.nav_container nav{
		margin: 0 auto;
		width: 62%;
		height: 100%;
	}

	.icons{width: 22%;}

	.icons, .icons a, .nav_container nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icons img{height: 3.2vh; border-radius: 100%;} 

	.icons a{margin: auto 0; padding: 0;}

	.search{width: 30%; display: flex;}

	.nav_container input{
		text-align: center;
		height: 3.2vh;
		border: solid 1px rgba(219,219,219,1);
		border-radius: 3px;
		width: 70%;
		margin: 0 0 0 auto;
		background-color: #fafafa;
		color: rgb(38, 38, 38);
	}

	.nav_container h3{margin: 0; font-family: 'Style Script', cursive; font-size: 1.9em;}

  @media only screen and (max-width: 780px){
  
		.nav_container-desktop .icons-home,
		.nav_container-desktop .icons-heart,
		.nav_container-desktop .icons-compass,
		.nav_container-desktop .icons-img,
		.nav_container .search,
		.container_profile .icons .icons-messenger,
		.container_profile .icon-camera,
		.container_profile .logo .logo_tittle
		{display: none;}

		.camera, 
		.nav_container-mobile,
		.container_profile .logo,
		.container_profile .profile_nav
		{display: flex;}

		.container_profile .logo .profile_nav{
			margin: 0 auto; 
			font-family: 'Raleway', sans-serif;
			font-size: 1.2rem;
		}

		.nav_container{height: 6%}
		.nav_container nav{width: 90%;}
		.nav_container nav .logo{width: 100%; text-align: center}
		.icons{width: 8%;}

		.nav_container-desktop .icons a{margin: 0 0 0 auto;}
		.feed .content{width: 98%;}
		.camera img,
		.icons-messenger img,
		.nav_container-mobile .icons img
		{height: 30px; width: 30px}

		.nav_container-mobile{
			position: fixed;
			bottom: 0;
			z-index: 300;
			width: 100%;
			height: 6%;
		}

		.nav_container-mobile .icons{
			width: 100%;
			background-color: white;
		}

		.nav_container-mobile .icons a{
			display:flex;
			margin: 0 auto;
		}
	}
</style>