<script lang='ts'>
    export let routes: {
        name : string,
        href : string
    }[] = []
    export let current_route: string;
</script>

<div class='side_nav'>
    <ul>
        {#each routes as route}
            <li>
                <a href={`${current_route}/${route.href}`}>{route.name}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .side_nav {
        position: absolute;
    }
</style>