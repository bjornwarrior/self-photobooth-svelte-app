<script lang="ts">
  import type { FrameData } from "$lib/types/frameTypes";
  export let frameData: FrameData;
  export let name1 = "FARRAS";
  export let name2 = "AKRA";
  export let photos: string[] = [];

  const gridClass = `grid grid-cols-${frameData.grid_cols} grid-rows-${frameData.grid_rows} `;
</script>

<svelte:head>
  <link rel="stylesheet" href={frameData.font_url_name} />
  <link rel="stylesheet" href={frameData.font_url_brand} />
</svelte:head>

<div
  class={`aspect-2/6 max-h-[50vh] h-[50vh] bg-amber-600`}
>
  <div class={` max-h-full h-full p-2 rounded-md justify-around bg-[#010101] ${gridClass} bg-[${frameData.background_color_hex}] text-[${frameData.color_name_hex}]`}>
    {#each Array(frameData.grid_rows * frameData.grid_cols) as _, i}
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img
        src={photos[i] || "./img/models1.png"}
        alt="photo"
        class="object-cover w-full rounded-md"
        on:error={(e: any) => (e.target.src = "./img/models1.png")}
      />
    {/each}
    <div class="flex bg-slate-100 justify-evenly max-h-[10vh] flex-col items-center">
      <h1 class="text-sm font-bold uppercase" style={`font-family: '${frameData.font_family_name}', serif; color: ${frameData.color_name_hex}`}>
        {name1}
      </h1>
      <h2 class="text-xs font-bold uppercase" style={`font-family: '${frameData.font_family_name}', serif; color: ${frameData.color_name_hex}`}>
        {name2}
      </h2>
  
      <hr class="w-1/2 border-t border-gray-400" />
      <p class="text-xs opacity-80">{new Date().toLocaleDateString()}</p>
      <p class="text-sm font-semibold"
      style={`font-family: '${frameData.font_family_brand}', sans-serif; color: ${frameData.color_brand_hex}`}
      >{frameData.brand_name}</p>
    </div>
  </div>

</div>

<style>
  div {
    transition: all 0.5s ease-in-out;
  }
  img {
    animation: fadeLoop 3s ease-in-out infinite alternate;
  }
  @keyframes fadeLoop {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
</style>
