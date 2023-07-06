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

    .bar {
        padding: 1rem;
        border-radius: 1rem;
        height: 4rem;
        background: #fafafa;
    }
</style>

<section class="mb4">
    
    <div class="bar mb4"></div>

    <div class="grid mb4">
        <div class="gridItem">
            <img class="mb2" src="https://randomuser.me/api/portraits/men/40.jpg" />
            <h3 class="">John Doe</h3>
            <p><i>Professor at SCC</i></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="gridItem">
            <img class="mb2" src="https://randomuser.me/api/portraits/women/27.jpg" />
            <h3 class="">John Doe</h3>
            <p><i>Professor at SCC</i></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="gridItem">
            <img class="mb2" src="https://randomuser.me/api/portraits/men/34.jpg" />
            <h3 class="">John Doe</h3>
            <p><i>Professor at SCC</i></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>        
    </div>

    <div class="bar mb4"></div>

</section>