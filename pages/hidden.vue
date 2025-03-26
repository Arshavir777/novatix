<template>
  <div class="content">
    <div class="position-absolute language-switcher">
      <LangSwitcher />
    </div>

    <!-- Masthead-->
    <div class="masthead">
      <div class="masthead-content text-white">
        <div class="container-fluid px-4 px-lg-0">
          <h1 class="fst-italic lh-1 mb-4">{{ $t("home.title") }}</h1>
          <p class="mb-5">
            {{ $t("home.description") }}
          </p>
          <form @submit.prevent="submitForm">
            <div class="row input-group-newsletter">
              <div class="col">
                <input
                  v-model="email"
                  class="form-control"
                  id="email"
                  type="email"
                  :placeholder="$t('input.email.placeholder')"
                />
              </div>
              <div class="col-auto">
                <button
                  class="btn btn-primary"
                  type="submit"
                  :disabled="loading"
                >
                  {{
                    loading
                      ? t("button.submitting") + "..."
                      : t("button.notify")
                  }}
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSupabaseClient } from "#imports";
import bgImage from "~/assets/images/bg.png";

const { t } = useI18n();
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
    errorMessage.value = t("validation.required", { field: t("fields.email") });
    return;
  }

  if (!email.value.match(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
    errorMessage.value = t("validation.email");
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
    successMessage.value = t("form.messages.submitSuccess");
    email.value = "";
  } catch (err) {
    errorMessage.value = t("form.messages.submitError");
  } finally {
    loading.value = false;
  }
};
</script>
