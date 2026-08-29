export type VideoModel="Auto"|"Veo"|"Kling"|"Runway"|"Sora"|"Generic";
export type PromptSection={title:string;value:string};
export type PromptResult={version:number;model:VideoModel;originalIdea:string;sections:PromptSection[];finalPrompt:string};