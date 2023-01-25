const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(cors());


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 1000,
    temperature: 0.3, 
  });
  res.json({ message: response.data.choices[0].text });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
