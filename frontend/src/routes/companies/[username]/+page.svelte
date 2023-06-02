<main>
    <Loading>
        <Button variant="raised" href="/companies">
            <Icon class="material-icons">arrow_back</Icon>
            <Label>Companies list</Label>
        </Button>

        <article>
            <LayoutGrid>
                <Cell spanDevices={{desktop: 3, tablet: 12}}>
                    <div class="img-container">
                        <img src={data.logo.toString()} alt={data.name} />
                    </div>
                </Cell>
                <Cell spanDevices={{desktop: 9, tablet: 12}}>
                    <div>
                        <h1 class="mdc-typography--headline1 name">{data.name}</h1>
                        {#if (data.twitter || data.linkedin)}
                            <div class="links">
                                {#if data.twitter}
                                    <Link href={data.twitter.toString()} targetBlank>Twitter</Link>
                                {/if}
                                
                                {#if data.linkedin}
                                    <Link href={data.linkedin.toString()} targetBlank>LinkedIn</Link>
                                {/if}
                            </div>
                        {/if}

                        <Wrapper>
                            <p class="mdc-typography--body2 advocates-count"><Icon class="material-icons">account_circle</Icon>{data.advocates.length}</p>
                            <Tooltip showDelay={0} hideDelay={0}>Advocates</Tooltip>
                        </Wrapper>

                        <p class="mdc-typography--body1">{ @html parseForLinks(data.bio) }</p>
                    </div>
                </Cell>
            </LayoutGrid>
        </article>
    </Loading>
</main>


<script lang="ts">
    import type { PageData } from "./$types";

    import Loading from "$lib/components/Loading.svelte";
    import Link from "$lib/components/Link.svelte";

    import Button, { Icon, Label } from "@smui/button";
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Tooltip, { Wrapper } from "@smui/tooltip";

    import { parseForLinks } from "$lib/shared/utils/parseText";

    export let data: PageData;
</script>

<style lang="scss">

    main {
        margin: 15px;

        article {
            background-color: var(--mdc-theme-surface);
        }
    }

    .img-container {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 50%;
            border-radius: 50%;
        }
    }

    .name {
        margin: 0;
    }

    .links {
        display: flex;
        padding-bottom: 10px;
    }

    .advocates-count {
        display: flex;
        width: min-content;
        align-items: center;
        
        :global(*) {
            margin-right: 2px;
        }
    }

</style>