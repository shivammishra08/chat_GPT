<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
import Start from '@/tabs/Start.vue'
import Summarization from '@/tabs/Summarization.vue'
import Generation from '@/tabs/Generation.vue'
import Recommendation from '@/tabs/Recommendation.vue'
</script>

<template>
    <Navbar />  
    <body class="mt-5 p-md-3 bg-dark">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="start" role="tabpanel" aria-labelledby="start_pill">
                <Start />
            </div>
            <div class="tab-pane fade" id="summarization" role="tabpanel" aria-labelledby="summarization_pill">
                <Summarization />
            </div>
            <div class="tab-pane fade" id="generation" role="tabpanel" aria-labelledby="generation_pill">
                <Generation />
            </div>
            <div class="tab-pane fade" id="recommendation" role="tabpanel" aria-labelledby="recommendation_pill">
                <Recommendation />
            </div>
        </div>

    </body> 
    <Footer /> 
</template>

<style scoped>

</style>
