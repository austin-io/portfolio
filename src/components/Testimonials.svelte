<script>
    import TomPic from "$lib/images/TomCap.jpeg";
    import KylePic from "$lib/images/KyleLum.jpeg";
    import JustinPic from "$lib/images/JustinPatterson.png";
</script>

<style>
    .grid {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .gridItem {
        flex: 1 1 300px;
        padding: 1rem;
        border-radius: 1rem;
        text-align: center;
        min-width: min(300px, 100%);
    }

    .gridItem > img {
        width: 100px;
        border-radius: 100vmax;
        margin-inline: auto;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .quote {
        max-width: 400px;
        margin-inline: auto;
    }

    .bar {
        padding: 1rem;
        border-radius: 1rem;
        height: 4rem;
        background: #fafafa;
    }
</style>

<section class="mb4">
    
    <div class="bar mb4"></div>

    <h2 class="mb3 title"><span class="grad">Testimonials</span></h2>

    <div class="grid mb4">
        <div class="gridItem">
            <img class="mb2" src={TomPic} />
            <h3 class="">Tom Cappelletti</h3>
            <p><i>Professor at SCC</i></p>
            <p class="quote">Eager and capable to work on some of the toughest problems, Austin is a tremendous asset to any team.</p>
        </div>

        <div class="gridItem">
            <img class="mb2" src={JustinPic} />
            <h3 class="">Justin Patterson</h3>
            <p><i>Lead XR Developer</i></p>
            <p class="quote">Beyond being an excellent, inventive colleague in engineering, he's also personable and kind.</p>
        </div>

        <div class="gridItem">
            <img class="mb2" src={KylePic} />
            <h3 class="">Kyle Lum</h3>
            <p><i>XR Production Manager</i></p>
            <p class="quote">Whatever the problem is, you can be confident that Austin will be able to figure out the solution.</p>
        </div>        
    </div>

    <div class="bar mb4"></div>

</section>