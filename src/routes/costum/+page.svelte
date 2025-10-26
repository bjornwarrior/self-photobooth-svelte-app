<script lang="ts">
	import { goto } from '$app/navigation';
	import { stateCurrentFrame, stateUserData } from '$lib/state/package.svelte';

	// import {name1, name2 } from '$lib/const/name.svelte';
	import FrameFirst from '../../components/frames/FrameFirst.svelte';
	import Keyboard from '../../components/keyboard/Keyboard.svelte';

	const back = () => {
		goto('/frame')
	};
	const next = () => {
		goto('/result')
		stateUserData.username = name1
		stateUserData.username2 = name2
	};

	
    let name1 = $state('');
	let name2 = $state('');
	let activeInput = $state<'name1' | 'name2'>('name1');

	function setActive(inputName: 'name1' | 'name2') {
		activeInput = inputName;
	}

	function handleKeyPress(key: string) {
		if (activeInput === 'name1') {
			if (key === 'Backspace') {
				name1 = name1.slice(0, -1);
			} else {
				name1 += key;
			}
		} else if (activeInput === 'name2') {
			if (key === 'Backspace') {
				name2 = name2.slice(0, -1);
			} else {
				name2 += key;
			}
		}
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
			mx-40 border-[#010101] bg-[#D9D9D9] px-[10vw] py-3 text-center text-3xl
			font-bold
			shadow-xl outline-4
		"
		>
			FILL YOUR SECRET SINDICATE HERE
		</div>
		<div class="flex justify-evenly items-center">
			<div class="flex">
				<FrameFirst name1={name1} name2={name2} frameData={stateCurrentFrame} />
				<FrameFirst name1={name1} name2={name2} frameData={stateCurrentFrame} />
			</div>
			<div class="flex min-h-[70vh] flex-col gap-4 justify-between">
				<label class="" for="name1">
					<h1 class="text-3xl font-bold">YOUR COOL SINDICATE</h1>
					<input
                    	bind:value={name1}
						onfocus={() => setActive('name1')}
						class="mt-6 w-full bg-[#d9d9d9] px-2 py-3 outline-1"
						type="text"
						id="name1"
					/>
				</label>
				<label class="" for="name2">
					<h1 class="text-3xl font-bold">YOUR IMPORTANT FRIEND</h1>
					<input
                    	bind:value={name2}
						onfocus={() => setActive('name2')}
						class="mt-6 w-full bg-[#d9d9d9] px-2 py-3 outline-1"
						type="text"
						id="name2"
					/>
				</label>
				<Keyboard width={'w-12'} {handleKeyPress} />
				<div class="flex cursor-pointer justify-end gap-6">
					<button
						onclick={back}
						class="h cursor-pointer border border-[#010101] bg-[#FAFAFA] px-16 py-3 text-center text-xl font-bold text-[#010101] shadow-xl"
					>
						BACK
					</button>
					<button
						onclick={next}
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
