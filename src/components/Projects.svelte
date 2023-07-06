<script>
    import VrImage from "$lib/images/vr_headset.gif";
    import fidelisPreview from "$lib/images/fidelis_preview.png";
    import forkliftPreview from "$lib/images/forklift_preview.png";
    import celltypesPreview from "$lib/images/celltypes_preview.png";
    import assassinPreview from "$lib/images/assassin_preview.png";
    import labPreview from "$lib/images/lab_preview.png";

    import Button from "./Button.svelte";
    
    let list = [
        {name: "Fidelis", text: "A high fidelity Cataract Surgical Simulator in VR designed to train new Ophthamologists around the world.", 
            link: "", image: fidelisPreview, gif: VrImage},
        {name: "Forklift Trainer VR", text: "A forklift simulation program designed to train new drivers the basics of forklift mobility and operations.", 
            link: "", image: forkliftPreview, gif: VrImage},
        {name: "Cell Types XR", text: "An educational experience that allows the user to explore various cells and bacteria in the human bloodstream.", 
            link: "", image: celltypesPreview, gif: VrImage},
        {name: "Veggie Assassin XR", text: "An exciting game of reflexes inspired by the hit mobile game Fruit Ninja.", 
            link: "", image: assassinPreview, gif: VrImage},
        {name: "Lab XR", text: "A collection of rooms full of interactive VR experiences, demonstrating a variety of complex algorithms.", 
            link: "", image: labPreview, gif: VrImage},
    ];
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
        {#each list as project }    
            <div class="card">
                
                <div class="cardImage mb1" style="--bgImage: url({project.image}); --bgGif: url({project.gif});">
                    
                </div>

                <div class="cardBody">
                    <h3>{project.name}</h3>
                    <p>{project.text}</p>
                </div>

                <div class="cardBtn">
                    <Button>More info</Button>
                </div>

            </div>
        {/each}

    </div>
</section>