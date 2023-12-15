<template>
    <div class="about relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600" id="about">
        
        <div class="bio-container absolute inset-0 flex flex-col justify-center items-center z-10">
            <div class="bio-content bg-white/90 backdrop-filter backdrop-blur-xl shadow-xl max-w-4xl mx-auto p-6 rounded-xl md:p-12 transition-all duration-500 ease-in-out transform hover:scale-105" data-aos="fade-up">
                <h2 class="text-4xl md:text-6xl font-bold text-white">About Me</h2>
                <p class="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">
                    Hello! I'm Christian, an aspiring front-end developer currently immersed in the dynamic world of technology at Noroff. With Steinkjer, Norway, as my backdrop, I'm deeply engaged in mastering the art of crafting intuitive and visually appealing web interfaces. My education is a journey through the ever-evolving landscape of HTML, CSS, JavaScript,
                    and modern frameworks that are shaping the future of online experiences.
                </p>
                <p class="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">
                    Driven by a passion for both design and functionality, I approach web development with a meticulous eye for detail and a commitment to creating seamless user experiences. As I navigate through my studies, I'm eager to apply my growing skill set to real-world projects, with a focus on responsive design, interactivity, and performance.
                </p>
                <p class="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">
                    In my quest to become a well-versed front-end developer, I balance my academic endeavors with a healthy lifestyle, ensuring that I bring my best self to every line of code. My goal is to not only make a living from my craft but to contribute innovative solutions to the tech community.
                    Explore my portfolio to get a glimpse of my journey and the projects that fuel my passion for front-end development.
                </p>
                <div class="mt-6">
                    <!-- Profile picture -->
                    <img src="..\assets\images\119A7745_11zon.jpeg" alt="Profile Photo" class="rounded-full mx-auto w-40 h-40 md:w-60 md:h-60 border-8 border-purple-300 shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 object-cover">
                </div>
            </div>
        </div>
        <div class="angled-gradient"></div>
    </div>
</template>

<script>
export default {
    name: 'AboutSection',
    mounted() {
        if (!this.supportsBackdropFilter()) {
            const bioContent = this.$el.querySelector('.bio-content');
            bioContent.classList.add('no-backdrop-filter');
        }
    },
    methods: {
        supportsBackdropFilter() {
            return CSS.supports('backdrop-filter', 'blur(15px)') || CSS.supports('-webkit-backdrop-filter', 'blur(15px)');
        }
    }
}
</script>

<style scoped>
    
    .profile-pic {
        border: 4px solid rgba(255,255,255, 0.75);
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
    }
    
    .bio-content {
        backdrop-filter: blur(15px);
        background-color: rgba(255,255,255, 0.1);
        z-index: 10;
    }
    
    .no-backdrop-filter .bio-content {
        background-color: rgba(255,255,255, 0.75);
    }
</style>