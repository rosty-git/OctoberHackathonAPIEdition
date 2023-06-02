<main class="container" data-sveltekit-prefetch>
    <h1 class="mdc-typography--headline2">Advocates</h1>
    
    <Textfield bind:value={searchQuery} label="Search">
        <Icon class="material-icons" slot="leadingIcon">search</Icon>
    </Textfield>
    <Button variant="raised" on:click={ () => {goto(`/advocates?search=${searchQuery}`)} }>
        <Label>Search</Label>
    </Button>
    
    <slot />
</main>




<script lang="ts">
    import Textfield from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import Button, { Label } from "@smui/button";


    import { goto } from "$app/navigation";

    let searchQuery: string = "";


</script>