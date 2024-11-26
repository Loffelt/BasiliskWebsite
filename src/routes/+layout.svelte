<script lang='ts'>
    import {
        Header,
        HeaderUtilities,
        HeaderGlobalAction,
        SideNav,
        SideNavItems,
        SideNavLink,
        Content,
        Grid
    } from 'carbon-components-svelte';
</script>

<Header
    platformName='Basilisk Engine'
>

</Header>

<Content>
    <Grid>
        <slot/>
    </Grid>
</Content>
