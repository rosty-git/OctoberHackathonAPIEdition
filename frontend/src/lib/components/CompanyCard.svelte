<article>

    <Card class="card">
        <Content class="flex-content">
            <div class="info-left">
                <img src={company.logo.toString()} alt={company.name} loading="lazy" />
            </div>
            <div class="info-right">
                <h2 class="mdc-typography--headline2 name">{company.name}</h2>
                
                {#if (company.twitter || company.linkedin)}
                    <div class="links">
                        {#if company.twitter}
                            <Link href={company.twitter.toString()} targetBlank>Twitter</Link>
                        {/if}
                        
                        {#if company.linkedin}
                            <Link href={company.linkedin.toString()} targetBlank>LinkedIn</Link>
                        {/if}
                    </div>
                {/if}
                
                <Wrapper>
                    <p class="mdc-typography--body2 advocates-count"><Icon class="material-icons">account_circle</Icon>{company.advocates.length}</p>
                    <Tooltip showDelay={0} hideDelay={0}>Advocates</Tooltip>
                </Wrapper>

                <p class="mdc-typography--body1 bio">{ @html parseForLinks(company.bio) }</p>
            </div>
        </Content>

        <PrimaryAction>
            <Button href={`companies/${company.username}`}>
                <Label class="mdc-typography--button" >See More...</Label>
            </Button>
        </PrimaryAction>
        
    </Card>

</article>



<script lang="ts">
    import type ICompany from "$lib/shared/interfaces/Company";

    import Card, { Content, PrimaryAction } from "@smui/card";
    import { Icon } from "@smui/common";
    import Tooltip, { Wrapper } from "@smui/tooltip";
    import Button, { Label } from "@smui/button";

    import Link from "./Link.svelte";

    import { parseForLinks } from "$lib/shared/utils/parseText";

    export let company: ICompany;

</script>


<style lang="scss">

    :global(.card) {
        position: relative;
        display: flex;
        
        background-color: var(--mdc-theme-surface);
        border-radius: 15px;
        padding: 15px;

        * {
            padding: 2px;
        }
    }

    :global(.flex-content) {
        display: flex;
    }
    
    .info-left {
        width: 35%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            border-radius: 50%;
            height: 150px;
        }
    }

    .info-right {
        width: 75%;
    }

    .name {
        margin: 0;
    }

    .bio {
        white-space: pre-wrap;
    }

    .links {
        display: flex;
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