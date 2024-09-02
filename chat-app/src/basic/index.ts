import { OpenAI } from "openai";
import { encoding_for_model } from "tiktoken";

const openai = new OpenAI();
const encoder = encoding_for_model("gpt-3.5-turbo");

// const MAX_TOKENS = 500;
const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "Act like a cool bro",
    },
];


const createChat = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: context,
    });
    const responseMessage = response.choices[0].message;
    context.push(responseMessage);
  
    // if (response.usage && response.usage.total_tokens > MAX_TOKENS) {
    //   removeOlderTokens();
    // }
  
    console.log(response.choices[0].message.content);
  };
  
  process.stdin.addListener("data", async (input) => {
    const userInput = input.toString().trim();
    context.push({
      role: "user",
      content: userInput,
    });
    await createChat();
  });