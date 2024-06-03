<template>
    <section class="portfolio py-16" id="portfolio">
        <div class="container mx-auto px-4 py-16 my-12">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">Ferdighet</h2>
            <p class="text-gray-600 text-center max-w-prose mb-4 mx-auto">
                Effektiv kommunikasjon, problemløsning, samarbeid, tilpasningsevne og en sterk arbeidsmoral er kjernen i min profesjonelle tilnærming.
            </p>
            <!-- Technical Skills -->
            <div class="technical-skills mb-8">
                <h3 class="text-2xl text-gray-700 mb-4" data-aos="fade-right">Tekniske Ferdigheter</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Skill Item -->
                    <div class="skill mb-4" v-for="skill in technicalSkills" :key="skill.name" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex justify-between items-center mb-1">
                            <span class="skill-name text-gray-600 text-lg">{{ skill.name }}</span>
                            <span class="skill-percentage text-sm font-semibold text-indigo-600">{{ skill.level }}</span>
                        </div>
                        <div class="w-full progress-bar bg-gray-200 rounded-full overflow-hidden h-2.5 dark:bg-gray-700">
                            <div class="progress bg-indigo-500 h-2.5 rounded-full" :style="{ width: '0%' }" :data-level="skill.level + '%'"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">Mine Prosjekter</h2>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10" data-aos="fade-up">
                <div v-for="project in projects" :key="project.id" class="project-wrapper transition-transform duration-500 ease-in-out transform hover:rotate-6 group cursor-pointer overflow-hidden relative shadow-lg rounded-2xl" @mouseover="rotateCard" @mouseleave="resetCard" :style="{ perspective: '1500px' }">
                    
                    <!-- Project Card -->
                    <div class="project-card relative overflow-hidden shadow-lg rounded-2xl md:pb-0">
                        <img :src="project.image" alt="Project" :class="{'scale-105': isHovered}" :style="isHovered ? 'filter: brightness(60%)' : ''" class="transform group-hover:scale-110 transition-transform transition-filter duration-500 ease-in-out group-hover:blur-sm">
                        
                        <!-- Project Details Overlay -->
                        <div class="absolute inset-0 bg-black bg-opacity-0 md:bg-opacity-50 flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out text-xl font-semibold">
                            <span class="project-title top-4 left-4 absolute inset-0 z-10 opacity-0 group-hover:opacity-100 text-xl font-medium text-white">{{  project.title }}</span>
                            
                            <div class="icon-container absolute mb-8 w-full flex group-hover:flex items-center justify-center rounded z-20">
                                <div class="icon-btn mx-2 relative">
                                    <a :href="project.url" target='_blank'>
                                        <font-awesome-icon icon="eye" class="text-4xl hover:text-gray-400" />
                                    </a>
                                    <span class="tooltip-text absolute bottom-full mb-2 w-24 bg-black text-white text-sm py-1 px-2 rounded shadow-lg">View Project</span>
                                </div>
                                <div class="icon-btn mx-2 relative">
                                    <a :href="project.repo" target='_blank'>
                                        <font-awesome-icon :icon="['fab', 'github']" class='text-4xl hover:text-gray-400' />
                                    </a>
                                    <span class="tooltip-text absolute bottom-full mb-2 w-24 bg-black text-white text-sm py-1 px-2 rounded shadow-lg">Github Repo</span>
                                </div>
                            </div>
                            <!-- Button to open Modal -->
                            <button @click="openModal(project)" class="details-btn md:visible mt-20 py-2 px-5 bg-indigo-600 text-white rounded transition duration-300 ease-in-out transform hover:bg-indigo-700 z-20">View Details</button>
                        </div>

                        <!-- Mobile buttons -->
                        <div class="mobile-icon-container z-30 bg-white absolute bottom-0 left-0 w-full md:hidden flex justify-center py-2">
                            <div class="mobile-content-container flex flex-col items-center justify-center">
                                <span class="project-title-mobile text-gray-800 font-semibold text-center mb-2">{{ project.title }}</span>
                                <div class="mobile-btn-wrapper flex flex-row items-center gap-2">
                                    <a :href="project.url" target="_blank" class="icon-btn project-link">
                                        <button class="bg-indigo-600 hover:bg-indigo-400 transition ease duration-200 flex py-2 px-4 gap-1 text-white rounded"><font-awesome-icon icon="eye" class="text-2xl hover:text-gray-400" />View Project</button>
                                    </a>
                                    <a :href="project.repo" target="_blank" class="icon-btn repo-link">
                                        <button class="bg-gray-600 hover:bg-gray-400 transition duration-200 ease rounded py-2 px-4 text flex items-center gap-1 text-white"><font-awesome-icon :icon="['fab', 'github']" class="text-2xl" />Github</button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Component -->
            <Modal :isVisible="isModalVisible" @close="isModalVisible = false">
                <div>
                    <h3>{{ selectedProject.title }}</h3>
                    <p>{{ selectedProject.description }}</p>
                </div>  
            </Modal>
        </div>
    </section>
