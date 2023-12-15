<template>
    <section class="portfolio py-12" id="portfolio">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">My Work</h2>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div v-for="project in projects" :key="project.id" class="project-card group cursor-pointer overflow-hidden relative shadow-lg" @mouseover="rotateCard" @mouseleave="resetCard" :style="{ perspective: '1500px' }">
                    <img :src="project.image" alt="Project" :class="{'scale-105': isHovered}" :style="isHovered ? 'filter: brightness(70%)' : ''" class="transform group-hover:scale-110 transition-transform transition-filter duration-500 ease-in-out">
                    <div class="absolute inset-0 bg-black bg-opacity-50-flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                        <span class="text-xl font-medium text-white">{{  project.title }}</span>
                        <a :href="project.url" target="_blank" class="view-project-btn hidden group-hover:flex transition-all duration-300 bg-indigo-600 text-white py-2 px-5 rounded">View Project</a>
                    </div>
                    <p class="mt-2 text-center">{{  project.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
// <!-- Import images -->
import grooveGridImage from '@/assets/images/groove-grid_smartmockups.png';
import gamehubImage from '@/assets/images/gamehub_smartmockups.png';
import csmImage from '@/assets/images/csm_smartmockups.png';

export default {
    data() {
        return {
            isHovered: false,
            projects: [
                {
                    id: 1,
                    title: 'The Groove Grid',
                    description: 'A brief description of The Groove Grid.',
                    image: grooveGridImage,
                    url: 'https://taupe-medovik-72ed9d.netlify.app/',
                },
                {
                    id: 2,
                    title: 'GameHub',
                    description: 'A brief description of GameHub.',
                    image: gamehubImage,
                    url: 'https://storied-medovik-be5681.netlify.app/',
                },
                {
                    id: 3,
                    title: 'Community Science Museum',
                    description: 'A brief description of Community Science Museum.',
                    image: csmImage,
                    url: 'https://elaborate-speculoos-c50810.netlify.app/'
                },
            ],
            selectedProject: null,
        };
    },
    methods: {
        rotateCard(event) {
            event.currentTarget.style.transform = 'rotateX(5deg) rotateY(10deg)';
        },
        resetCard(event) {
            event.currentTarget.style.transform = 'none';
        },
    },
};
</script>

<style scoped>

@layer {

.view-project-btn {
    @apply transition-opacity transition-transform duration-300 absolute inset-0 m-auto opacity-0 scale-110;
}

.project-card:hover .view-project-btn {
    @apply flex opacity-100 scale-100;
}

.view-project-btn:hover {
    @apply bg-indigo-500 shadow-lg;
}
}


</style>