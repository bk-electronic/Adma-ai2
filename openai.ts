export async function generateWithOpenAI(idea:string,model:string){
const key=process.env.OPENAI_API_KEY;if(!key)return null;
const r=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},body:JSON.stringify({model:process.env.OPENAI_MODEL||"gpt-5",input:[{role:"system",content:`You are AK AI, a video prompt architect. Preserve user intent. Return JSON with sections [{title,value}] for Character, Environment, Action, Camera, Lighting, Visual Style, Motion, Consistency, Restrictions and finalPrompt. Target model: ${model}.`},{role:"user",content:idea}]})});
if(!r.ok)throw new Error(`OpenAI ${r.status}`);const d=await r.json();return d.output_text||null;
}