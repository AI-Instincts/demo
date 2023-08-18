<!-- ThreeColumnComponent.svelte -->
<div class="h-screen mx-auto p-4">
    <div class="grid grid-cols-3 gap-4">
      <div class="p-4 shadow-lg">
        <slot name="column1">Default content for Column 1</slot>
      </div>
      <div class="p-4 shadow-lg h-screen">
        <slot name="column2">Default content for Column 2</slot>
      </div>
      <div class="p-4 shadow-lg">
        <slot name="column3">Default content for Column 3</slot>
      </div>
    </div>
  </div>
  