

<h2 class="mdc-typography--headline2 err-text">An error has occured</h2>
<h5 class="mdc-typography--headline5">
    <span>{$page.status}</span>: {$page.error?.message}
</h5>



<script>
    import { page } from '$app/stores';
</script>


<style>

    .err-text {
        color: var(--mdc-theme-error);
    }

</style>