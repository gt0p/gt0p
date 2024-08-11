<script setup lang="ts">
import type { IMeetup } from "~/types/interfaces";
import { useMeetupsStore } from "../stores/meetups";

const title = "Participation on several Meetups";

const { meetupsList } = storeToRefs(useMeetupsStore());
const meetups = meetupsList.value as IMeetup[];
</script>

<template>
  <v-container class="pa-0" fluid full-width>
    <v-row align="center" class="justify-md-center justify-sm-left">
      <v-col cols="auto" class="mb-8">
        <h1>{{ title }}</h1>
      </v-col>
    </v-row>

    <v-row dense justify="center">
      <v-col v-for="meetup in meetups" :key="meetup.title" cols="12">
        <MeetupListItem :meetup="meetup" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.meetup-card:hover {
  cursor: pointer;
}
</style>
