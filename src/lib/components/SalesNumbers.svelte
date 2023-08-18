<script lang="ts">
  let data = [
    {
      "name": "Deals Won",
      "value": "$25,000,000",
      "change": "8%"
    },
    {
      "name": "Sales Forecast",
      "value": "$30,000,000",
      "change": "5%"
    },
    {
      "name": "Book to Bill",
      "value": ".93",
      "change": "2%"
    },
    {
      "name": "Backlog",
      "value": "$50,000,000",
      "change": "3%"
    },
    {
      "name": "Quotes Generated",
      "value": "150,000",
      "change": "10%"
    },
    {
      "name": "Opportunities",
      "value": "$40,000,000",
      "change": "7%"
    }
  ];

  function formatNumberWithCommas(number: number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getPreviousValueForDollar(value: string, change: string) {
    let percentage = parseFloat(change.replace('%', '')) / 100;
    return `$${formatNumberWithCommas(parseFloat(value.replace(/[^0-9.-]+/g,"")) / (1 + percentage))}`;
  }

  function getPreviousValueForNumber(value: string, change: string) {
    let percentage = parseFloat(change.replace('%', '')) / 100;
    return formatNumberWithCommas(parseFloat(value) / (1 + percentage));
  }

  function getPreviousValueForCount(value: string, change: string) {
    let percentage = parseFloat(change.replace('%', '')) / 100;
    return (parseFloat(value.replace(/,/g, "")) / (1 + percentage)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getPreviousValue(item: any) {
    if (item.name === "Book to Bill") {
      return getPreviousValueForNumber(item.value, item.change);
    } else if (item.name === "Quotes Generated") {
      return getPreviousValueForCount(item.value, item.change);
    } else {
      return getPreviousValueForDollar(item.value, item.change);
    }
  }
</script>

<div class="container mx-auto p-4">
  <h2 class="text-2xl font-bold">Sales Numbers</h2>
  <h3 class="text-base font-semibold leading-6 text-gray-900 mb-4">YTD</h3>
  <dl class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    {#each data as item}
      <div class="px-4 py-5 sm:p-4 hover:bg-blue-100 hover:cursor-pointer">
        <dt class="text-sm font-normal text-gray-900">{item.name}</dt>
        <dd class="mt-1 flex items-baseline justify-between">
          <div class="flex flex-col">
            <span class="text-xl font-semibold text-blue-600">{item.value}</span>
            <span class="text-sm font-medium text-gray-500">from {getPreviousValue(item)}</span>
          </div>
          <div class={`inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium ${item.change.startsWith('-') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            <svg class={`-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center ${item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d={`M10 ${item.change.startsWith('-') ? '3' : '17'}a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z`} clip-rule="evenodd" />
            </svg>
            <span class="sr-only"> {item.change.startsWith('-') ? 'Decreased by' : 'Increased by'} </span>
            {item.change}
          </div>
        </dd>
      </div>
    {/each}
  </dl>
</div>
