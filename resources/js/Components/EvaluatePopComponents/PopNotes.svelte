<script lang="ts">
    import { useForm, page } from "@inertiajs/svelte";
    import moment, { type Moment } from "moment";
    import { onMount, tick } from "svelte";
    import { MdSave } from "svelte-icons/md";
    import IconHolder from "./../IconHolder.svelte";
    import PopNote from "./PopNote.svelte";
    import { pop } from "../../stores.js";

    export let popId: string;
    // TODO LocalStorage voor notes uitwerken
    export let notes: Note[] = [
        {
            date: moment("01 01 2023").format("LL"),
            time: moment().hours(9).minutes(3).format("HH:mm").toString(),
            note: "Karin heeft de doelen niet behaald uit POP-2. ",
        },
        {
            date: moment("2023 03 03").format(),
            time: moment().hours(14).minutes(3).format("HH:mm").toString(),
            note: "Mogelijkheden besproken rondom het aansturen van het team op afstand.",
        },
        {
            date: moment("2020 03 03").format(),
            time: moment().hours(4).minutes(3).format("HH:mm").toString(),
            note: "Karin heeft de feedback ontvangen.",
        },
    ];

    let element: HTMLElement;
    onMount(() => {
        scrollToBottom(element);
    });

    let form = useForm({
        date: "",
        time: "",
        note: "",
        pop_id: popId,
        remember: true,
    });

    type Note = {
        date: string | Moment;
        time: string | Moment;
        note: string;
        pop_id: string;
    };

    let newNote: Note = {
        date: moment().format("LL"),
        time: moment().format("HH:mm"),
        note: "",
    };

    // On input change, update the
    $: form.note, (newNote.note = $form.note);

    const scrollToBottom = (node: HTMLElement, notes?: Note[]) => {
        node.scroll({
            top: node.scrollHeight,
            behavior: "smooth",
        });
        return { update: scroll };
    };

    async function handleSave() {
        console.log(newNote);
        console.log($form);
        notes = [...notes, newNote];
        newNote = {
            pop_id: pop.id,
            date: moment().format("LL"),
            time: moment().format("HH:mm"),
            note: "",
        };
        await tick();
        scrollToBottom(element);
        console.log(notes);
        $form.post("/evaluation/" + popId + "/notes", {
            preserveScroll: true,
            onSuccess: () => {
                console.log("succes");
            },
            onError: () => {
                console.log($form.errors);
            },
        });
        $form.reset();
    }
</script>

<h2 class="notes__header">Interne notities</h2>
<section class="notes">
    <section bind:this={element} use:scrollToBottom={notes} class="notes__list">
        {#each notes as note}
            <div class="note">
                <PopNote
                    date={moment(note.date).format("LL")}
                    time={note.time.toString()}
                    note={note.note}
                />
            </div>
        {/each}
    </section>
    <form class="notes__form" on:submit|preventDefault={() => handleSave}>
        <input id="note" name="note" type="text" bind:value={$form.note} />
        <button
            disabled={newNote.note.length < 1}
            type="submit"
            on:click={handleSave}
        >
            <IconHolder>
                <MdSave />
            </IconHolder>
        </button>
    </form>
</section>

<style>
    .notes {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        height: 100%;
        width: 100%;
        max-width: 100%;
        font-family: "Montserrat", sans-serif;
        border-radius: 1.5rem;
        margin-top: 2rem;
    }

    .notes__list {
        height: 90%;
        max-height: 85%;
        max-height: 50rem;
        min-width: 100%;
        width: 100%;
        overflow: scroll;
        color: black;
    }

    .notes__header {
        font-size: 1.8rem;
    }

    .notes__form {
        display: flex;
        flex-flow: row;
        gap: 0.5rem;
        justify-content: center;
        align-items: start;
        margin: 0 auto;
        width: 100%;
        margin-top: auto;
        margin-bottom: 1rem;
    }

    .notes__form > input {
        font-family: "Montserrat", sans-serif;
        padding: 1rem;
        height: 4rem;
        width: 80%;
        box-shadow: 0 0 0 1px solid black;
        gap: 1rem;

        border-style: 0 0 0 1px solid none none black;
    }

    .notes__form > button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;

        border: 1px none none solid black;
        height: 4rem;
        width: 4rem;
        /* min-height: 100%; */
        width: 10%;
        border-radius: 0.5rem;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        filter: brightness(0.8);
        transition: 0.3s filter ease-out;
    }
</style>
