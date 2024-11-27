<script lang='ts'>
    import { base } from '$app/paths';
    import "carbon-components-svelte/css/g90.css";
</script>

<nav class='top-nav'>
    <div>
        <a href={`${base}/`}>Basilisk Engine</a> 
    </div>
    <div>
        <a href={`${base}/docs`}>Docs</a>
    </div>
    <div>
        <a href={`${base}/how`}>How it Works</a>
    </div>
</nav>

<slot />