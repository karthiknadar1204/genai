import OpenAI from "openai";

const openai = new OpenAI();


const callOpenAIWithFunctionCalling = async () => {
    const context: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "Act like a cool bro. You are an assistant who can also give current time and date and task information.",
      },

      {
        role: "user",
        content: "what is the date and time right now?",
      },
    ];
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: context,
    });
    console.log(response.choices[0].message.content);
}

callOpenAIWithFunctionCalling();