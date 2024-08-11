<script lang="ts" setup>
import type { IMeetup } from "~/types/interfaces";

defineProps<{ meetup: IMeetup }>();
</script>

<template>
  <v-card
    class="mx-auto"
    :href="meetup.link"
    max-width="90%"
    rel="noopener"
    :subtitle="meetup.description"
    target="_blank"
    :title="meetup.title"
  >
    <template #prepend>
      <font-awesome-icon
        class="text-primary"
        :icon="['fa-brands', 'fa-meetup']"
        size="2xl"
        aria-hidden="true"
      />
    </template>

    <template #append>
      <font-awesome-icon
        class="text-secondary"
        :icon="['fa-solid', 'fa-arrow-up-right-from-square']"
        aria-hidden="true"
      />
    </template>
  </v-card>
</template>

<style lang="css" scoped></style>
