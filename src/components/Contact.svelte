<script>
    import Button from "./Button.svelte";
    import ColorButton from "./ColorButton.svelte";

    let formName = "";
    let formMessage = "";
</script>

<style>
    .pretext {
        text-align: center;
    }

    form {
        max-width: 600px;
        margin-inline: auto;
    }

    form > * {
        margin-bottom: 1rem;
    }

    input,textarea {
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid #aaa;
        width: 100%;
        display:block;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
    }

    textarea {
        resize: vertical;
        min-height: 10rem;
    }
</style>

<section id="id_contact" class="mb4">
    <h2 class="mb3 title"><span class="grad">Contact</span> Me</h2>

    <p class="pretext mb2">Send me a message!<br>You can also follow me on <a href="https://www.linkedin.com/in/austin-poberezhnik-4570b3167/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or download my <a href="#">resume here!</a></p>

    <form>
        <h3>Name</h3>
        <input type="text" bind:value={formName} />
        <h3>Message</h3>
        <textarea bind:value={formMessage} />
        <ColorButton bgColor={"#80f"} onClick={() => {
            window.open(`mailto:austinypwork+website@gmail.com?subject=${formName} wants to talk&body=${formMessage}`);
        }}>Send Email</ColorButton>
    </form>

</section>