<template>
  <NuxtPage />
</template>

<script setup>
import { NuxtPage } from "#components";
import { useI18n } from "vue-i18n";
import ogImage from "~/assets/images/og-image.png";

const { t, localeProperties } = useI18n();

useSeoMeta({
  title: computed(() => t("app.title")),
  description: computed(() => t("app.description")),
  ogType: "website",
  ogUrl: "https://nova-tix.com",
  ogTitle: computed(() => t("app.title")),
  ogLocale: computed(() => localeProperties.value.iso),
  ogDescription: computed(() => t("app.description")),
  ogImage
});
</script>
