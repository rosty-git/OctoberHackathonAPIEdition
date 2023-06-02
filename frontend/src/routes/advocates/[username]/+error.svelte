
<main class="container">
    
    <div class="err-container">
        <p class="mdc-typography--body1">Advocate with username <q>{$page.params.username}</q> doesn't exist.</p>
        <Button href="/advocates">
            <Icon class="material-icons">arrow_back</Icon>
            <Label>List of advocates</Label>
        </Button>
    </div>

</main>



<script lang="ts">
    import { page } from '$app/stores';
    import { error } from '@sveltejs/kit';

    import Button, { Label, Icon } from '@smui/button';

    if ($page.status != 404) throw error($page.status, $page.error?.message);
</script>


<style>

    .container {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }

    .err-container {
        background-color: var(--mdc-theme-surface);
        padding: 25px;
        border-radius: 5px;
    }

</style>