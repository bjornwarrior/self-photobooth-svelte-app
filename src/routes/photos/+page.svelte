<script lang="ts">
	import IconArrowCounterClockwiseBold from 'phosphor-icons-svelte/IconArrowCounterClockwiseBold.svelte';
	import IconCheckBold from 'phosphor-icons-svelte/IconCheckBold.svelte';
	import IconCameraBold from 'phosphor-icons-svelte/IconCameraBold.svelte';
	import IconMonitorFill from 'phosphor-icons-svelte/IconMonitorFill.svelte';

	// let totalPhoto = $props().total;
	let photoList = $state<{
		data: {
			image: File | null;
			url: string | null;
		}[];
		total: number;
	}>({
		data: [],
		total: 4
		// total: totalPhoto,
	});

	let canRetake = $state<boolean>(false);
	let isShoot = $state<boolean>(true);
	let isPreviewNotBlank = $state<boolean>(false);
	let currentUrlPreviewPhoto = $state<String | null>(null);
	let queque = $state<number>(0);
    let finishedPhoto = $state<boolean>(false)
    let isPreview = $state<boolean>(false)

	const takePicture = () => {
		alert('take picture');
		addPreviewImage(queque, null, './img/models1.png');
		isShoot = false;
		currentUrlPreviewPhoto = './img/models1.png';
		canRetake = true;
        isPreview = false


        const dataFilter = photoList.data.filter((cb,i)=>{
                if( cb.url !== null ){
                    return true
                } else{
                    return false
                }
            })
        console.log('dataFilter count:  ' + dataFilter.length)
        if(Number(dataFilter.length) === photoList.total){
            finishedPhoto = true
        }
	};

	const retakePicture = () => {
		alert('retake picture');
		isShoot = true;
		currentUrlPreviewPhoto = null;
		console.log(queque);
		console.log(queque);
		photoList.data[queque] = {
			image: null,
			url: null
		};
		canRetake = false;
        finishedPhoto = false;
        isPreview = false
	};

	const previewResult = (url: string | null, i: number) => {
		if (url === null) return;
		alert('preview result: ' + url);
		photoList.data[i] = {
			image: null,
			url: url
		};
		queque = i;
		currentUrlPreviewPhoto = url;
		isShoot = false;
        isPreview = true;
		canRetake = true;
	};

	const previewShoot = () => {};

	const addPreviewImage = (index: number, photo: File | null, url: string) => {
		photoList.data[index] = {
			image: photo,
			url: url
		};
	};
	const successAddPicture = () => {
		try {
			photoList.data.map((photo, i) => {
				if (photo.url == null) {
					queque = i;
					isShoot = true;
					canRetake = false;
					throw new Error('Break the Loop');
				}
			});
		} catch (error: any) {}
	};

    const finishSession = () => {
        alert('SUCCESS!!')
    }
	const addPicture = (index: number, photo: File | null, url: string) => {
		// add to dbms
	};

	const blankPhoto = (index: number) => {
		isShoot = true;
		queque = index;
	};
	//VAR

	const totalPhotos = Array.from({ length: photoList.total });
	totalPhotos.forEach((_, i) => {
		photoList.data[i] = {
			image: null,
			url: null
		};
	});

	$inspect(photoList.data);
</script>

<div class="relative flex max-h-svh min-h-svh items-center bg-[#010101]">
	<div class="z-1 flex h-svh w-full flex-1 items-start justify-center pt-10">
		<button
			onclick={retakePicture}
			class="cursor-pointer p-2
            {!canRetake && 'hidden'}
    "
		>
			<IconArrowCounterClockwiseBold
				class="mt-4 h-40 w-40 scale-350 cursor-pointer text-[#fafafa]"
			/>
		</button>
	</div>
	<div
		class="relative aspect-video min-h-svh bg-cover bg-center bg-no-repeat"
		style={isShoot
			? 'background-color: #D9D9D9'
			: 'background-image: url(' + currentUrlPreviewPhoto + ')'}
	>
		<!-- ABSOLUTE -->
		<div class="absolute bottom-0 z-2 mb-20 flex w-full justify-evenly">
			{#each totalPhotos as _, i}
				<!-- content here -->
				{#if photoList.data[i] != null && photoList.data[i].url != undefined && photoList.data[i].url != null}
					<!-- content here -->
					<button
						onclick={() => previewResult(photoList.data[i].url, i)}
						aria-label="gambar hasil ke"
						class="cursor-pointer
                        {queque == i && 'outline-2 p-1'}

                        "
					>
						<img
							src={photoList.data[i].url}
							alt="human"
							class="aspect-video h-36 object-cover {
                                                    queque == i ? '' : 'outline-1'
                            }"
						/>
					</button>
				{:else}
					<!-- else content here -->
					<button
						onclick={() => blankPhoto(i)}
						aria-label="gambar hasil ke "
						class="cursor-pointer
                        {queque == i && 'outline-2 p-1'}
                        "
					>
						<div class="aspect-video h-36 bg-[#010101]/40 {
                        queque == i ? '' : 'outline-1'
                        }"></div>
					</button>
				{/if}
			{/each}
		</div>
		<!-- ABSOLUTE -->
	</div>
	<div class="z-1 flex h-svh w-full flex-1 items-start justify-center pt-10">
		<button
			class="cursor-pointer p-2
            {(isShoot || finishedPhoto || isPreview ) && 'hidden'  
            }
            "
			onclick={() => successAddPicture()}
		>
			<IconCheckBold class="mt-4 h-40 w-40 scale-350 text-[#fafafa]" />
		</button>
		<button
			class="cursor-pointer p-2
            {!isShoot && 'hidden'}
            "
			onclick={takePicture}
		>
			<IconCameraBold class="mt-4 h-40 w-40 scale-350 text-[#fafafa]" />
		</button>
		<button
			class="cursor-pointer p-2
            {!finishedPhoto && 'hidden'}
            "
			onclick={finishSession}
		>
			<IconMonitorFill class="mt-4 h-40 w-40 scale-350 text-[#fafafa]" />
		</button>
	</div>
</div>
