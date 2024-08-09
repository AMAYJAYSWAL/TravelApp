const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate travel plan for location: CBD Belapur, for 1 day and 1 night for family with a luxury budget with flight details,flight price with booking url, hotel option list with hotel name,hotel address,price,hotel image url, geo coordinates,rating,descriptions and places to visit nearby with place name, place details,place image url, geo coordinates,ticket pricing, time to travel each of the location for 1 day and 1 night with each day plan with best time to visit in JSON format.\n "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip\": {\n    \"destination\": \"CBD Belapur, Navi Mumbai, India\",\n    \"duration\": \"1 day and 1 night\",\n    \"budget\": \"luxury\",\n    \"travelers\": \"family\"\n  },\n  \"flights\": {\n    \"options\": [\n      {\n        \"airline\": \"IndiGo\",\n        \"flight_number\": \"6E6123\",\n        \"departure_city\": \"Mumbai\",\n        \"arrival_city\": \"Navi Mumbai\",\n        \"departure_date\": \"2023-12-01\",\n        \"arrival_date\": \"2023-12-01\",\n        \"departure_time\": \"10:00 AM\",\n        \"arrival_time\": \"10:45 AM\",\n        \"price\": \"₹3,500\",\n        \"booking_url\": \"https://www.goindigo.in/\"\n      },\n      {\n        \"airline\": \"Air India\",\n        \"flight_number\": \"AI876\",\n        \"departure_city\": \"Mumbai\",\n        \"arrival_city\": \"Navi Mumbai\",\n        \"departure_date\": \"2023-12-01\",\n        \"arrival_date\": \"2023-12-01\",\n        \"departure_time\": \"11:30 AM\",\n        \"arrival_time\": \"12:15 PM\",\n        \"price\": \"₹4,000\",\n        \"booking_url\": \"https://www.airindia.in/\"\n      }\n    ]\n  },\n  \"hotels\": {\n    \"options\": [\n      {\n        \"name\": \"The Leela Mumbai\",\n        \"address\": \"The Leela Palace, Andheri East, Mumbai, Maharashtra 400093\",\n        \"price\": \"₹20,000+\",\n        \"image_url\": \"https://www.theleela.com/images/hotels/mumbai/the-leela-palace-mumbai.jpg\",\n        \"geo_coordinates\": \"19.0840,72.8802\",\n        \"rating\": 4.5,\n        \"description\": \"A luxury 5-star hotel with stunning views of the city and a wide range of amenities.\"\n      },\n      {\n        \"name\": \"JW Marriott Mumbai Juhu\",\n        \"address\": \"JW Marriott Mumbai Juhu, Juhu Tara Road, Mumbai, Maharashtra 400049\",\n        \"price\": \"₹15,000+\",\n        \"image_url\": \"https://www.marriott.com/content/dam/marriott/jwmarriott/jw-mumbai-juhu/jw-mumbai-juhu-hero-image.jpg\",\n        \"geo_coordinates\": \"19.0597,72.8345\",\n        \"rating\": 4.7,\n        \"description\": \"A modern and luxurious hotel with a rooftop infinity pool and fine dining restaurants.\"\n      },\n      {\n        \"name\": \"The St. Regis Mumbai\",\n        \"address\": \"The St. Regis Mumbai, Lower Parel, Mumbai, Maharashtra 400013\",\n        \"price\": \"₹25,000+\",\n        \"image_url\": \"https://www.marriott.com/content/dam/marriott/stregis/stregis-mumbai/stregis-mumbai-hero-image.jpg\",\n        \"geo_coordinates\": \"19.0161,72.8426\",\n        \"rating\": 5,\n        \"description\": \"A sophisticated and elegant hotel with butler service and exceptional dining experiences.\"\n      }\n    ]\n  },\n  \"day_plan\": {\n    \"day1\": {\n      \"morning\": {\n        \"time\": \"10:00 AM - 12:00 PM\",\n        \"location\": \"Central Park, CBD Belapur\",\n        \"details\": \"Enjoy a leisurely walk or bike ride through the park and take in the views of the Belapur Fort.\",\n        \"image_url\": \"https://www.navi-mumbai.gov.in/uploads/image/Central_park_Belapur.jpg\",\n        \"geo_coordinates\": \"19.0260,73.0088\",\n        \"ticket_pricing\": \"Free\"\n      },\n      \"afternoon\": {\n        \"time\": \"12:00 PM - 02:00 PM\",\n        \"location\": \"The Belapur Fort\",\n        \"details\": \"Explore the historical Belapur Fort, built by the Portuguese in the 16th century.\",\n        \"image_url\": \"https://www.navi-mumbai.gov.in/uploads/image/Belapur_Fort.jpg\",\n        \"geo_coordinates\": \"19.0312,73.0109\",\n        \"ticket_pricing\": \"₹10 per person\"\n      },\n      \"evening\": {\n        \"time\": \"02:00 PM - 05:00 PM\",\n        \"location\": \"Nerul Lake\",\n        \"details\": \"Take a relaxing boat ride on the serene Nerul Lake and enjoy the scenic beauty.\",\n        \"image_url\": \"https://www.navi-mumbai.gov.in/uploads/image/Nerul_Lake.jpg\",\n        \"geo_coordinates\": \"19.0405,73.0038\",\n        \"ticket_pricing\": \"₹50 per person\"\n      },\n      \"night\": {\n        \"time\": \"07:00 PM - 10:00 PM\",\n        \"location\": \"The Little Chef, CBD Belapur\",\n        \"details\": \"Enjoy a delicious dinner at one of the city's finest restaurants.\",\n        \"image_url\": \"https://www.zomato.com/mumbai/the-little-chef-cbd-belapur-navi-mumbai/photos\",\n        \"geo_coordinates\": \"19.0264,73.0089\",\n        \"ticket_pricing\": \"₹1,500 per person\"\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"time\": \"10:00 AM - 12:00 PM\",\n        \"location\": \"The Wonders Park, CBD Belapur\",\n        \"details\": \"Explore the Wonders Park, a unique amusement park with various attractions.\",\n        \"image_url\": \"https://www.navi-mumbai.gov.in/uploads/image/Wonders_Park.jpg\",\n        \"geo_coordinates\": \"19.0255,73.0099\",\n        \"ticket_pricing\": \"₹150 per person\"\n      },\n      \"afternoon\": {\n        \"time\": \"12:00 PM - 02:00 PM\",\n        \"location\": \"The Belapur Railway Station\",\n        \"details\": \"Take a stroll through the beautiful Belapur Railway Station, known for its architectural design.\",\n        \"image_url\": \"https://www.navi-mumbai.gov.in/uploads/image/Belapur_Railway_Station.jpg\",\n        \"geo_coordinates\": \"19.0259,73.0107\",\n        \"ticket_pricing\": \"Free\"\n      },\n      \"evening\": {\n        \"time\": \"02:00 PM - 05:00 PM\",\n        \"location\": \"The Belapur Business District\",\n        \"details\": \"Explore the bustling business district, visit the shopping malls, and enjoy the vibrant atmosphere.\",\n        \"image_url\": \"https://www.navi-mumbai.gov.in/uploads/image/Belapur_Business_District.jpg\",\n        \"geo_coordinates\": \"19.0263,73.0087\",\n        \"ticket_pricing\": \"Free\"\n      },\n      \"night\": {\n        \"time\": \"07:00 PM - 10:00 PM\",\n        \"location\": \"The Gateway of India, Mumbai\",\n        \"details\": \"Take a ferry ride to the iconic Gateway of India and enjoy the breathtaking views of the Arabian Sea.\",\n        \"image_url\": \"https://www.gatewayofindiamumbai.com/images/gateway-of-india.jpg\",\n        \"geo_coordinates\": \"18.9221,72.8347\",\n        \"ticket_pricing\": \"₹20 per person\"\n      }\n    }\n  }\n}\n```\n\n**Please note:** This is a sample travel plan and prices, timings, and availability may vary. It's always best to check the latest information and book in advance to ensure a smooth and enjoyable trip. \n\nThis plan provides a good starting point for a luxury family trip to CBD Belapur. You can customize it further based on your interests and preferences. \n"},
          ],
        },
      ],
    });
  
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());

  