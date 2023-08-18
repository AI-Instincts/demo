<script lang="ts">
	import Companies from "$lib/components/Companies.svelte";
	import ThreeCols from "$lib/components/ThreeCols.svelte";
	import Verticals from "$lib/components/Verticals.svelte";
	import { fade, slide } from "svelte/transition";
	import Toast from "./ui/Toast.svelte";

    let selectedVertical: string;
    let selectedCompany: string;
</script>

<div>
    <ThreeCols>
        <div slot="column1">
            <Verticals bind:selectedVerticalName={selectedVertical} />
        </div>
        <div slot="column2">
            <!-- Use a unique key for the h1 element based on the values of selectedVertical and selectedCompany -->
            <div>
                {#key `${selectedVertical}-${selectedCompany}`}
                    <h1 transition:slide class="font-medium text-center mr-12">{selectedVertical} & {selectedCompany}</h1>
                {/key}
            </div>
        </div>
        <div slot="column3">
            <Companies bind:selectedCompany={selectedCompany} />
        </div>
    </ThreeCols>
</div>
