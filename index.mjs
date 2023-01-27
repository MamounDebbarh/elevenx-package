import { Configuration, OpenAIApi } from "openai";

export const handler = async (event) => {
    // Extract input parameters from the event
    const name = event.name;
    const title = event.title;
    const company = event.company;
    const about = event.about;
    const industry = event.industry;

    const configuration = new Configuration({
      apiKey: 'YOUR_API_KEY',
    });

    const openai = new OpenAIApi(configuration);
    //
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Convince ${name}, as the ${title} of ${company} operating in ${industry} industry, why a digital worker would benefit their company specifically. The company description is: ${about}`,
      temperature: 0.7,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.data.choices[0].text;
};