</template>



<script>
// <!-- Import images -->
import grooveGridImage from '@/assets/images/groove-grid_smartmockups.png';
import gamehubImage from '@/assets/images/gamehub_smartmockups.png';
import csmImage from '@/assets/images/csm_smartmockups.png';
import bandSiteImage from '@/assets/images/band-site_mockup.jpg';
import auctionSiteImage from '@/assets/images/auction-site_mockup.jpg';
import Modal from './ModalComponent.vue';

export default {
    components: {
        Modal
    },
    data() {
        return {
            dropdownVisible: null,
            isHovered: false,
            isModalVisible: false,
            projects: [
                {
                    id: 1,
                    title: 'The Groove Grid',
                    description: 'The Groove Grid er et innovativt og brukervennlig trommeblogg-nettsted, utviklet med HTML, CSS, JavaScript og WordPress REST API. Nettstedet har sider for Hjem, Om, Blogg, Spesifikk Bloggpost og Kontakt. Hovedfunksjonene inkluderer en "Siste innlegg" seksjon på Hjem-siden, en Bloggside som viser de første 10 bloggene med flere lastealternativer, dynamisk innhold på den spesifikke bloggsiden, og en Kontaktside med egendefinert JavaScript-validering. Dette prosjektet demonstrerer avanserte webutviklingsferdigheter, og kombinerer funksjonalitet med en lidenskap for trommer.',
                    image: grooveGridImage,
                    url: 'https://taupe-medovik-72ed9d.netlify.app/',
                    repo: 'https://github.com/chralmli/project-exam-1-chralmli',
                },
                {
                    id: 2,
                    title: 'GameHub',
                    description: 'GameHub tilbyr en interaktiv shoppingopplevelse for gamere, med et utvalg av nye og brukte spill. Nettstedet utmerker seg i dynamisk produktstyring ved å bruke WordPress REST API for å vise frem produkter. Kunder kan bla gjennom spilloppføringer, se detaljerte produktsider og bruke en fullt funksjonell handlekurv (unntatt betalingsbehandling). Bygget med moderne webteknologier, eksemplifiserer GameHub banebrytende webutvikling innen e-handel.',
                    image: gamehubImage,
                    url: 'https://storied-medovik-be5681.netlify.app/',
                    repo: 'https://github.com/chralmli/cross-course-project-gamehub/tree/gamehub-cms-ca',
                },
                {
                    id: 3,
                    title: 'Community Science Museum',
                    description: 'Nettstedet for Community Science Museum er en livlig digital portal designet for å engasjere ungdomsskoleelever og deres foreldre med spennende utdanningsinnhold. Nettstedet viser museets utstillinger og arrangementer gjennom et interaktivt og tilgjengelig grensesnitt, og følger WCAG-standarder for inkludering. Med et responsivt design for sømløs nettlesing på alle enheter, er nettstedet bygget med semantisk HTML for strukturert innhold og optimalisert CSS for best mulig ytelse.',
                    image: csmImage,
                    url: 'https://elaborate-speculoos-c50810.netlify.app/',
                    repo: 'https://github.com/chralmli/semester_project-1/tree/master',
                },
                {
                    id: 4,
                    title: 'Main Street Revival',
                    description: 'Dette er det offisielle nettstedet for bandet mitt, bygget med Next.js. Jeg har utviklet en tilpasset musikkspiller fra bunnen av, slik at brukere kan lytte til våre nyeste låter sømløst. Nettstedet har et moderne design med interaktive elementer, som gir en flott brukeropplevelse.',
                    image: bandSiteImage,
                    url: 'https://www.msrbandofficial.com/',
                    repo: 'https://github.com/chralmli/MainStRevivalWebsite/tree/master',
                },
                {
                    id: 5,
                    title: 'Gavel Glance Auctions',
                    description: 'Gavel Glance er et auksjonsnettsted som viser min evne til å implementere en API med mange funksjoner. Brukere kan se auksjonslister, registrere seg og logge inn, motta kreditter når en ny bruker registreres, by på gjenstander med kreditter, opprette lister, se bud fra andre brukere, og mye mer. Det er bygget med ren JavaScript, men bruker Vite for bundling og Tailwind CSS for styling.',
                    image: auctionSiteImage,
                    url: 'https://gavelglance.netlify.app/#home',
                    repo: 'https://github.com/chralmli/gavel-glance-SP2',
                },
            ],
            selectedProject: null,
            technicalSkills: [
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 90 },
                { name: 'JavaScript', level: 80 },
                { name: 'React.js', level: 80 },
                { name: 'Sass', level: 80 },
                { name: 'Tailwind CSS', level: 80 },
                { name: 'Next.js', level: 80 },
                { name: 'WordPress', level: 75 },
                { name: 'Vue.js', level: 75},
                { name: 'Cypress', level: 75},
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
        rotateCard(event) {
            event.currentTarget.style.transform = 'rotateX(5deg) rotateY(10deg)';
        },
        resetCard(event) {
            event.currentTarget.style.transform = 'none';
        },
        openModal(project) {
            this.selectedProject = project;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
            this.selectedProject = null;
        },
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
};
</script>


<style scoped>

@layer {

    .mobile-icon-container {
        @apply flex justify-center space-x-2 mt-4;
    }

    /* Show buttons on small screens and hide on larger ones */
    @media (max-width: 767px) {

        .project-card {
            position: relative;
            padding-bottom: 6rem;
        }

        .icon-container {
            visibility: hidden;
        }

        .mobile-icon-container {
            display: flex;
            justify-content: space-around;
            background-color: white;
        }
    }

    /* Hide mobile buttons on larger screens */
    @media (min-width: 768px) {
        .mobile-icon-container {
            display: none;
        }

        .details-btn {
            visibility: visible;
        }
    }
    .project-wrapper {
        position: relative;
        margin-bottom: 2rem;
    }

    .project-card {
        transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .project-card img:hover {
        filter: brightness(60%);
        transform: scale(1.05);
    }

    .project-title {
        @apply absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 text-xl font-medium text-white;
    }

    .project-card:hover .details-btn,
    .project-card:hover .more-actions-btn {
        display: block;
    }


    .icon-container {
        display: none;
        justify-content: center;
        align-items: center;
    }

    .project-card:hover .icon-container {
        display: flex;
    }

    .icon-btn svg {
        position: relative;
    }

    .icon-btn svg {
        color: white;
        transition: color 0.3s;
    }

    .tooltip-text {
        transition: visibility 0.3s, opacity 0.3s ease-out;
        opacity: 0;
        visibility: hidden;
    }

    .details-btn {
        @apply py-2 px-5 bg-indigo-600 text-white rounded transition duration-300 ease-in-out transform hover:bg-indigo-700;
        visibility: hidden;
    }

    .icon-btn:hover .tooltip-text {
        display: flex;
        visibility: visible;
        opacity: 1;
    }

}


</style>