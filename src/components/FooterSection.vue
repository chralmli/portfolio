<template>
    <footer class="footer bg-gray-800 text-white py-10">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <a href="/" class="logo text-2xl font-bold">Almli Dev</a>
                </div>

                <!-- Footer Links -->
                <div class="flex flex-col md:flex-row items-center md:space-x-6">
                    <a href="/about" class="footer-link mb-2 md:mb-0">About</a>
                    <a href="/portfolio" class="footer-link mb-2 md:mb-0">Portfolio</a>
                    <a href="/contact" class="footer-link mb-2 md:mb-0">Contact</a>
                </div>
            </div>

            <!-- Social Links -->
            <div class="social-links mt-6 text-center">
                <a href="https://twitter.com" class="social-icon mr-2">Twitter</a>
                <a href="https://linkedin.com" class="social-icon mr-2">LinkedIn</a>
                <a href="https://github.com" class="social-icon">GitHub</a>
            </div>

            <!-- Copyright -->
            <div class="copy-right mt-6 text-center">
                © 2023 Christian Almli. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    @apply bg-gray-800 text-white py-10;
}

.footer-link, .social-icon {
    @apply text-gray-400 hover:text-white transition duration-300;
}

.logo {
    @apply text-2xl font-bold text-white;
}

.social-icon {
    @apply inline-block p-2 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300;
}
</style>