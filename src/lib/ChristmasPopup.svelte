<script lang="ts">
    import { onMount } from "svelte";
    // import greetingImage from '/assets/greetings.svg';
    let show:Boolean = false;

    onMount(() => {
        setTimeout(() => {
            show = true;
        }, 3000); // Show greeting after 3 seconds
    });
</script>

<div>
    {#if show}
        <div class="popup">
            <!-- <img
                src="/assets/greetings.svg"
                alt="greeting"
                width="200px"
                height="100px"
                class="greeting-image"
            /> -->
            <h1>Merry Christmas!</h1>
            <p>
                Wishing you a very Merry Christmas and a wonderful New Year. May
                all your dreams for the coming year be fulfilled.
            </p>
            <div class="close-btn">
                <button on:click={() => (show = false)}>X</button>
            </div>
        </div>
    {/if}
</div>

<style>
    
    .popup {
        width: 40%;
        height: auto;
        background-color: #444444;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        border-radius: 10px;
    }
    .popup * {
        background-color: transparent;
        color: white;
        font-family: "monospace";
        text-align: center;
    }
    .close-btn {
        position: absolute;
        top:0;
        right:0;
    }
    button{
        background-color: transparent;
        color: white;
        font-family: "monospace";
        text-align: center;
        border:none;
        border-radius: 5px;
        padding: 0.5rem;
    }
    button:hover{
        background-color: #555555;
    }
</style>