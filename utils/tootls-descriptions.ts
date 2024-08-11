import toolsDescriptions from "@/content/tools-descriptions.json";

export interface Tool {
  name?: string;
  definition: string;
  icon?: string;
}
const tools: Record<string, Tool> = toolsDescriptions;

const getToolDescription = (toolName: string) =>
  tools[toolName].definition || "";

const getTool = (toolName: string) => tools[toolName] || null;

export { getToolDescription, getTool };
