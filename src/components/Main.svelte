<script>
    import Hero from "./Hero.svelte";
    import Companies from "./Companies.svelte";
    import About from "./About.svelte";
    import Projects from "./Projects.svelte";
    import Testimonials from "./Testimonials.svelte";
    import Contact from "./Contact.svelte";
</script>

<style>
    .main {
        margin-top: 6rem;
    }
</style>

<main class="center px2 main">
    
    <!-- 
        <img class="mb1" src="https://picsum.photos/536/354" />
    --> 

    <Hero></Hero>
    <Companies></Companies>
    <About></About>
    <Projects></Projects>
    <Testimonials></Testimonials>
    <Contact></Contact>
    
</main>