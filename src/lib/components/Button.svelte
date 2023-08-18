<script>
    let buttonText = "Activate Sales"; // Default button text
    let isClicked = false;

    function handleClick() {
        if (isClicked === false) {
            buttonText = "Process Initiated";
            isClicked = true;
        } else if (isClicked) {
            buttonText = "Activate Sales";
            isClicked = false;
        }
    }
</script>

<button on:click={handleClick} class="glow-on-hover {isClicked ? 'clicked' : ''}">
    {buttonText}
</button>

<style>
    .glow-on-hover {
        width: 220px;
        height: 220px; /* Make it a perfect circle */
        border: none;
        outline: none;
        color: #fff;
        background: #111;
        cursor: pointer;
        position: relative;
        z-index: 0;
        border-radius: 50%; /* Adjust for circle */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px; /* Adjust font size for better fit */
    }

    .glow-on-hover:before {
        content: '';
        background: #111; /* Default background color */
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        border-radius: 50%; /* Adjust for circle */
    }

    .glow-on-hover.clicked:before {
        background: linear-gradient(45deg, #003366, #004080, #00509E, #0066CC, #007BFF, #3399FF, #66B2FF, #99CCFF, #CCE5FF); /* Shades of blue */
        animation: glowing 20s linear infinite;
        opacity: 1; /* Make it always glowing */
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
</style>
