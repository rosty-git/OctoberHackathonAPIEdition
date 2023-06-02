<header>
    <div class="header-content">
        <Link href="/">
            <h5 class="mdc-typography--headline5 headline">October Hackathon</h5>
        </Link>
    </div>
    <hr />
</header>


<script lang="ts">

    import Link from "./Link.svelte";

</script>


<style lang="scss">

    header {
        background-color: var(--mdc-theme-surface);
        
        hr {
            height: 1px;
            border: 0;
            background-color: var(--mdc-theme-primary);
        }
    }

    .headline {
        margin: 0;
        padding: 15px;
        color: var(--mdc-theme-primary);
    }

</style>