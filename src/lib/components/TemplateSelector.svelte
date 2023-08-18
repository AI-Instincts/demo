<script>
    let selectedTemplate = 'template1';
    function toggleTemplate(template) {
        selectedTemplate = template;
    }
</script>

<div class="shadow p-6">
    <h2 class="text-2xl font-bold mb-4 text-center">Choose a Template</h2>
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" role="listbox" aria-label="Template Selection">
        <!-- Template 1 -->
        <button 
            class={`p-2 sm:p-4 w-full sm:w-1/2 border text-sm ${selectedTemplate === 'template1' ? 'border-blue-500' : 'border-gray-300'} rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500`} 
            aria-selected="${selectedTemplate === 'template1'}"
            on:click={() => toggleTemplate('template1')}
            role="option"
            aria-label="Template 1"
        >
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Template 1</h3>
            <p class="text-gray-600">Description</p>
            <div class={`${selectedTemplate === 'template1' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'} mt-2 sm:mt-4 px-2 py-1.5 rounded-md text-xs inline-block`}>
                Select
            </div>
        </button>

        <!-- Template 2 -->
        <button 
            class={`p-2 sm:p-4 w-full sm:w-1/2 border text-sm ${selectedTemplate === 'template2' ? 'border-blue-500' : 'border-gray-300'} rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500`} 
            aria-selected="${selectedTemplate === 'template2'}"
            on:click={() => toggleTemplate('template2')}
            role="option"
            aria-label="Template 2"
        >
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Template 2</h3>
            <p class="text-gray-600 text-sm">Description</p>
            <div class={`${selectedTemplate === 'template2' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'} mt-2 sm:mt-4 px-2 py-1.5 rounded-md text-xs inline-block`}>
                Select
            </div>
        </button>
    </div>
</div>
