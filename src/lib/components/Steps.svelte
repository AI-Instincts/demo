<script>
    let steps = [
        { id: 1, name: "Email", completed: true },
        { id: 2, name: "LinkedIn", completed: false },
        { id: 3, name: "Blog", completed: false },
        { id: 4, name: "Salesforce", completed: false }
    ];
</script>

<h1 class="text-lg font-bold py-2">Progress</h1>
<div class="w-full max-w-md mx-auto border rounded-lg p-2">
    <ul>
        {#each steps as step}
        <li class="flex items-center mb-4 border-b p-2">
            <div class={`w-8 h-8 flex items-center justify-center rounded-full ${step.completed ? 'bg-blue-600 text-white' : 'border border-neutral-300 text-blue-600'}`}>
                {#if step.completed}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                {:else}
                    {step.id}
                {/if}
            </div>
            <span class={`ml-4 text-sm font-semibold ${step.completed? 'text-black' : 'text-blue-600'}`}>{step.name}</span>
        </li>
        {/each}
    </ul>
</div>

<style>
    /* Additional styles if needed */
</style>
