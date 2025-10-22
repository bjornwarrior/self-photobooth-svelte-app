<script lang="ts">
	const hai = () => {
		alert('hai');
	};
</script>

<style>
	@keyframes slowPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.50;
  }
}

.slow-pulse {
  animation: slowPulse 4s ease-in-out infinite;
  font-weight: 600;
}

</style>

<div
	style="background-color: #fffff7;"
	class="eask flex max-h-svh min-h-svh w-full flex-col justify-between px-10"
>
	<div class=" flex w-full justify-between">
		<img src="./img/left-telephones.png" alt="Telephones" class="max-h-48" />
		<img src="./img/right-telephones.png" alt="Telephones" class="max-h-40" />
	</div>
	<div class="w-ful flex justify-evenly">
		<img src="./img/frameGroup.png" alt="Kelompok Frame" class="" />
		<div class="flex flex-col justify-around">
			<h1 class="text-end text-8xl font-[1000] italic text-shadow-2xs">ELEGANT42</h1>
			<h3 class="text-end text-6xl font-medium text-shadow-2xs">
				PROFFESIONAL <br />SELF-PHOTOBOOTH
			</h3>
			<h4 class="text-md text-start text-2xl font-light text-shadow-2xs">
				TAKE PICTURES & SHARE YOUR EXPERIENCE <br />IT'S TIME TO SHOW YOUR BEAUTY MAKE <br />PEOPLES
				LOOKS YOUR OWN CHARACTER
			</h4>
			<h2 class="text-shadow text-center text-2xl font-extrabold">
				LET'S MAKE YOUR OWN PERSONA <br />
				LOOKS BRAVE & ELEGANT
			</h2>
		</div>
	</div>
	<div class="flex items-center justify-between">
		<img src="./img/man-pose-2.png" class="max-h-64" alt="man sitdown pose" />
		<button onclick={hai} class="text-md cursor-pointer h-full flex-1 text-center">
			<p class="slow-pulse">PRESS HERE TO START YOUR JOURNEY</p>
		</button>
		<img src="./img/man-pose-1.png" class="max-h-64" alt="man sitdown pose" />
	</div>
</div>
