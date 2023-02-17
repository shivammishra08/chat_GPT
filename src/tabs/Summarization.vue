<template>
  <div class="container">
    <div class="row flex-90vh">
      <div class="col-md-5">
        <div class="m-3 flex-90vh">
          <textarea
            id="input_text"
            class="border border-success form-control"
            rows="24"
            placeholder="Enter Your Text Here....."
            style="resize: none"
            v-model="input_text"
          />
        </div>
      </div>
      <div class="col-md-2">
        <div
          class="flex-90vh m-1 d-flex align-items-center justify-content-center"
        >
          <button id="summarize_btn" class="btn btn-success" @click="summarize">Summarize</button>
        </div>
      </div>
      <div class="col-md-5">
        <div class="m-3 flex-90vh">
          <textarea
            id="output_text"
            class="border border-success form-control"
            rows="24"
            placeholder="Your summarised Text Appears Here....."
            style="resize: none"
            v-model="output_text"
            readonly
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const input_text = ref("");
const output_text = ref("");

const summarize = async() => {
   console.log(input_text.value)
  const response = await fetch("https://huggingface.co/shivam21mishra08/chat-summarizer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer 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',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'no-cors',
    body: JSON.stringify({
      inputs: input_text.value,
    }),
  })
  
  console.log(response)
  if(response) {
    const data = await response.json()
    console.log(data)
  }
  // output_text.value = data.generated_text
};

</script>

<style scoped>
.flex-90vh {
  height: 90vh;
}
textarea {
  width: 100%;
  resize: vertical;
}
</style>

