<main>

    <Loading>
        {#each data.companies as company}
            <div class="company-info-div">
                <CompanyCard company={company} />
            </div>
        {/each}
    </Loading>

</main>


<script lang="ts">
    import type { PageData } from "./$types";

    import CompanyCard from "$lib/components/CompanyCard.svelte";
    import Loading from "$lib/components/Loading.svelte";

    export let data: PageData;

</script>


<style>

    .company-info-div {
        padding: 15px;
    }

</style>