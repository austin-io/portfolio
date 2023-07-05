<script>
    import VrImage from "$lib/images/vr_headset.gif";
    import Button from "./Button.svelte";
    
    let list = [
        {name: "Fidelis", text: "Description: lorem ipsum dolar en lorem ipsum dolar en lorem ipsum dolar en lorem ipsum dolar en lorem ipsum", link: "", preview: ""},
        {name: "Forklift Trainer VR", text: "Description", link: "", preview: ""},
        {name: "Cell Types XR", text: "Description", link: "", preview: ""},
        {name: "Veggie Assassin XR", text: "Description", link: "", preview: ""},
        {name: "Lab XR", text: "Description", link: "", preview: ""},
    ];
</script>

<style>
    h2 {
        font-size: calc(min(4rem, 10vw));
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        background-image: url("https://images.frandroid.com/wp-content/uploads/2020/09/introducing-oculus-quest-2-0-17-screenshot.png");

    }

    .card:hover .cardImage {
        /*background-image: var(--bgImageHover);*/
        background-image: url("https://media3.giphy.com/media/3og0IGHBXJAoiQBWtW/giphy.gif?cid=ecf05e47euh28sxbiapzyf5edrrp28m9jglp5ywepj7iliur&ep=v1_gifs_search&rid=giphy.gif&ct=g");
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
    <h2 class="mb3">My <span class="grad">Projects</span></h2>

    <div class="grid">
        {#each list as project }    
            <div class="card">
                
                <div class="cardImage mb1">
                    
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