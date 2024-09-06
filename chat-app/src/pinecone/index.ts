import { Pinecone } from "@pinecone-database/pinecone";

if (!process.env.PINECONE_API_KEY) {
  throw new Error("PINECONE_API_KEY is not set");
}

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const createIndex = async () => {
  await pinecone.createIndex({
    name: "testing-index",
    dimension: 1536,
    metric: "cosine",
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-east-1",
      },
    },
  });
};

createIndex();