<template>
    <nav class="navbar">
        <div class="logo">
            <a href="#" class="text-2xl font-bold">Almli</a>
        </div>
        <div class="nav-links md:flex hidden">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#portfolio" class="nav-link">Portfolio</a>
            <a href="#contact" class="nav-link">Contact</a>
        </div>
        <transition name="sidebar">
            <div class="nav-sidebar" v-show="isMenuOpen">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#contact" class="nav-link">Contact</a>
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
    methods: {
        toggleMenu(event) {
            if (event) {
                event.stopPropagation();
            }
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>