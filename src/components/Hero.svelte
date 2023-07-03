<script>
    import ColorButton from "./ColorButton.svelte";
    let showVideo = false;
</script>

<style>
    section {
        margin-bottom: 4rem;
    }

    .visual {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 1rem;
        
    }

    img.visual {
        object-fit: cover;
        cursor: pointer;
    }

    h1 {
        font-size: calc(min(5rem, 10vw));
        text-align: center;
        padding: 0;
        padding-bottom: 1rem;
        padding-top: 2rem;
    }

    .grad {
        background: -webkit-linear-gradient(#eeeeee, #4400ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .btnHolder {
        text-align: center;
        margin-bottom: 3rem;
    }

</style>

<section>
    <h1 class="py2">Explore a new <span class="grad">Reality.</span></h1>
    
    <div class="mb1 btnHolder">
        <ColorButton size={1.2} bgColor={"#8800ff"} onClick={() => {showVideo = !showVideo;}}>
            {showVideo ? "Hide Video" : "Play Video"}
        </ColorButton>
    </div>

    {#if showVideo}
        <iframe class="mb1 visual" src="https://www.youtube-nocookie.com/embed/iTtit7Rj5vY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {:else}
        <img on:click={() => {showVideo = true;}} class="mb1 visual" src="https://media0.giphy.com/media/l1BgTjrfQE3VoQQvK/giphy.gif?cid=ecf05e470s17w987do32g38ms11hgs7prl241p44s5bzpjvp&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="vr placeholder">
    {/if}
</section>