<script>
    import Portrait from "$lib/images/portrait.png";
</script>

<style>

    h2 {
        font-size: calc(min(4rem, 10vw));
        text-align: center;
    }

    h3 {
        font-size: 2rem;
    }

    .split {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 3rem;
    }

    .right {   
        display: grid;
        place-items: center;
    }

    .right > div {
        padding-bottom: 2rem;
    }

    img {
        border-radius: 1rem;
        object-fit: cover;
        height: 100%;
    }

    p {
        line-height: 2rem;
        word-spacing: 4px;
    }

    @media screen and (max-width: 700px) {
        .split {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
        }
    }
</style>

<section id="id_about" class="mb4">
    <h2 class="mb3"><span class="grad">Who</span> am I?</h2>

    <div class="split">
        <div class="left">
            <img src={Portrait} alt="Portrait picture" >
        </div>

        <div class="right">
            <div>
                <h3 class="mb2">I'm Austin</h3>
                <p>An XR Developer from California with over 3 years of experience. I've had the pleasure of working with several Fortune 500 companies, creating innovative projects in Virtual Reality. I've been a huge fan of video games all my life, and want to make them until I become an old grey wizard.</p>
            </div>
        </div>
    </div>
</section>