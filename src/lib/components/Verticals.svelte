<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    let verticals = [
      { id: 1, name: "Aeronautical" },
      { id: 2, name: "Quantum Computing" },
      { id: 3, name: "Maritime" },
      { id: 4, name: "System Integrators" },
      { id: 5, name: "Government" },
      { id: 6, name: "Universities" },
      { id: 7, name: "4G Operators" },
      { id: 8, name: "US Contractors" },
      { id: 9, name: "Everything RF" }
    ];
  
    export let selectedVerticalName = "Aeronautical";

    const dispatch = createEventDispatcher();
  
    function handleRadioChange(event: any) {
      selectedVerticalName = event.target.value;
      dispatch('selectedVerticalChange', selectedVerticalName);
    }
</script>
  
<div class="container mx-auto p-2">
    <h2 class="text-xl font-bold mb-2">Select Vertical</h2>
    <ul role="list" class="divide-y divide-gray-100">
      {#each verticals as vertical}
        <li class={`flex gap-x-2 py-2 ${selectedVerticalName === vertical.name ? 'bg-blue-100 rounded-lg p-2' : 'p-2'}`}>
            <input type="radio" class="visually-hidden" id={`vertical-${vertical.id}`} name="vertical" value={vertical.name} bind:group={selectedVerticalName} on:change={handleRadioChange} />
            <label for={`vertical-${vertical.id}`} class="cursor-pointer flex items-center gap-x-2 w-full">
            <div class={`h-8 w-8 flex-none rounded-full flex items-center justify-center text-xs ${selectedVerticalName === vertical.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              {vertical.name.charAt(0)}
            </div>
            <div class="min-w-0 flex-grow">
              <p class="text-xs font-medium leading-5 text-gray-900">{vertical.name}</p>
            </div>
          </label>
        </li>
      {/each}
    </ul>
</div>

<style>
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
</style>
