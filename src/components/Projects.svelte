<script>
    // Thumbnail images
    import VrImage from "$lib/images/vr_headset.gif";
    import fidelisPreview from "$lib/images/optimized_fidelis_preview.png";
    import forkliftPreview from "$lib/images/optimized_forklift_preview.png";
    import celltypesPreview from "$lib/images/optimized_celltypes_preview.png";
    import assassinPreview from "$lib/images/optimized_assassin_preview.png";
    import labPreview from "$lib/images/optimized_lab_preview.png";

    // Thumbnail preview gifs
    import fidelisGif from "$lib/images/fidelis.gif";
    import forkliftGif from "$lib/images/forklift.gif";
    import bloodstreamGif from "$lib/images/bloodstream.gif";
    import assassinGif from "$lib/images/assassin.gif";
    import labGif from "$lib/images/lab.gif";

    // Project slideshow images
    import fidelisImg1 from "$lib/images/fidelis_img1.png";
    import fidelisImg2 from "$lib/images/fidelis_img2.png";
    import fidelisImg3 from "$lib/images/fidelis_img3.png";
    import fidelisImg4 from "$lib/images/fidelis_img4.png";
    import fidelisImg5 from "$lib/images/fidelis_img5.png";
    import fidelisImg6 from "$lib/images/fidelis_img6.png";
    import fidelisImg7 from "$lib/images/fidelis_img7.png";

    import assassinImg1 from "$lib/images/assassin_img1.png";
    import assassinImg2 from "$lib/images/assassin_img2.png";
    import assassinImg3 from "$lib/images/assassin_img3.png";
    import assassinImg4 from "$lib/images/assassin_img4.png";
    import assassinImg5 from "$lib/images/assassin_img5.png";
    import assassinImg6 from "$lib/images/assassin_img6.png";

    import bloodstreamImg1 from "$lib/images/bloodstream_img1.png";
    import bloodstreamImg2 from "$lib/images/bloodstream_img2.png";
    import bloodstreamImg3 from "$lib/images/bloodstream_img3.png";
    import bloodstreamImg4 from "$lib/images/bloodstream_img4.png";
    import bloodstreamImg5 from "$lib/images/bloodstream_img5.png";
    import bloodstreamImg6 from "$lib/images/bloodstream_img6.png";

    import forkliftImg1 from "$lib/images/forklift_img1.png";
    import forkliftImg2 from "$lib/images/forklift_img2.png";
    import forkliftImg3 from "$lib/images/forklift_img3.png";
    import forkliftImg4 from "$lib/images/forklift_img4.png";
    import forkliftImg5 from "$lib/images/forklift_img5.png";
    import forkliftImg6 from "$lib/images/forklift_img6.png";

    import labImg1 from "$lib/images/lab_img1.png";
    import labImg2 from "$lib/images/lab_img2.png";
    import labImg3 from "$lib/images/lab_img3.png";
    import labImg4 from "$lib/images/lab_img4.png";
    import labImg5 from "$lib/images/lab_img5.png";
    import labImg6 from "$lib/images/lab_img6.png";

    import Button from "./Button.svelte";
    import Modal from "./Modal.svelte";

    let showModal = false;
    let modalHeader = "";
    let modalContent = "";
    let modalLinks = [];
    let modalSlides = [];
    
    let modalData = [
        {name: "Fidelis", 
            text: "A high fidelity Cataract Surgical Simulator in VR designed to train new Ophthamologists around the world. Developed with Alcon and Elara Systems Inc.", 
            links: [
                {name: "Alcon", url: "https://www.alcon.com/media-release/alcon-introduces-state-art-virtual-reality-surgical-training-technology"},
                {name: "LinkedIn", url: "https://www.linkedin.com/posts/myalcon_training-education-apao-activity-7048564541424640000-xFmz/?utm_source=share&utm_medium=member_desktop"},
                {name: "Elara", url: "https://elarasystems.com/"}], 
            slides: [
                fidelisImg1, 
                fidelisImg2, 
                fidelisImg3, 
                fidelisImg4, 
                fidelisImg5, 
                fidelisImg6, 
                fidelisImg7], 
            image: fidelisPreview, 
            gif: fidelisGif},
        {name: "Forklift Trainer VR", 
            text: "A forklift simulation program designed to train new drivers the basics of forklift mobility and operations. Developed at Elara Systems Inc.", 
            links: [
                {name: "Elara", url: "https://elarasystems.com/"},
                {name: "Youtube", url: "https://www.youtube.com/watch?v=WCSfHTEESCE"}], 
            slides: [
                forkliftImg5, 
                forkliftImg2, 
                forkliftImg3, 
                forkliftImg4, 
                forkliftImg1, 
                forkliftImg6], 
            image: forkliftPreview, 
            gif: forkliftGif},
        {name: "Cell Types XR", 
            text: "An educational experience that allows the user to explore various cells and bacteria in the human bloodstream. Developed at Elara Systems Inc.", 
            links: [
                {name: "Elara", url: "https://elarasystems.com/"},
                {name: "Youtube", url: "https://www.youtube.com/watch?v=gzaeIta2FaY"}], 
            slides: [
                bloodstreamImg6,
                bloodstreamImg1, 
                bloodstreamImg2, 
                bloodstreamImg3, 
                bloodstreamImg4, 
                bloodstreamImg5, 
            ], 
            image: celltypesPreview, 
            gif: bloodstreamGif},
        {name: "Veggie Assassin XR", 
            text: "An exciting game of reflexes inspired by the hit mobile game Fruit Ninja. Independently developed.", 
            links: [
                {name: "GitHub", url: "https://github.com/austin-io/VeggieAssassinXR"}], 
            slides: [
                assassinImg5, 
                assassinImg6,
                assassinImg4, 
                assassinImg2, 
                assassinImg3, 
                assassinImg1], 
            image: assassinPreview, 
            gif: assassinGif},
        {name: "Lab XR", 
            text: "A collection of rooms full of interactive VR experiences, demonstrating a variety of complex algorithms. Independently developed.", 
            links: [
                {name: "GitHub", url: "https://github.com/austin-io/LabXR"}], 
            slides: [
                labImg1, 
                labImg2, 
                labImg3, 
                labImg4, 
                labImg5, 
                labImg6], 
            image: labPreview, 
            gif: labGif},
    ];

    const updateModal = (_h, _c, _l, _s) => {
        modalHeader = _h;
        modalContent = _c;
        modalLinks = _l;
        modalSlides = [];
        modalSlides = _s;
        showModal = true;
    }
