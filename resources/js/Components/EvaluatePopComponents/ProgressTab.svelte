<script lang="ts">
    import { activeEvaluationTab } from "../../stores.js";
    export let name: string = "";
    export let active: boolean;
    $: handleClick = (event: MouseEvent) => {
        $activeEvaluationTab.tab = name;
    };
</script>

<button class:active on:click={handleClick}><p>{name ? name : "-"}</p></button>

<style>
    button {
        font-family: "Montserrat", sans-serif;
        background-color: black;
        border-radius: 3rem;
        border-radius: 3rem;
        height: 100%;
        font-size: 1.5rem;
        min-width: fit-content;

        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        width: 10%;
        border: none;
        box-shadow: 0.7rem 0.6rem 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
        z-index: 69;
    }

    button:hover {
        background-color: #333;
        cursor: pointer;
    }

    p {
        color: white;
        font-weight: bold;
    }

    p::first-letter {
        text-transform: uppercase;
    }

    .active {
        background-color: var(--c-attention);
    }

    .active:hover {
        background-color: var(--c-attention-hover);
    }

    .active > p {
        color: black;
    }
</style>
