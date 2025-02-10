<template>
  <!-- Background Video-->
  <video
    class="bg-video"
    playsinline="playsinline"
    autoplay="autoplay"
    muted="muted"
    loop="loop"
  >
    <source src="~assets/mp4/bg.mp4" type="video/mp4" />
  </video>
  <!-- Masthead-->
  <div class="masthead">
    <div class="masthead-content text-white">
      <div class="container-fluid px-4 px-lg-0">
        <h1 class="fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
        <p class="mb-5">
          We're working hard to finish the development of this site. Sign up
          below to receive updates and to be notified when we launch!
        </p>
        <form @submit.prevent="submitForm">
          <div class="row input-group-newsletter">
            <div class="col">
              <input
                v-model="email"
                class="form-control"
                id="email"
                type="email"
                placeholder="Enter email address..."
                aria-label="Enter email address..."
                data-sb-validations="required,email"
              />
            </div>
            <div class="col-auto">
              <button class="btn btn-primary" type="submit" :disabled="loading">
                {{ loading ? "Submitting..." : "Notify Me!" }}
              </button>
            </div>
          </div>

          <!-- Validation Messages -->
          <div v-if="errorMessage" class="text-danger mt-2">
            {{ errorMessage }}
          </div>
          <div v-if="successMessage" class="text-success mt-2">
            {{ successMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="social-icons">
    <div
      class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0"
    >
      <a class="btn btn-dark m-3" href="#!"><i class="fab fa-twitter"></i></a>
      <a class="btn btn-dark m-3" href="#!"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a class="btn btn-dark m-3" href="#!"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useSupabaseClient } from "#imports";
const client = useSupabaseClient();

const email = ref("");
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async () => {
  // Reset messages
  successMessage.value = "";
  errorMessage.value = "";

  // Basic email validation
  if (!email.value) {
    errorMessage.value = "Please enter an email address.";
    return;
  }

  if (!email.value.match(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
    errorMessage.value = "Please enter a valid email address.";
    return;
  }

  loading.value = true;

  try {
    // use TS types if need
    await client
      .from("newsletter_subscribers")
      .insert({
        email: email.value,
      })
      .select();
    successMessage.value = "Form submission successful!";
    email.value = "";
  } catch (err) {
    errorMessage.value = "Error sending message!";
  } finally {
    loading.value = false;
  }
};
</script>
