<template>
  <MainNavbar />
  <HomeSection />
  <AboutSection />
  <PortfolioAndSkills />
  <ContactSection />
  <FooterSection />
</template>

<script>
import MainNavbar from './components/MainNavbar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioAndSkills from './components/PortfolioAndSkills.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  components: {
    MainNavbar,
    HomeSection,
    AboutSection,
    PortfolioAndSkills,
    ContactSection,
    FooterSection,
  },
};
</script>
