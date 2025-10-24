<script lang="ts">
	import { dataFrames } from "$lib/data/frames.svelte";
	import { currentFrame } from "$lib/state/package.svelte";
	import Frame from "../../components/frames/Frame.svelte";
	import FrameFirst from "../../components/frames/FrameFirst.svelte";

	const anjay = () => {
		alert('anjay');
	}

	let selectedFrame = $state<number>(1)
	const handleClickFrame = (id: number) => {
		selectedFrame = id
	}
</script>

<div
	style="background-color: #fffff7;"
	class="eask flex max-h-svh min-h-svh w-full flex-col items-center justify-center px-10"
>
	<div class=" absolute top-0 flex w-full justify-between px-10">
		<img src="./img/left-telephones.png" alt="Telephones" class="max-h-48" />
		<img src="./img/right-telephones.png" alt="Telephones" class="max-h-40" />
	</div>

	<div class="flex flex-col gap-10 z-10">
		<div class='
			text-center text-4xl font-bold outline-4 px-6 py-4 mx-40
			bg-[#D9D9D9]
			border-[#010101] shadow-xl
		'>
			SELECT YOUR STYLE BELOW HERE
		</div>
		<div class='flex gap-10 w-[1350px] max-w-[1350px] overflow-x-auto custom-scrollbar ps-2 pe-2 pt-2 pb-8'>
			{#each dataFrames as frame}
				{#if frame.id === selectedFrame}
					<div 
					class="flex cursor-pointer outline-4 p-1">
						<Frame name1='RASZZZKING' name2='AKRA' data={frame} />
						<Frame name1='RASZZZKING' name2='AKRA' data={frame} />
					</div>
				{:else}
					<button 
					onclick="{() => handleClickFrame(frame.id)}"
					class="flex cursor-pointer">
						<Frame name1='RASZZZKING' name2='AKRA' data={frame} />
						<Frame name1='RASZZZKING' name2='AKRA' data={frame} />
					</button>
					 <!-- else content here -->
				{/if}
				 <!-- content here -->
			{/each}
		</div>
		<div class="flex justify-end cursor-pointer">
			<button
			onclick={anjay}
			class="text-center h text-xl cursor-pointer font-semibold px-20 py-3 bg-[#010101] text-[#FAFAFA] border border-[#010101] shadow-xl"
			
			>
			NEXT
			</button>
		</div>
	</div>
    <div class="absolute bottom-0 flex w-full items-end justify-between px-8">
		<img src="./img/woman-pose-1.png" class="max-h-64" alt="woman sitdown pose" />
		<img src="./img/woman-pose-2.png" class="max-h-64" alt="woman sitdown pose" />
	</div>
</div>


<style>
  /* WebKit browsers */
  .custom-scrollbar::-webkit-scrollbar {
    height: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #D9D9D9; /* warna abu-abu */
    border-radius: 0;           /* hapus lengkungan */
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #010101; /* warna hitam */
    border-radius: 0;           /* hapus lengkungan */
    border: none;               /* tanpa border */
  }

  /* Menghilangkan tombol panah yang biasanya ada pada scrollbar di browser lama */
  .custom-scrollbar::-webkit-scrollbar-button {
    display: none;
  }

  /* Firefox */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #010101 #D9D9D9;
  }

  /* Menghilangkan sudut scrollbar di Firefox */
  .custom-scrollbar::-moz-scrollbar-corner {
    background-color: transparent;
  }
</style>