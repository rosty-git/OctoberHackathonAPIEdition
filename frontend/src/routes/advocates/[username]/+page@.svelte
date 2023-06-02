
<main>
    <Loading>
        <Button variant="raised" href={backPage.toString()}>
            <Icon class="material-icons">arrow_back</Icon>
            <Label>Go back to page {backPage.searchParams.get("page") || 1}</Label>
        </Button>
    
        <article>
            <LayoutGrid>
                <Cell spanDevices={{desktop: 3, tablet: 12}}>
                    <div class="img-container">
                        <img src={data.profile_pic.toString()} alt={data.name} />
                    </div>
                </Cell>
                <Cell spanDevices={{desktop: 9, tablet: 12}}>
                    <div>
                        <h1 class="mdc-typography--headline2 advocate-name">{data.name}</h1>
                        {#if data.twitter}
                            <div class="twitter-info">

                                <Link
                                    href={data.twitter.toString()}
                                    targetBlank
                                >
                                    @{data.username}
                                </Link>

                                <p class="mdc-typography--body1">Followers: {data.follower_count}</p>

                            </div>
                        {/if}
                        <p class="mdc-typography--body1">{ @html parseForLinks(data.bio) }</p>
                    </div>
                </Cell>
            </LayoutGrid>
        </article>
    </Loading>
</main>


<script lang="ts">
    import type { PageData } from "./$types";

    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import Button, { Label, Icon } from "@smui/button";

    import Link from "$lib/components/Link.svelte";
    import Loading from "$lib/components/Loading.svelte";

    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";

    import { parseForLinks } from "$lib/shared/utils/parseText";

    export let data: PageData;


    let backPage: URL = new URL("/advocates", $page.url.origin);

    afterNavigate(({from}) => {
        if (from) backPage = from.url;
    });

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


    .advocate-name {
        margin-bottom: 0;
    }

    .twitter-info {
        display: flex;

        * {
            margin: 0 5px;
        }
    }

</style>