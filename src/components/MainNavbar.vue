<template>
    <nav class="navbar sticky top-0 z-30 bg-white shadow-md text-gray-800 flex justify-between items-center p-4">
        <div class="logo">
            <a href="#" class="text-2xl font-bold"><img src="../assets/images/almli-dev-logo.png"></a>
        </div>
        <div class="nav-links md:flex hidden">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#portfolio" class="nav-link">Portfolio</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <transition name="sidebar">
            <div class="nav-sidebar" v-show="isMenuOpen">
                <a href="#home" class="nav-link text-gray-50">Home</a>
                <a href="#about" class="nav-link text-gray-50">About</a>
                <a href="#portfolio" class="nav-link text-gray-50">Portfolio</a>
                <a href="#contact" class="nav-link text-gray-50">Contact</a>
            </div>
        </transition>
        <div class="overlay" @click="isMenuOpen = false" v-show="isMenuOpen"></div>
        <div class="hamburger md:hidden" @click="toggleMenu($event)">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainNavbar',
    data() {
        return {
            isMenuOpen: false,
        };
    },
    mounted() {
        document.documentElement.style.scrollBehavior = 'smooth';
    },
    beforeUnmount() {
        document.documentElement.style.scrollBehavior = '';
    },
    methods: {
        navigateToSection(event, sectionId) {
            event.preventDefault();
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        toggleMenu(event) {
            if (event) {
                event.stopPropagation();
            }
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
.logo img {
    height: 30px;
}

.nav-link:hover {
    @apply text-indigo-500;
}
</style>