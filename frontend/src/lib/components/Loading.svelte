

{#if $navigating}
    <div class="container">
        <CircularProgress indeterminate style="height: 32px; width: 32px;" />
    </div>
{:else}
    <slot />
{/if}



<script lang="ts">
    import { navigating } from "$app/stores";

    import CircularProgress from "@smui/circular-progress"
</script>

<style>

    .container {
        display: flex;
        justify-content: center;
    }

</style>