</script>

<style>

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
        gap: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        background-color: #fafafa;
    }

    .card {
        padding: 1rem;
        border-radius: 1rem;
        background-color: white;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: grid;
        grid-template-rows: auto 1fr auto;

        transition: all 100ms ease-in-out;
    }

    .card:hover {
        box-shadow: rgba(149, 157, 165, 0.5) 0px 36px 24px;
        transform: translateY(-0.5rem);
    }

    .cardImage {
        position: relative;
        background-size: cover;
        background-position: center;
        border-radius: 1rem;
        aspect-ratio: 16/10;
        /*
        background-image: var(--bgImage);
        */
        background-image: var(--bgImage);

    }

    .card:hover .cardImage {
        /*
        background-image: url("https://media3.giphy.com/media/3og0IGHBXJAoiQBWtW/giphy.gif?cid=ecf05e47euh28sxbiapzyf5edrrp28m9jglp5ywepj7iliur&ep=v1_gifs_search&rid=giphy.gif&ct=g");
        */
        background-image: var(--bgGif);
    }

    .cardImage > img {
        border-radius: 1rem;
        object-fit: cover;
        aspect-ratio: 16/10;
    }

    .cardImage > div {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
        background-color: #000a;
        color: white;
        font-weight: bold;
        border-radius: 1rem;
        padding: 0.1rem 0.5rem;
    }

    .cardBody {
        padding: 0rem 1rem;
    }

    .cardBtn {
        padding-top: 1rem;
        display: flex;
        justify-content: end;
    }
</style>

<section id="id_projects" class="mb4">
    <h2 class="mb3 title">My <span class="grad">Projects</span></h2>

    <div class="grid">
        {#each modalData as project }    
            <div class="card">
                
                <div class="cardImage mb1" style="--bgImage: url({project.image}); --bgGif: url({project.gif});">
                    <div>GIF</div>
                </div>

                <div class="cardBody">
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                </div>

                <div class="cardBtn">
                    <Button onClick={() => {updateModal(project.name, project.text, project.links, project.slides)}}>More info</Button>
                </div>

            </div>
        {/each}

    </div>
</section>

{#if showModal}
    <Modal bind:show={showModal} heading={modalHeader} content={modalContent} links={modalLinks} slides={modalSlides}></Modal>
{/if}