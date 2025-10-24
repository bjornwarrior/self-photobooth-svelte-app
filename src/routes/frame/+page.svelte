<script lang="ts">
  import { dataFrames } from "$lib/data/frames2.svelte";
  import { currentFrame } from "$lib/state/package.svelte";
  import Frame from "../../components/frames/Frame.svelte";

  let selectedFrame = $state<number>(currentFrame.id);

  const handleClickFrame = (frameId: number) => {
    selectedFrame = frameId;
    const selected = dataFrames.find((f) => f.id === frameId);
    if (selected) Object.assign(currentFrame, selected);
    loadFont(selected?.font_url_name || '');
  };

  const loadFont = (url: string) => {
    if (!url) return;
    const existing = document.querySelector(`link[href="${url}"]`);
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  };

  const nextStep = () => {
    alert(`Frame "${currentFrame.name}" telah dipilih!`);
  };
</script>

<div
  style="background-color: #fffff7;"
  class="flex min-h-svh max-h-svh w-full flex-col items-center justify-center px-10"
>
  <div class="absolute top-0 flex w-full justify-between px-10">
    <img src="./img/left-telephones.png" class="max-h-48" />
    <img src="./img/right-telephones.png" class="max-h-40" />
  </div>

  <div class="flex flex-col gap-10 z-10">
    <div class="text-center text-4xl font-bold px-6 py-4 mx-40 bg-[#D9D9D9] border-[#010101] shadow-xl">
      SELECT YOUR STYLE BELOW HERE
    </div>

    <div class="flex gap-10 w-[1350px] max-w-[1350px] h-[60vh] max-h-[60vh] overflow-x-auto custom-scrollbar p-2 pb-8">
      {#each dataFrames as frame}
        <div class="transition-transform duration-200">
          <button
            onclick={() => handleClickFrame(frame.id)}
            class={`cursor-pointer p-2 border-4 transition-all duration-300 ${
              frame.id === selectedFrame
                ? 'border-[#010101] scale-[101%] shadow-xl'
                : 'border-transparent opacity-80 hover:opacity-100'
            }`}
          >
            <Frame name1="RASZZZKING" name2="AKRA" frameData={frame} />
          </button>
        </div>
      {/each}
    </div>

    <div class="flex justify-end">
      <button
        onclick={nextStep}
        class="text-center text-xl font-semibold px-20 py-3 bg-[#010101] text-[#FAFAFA] border border-[#010101] shadow-xl hover:bg-[#222] transition-all duration-300"
      >
        NEXT
      </button>
    </div>
  </div>

  <div class="absolute bottom-0 flex w-full items-end justify-between px-8">
    <img src="./img/woman-pose-1.png" class="max-h-64" />
    <img src="./img/woman-pose-2.png" class="max-h-64" />
  </div>
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar {
    height: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #d9d9d9;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #010101;
  }
  .custom-scrollbar::-webkit-scrollbar-button {
    display: none;
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #010101 #d9d9d9;
  }
</style>
