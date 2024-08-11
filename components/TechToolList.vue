<script lang="ts" setup>
import { getTool } from "~/utils/tootls-descriptions";

const props = defineProps<{
  tools: string[];
}>();

const sortedList = computed(() => {
  return [...props.tools].sort((a, b) => (a > b ? 1 : -1));
});
</script>

<template>
  <ul class="tool-list d-flex justify-center width-100">
    <li v-for="toolId in sortedList" :key="toolId" class="mr-2 shrink">
      <v-tooltip location="top" small aria-labelledby="skillTooltipText">
        <template #activator="{ props: tooltipProps }">
          <NuxtImg
            v-bind="tooltipProps"
            :src="`/tech_logos/${getTool(toolId)?.icon}`"
            fit="fill"
            width="28"
            height="28"
            :alt="`Logo of tool ${getTool(toolId)?.name}`"
          />
        </template>

        <span> {{ getTool(toolId)?.name }} </span>
      </v-tooltip>
    </li>
  </ul>
</template>

<style scoped>
ul.tool-list {
  list-style-type: none;
}
</style>
