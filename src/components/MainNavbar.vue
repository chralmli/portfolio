<template>
    <nav class="navbar sticky top-0 z-30 bg-white shadow-md text-gray-800 flex justify-between items-center p-4">
        <div class="logo">
            <a href="#" class="text-2xl font-bold"><img src="../assets/images/almli-dev-logo.png"></a>
        </div>
        <div class="nav-links md:flex hidden">
            <a href="#home" class="nav-link">Hjem</a>
            <a href="#about" class="nav-link">Om Meg</a>
            <a href="#portfolio" class="nav-link">Mine Prosjekter</a>
            <a href="#contact" class="nav-link">Kontakt Meg</a>
        </div>
        <transition name="sidebar">
            <div class="nav-sidebar" v-show="isMenuOpen">
                <a href="#home" class="nav-link text-gray-50">Hjem</a>
                <a href="#about" class="nav-link text-gray-50">Om Meg</a>
                <a href="#portfolio" class="nav-link text-gray-50">Mine Prosjekter</a>
                <a href="#contact" class="nav-link text-gray-50">Kontakt Meg</a>
            </div>
        </transition>
        <div class="overlay" @click="isMenuOpen = false" v-show="isMenuOpen"></div>
        <div class="hamburger md:hidden" @click="toggleMenu($event)">
            <span class="hamburger-line" :class="{'line1': isMenuOpen}"></span>
            <span class="hamburger-line" :class="{'line2': isMenuOpen}"></span>
            <span class="hamburger-line" :class="{'line3': isMenuOpen}"></span>
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

.hamburger-line {
    transition: all 0.3s ease;
}

.line1 {
    transform: rotate(45deg) translate(9px, 8px);
}

.line2 {
    opacity: 0;
}

.line3 {
    transform: rotate(-45deg) translate(8px, -8px);
}
</style>