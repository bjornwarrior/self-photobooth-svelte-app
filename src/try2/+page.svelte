<script lang="ts">
  // Variabel input name
  let name = "";

  // Fungsi untuk handle penekanan tombol virtual keyboard
  function handleKeyPress(key: any) {
    if (key === "Backspace") {
      // Hapus karakter terakhir
      name = name.slice(0, -1);
    } else {
      // Tambahkan karakter yang ditekan
      name += key;
    }
  }

  // Daftar tombol keyboard virtual
  const keys = [
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L",
    "Z","X","C","V","B","N","M",
    "Backspace"
  ];
</script>

<style>
  .keyboard {
    display: flex;
    flex-wrap: wrap;
    max-width: 350px;
    gap: 5px;
  }
  button {
    flex: 1 0 8%;
    padding: 10px 0;
    font-size: 18px;
    cursor: pointer;
  }
  button.backspace {
    flex: 2 0 16%;
  }
  input {
    font-size: 20px;
    padding: 8px;
    width: 100%;
    margin-bottom: 10px;
  }
</style>

<!-- Input name yang akan diisi -->
<input type="text" bind:value={name} placeholder="Type your name here" readonly />

<!-- Virtual keyboard -->
<div class="keyboard">
  {#each keys as key}
    <button 
      class='{key === "Backspace" ? "backspace" : ""}' 
      on:click={() => handleKeyPress(key)}>
      {key === "Backspace" ? "⌫" : key}
    </button>
  {/each}
</div>
