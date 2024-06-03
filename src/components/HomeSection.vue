<template>
    <div>
        <section class="home relative bg-gray-900 text-white" id="home">

            <div class="intro-container inset-0 flex flex-col justify-center items-center z-10">
                <h1 class="text-4xl md:text-8xl font-sans font-bold text-gray-100" data-aos="fade-down" data-aos-delay="300">Hei, jeg heter Christian</h1>
                <p class="text-xl md:text-4xl font-bold text-gray-100 mt-4" data-aos="fade-in" data-aos-delay="500">Front-End Utvikler</p>
                <p class="text-md md:text-xl italic text-gray-100 mt-2" data-aos="zoom-in" data-aos-delay="600">Skaper moderne webopplevelser</p>

                <a href="#portfolio" class="bg-indigo-500 hover:bg-indigo-600 mt-8 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10" data-aos="fade-up" data-aos-delay="800">
                    Se Mine Prosjekter
                </a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomeSection'
}
</script>

<style scoped>
.gradient-canvas {
    background: linear-gradient(45deg, #6366f1, #a469dd);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
