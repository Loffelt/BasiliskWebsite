<script lang='ts'>
    import { page } from '$app/stores';
    import SideBar from '$lib/SideBar.svelte';
</script>

<SideBar routes={[
]} current_route={$page.url.pathname}/>

<slot />