<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Companies from "$lib/components/Companies.svelte";
	import Steps from "$lib/components/Steps.svelte";
	import TemplateSelector from "$lib/components/TemplateSelector.svelte";
	import ThreeCols from "$lib/components/ThreeCols.svelte";
	import Verticals from "$lib/components/Verticals.svelte";
	import Toast from "$lib/components/ui/Toast.svelte";
	import { fade, slide } from "svelte/transition";
    import ThreeButtons from "$lib/components/ThreeButtons.svelte";

    let selectedVertical: string;
    let selectedCompany: string;

    function callGetBat() {
        fetch('/api/run', { 
        method: 'GET',
        headers: {
        'content-type': 'application/json'
        }
        })
        console.log('hi')
    }
</script>

<div class="">
    <ThreeCols>
        <div slot="column1">
            <Verticals bind:selectedVerticalName={selectedVertical} />
            <ThreeButtons/>
        </div>
        <div slot="column2">
            <div class="flex flex-col items-center space-y-12">
                <!-- Wrap the h1 in its own container -->
                <div>
                    {#key `${selectedVertical}-${selectedCompany}`}
                        <h1 transition:slide class="font-medium text-center">{selectedVertical} & {selectedCompany}</h1>
                    {/key}
                </div>
                <Button on:click={callGetBat}></Button>
                <TemplateSelector/>
            </div>
        </div>
        <div slot="column3">
            <Companies bind:selectedCompany={selectedCompany} />
            <Steps/>
        </div>
    </ThreeCols>
</div>
