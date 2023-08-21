<script lang="ts">
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();
    let buttonTexts = ["Everything RF", "Salesforce Marketing", "Salesforce Follow Up"];
    let isClicked = [false, false, false];
    let buttonsDisabled = false;

    function handleClick(index: number) {
        // If the button is already selected, unselect it and reset its text
        if (isClicked[index]) {
            isClicked[index] = false;
            buttonTexts[index] = ["Everything RF", "Salesforce Marketing", "Salesforce Follow Up"][index];
        } else {
            isClicked = [false, false, false];
            
            isClicked[index] = true;

            buttonTexts[index] = "Launching...";
            buttonsDisabled = true;

            switch(index) {
                case 0:
                    functionForButton1(index);
                    break;
                case 1:
                    functionForButton2(index);
                    break;
                case 2:
                    functionForButton3(index);
                    break;
            }
        }

        dispatch('click');
    }

    async function functionForButton1(index: number) {
        // Your API call here
        await fetch('/api/everythingRF', { 
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        
        // Update the button's text back to its original value and re-enable the buttons
        buttonTexts[index] = "Everything RF";
        buttonsDisabled = false;
    }

    async function functionForButton2(index: number) {
        await fetch('/api/salesforce', { 
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        });
        buttonTexts[index] = "Salesforce Marketing";
        buttonsDisabled = false;
    }

    async function functionForButton3(index: number) {
        // await fetch('/api/run', { 
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // });
        buttonTexts[index] = "Salesforce Follow Up";
        buttonsDisabled = false;
    }
</script>

<div class="button-container">
    {#each buttonTexts as text, index}
        <button 
            on:click={() => handleClick(index)} 
            class="glow-on-hover {isClicked[index] ? 'clicked' : ''}"
            disabled={buttonsDisabled}
        >
            {text}
        </button>
    {/each}
</div>

<style>
    .button-container {
        display: flex;
        justify-content: space-between;
    }

    .glow-on-hover {
        width: 100px;
        height: 100px;
        border: none;
        outline: none;
        color: #fff;
        background: #111;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 50%; 
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        padding: 0;
        text-align: center;
    }

    .glow-on-hover:before {
        content: '';
        background: #111;
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 50%; 
    }

    .glow-on-hover.clicked:before {
        background: linear-gradient(45deg, #003366, #004080, #00509E, #0066CC, #007BFF, #3399FF, #66B2FF, #99CCFF, #CCE5FF);
        animation: glowing 20s linear infinite;
        opacity: 1; 
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
</style>
