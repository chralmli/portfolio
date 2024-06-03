<template>
    <section class="contact-form p-8  bg-gray-50" id="contact">
        <div class="container mx-auto my-16 px-4">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Kontakt Meg</h2>
            <form @submit.prevent="submitForm" class="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg" data-aos="fade-up">
            <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700">Navn</label>
                <input v-model="formData.name" type="text" placeholder="Navn" class="form-input mt-1" data-aos="fade-right" data-aos-delay="100">
            </div>
            <div class="mb-6">
                <label for="email" class="block text-sm font-medium text-gray-700">E-post</label>
                <input v-model="formData.email" type="email" placeholder="Din e-post" class="form-input mt-1" data-aos="fade-right" data-aos-delay="300">
            </div>
            <div class="mb-6">
                <label for="message" class="block text-sm font-medium text-gray-700">Melding</label>
                <textarea v-model="formData.message" placeholder="Hva har du på hjertet?" class="form-textarea mt-1" data-aos="fade-right" data-aos-delay="600"></textarea>
            </div>
            <div class="flex justify-center">
                <button type="submit" class="submit-btn px-10" data-aos="fade-up" data-aos-delay="400">Send Message</button>
            </div>
        </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    methods: {
        submitForm() {

        }
    }
}
</script>

<style scoped>

section#contact {
    min-height: auto;
}
.form-input, .form-textarea {
    @apply w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out;
}

.submit-btn {
    @apply bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition ease-in-out;
}

.form-input:focus, .form-textarea:focus {
    @apply ring-2 ring-indigo-500 ring-opacity-50;
}

.submit-btn:hover {
    @apply transform scale-105;
}
</style>