<template>

	<div class="">
		<template v-if="!authenticated">
			<header class="main-header">
				<nav class="main-nav">		
					<ul class="nav-links">				
						<nuxt-link to="/login" tag="li" class="nav-link pull-right"><a>Login</a></nuxt-link>
						<nuxt-link to="/register" tag="li" class="nav-link pull-right"><a>Register</a></nuxt-link>	
					</ul>
				</nav>
			</header>
		</template>

		<template v-if="authenticated">
			<header class="main-header">
				<nav class="main-nav">		
					<ul class="nav-links">
						<nuxt-link to="/" tag="li" class="nav-link pull-right"><a>Home</a></nuxt-link>				
						<nuxt-link to="/profile" tag="li" class="nav-link pull-right"><a>Hello User</a></nuxt-link>				
						<a href="" @click.prevent="logout" tag="li" class="nav-link pull-right">Logout</a>
					</ul>
				</nav>
			</header>
		</template>
	</div>

</template>
<script>
import {mapGetters} from 'vuex'

export default {

	methods: {
		logout() {
			this.$auth.logout();
		}
	}
}

</script>

<style scoped>
	.main-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #022d30;
		height: 4.5rem;
	}

	.main-nav {
		height: 100%;
	}

	.nav-links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.nav-link {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 1rem;
		padding: 0.3rem;
	}

	.nav-link.nuxt-link-exact-active {
		border-bottom: 3px solid #06c4d1;
	}

	.nav-link a{
		display: block;
		text-decoration: none;
		color: white;
	}

	.nav-link a:hover,
	.nav-link a:active,
	.nav-link.nuxt-link-exact-active a{
		color: #06c4d1;
	}
	.pull-right {
		float: right;
	}
</style>