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

	<div class="flex flex-col gap-10 z-10">
		<div class='
			text-center text-4xl font-bold outline-4 px-[10vw] py-4 mx-40
			bg-[#D9D9D9]
			border-[#010101] shadow-xl
		'>
			FILL YOUR SECRET SINDICATE HERE
		</div>
		<div class="flex justify-evenly">
            <div class='flex'>
                <FrameFirst />
                <FrameFirst />
            </div>
            <div class='flex flex-col justify-between min-h-[70vh]'>
                <label class="" for="name1">
                    <h1 class='font-bold text-4xl'>YOUR COOL SINDICATE</h1>
                    <input name="name1" class="bg-[#d9d9d9] py-2 px-2 w-[35vw] mt-3 outline-1" type="text" id="name1">
                </label>
                <label class="" for="name2">
                    <h1 class='font-bold text-4xl'>YOUR IMPORTANT FRIEND</h1>
                    <input name="name2" class="bg-[#d9d9d9] py-2 px-2 w-[35vw] mt-3 outline-1" type="text" id="name1">
                </label>
                <div class="flex gap-6 justify-end cursor-pointer">
                    <button
                    onclick={anjay}
                    class="text-center h text-xl cursor-pointer font-bold px-16 py-3 text-[#010101] bg-[#FAFAFA] border border-[#010101] shadow-xl"
                    >
                    BACK
                    </button>
                    <button
                    onclick={anjay}
                    class="text-center h text-xl cursor-pointer font-bold px-20 py-3 bg-[#010101] text-[#FAFAFA] border border-[#010101] shadow-xl"
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
