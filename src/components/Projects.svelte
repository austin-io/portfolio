<script>
    
    let list = [1,2,3,4,5];
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
        cursor: pointer;

        transition: all 100ms ease-in-out;
    }

    .card:hover {
        box-shadow: rgba(149, 157, 165, 0.5) 0px 36px 24px;
        translate: 0 -0.5rem;
    }

    .cardImage {

    }

    .cardImage img {
        border-radius: 1rem;
    }

    .cardBody {
        padding: 1rem;
    }
</style>

<section id="id_projects" class="mb4">
    <h2 class="mb4">My <span class="grad">Projects</span></h2>

    <div class="grid">
        {#each list as item }    
            <div class="card">
                <div class="cardImage">
                    <img src="https://media0.giphy.com/media/l1BgTjrfQE3VoQQvK/giphy.gif?cid=ecf05e470s17w987do32g38ms11hgs7prl241p44s5bzpjvp&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="card image" />
                </div>

                <div class="cardBody">
                    <h3>Title</h3>
                    <p>Text</p>
                </div>
            </div>
        {/each}

    </div>
</section>