<script>
    import Button from "./Button.svelte";

    export let show = false;
    let dialog = null;
    let modal = null;

    $: if (dialog && show) dialog.showModal();

    export let heading = "Heading";
    export let content = "Content";
    export let gif = "http://127.0.0.1:5173/portfolio/src/lib/images/vr_headset.gif";
    export let links = [];
    export let slides = ["https://picsum.photos/400", "https://picsum.photos/400", "https://picsum.photos/400"];

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

    .modal {
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

    .scroller {
        width: 100%;
        aspect-ratio: 16/9;
        display: flex;
        overflow-x: scroll;
        gap: 1rem;
        border-radius: 1rem;
    }

    .scroller > img {
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 16/9;
        margin-bottom: 1rem;
        border-radius: 1rem;
        
        background-image: url("https://fastly.picsum.photos/id/167/5/5.jpg?hmac=UlFZmyGkCC12ueTPyrYlsT9PFaCqyvXyCQ-AHJiVNKI");
        background-position: center;
        background-size: cover;
    }
</style>

<dialog bind:this={dialog} on:close={() => {show = false;}} on:click={(e) => {if(!modal.contains(e.target)) {dialog.close()} }} >

    <div class="modal" bind:this={modal}>
    
        <div class="closeRow mb1">
            <Button onClick={() => {dialog.close()}}>Close</Button>
        </div>

        <div class="scroller mb1" style="--bgGif: url({gif})">
            {#each slides as image}
                <img src={image} alt="Preview image">
            {/each}
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