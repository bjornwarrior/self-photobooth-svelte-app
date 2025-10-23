<script lang="ts">
	// import {name1, name2 } from '$lib/const/name.svelte';
	import FrameFirst from '../../components/frames/FrameFirst.svelte';
	import Keyboard from '../../components/keyboard/Keyboard.svelte';

	const anjay = () => {
		alert('anjay');
	};

    let activeInput = $state('name1');

	// Ganti input aktif saat fokus
	function setActive(inputName: any) {
		activeInput = inputName;
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

	<div class="z-10 flex flex-col gap-10">
		<div
			class="
			mx-40 border-[#010101] bg-[#D9D9D9] px-[10vw] py-4 text-center text-4xl
			font-bold
			shadow-xl outline-4
		"
		>
			FILL YOUR SECRET SINDICATE HERE
		</div>
		<div class="flex justify-evenly">
			<div class="flex">
				<FrameFirst />
				<FrameFirst name2="AURORA" />
			</div>
			<div class="flex min-h-[70vh] flex-col justify-between">
				<label class="" for="name1">
					<h1 class="text-4xl font-bold">YOUR COOL SINDICATE</h1>
                    <!-- bind:value={name1} -->
					<input
						onfocus={() => setActive('name1')}
						class="mt-6 w-full bg-[#d9d9d9] px-2 py-3 outline-1"
						type="text"
						id="name1"
					/>
				</label>
				<label class="" for="name2">
					<h1 class="text-4xl font-bold">YOUR IMPORTANT FRIEND</h1>
                    <!-- bind:value={name2} -->
					<input
						onfocus={() => setActive('name2')}
						class="mt-6 w-full bg-[#d9d9d9] px-2 py-3 outline-1"
						type="text"
						id="name2"
					/>
				</label>
				<Keyboard width={'w-15'} activeInput={activeInput} name1={'farras'} name2={'name2'} />
				<div class="flex cursor-pointer justify-end gap-6">
					<button
						onclick={anjay}
						class="h cursor-pointer border border-[#010101] bg-[#FAFAFA] px-16 py-3 text-center text-xl font-bold text-[#010101] shadow-xl"
					>
						BACK
					</button>
					<button
						onclick={anjay}
						class="h cursor-pointer border border-[#010101] bg-[#010101] px-20 py-3 text-center text-xl font-bold text-[#FAFAFA] shadow-xl"
					>
						NEXT
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="absolute bottom-0 flex w-full items-end justify-between px-8">
		<img src="./img/woman-pose-1.png" class="max-h-64" alt="woman sitdown pose" />
		<img src="./img/woman-pose-2.png" class="max-h-64" alt="woman sitdown pose" />
	</div>
</div>
