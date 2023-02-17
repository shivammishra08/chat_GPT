<script setup>
import { ref } from 'vue'
// defineProps({
//   msg: {
//     type: Number,
//     required: true
//   }
// })



</script>
<template>
	<header>
        <!-- <div class="collapse shadow mb-4" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
        </div> -->
        <nav class="shadow mb-4 navbar navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../../favicon.ico" alt="" width="30" height="24" class="d-inline-block align-text-top">
                    chatGPT
                </a>
                <div class="nav nav-pills col-12 col-md-auto mb-2 text-center mb-md-0" role="tablist">
                    <button id="start_pill" class="nav-link active" data-bs-toggle="pill" data-bs-target="#start" aria-selected="true" role="tab">Home</button>
                    <button id="summarization_pill" class="nav-link " data-bs-toggle="pill" data-bs-target="#summarization" aria-selected="false" role="tab" tabindex="-1">Summarization</button>
                    <button id="generation_pill" class="nav-link" data-bs-toggle="pill" data-bs-target="#generation" aria-selected="false" role="tab" tabindex="-1">Generation</button>
                    <button id="recommendation_pill" class="nav-link" data-bs-toggle="pill" data-bs-target="#recommendation" aria-selected="false" tabindex="-1" role="tab">Recommendation</button>
                </div>
            </div>
        </nav>
	</header>
    
	
</template>
<style>

</style>

