<script lang="ts">
  let name1 = "";
  let name2 = "";
  let activeInput = "name1";

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

  // Ganti input aktif saat fokus
  function setActive(inputName: any) {
    activeInput = inputName;
  }
</script>

<style>
  /* Override Tailwind if needed */
</style>

<div class="max-w-md mx-auto p-4">
  <!-- Input pertama -->
  <input
    class="w-full mb-4 p-2 text-lg border border-gray-600 rounded bg-white text-black"
    type="text"
    bind:value={name1}
    on:focus={() => setActive("name1")}
    placeholder="Input name 1"
    readonly
  />

  <!-- Input kedua -->
  <input
    class="w-full mb-6 p-2 text-lg border border-gray-600 rounded bg-white text-black"
    type="text"
    bind:value={name2}
    on:focus={() => setActive("name2")}
    placeholder="Input name 2"
    readonly
  />

  <!-- Keyboard virtual -->
  <div class=" p-4 rounded-lg select-none shadow-lg">
    <div class="flex flex-wrap gap-2 justify-center">
      {#each keys as key}
        <button
          class="flex items-center justify-center w-10 h-10 rounded-md text-white font-semibold hover:bg-gray-700 active:bg-gray-600 transition"
          on:click={() => handleKeyPress(key)}
        >
          {key === "Backspace" ? "⌫" : key}
        </button>
      {/each}
    </div>
  </div>
</div>
