<div class="container">

    <div class="page-buttons-container">
        <Group variant="raised">
            <Wrapper>
                <Button
                    on:click={ () => {changePage(1)} }
                    variant="raised"
                    disabled={pagination.current_page == 1}
                >
                    <Label>&#60&#60</Label>
                </Button>
                <Tooltip hideDelay={0}>First page</Tooltip>
            </Wrapper>

            <Wrapper>
                <Button
                    on:click={ () => {changePage(pagination.current_page-1)} }
                    variant="raised"
                    disabled={pagination.current_page == 1}
                >
                    <Label>&#60</Label>
                </Button>
                <Tooltip hideDelay={0}>Previous page</Tooltip>
            </Wrapper>


            <LayoutGrid innerGrid$class="inner-grid" class="pages-layout-grid">
                {#each pagination.pages as page}
                    <Cell span={1}>
                        <Wrapper>
                            <Button
                                on:click={ () => { changePage(page); } }
                                variant="raised"
                                color={page == pagination.current_page ? "primary" : "secondary"}
                            >
                                <Label>{page}</Label>
                            </Button>
                            <Tooltip hideDelay={0}>Page {page}</Tooltip>
                        </Wrapper>
                    </Cell>
                {/each}
            </LayoutGrid>

            <Wrapper>
                <Button
                    on:click={ () => {changePage(pagination.current_page+1)} }
                    variant="raised"
                    disabled={pagination.current_page == pagination.total_pages}
                >
                    <Label>></Label>
                </Button>
                <Tooltip hideDelay={0}>Next page</Tooltip>
            </Wrapper>

            <Wrapper>
                <Button
                    on:click={ () => {changePage(pagination.total_pages)} }
                    variant="raised"
                    disabled={pagination.current_page == pagination.total_pages}
                >
                    <Label>>></Label>
                </Button>
                <Tooltip hideDelay={0}>Last page</Tooltip>
            </Wrapper>

        </Group>
    </div>

</div>



<script lang="ts">
    import { goto } from "$app/navigation";
	import type IPagination from "$lib/shared/interfaces/Pagination";

    import Button, { Group, Label } from "@smui/button";
    import Tooltip, { Wrapper } from "@smui/tooltip";
    import LayoutGrid, { Cell } from "@smui/layout-grid";

    export let pagination: IPagination;

    function changePage(page: number): void {
        const url = new URL(window.location.href);
        url.searchParams.set("page", page.toString());
        goto(url);
    }

</script>

<style lang="scss">

    .page-buttons-container {
        display: flex;
        justify-content: center;
    }

    :global(.pages-layout-grid) {
        padding: 0;
    
        :global(.inner-grid) {
            gap: 1px;
        }
    }

</style>