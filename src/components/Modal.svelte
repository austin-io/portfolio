<script>
    import Button from "./Button.svelte";

    export let show = false;
    let dialog = null;

    $: if (dialog && show) dialog.showModal();

    export let heading = "Heading";
    export let content = "Content";
    export let gif = "http://127.0.0.1:5173/portfolio/src/lib/images/vr_headset.gif";
    export let links = [];

</script>

<style>
    dialog {
        width: 100%;
        max-width: 800px;
        border: none;
        margin: auto;
        padding: 1rem;
        background-color: transparent;
    }

    dialog::backdrop {
        background-color: #000a;
    }

    dialog > div {
        width: 100%;
        border-radius: 1rem;
        padding: 1rem;
        background-color: white;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    h1 {
        font-size: 1.2rem;
    }

    .visual {
        width: 100%;
        aspect-ratio: 16/9;
        background-color: #ccc;
        border-radius: 1rem;
        background-image: var(--bgGif);
        background-size: cover;
        background-position: center;
    }

    .closeRow {
        display: flex;
        justify-content: end;
    }

    .links {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
    }
</style>

<dialog bind:this={dialog} on:close={() => {show = false;}} >

    <div>
    
        <div class="closeRow mb1">
            <Button onClick={() => {dialog.close()}}>Close</Button>
        </div>

        <div class="visual mb1" style="--bgGif: url({gif})">

        </div>

        <div class="details mb2">
            <h1>{heading}</h1>
            <p>{content}</p>
            
        </div>

        <div class="links">
            <p><strong>Links: </strong></p>
            {#each links as link }
                <Button onClick={() => {
                    window.open(link.url);
                }} >{link.name}</Button>
            {/each}
        </div>

    </div>
</dialog>