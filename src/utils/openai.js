import OpenAI from "openai";
import { OPENAI_GPT_SECRET_KET } from "./apiTokens";

const openai = new OpenAI({
    apiKey:OPENAI_GPT_SECRET_KET,
    dangerouslyAllowBrowser:true
})

export default openai