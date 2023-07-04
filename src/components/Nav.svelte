<script>
    import Button from "./Button.svelte";
    import MenuIcon from "$lib/images/hamburger_menu_icon.svg";

    let showMenu = false;

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<style>
    .nav {
        position: fixed;
        width: 100%;
        z-index: 10;
    }

    .nav > section {
        background-color: white;
        border-radius: 1rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        display: flex;
        justify-content: space-between;
    }

    img {
        width: 1.2rem;
    }

    .menuRoot {
        position: relative;
    }

    .menu {
        position: absolute;
        right: 0;
        top: 4rem;
        width: 12rem;
        background-color: white;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .menu li {
        list-style: none;
        display: block;

    }

    .menuButton {
        padding: 0.4rem 1.4rem;
        border-radius: 100vmax;
        display: block;
        text-decoration: none;
        color: #333;
    }

    .menuButton:hover {
        background-color: #eee;
    }

</style>

<nav class="p1 nav">
    <section class="center p1">
        <Button>Austin IO</Button>
        
        <div class="menuRoot">
            <Button onClick={() => {showMenu = !showMenu;}}>
                <img src={MenuIcon} alt="Menu" />
            </Button>
            
            {#if showMenu}
                <div class="menu">
                    <ul>
                        <li>
                            <a class="menuButton" href="#id_home" on:click|preventDefault={scrollIntoView}>Home</a>
                        </li>
                        <li>
                            <a class="menuButton" href="#id_about" on:click|preventDefault={scrollIntoView}>About Me</a>
                        </li>
                        <li>
                            <a class="menuButton" href="#">Projects</a>
                        </li>
                        <li>
                            <a class="menuButton" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            {/if}
        </div>
    </section>
</nav>