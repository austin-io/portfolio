<script>
    export let onClick;
    export let bgColor = "#4400ff";
    export let size = 1;
</script>

<style>
    button {
        border: none;
        padding: 0.4em 1em;
        border-radius: 100vmax;
        font-weight: bold;
        cursor: pointer;
        background-color: var(--bgColor);
        color: white;
        font-size: var(--fs);

        transition: all 100ms ease-in-out;
    }

    button:hover {
        color: var(--bgColor);
        background-color: transparent;
        outline: 2px solid var(--bgColor);
        scale: 1.1;
    }

    button:active {
        color: var(--bgColor);
        scale: 0.95;
    }
</style>

<button on:click|preventDefault={onClick} style="--bgColor: {bgColor}; --fs: {size}em;">
    <slot></slot>
</button>