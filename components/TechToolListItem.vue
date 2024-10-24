<script lang="ts" setup>
import type { ITool } from "~/types/interfaces";

const props = defineProps<{
  tool: ITool;
}>();

const iconSizePx = 28;
const iconSrc = computed(() => `/tech_logos/${props.tool.icon}`);
const altText = computed(() => `Logo of tool ${props.tool.name}`);

const tooltipId = ref(`tooltip-${props.tool.name?.split(" ").join()}`);
</script>

<template>
  <v-tooltip :aria-labelledby="tooltipId" location="top" small>
    <template #activator="{ props: tooltipProps }">
      <NuxtImg
        v-bind="tooltipProps"
        :id="tooltipId"
        :src="iconSrc"
        fit="fill"
        :width="iconSizePx"
        :height="iconSizePx"
        :alt="altText"
      />
    </template>

    <span> {{ tool.name }} </span>
  </v-tooltip>
</template>

<style scoped>
ul.tool-list {
  list-style-type: none;
}
</style>
