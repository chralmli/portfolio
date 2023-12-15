<template>
  <MainNavbar />
  <HomeSection />
  <AboutSection />
  <SkillsSection />
  <PortfolioSection />
</template>

<script>
import MainNavbar from './components/MainNavbar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'

export default {
  components: {
    MainNavbar,
    HomeSection,
    AboutSection,
    SkillsSection,
    PortfolioSection,
  },
};
</script>
