<template>
    <div>
        <section class="home relative">
            <canvas class="gradient-canvas absolute inset-0 z-20" ref="gradientCanvas"></canvas>

            <div class="intro-container absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 class="text-4xl md:text-8xl font-bold text-gray-800" data-aos="fade-down" data-aos-delay="300">Hello, I'm Christian</h1>
                <p class="text-xl md:text-4xl font-bold text-gray-600 mt-4" data-aos="fade-in" data-aos-delay="500">Front-End Developer</p>
                <p class="text-md md:text-xl italic text-gray-600 mt-2" data-aos="zoom-in" data-aos-delay="600">Crafting modern web experiences</p>
                <button class="mt-8 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" data-aos="fade-up" data-aos-delay="800">See My Work</button>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'HomeSection',
    mounted() {
        this.drawGradient();
        window.addEventListener('resize', this.drawGradient);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.drawGradient);
    },
    methods: {
        drawGradient() {
            const canvas = this.$refs.gradientCanvas;
            if (!canvas) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const p1 = { x: canvas.width, y: 0 };
            const p2 = { x: 0, y: canvas.height * 0.5 };
            const p3 = { x: 0, y: 0 };

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            // ctx.lineTo(p1.x, canvas.height);
            ctx.closePath();
            ctx.clip();

            const gradient = ctx.createLinearGradient(0, 0, canvas.width / 2, canvas.height / 2);
            gradient.addColorStop(0, "rgba(99, 102, 241, 1)");
            gradient.addColorStop(1, "rgba(164, 105, 221, 1)");

7

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
}
</script>