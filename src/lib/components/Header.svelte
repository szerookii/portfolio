<script lang="ts">
    import Header from "$lib/images/header.png";
    import szeroki from "$lib/images/szeroki.png";
</script>

<section class="h-full w-full">
    <img
            class="max-h-56 w-full object-cover block object-center"
            src={Header}
    >

    <div class="w-full shrink-0 flex items-center justify-start max-lg:pl-8 lg:pl-44 xl:pl-96">
        <img
                class="-mt-16 h-32 w-32 rounded-full"
                src={szeroki}
        >
    </div>

    <div class="w-full pr-8 shrink-0 grid items-center justify-start max-lg:pl-8 lg:px-44 xl:px-96">
        <p class="text-white text-4xl pt-8 font-bold">Développeur & Beatmaker</p>

        <p class="text-white text-xl py-8">Je suis szeroki, développeur et beatmaker passionné depuis 2016, je
            travaille
            principalement avec C++ et Golang. Je suis aussi intéressé par la rétro-ingénierie.</p>

        <!-- TODO : Add links -->
    </div>
</section>