<script lang="ts">
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher()

    let companies = [
      { id: 1, name: "Amplitech" },
      { id: 2, name: "MMIC" },
      { id: 3, name: "Specialty Microwave" },
      { id: 4, name: "Spectrum" },
      { id: 5, name: "5G" }
    ];

    export let selectedCompany = 'Amplitech';
    function handleRadioChange(event: any) {
        selectedCompany = event.target.value;
        console.log(selectedCompany)
      dispatch('selectedCompanyChange', selectedCompany);
    }
</script>

<div class="container mx-auto p-2">
    <h2 class="text-xl font-bold mb-2">Select Company</h2>
    <ul role="list" class="divide-y divide-gray-100">
      {#each companies as company}
        <li class={`flex gap-x-2 py-2 ${selectedCompany === company.name ? 'bg-blue-100 p-2 rounded-lg' : 'p-2'}`}>
          <input type="radio" class="visually-hidden" id={company.id.toString()} name="company" value={company.name} bind:group={selectedCompany} on:change={handleRadioChange} />
          <label for={company.id.toString()} class="cursor-pointer flex items-center gap-x-2 w-full">
            <div class={`h-8 w-8 flex-none rounded-full flex items-center justify-center text-xs ${selectedCompany === company.name ?'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              {company.name.charAt(0)}
            </div>
            <div class="min-w-0 flex-grow">
              <p class="text-xs font-medium leading-5 text-gray-900">{company.name}</p>
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