import { readFileSync, writeFileSync } from "fs";
import OpenAI from "openai";
import { join } from "path";

export type DataWithEmbeddings = {
    input: string;
    embeddings: number[];
  };

const openai = new OpenAI();

export const generateEmbeddings = async (input: string | string[]) => {
    const response = await openai.embeddings.create({
      input: input,
      model: "text-embedding-3-small",
    });
    console.log(response.data);
    return response;
  };

generateEmbeddings(["Hello, world!","How are you?"]);





