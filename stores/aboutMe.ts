import aboutMeDescription from "../content/about.json";

export const useAboutMeStore = defineStore("AboutMeStore", () => {
  // const webDevelopmentExperienceInYears = new Date().getFullYear() - 2017;

  const {
    studies: intro,
    workExperience,
    values: personal1,
    hobbies: personal2,
  } = aboutMeDescription;

  const aboutMe = reactive([
    { order: 1, text: intro },
    { order: 2, text: workExperience },
    { order: 3, text: personal1 },
    { order: 4, text: personal2 },
  ]);

  return { aboutMe };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAboutMeStore, import.meta.hot));
}
