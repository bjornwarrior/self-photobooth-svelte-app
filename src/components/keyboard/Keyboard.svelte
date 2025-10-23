<script lang="ts">
  export let name1: string = '';
  export let name2: string = '';
  export let width: string|number = '50';
  export let activeInput: string = 'name1';


  // List tombol virtual keyboard
  const keys = [
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L",
    "Z","X","C","V","B","N","M",
    "Backspace"
  ];

  // Fungsi handle penekanan tombol virtual keyboard
  function handleKeyPress(key: any) {
    if (activeInput === "name1") {
      if(key === "Backspace") {
        name1 = name1.slice(0, -1);
      } else {
        name1 += key;
      }
    } else if (activeInput === "name2") {
      if(key === "Backspace") {
        name2 = name2.slice(0, -1);
      } else {
        name2 += key;
      }
    }
  }
</script>


<div class="mx-auto p-4">
  <!-- Keyboard virtual -->
  <div class="">
    <div class="flex gap-2 justify-center">
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-center gap-2">
          {#each keys.slice(0, 10) as key}
            <button
              class="flex items-center justify-center {width} aspect-square text-[#010101]} outline-1 font-semibold hover:bg-[#010101] hover:text-[#fafafa] active:bg-gray-600 transition"
              on:click={() => handleKeyPress(key)}
            >
              {key === "Backspace" ? "⌫" : key}
            </button>
          {/each}
        </div>
        <div class="flex items-center justify-center gap-2">
          {#each keys.slice(10, 19) as key}
            <button
              class="flex items-center justify-center {width} aspect-square text-[#010101]} outline-1 font-semibold hover:bg-[#010101] hover:text-[#fafafa] active:bg-gray-600 transition"
              on:click={() => handleKeyPress(key)}
            >
              {key === "Backspace" ? "⌫" : key}
            </button>
          {/each}
        </div>
        <div class="flex items-center justify-center gap-2">
          {#each keys.slice(19, keys.length) as key}
            <button
              class="flex items-center justify-center {width} aspect-square text-[#010101]} outline-1 font-semibold hover:bg-[#010101] hover:text-[#fafafa] active:bg-gray-600 transition"
              on:click={() => handleKeyPress(key)}
            >
              {key === "Backspace" ? "⌫" : key}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
