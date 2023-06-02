
<a
    href={href.toString()}
    target={targetBlank ? "_blank" : ""}
    rel={targetBlank ? "noreferrer" : ""}
    class="mdc-typography--body1"
>
    <slot />
    {#if targetBlank}
        <Icon class="material-icons target-blank-icon">open_in_new</Icon>
    {/if}
</a>


<script lang="ts">

    import { Icon } from "@smui/common";

    export let targetBlank = false;
    export let href: URL | string;

</script>

<style lang="scss">
    a {
        display: inline-flex;
        width: fit-content;
        color: var(--mdc-theme-primary);

        :global(*) {
            margin: 0;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    :global(.target-blank-icon) {
        font-size: 15px;
    }
</style>