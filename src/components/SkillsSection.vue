<template>
    <section class="skills bg-white py-10">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">Skills</h2>
            <p class="text-gray-600 text-center max-w-prose mb-4 mx-auto">
                Effective communication, problem-solving, teamwork, adaptability, and a strong work ethic are at the core of my professional approach.
            </p>
            <!-- Technical Skills -->
            <div class="technical-skills mb-8">
                <h3 class="text-2xl text-gray-700 mb-4" data-aos="fade-right">Technical Skills</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Skill Item -->
                    <div class="skill mb-4" v-for="skill in technicalSkills" :key="skill.name" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex justify-between items-center mb-1">
                            <span class="skill-name text-gray-600 text-lg">{{ skill.name }}</span>
                            <span class="skill-percentage text-sm font-semibold text-indigo-600">{{ skill.level }}</span>
                        </div>
                        <div class="w-full progress-bar bg-gray-200 rounded-full overflow-hidden h-2.5 dark:bg-gray-700">
                            <div class="progress bg-indigo-600 h-2.5 rounded-full" :style="{ width: '0%' }" :data-level="skill.level + '%'"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'SkillsSection',
    data() {
        return {
            technicalSkills: [
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 90 },
                { name: 'JavaScript', level: 80 },
                { name: 'React.js', level: 75 },
                { name: 'WordPress', level: 75 },
                { name: 'Vue.js', level: 65}
            ],
        };
    },
    mounted() {
        this.initObserver();
    },
    methods: {
        initObserver() {
            const options = { threshold: 0.1 };
            this.observer = new IntersectionObserver(this.animateProgress, options);
            const elements = this.$el.querySelectorAll('.progress');

            elements.forEach(el => {
                this.observer.observe(el);
            });
        },
        animateProgress(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const level = progressBar.dataset.level;
                    progressBar.style.width = level;
                    observer.unobserve(progressBar);
                }
            });
        },
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
</script>