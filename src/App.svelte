<script lang="ts">

	import Router from 'svelte-spa-router';
	import Navigation from "./components/Navigation.svelte";
	import Footer from './components/Footer.svelte';

	import { routes } from './router/routes';
</script>


<Navigation/>

<main>
	<Router {routes}/>
</main>

<Footer/>

<style>

</style>