<script lang="ts">
	import { goto } from "$app/navigation";
	import { dataFrames } from "$lib/data/frames2.svelte";
	import { stateCurrentFrame } from "$lib/state/package.svelte";
	import Frame from "../../components/frames/Frame.svelte";
	import FrameFirst from "../../components/frames/FrameFirst.svelte";

	const nextMove = () => {
		goto('/costum')
	}

	let selectedFrame = $state<number>(1)
	const handleClickFrame = (id: number) => {
		// cannot assign to import
		// https://svelte.dev/e/constant_assignment
		const currentFrame = dataFrames.find((f) => f.id === id);
		if (currentFrame) {
			const currentFrameCopy = { ...currentFrame };
			Object.assign(stateCurrentFrame, currentFrameCopy);
			selectedFrame = id
		}
	}
</script>

<div
	style="background-color: #fffff7;"
	class="eask flex max-h-svh min-h-svh w-full flex-col items-center justify-center px-10"
>
	<div class=" absolute top-0 flex w-full justify-between px-10">
		<img src="./img/left-telephones.png" alt="Telephones" class="max-h-[20vh]" />
		<img src="./img/right-telephones.png" alt="Telephones" class="max-h-[15vh]" />
	</div>

	<div class="flex flex-col gap-[4vh] z-10">
		<div 
		style="font-weight:bolder;"
		class='
			text-center text-2xl  outline-4 mx-24 py-3
			bg-[#D9D9D9]
			
			shadow-xl
		'>
			SELECT YOUR STYLE BELOW HERE
		</div>
		<!-- <div class='flex gap-10 w-[1350px] max-w-[1350px] overflow-x-auto custom-scrollbar ps-2 pe-2 pt-2 pb-8'> -->
		<div class='flex gap-10 w-[70vw] max-w-[70vw] overflow-x-auto custom-scrollbar ps-2 pe-2 pt-2 pb-2'>
			{#each dataFrames as frame}
				{#if frame.id === selectedFrame}
					<div 
					class="flex cursor-pointer outline-4 p-1">
						<FrameFirst name1='FARRAS' name2='AURORA' frameData={frame} />
						<FrameFirst name1='FARRAS' name2='AURORA' frameData={frame} />
					</div>
				{:else}
					<button 
					onclick="{() => handleClickFrame(frame.id)}"
					class="flex cursor-pointer">
						<FrameFirst name1='FARRAS' name2='AURORA' frameData={frame} />
						<FrameFirst name1='FARRAS' name2='AURORA' frameData={frame} />
					</button>
					 <!-- else content here -->
				{/if}
				 <!-- content here -->
			{/each}
		</div>
		<div class="flex justify-end cursor-pointer">
			<button
			onclick={nextMove}
			class="text-center h text-xl cursor-pointer font-semibold px-20 py-3 bg-[#010101] text-[#FAFAFA] border border-[#010101] shadow-xl"
			
			>
			NEXT
			</button>
		</div>
	</div>
    <div class="absolute bottom-0 flex w-full items-end justify-between px-8">
		<img src="./img/woman-pose-1.png" class="max-h-[20vh]" alt="woman sitdown pose" />
		<img src="./img/woman-pose-2.png" class="max-h-[20vh]" alt="woman sitdown pose" />
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