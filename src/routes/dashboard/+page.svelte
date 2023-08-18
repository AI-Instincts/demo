<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Companies from "$lib/components/Companies.svelte";
	import TemplateSelector from "$lib/components/TemplateSelector.svelte";
	import ThreeCols from "$lib/components/ThreeCols.svelte";
	import Verticals from "$lib/components/Verticals.svelte";
	import Toast from "$lib/components/ui/Toast.svelte";
	import { fade, slide } from "svelte/transition";

    let selectedVertical: string;
    let selectedCompany: string;
</script>

<div class="">
    <ThreeCols>
        <div slot="column1">
            <Verticals bind:selectedVerticalName={selectedVertical} />
        </div>
        <div slot="column2">
            <div class="flex flex-col items-center space-y-12">
                <!-- Wrap the h1 in its own container -->
                <div>
                    {#key `${selectedVertical}-${selectedCompany}`}
                        <h1 transition:slide class="font-medium text-center">{selectedVertical} & {selectedCompany}</h1>
                    {/key}
                </div>
                <Button>Activate</Button>
                <TemplateSelector/>

            </div>
        </div>
        <div slot="column3">
            <Companies bind:selectedCompany={selectedCompany} />
        </div>
    </ThreeCols>
</div>
