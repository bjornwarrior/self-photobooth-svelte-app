<script lang="ts">
	import FrameFirst from '../../components/frames/FrameFirst.svelte';

	const anjay = () => {
		alert('anjay');
	};
</script>

<div
	style="background-color: #fffff7;"
	class="eask flex max-h-svh min-h-svh w-full flex-col items-center justify-center px-10"
>
	<div class=" absolute top-0 flex w-full justify-between px-10">
		<img src="./img/left-telephones.png" alt="Telephones" class="max-h-[30vh]" />
		<img src="./img/right-telephones.png" alt="Telephones" class="max-h-[25vh]" />
	</div>

	<div class="z-10 flex flex-col scale-80 justify-between gap-10 items-center">
		<div class="flex flex-col gap-6 items-center">
			<h1 class="text-8xl font-extrabold text-shadow-2xs text-shadow-zinc-950">THANKS!</h1>
			<h5 class="text-start text-2xl font-extralight tracking-[.25em] italic">
				<span class="font-semibold">SCAN</span>
                AND
				<span class="font-semibold">DOWNLOAD</span>
				YOUR MOMENTS HERE
			</h5>
		</div>
		<div class="flex flex-col gap-8 bg-[#f4f4f6] p-8 shadow-2xl max-w-96 outline-2">
			<div class="gap-4 bg-[#D9D9D9] p-4 outline-2">
                    <img src="./img/QR.png" class='object-scale-down' alt="kode QR">
            </div>

			<h2 class='text-4xl font-semibold text-center'>SCAN HERE</h2>
		</div>
		<h5 class="text-center text-xl font-black tracking-widest">
			MAKE SURE THAT YOUR LIFE ALWAYS OKAY!<br />
			<span class='font-medium'>SEE YOU AGAIN</span>
		</h5>
	</div>
	<div class="absolute bottom-0 flex w-full items-end justify-between px-8">
		<img src="./img/woman-pose-1.png" class="max-h-[35vh] h-[35vh]" alt="woman sitdown pose" />
		<img src="./img/woman-pose-2.png" class="max-h-[35vh] h-[35vh]" alt="woman sitdown pose" />
	</div>
</div>
