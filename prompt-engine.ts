import type {PromptResult,VideoModel} from "@/types/prompt";
export function demoGenerate(idea:string,model:VideoModel):PromptResult{
const rain=/बारिश|rain/i.test(idea),night=/रात|night/i.test(idea);
const sections=[
{title:"Character",value:"Preserve the subject exactly as described; keep identity, face, age, clothing and proportions consistent."},
{title:"Environment",value:`${night?"Nighttime ":""}${rain?"rainy ":""}environment matching the user's described location, with realistic depth and surfaces.`},
{title:"Action",value:"Preserve the user's core action and emotional intent with natural continuous movement."},
{title:"Camera",value:"Use a cinematic viewpoint and smooth camera movement that respects the user's stated perspective; never silently reverse it."},
{title:"Lighting",value:"Natural cinematic lighting appropriate to the environment, realistic shadows, highlights and reflections."},
{title:"Visual Style",value:"Photorealistic cinematic production quality, realistic textures, natural materials and controlled depth of field."},
{title:"Motion",value:"Smooth continuous subject and environmental motion with believable physics and no jitter."},
{title:"Consistency",value:"Maintain the same face, hairstyle, clothing, body proportions, environment and visual style throughout."},
{title:"Restrictions",value:"No identity drift, extra people unless requested, distorted anatomy, unwanted camera reversal, random scene changes, text or watermark."}];
return {version:1,model,originalIdea:idea.trim(),sections,finalPrompt:`${idea.trim()}\n\nCreate a production-ready ${model==="Auto"?"cinematic video":model+"-optimized cinematic video"}. Preserve the original intent exactly. ${sections.map(s=>s.value).join(" ")}`};
}
export function demoImprove(previous:PromptResult,feedback:string,selected:string[]):PromptResult{
const area=selected.length?selected.join(", "):"the user-specified area";
return {...previous,version:previous.version+1,finalPrompt:`${previous.finalPrompt}\n\nTARGETED IMPROVEMENT V${previous.version+1}: Change only ${area}. User feedback: ${feedback||"Make the result closer to my original vision."} Preserve every unrelated component.`};
}