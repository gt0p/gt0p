import meetups from "@/content/meetups.json";
import type { IMeetup } from "~/types/interfaces";

export const useMeetupsStore = defineStore("MeetupsStore", () => {
  const meetupsList: ComputedRef<IMeetup[]> = computed(
    (): IMeetup[] => meetups,
  );

  return { meetupsList };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMeetupsStore, import.meta.hot));
}
