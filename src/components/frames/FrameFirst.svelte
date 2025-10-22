<script>
	export let name1 = 'FARRAS';
	export let name2 = 'AURORA';
	// export let hexbg = '#FAFAFA';
	export let hextext = '#010101';
	export let font = 'handwritten-font';
</script>

<div
	class="flex flex-col gap-1 bg-[#FAFAFA]  p-2 outline-opacity-30 shadow outline-1 outline-[#010101]"
>
	<div class="flex flex-col gap-2">
		<img src="./img/models1.png" class="w-48 max-w-48 object-scale-down" alt="foto1" />
		<img src="./img/models1.png" class="w-48 max-w-48 object-scale-down" alt="foto1" />
		<img src="./img/models1.png" class="w-48 max-w-48 object-scale-down" alt="foto1" />
	</div>

	<div
		class="
    {font}
	flex flex-col p-2 text-center text-[{hextext}]
	"
	>
		{#if name2 === 'AURORA'}
			<h1 class=" text-2xl font-bold uppercase">
				{name1}
			</h1>
			<h1 class=" mb-2 text-2xl font-bold uppercase">
				{name2 ? name2 : ''}
			</h1>
		{:else}
			<h1 class="text-4xl whitespace-pre mb-2 font-bold uppercase">
				{name1}
			</h1>
		{/if}

		<hr />
		<h1 class="mt-4 text-xs font-light">{new Date().toLocaleDateString().split('/').join(' ')}</h1>
		<h1 class="text-xs font-semibold">ELEGANT42</h1>
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
