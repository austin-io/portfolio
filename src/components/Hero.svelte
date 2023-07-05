<script>
    import VrImage from "$lib/images/vr_headset.gif";
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

    p {
        text-align: center;
        padding-top: 2rem;
    }

    h1 {
        font-size: calc(min(5rem, 10vw));
        text-align: center;
        padding: 0;
        padding-bottom: 1rem;
        padding-top: 0rem;
        margin-top: 0;
    }

    .btnHolder {
        text-align: center;
        margin-bottom: 3rem;
    }

</style>

<section id="id_home">

    <p>Hi there, I'm Austin. Let's, </p>
    <h1 class="py2">Explore a new <span class="grad">Reality.</span></h1>
    
    <div class="mb1 btnHolder">
        <ColorButton size={1.2} bgColor={"#8800ff"} onClick={() => {showVideo = !showVideo;}}>
            {showVideo ? "Hide Video" : "Play Video"}
        </ColorButton>
    </div>

    {#if showVideo}
        <iframe class="mb1 visual" src="https://www.youtube-nocookie.com/embed/iTtit7Rj5vY?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {:else}
        <img class="mb1 visual" src={VrImage} alt="vr placeholder">
    {/if}

</section>