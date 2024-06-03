<template>
    <div class="about relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600" id="about">
        
        <div class="bio-container inset-0 flex flex-col justify-center items-center z-10 bg-gray-900 rounded-xl">
            <div class="bio-content bg-white/90 backdrop-filter backdrop-blur-xl shadow-xl max-w-4xl mx-auto p-6 rounded-xl md:p-12 transition-all duration-500 ease-in-out transform hover:scale-105" data-aos="fade-up">
                <h2 class="text-4xl md:text-6xl font-bold text-white">Om Meg</h2>
                <p class="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">
                    Hei! Jeg heter Christian, og jeg studerer for å bli front-end utvikler på Noroff. Jeg bor i Steinkjer, Norge, og elsker å lære hvordan man lager brukervennlige og flotte nettsider. Jeg lærer meg HTML, CSS, JavaScript og moderne rammeverk som vil forme fremtiden for nettet.
                </p>
                <p class="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">
                    Jeg er lidenskapelig opptatt av både design og funksjonalitet, og jeg liker å lage nettsider som er både pene og enkle å bruke. Mens jeg studerer, gleder jeg meg til å bruke det jeg har lært på ekte prosjekter, med fokus på responsivt design, interaktivitet og ytelse.
                </p>
                <p class="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed">
                    For å bli en dyktig front-end utvikler, balanserer jeg studiene mine med en sunn livsstil, slik at jeg alltid kan gi mitt beste. Målet mitt er å kunne leve av det jeg elsker, og å bidra med smarte løsninger til teknologisamfunnet.
                    Ta en titt på porteføljen min for å se reisen min og prosjektene som driver min lidenskap for front-end utvikling.
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