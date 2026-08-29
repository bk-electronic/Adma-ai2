import {demoGenerate,demoImprove} from "@/lib/ai/prompt-engine";import {generateWithOpenAI} from "@/lib/ai/providers/openai";import type {PromptResult,VideoModel} from "@/types/prompt";
export async function generatePrompt(idea:string,model:VideoModel):Promise<PromptResult>{
if(process.env.OPENAI_API_KEY){try{const text=await generateWithOpenAI(idea,model);if(text){const j=JSON.parse(text.replace(/^```json\\s*/i,"").replace(/```$/,"").trim());return {version:1,model,originalIdea:idea,sections:j.sections,finalPrompt:j.finalPrompt}}}catch{}}
return demoGenerate(idea,model);
}
export async function improvePrompt(previous:PromptResult,feedback:string,selected:string[]){return demoImprove(previous,feedback,selected)}