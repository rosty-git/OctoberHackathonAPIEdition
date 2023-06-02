<main>


    <h3 class="mdc-typography--headline3">Explore hundreds of company advocates in one place!</h3>


    <Paper variant="outlined">
        <div class="info companies">
            <Content>
                <h4 class="mdc-typography--headline4">
                    Explore a list of <Link href="/companies"><h4 class="mdc-typography--headline4">companies</h4></Link>
                </h4>
            </Content>
        </div>
    </Paper>

    <Paper variant="outlined">
        <div class="info advocates">
            <Content>
                <h4 class="mdc-typography--headline4">
                    Or see a list of <Link href="/advocates"><h4 class="mdc-typography--headline4">advocates</h4></Link>
                </h4>
            </Content>
        </div>
    </Paper>
    
</main>



<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import Paper, { Content } from "@smui/paper";

</script>


<style lang="scss">

    main {
        margin: 5px;

        text-align: center;
    }


    .info {
        &.companies {
            background-image: url("/corporate_fare.svg");
            background-position-x: right;
        }

        &.advocates {
            background-image: url("/group.svg");
        }

        display: flex;
        justify-content: center;

        background-repeat: no-repeat;
        background-size: 250px;
        
        min-height: 250px;
    }


</style>