<script>
    import Nav from "../components/Nav.svelte"
    import Main from "../components/Main.svelte"
    import Footer from "../components/Footer.svelte"
</script>

<style>
</style>

<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-padding: 5rem;
        }

        img, picture, video, svg {
            width: 100%;
            display: block;
        }
        
        body {
            width: 100%;
            min-height: 100svh;
            display: grid;
            grid-template-rows: 1fr auto;
            font-family: 'Poppins', sans-serif;
            background-color: white;
        }

        .center {
            width: 100%;
            max-width: 1280px;
            margin-inline: auto;
        }

        .p1 {
            padding: 1rem;
        }

        .px1 {
            padding-right: 1rem;
            padding-left: 1rem;
        }

        .py1 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .px2 {
            padding-right: 2rem;
            padding-left: 2rem;
        }

        .py2 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .mb1 { margin-bottom: 1rem;}
        .mb2 { margin-bottom: 2rem;}
        .mb3 { margin-bottom: 3rem;}
        .mb4 { margin-bottom: 4rem;}

        .title {
            font-size: calc(min(4rem, 10vw));
            text-align: center;
        }

        .grad {
            background: -webkit-linear-gradient(#eeeeee, #4400ff);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</svelte:head>

<Nav></Nav>
<Main></Main>
<Footer></Footer>