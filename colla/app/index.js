// pages/index.js
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import("../components/SampleComponent"),
  {
    ssr: false,
  }
);

const Index = () => {
      
  return (
    <>
      <div>
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

export default Index;

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// // This allows us to use the the process. EnV environment variables like API key that we set in the EnV file
// const dotenv = require("dotenv")
// dotenv.config()
// //Create a nodejs buildin library so that we don't need to change the prompt everytime here
// const readline = require("readline")

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// // Create an interface
// const userInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// userInterface.prompt()

// userInterface.on("line", async input => {
//     // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


//   const result = await model.generateContentStream([input]);
//   for await(const chunk of result.stream){
//     const chunkText = chunk.text();
//     console.log(chunkText)
//   }
// })

// //run();