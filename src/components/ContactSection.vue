<template>
    <section class="contact-form py-12" id="contact">
        <div class="container mx-auto px-4">
            <h2 class="text-4x font-bold text-center text-gray-800 mb-10">Contact Me</h2>
            <form @submit.prevent="submitForm" class="max-w-lg mx-auto">
            <div class="mb-6">
                <input v-model="formData.name" type="text" placeholder="Your Name" class="form-input" data-aos="fade-right" data-aos-delay="100">
            </div>
            <div class="mb-6">
                <input v-model="formData.email" type="email" placeholder="Your Email" class="form-input" data-aos="fade-right" data-aos-delay="300">
            </div>
            <div class="mb-6">
                <textarea v-model="formData.message" placeholder="Your Message" class="form-textarea" data-aos="fade-right" data-aos-delay="600"></textarea>
            </div>
            <button type="submit" class="submit-btn" data-aos="fade-up" data-aos-delay="400">Send Message</button>
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
.form-input, .form-textarea {
    @apply w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition ease-in-out;
}

.submit-btn {
    @apply bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 transition ease-in-out;
}

.form-input:focus, .form-textarea:focus {
    @apply ring-2 ring-indigo-500 ring-opacity-50;
}

.submit-btn:hover {
    @apply transform scale-105;
}
</style>