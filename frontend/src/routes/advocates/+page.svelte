
<Loading>
    <LayoutGrid >

        {#each data.advocates as advocate}

            <Cell>
                <AdvocateCard advocate={advocate} />
            </Cell>
    
        {/each}
            
        </LayoutGrid>
        
    <Pagination pagination={data.pagination} />
</Loading>


<script lang="ts">
    import type { PageData } from './$types';

    import Pagination from "$lib/components/Pagination.svelte";
    import AdvocateCard from '$lib/components/AdvocateCard.svelte';

    import Loading from '$lib/components/Loading.svelte';

    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let data: PageData;

</script>