<script lang="ts">
	import FrameFirst from "../../components/frames/FrameFirst.svelte";

	const anjay = () => {
		alert('anjay');
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

    <div class="absolute
    
    py-6 font-bold w-4 px-8 break-all text-xl bg-[#010101] text-[#FAFAFA] right-0
    ">
    PRINT
</div>
	<div class="flex justify-center gap-64 items-center z-10 w-full">
        <div class="flex transform">
            <div class='transform -rotate-8'>
                <FrameFirst name1="FARRAS" name2="AURORA" hextext="#010101" font="handwritten-font" />
            </div>
            <div class='transform rotate-8'>
                <FrameFirst name1="FARRAS" name2="AURORA" hextext="#010101" font="handwritten-font" />
            </div>
        </div>
        <div class='flex flex-col gap-10 justify-between'>
            <div class="flex flex-col gap-2">
                <h1 class="text-8xl font-extrabold text-shadow-zinc-950 text-shadow-2xs">
                    AWESOME!
                </h1>
                <h5 class='italic tracking-[.25em] text-2xl font-extralight text-start'>
                    <span class='font-semibold'>GREAT! YOU'VE TAKE HISTORICAL</span>
                    <br>
                    MOMENTS HERE FOR <span class="font-black">YOURSELF</span>
                </h5>
            </div>
            <div class="flex justify-evenly">
                <img class="w-52 object-scale-down outline-1" src="./img/models1.png" alt="models1">
                <img class="w-52 object-scale-down outline-1" src="./img/models1.png" alt="models1">
            </div>
            <div class="flex justify-evenly">
                <img class="w-52 object-scale-down outline-1" src="./img/models1.png" alt="models1">
                <img class="w-52 object-scale-down outline-1" src="./img/models1.png" alt="models1">
            </div>
            <h5 class='font-medium text-center text-xl tracking-widest '>
                DON'T FORGET <span class='font-bold'>SHARE YOUR MOMENT</span> ON<br>
                INSTAGRAM <span class:font-bold={true}>tag @elegant48</span>
            </h5>
        </div>
	</div>
    <div class="absolute bottom-0 flex w-full items-end justify-between px-8">
		<img src="./img/woman-pose-1.png" class="max-h-64" alt="woman sitdown pose" />
		<img src="./img/woman-pose-2.png" class="max-h-64" alt="woman sitdown pose" />
	</div>
</div>

