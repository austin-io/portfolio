<script>
    export let onClick;
</script>

<style>
    button {
        border: none;
        padding: 0.4em 1em;
        border-radius: 100vmax;
        font-weight: bold;
        cursor: pointer;
        color: black;
        background-color: transparent;

        transition: all 100ms ease-in-out;
    }

    button:hover {
        background-color: rgba(0,0,0,0.1);
        scale: 1.1;
    }

    button:active {
        background-color: rgba(0,0,0,0.2);
        scale: 0.95;
    }
</style>

<button on:click|preventDefault={onClick}>
    <slot></slot>
</button>