<script>
    import alconLogo from "$lib/images/alcon_logo.png";
    import abbottLogo from "$lib/images/abbott_logo.png";
    import makerspaceLogo from "$lib/images/makerspace_logo.png";
    import elaraLogo from "$lib/images/elara_logo.png";
    import smithnephewLogo from "$lib/images/smith_nephew_logo.png";

    const logos = [
        {name: "Alcon", link: "https://www.alcon.com/", img: alconLogo},
        {name: "Abbott", link: "https://www.abbott.com/", img: abbottLogo},
        {name: "Elara Systems", link: "https://elarasystems.com/", img: elaraLogo},
        {name: "Smith and Nephew", link: "https://www.smith-nephew.com/en-us", img: smithnephewLogo}
    ];
</script>

<style>
    section {
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-basis: 1;
        background-color: white;
        gap: 1rem;
        padding: 1rem;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-bottom: 4rem;
    }

    section > div {
        min-width: 200px;
        margin-inline: auto;
        height: 4rem;
    }

    section img {
        object-fit: contain;
        max-width: 100%;
        max-height: 100%;
        filter: grayscale(1);
    }
</style>

<section>

    {#each logos as logo }
        <div>
            <a href={logo.link}>
                <img src={logo.img} alt={logo.name} >
            </a>
        </div>
    {/each}

</section>