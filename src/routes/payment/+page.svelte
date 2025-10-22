<script lang="ts">
	const handlePayment = () => {
		alert('pay with ' + paymentOptions );
	};

	let paymentOptions = $state('qris');
</script>

<div
	style="background-color: #fffff7;"
	class="eask flex max-h-svh min-h-svh w-full flex-col items-center justify-center px-10"
>
	<div class=" absolute top-0 flex w-full justify-between px-10">
		<img src="./img/left-telephones.png" alt="Telephones" class="max-h-48" />
		<img src="./img/right-telephones.png" alt="Telephones" class="max-h-40" />
	</div>
	<div class="flex w-full items-center justify-evenly">
		<div class="flex flex-col items-center gap-10">
			<div class="flex transform">
				<div class="-rotate-6 transform">
					<img src="./img/frame1.png" alt="frame_photo" />
				</div>
				<div class="z-1 -ml-4 rotate-6 transform">
					<img src="./img/frame2.png" alt="frame_photo" />
				</div>
				<div class="-mr-4 ml-10 -rotate-6 transform">
					<img src="./img/frame3.png" alt="frame_photo" />
				</div>
				<div class="rotate-6 transform">
					<img src="./img/frame4.png" alt="frame_photo" />
				</div>
			</div>
			<h3 class="text-4xl font-extralight">ONLY WITH 30K</h3>
			<h3 class="-mt-8 text-6xl font-extrabold italic">CAN MAKE YOUR DAY!</h3>
		</div>
		<div class="flex flex-col gap-8 bg-[#f4f4f6] p-8 shadow-2xl outline-2">
			<div class="flex flex-col gap-4 bg-[#D9D9D9] p-6 outline-2">
				<button
					onclick={() => (paymentOptions = 'qris')}
					class="flex h-40 w-80 transform items-center justify-center text-center text-4xl
           font-extrabold transition-transform ease-in-out duration-300
           {paymentOptions !== 'qris'
						? 'bg-[#fafafa] text-[#010101] outline-2'
						: 'bg-[#010101] text-[#fafafa]'}"
				>
					QRIS
				</button>
				<div class="border-t-2"></div>
				<button
					onclick={() => (paymentOptions = 'gopay')}
					class="flex h-40 w-80 transform items-center justify-center text-center text-4xl
           font-extrabold transition-transform ease-in-out duration-300
           {paymentOptions === 'qris'
						? 'bg-[#fafafa] text-[#010101] outline-2'
						: 'bg-[#010101] text-[#fafafa]'}"
				>
					GOPAY
				</button>
			</div>

			<button
                onclick={handlePayment}
				style="background:#010101;"
				class="h-14 items-center text-center text-xl font-bold text-[#fafafa]"
			>
				<p>PAY HERE WITH {
                    paymentOptions === 'qris'
                    ? 'QRIS'
                    : 'GOPAY'
                    }</p>
			</button>
		</div>
	</div>
	<div class="absolute bottom-0 flex w-full items-end justify-between px-8">
		<img src="./img/woman-pose-1.png" class="max-h-64" alt="woman sitdown pose" />
		<img src="./img/woman-pose-2.png" class="max-h-64" alt="woman sitdown pose" />
	</div>
</div>
