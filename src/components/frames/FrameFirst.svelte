<script lang="ts">
	  import type { FrameData } from "$lib/types/frameTypes";
  export let frameData: FrameData;

	export let name1 = 'FARRAS';
	export let name2 = 'SOMEONE?';
	// export let hexbg = '#FAFAFA';
	export let hextext = '#010101';
	export let font = 'handwritten-font';
</script>

<svelte:head>
  <link rel="stylesheet" href={frameData.font_url_name} />
  <link rel="stylesheet" href={frameData.font_url_brand} />
</svelte:head>

<!-- UNTUK FRAME NYATA UKURAN NYA 2/6 UNTUK 2 R YAITU 12REM X 36REM -->
<div
	style="background-color: {frameData.background_color_hex}; outline-color: {frameData.outline_hex}"
	class="flex max-w-[9rem] max-h-[27rem] h-[27rem] aspect-2/6  w-[9rem] asepct flex-col gap-1 bg-[#FAFAFA]  p-2 outline-opacity-30 shadow outline-1"
>
	<div class="flex flex-col gap-2">
		<img src="./img/models1.png" class="w-full object-scale-down" alt="foto1" />
		<img src="./img/models1.png" class="w-full object-scale-down" alt="foto1" />
		<img src="./img/models1.png" class="w-full object-scale-down" alt="foto1" />
	</div>

	<div
		class="
    {font}
	flex flex-col p-2 h-full  justify-around text-center text-[{hextext}]
	"
	>
		{#if name2}
			<h1 
			style={`font-family: '${frameData.font_family_name}', sans-serif; color: ${frameData.color_name_hex}`}
			class=" text-lg font-bold uppercase">
				{name1}
			</h1>
			<h1
			style={`font-family: '${frameData.font_family_name}', sans-serif; color: ${frameData.color_name_hex}`}
			class=" mb-2 text-lg font-bold uppercase">
				{name2 ? name2 : ''}
			</h1>
		{:else}
			<h1
			style={`font-family: '${frameData.font_family_name}', sans-serif; color: ${frameData.color_name_hex}`}
			class="text-4xl whitespace-pre mb-2 font-bold uppercase">
				{name1}
			</h1>
		{/if}

		<hr style="border-color: {frameData.mid_border_hex};" />
		<h1 class="mt-4 text-xs font-light"
		style={`font-family: '${frameData.font_family_brand}', sans-serif; color: ${frameData.color_brand_hex}`}
		>{new Date().toLocaleDateString().split('/').join(' ')}</h1>
		<h1 class="text-xs font-semibold"
		style={`font-family: '${frameData.font_family_brand}', sans-serif; color: ${frameData.color_brand_hex}`}
		>{frameData.brand_name}</h1>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

	.handwritten-font {
		font-family: 'Times New Roman', Times, serif;
	}

	.custom-outline {
		outline: 2.5px solid black; /* Outline tebal 4px warna hitam */
		outline-offset: 2px; /* Jarak outline dari elemen (opsional) */
	}
</style>
