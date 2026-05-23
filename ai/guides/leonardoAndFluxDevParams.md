# Leonardo.ai & Flux Dev - პარამეტრები და პრომპტის მაგალითი

ეს დოკუმენტი შეიცავს Leonardo.ai-ს API-სთან მუშაობის ძირითად პარამეტრებს, კონკრეტულად Flux Dev მოდელისთვის, და პრომპტის მაგალითს.

## 1. Leonardo.ai API ძირითადი ინფორმაცია

*   **API Endpoint (გენერაცია):** `https://cloud.leonardo.ai/api/rest/v1/generations`
*   **მეთოდი (გენერაცია):** `POST`
*   **API Endpoint (შედეგის მიღება):** `https://cloud.leonardo.ai/api/rest/v1/generations/<YOUR_GENERATION_ID>`
*   **მეთოდი (შედეგის მიღება):** `GET`
*   **საჭირო Header-ები:**
    *   `accept: application/json`
    *   `authorization: Bearer <YOUR_API_KEY>`
    *   `content-type: application/json` (მხოლოდ `POST` მოთხოვნისთვის)

## 2. Flux Dev მოდელის პარამეტრები (Default)

*   **`modelId`**: `b2614463-296c-462a-9586-aafdb8f00e36` (Flux Dev / Flux Precision)
*   **`contrast`**: `3.5` (Medium). მისაღები მნიშვნელობები: `[1.0, 1.3, 1.8, 2.5, 3, 3.5, 4, 4.5]`.
*   **`num_images`**: `1` (შესაძლებელია 1-დან 4-მდე, ან მეტი, API დოკუმენტაციის მიხედვით).
*   **`width`**: `1472` (რეკომენდებული Flux-ისთვის, შესაძლებელია ცვლილება).
*   **`height`**: `832` (რეკომენდებული Flux-ისთვის, შესაძლებელია ცვლილება).
*   **`styleUUID` (Preset Style)**:
    *   None: `556c1ee5-ec38-42e8-955a-1e82dad0ffa1`
    *   3D Render: `debdf72a-91a4-467b-bf61-cc02bdeb69c6`
    *   Acrylic: `3cbb655a-7ca4-463f-b697-8a03ad67327c`
    *   Anime General: `b2a54a51-230b-4d4f-ad4e-8409bf58645f`
    *   **Creative**: `6fedbf1f-4a17-45ec-84fb-92fe524a29ef`
    *   **Dynamic**: `111dc692-d470-4eec-b791-3475abac4c46` (ხშირად გამოყენებული)
    *   Fashion: `594c4a08-a522-4e0e-b7ff-e4dac4b6b622`
    *   Game Concept: `09d2b5b5-d7c5-4c02-905d-9f84051640f4`
    *   Graphic Design 3D: `7d7c2bc5-4b12-4ac3-81a9-630057e9e89f`
    *   Illustration: `645e4195-f63d-4715-a3f2-3fb1e6eb8c70`
    *   Portrait: `8e2bc543-6ee2-45f9-bcd9-594b6ce84dcd`
    *   Portrait Cinematic: `4edb03c9-8a26-4041-9d01-f85b5d4abd71`
    *   Ray Traced: `b504f83c-3326-4947-82e1-7fe9e839ec0f`
    *   Stock Photo: `5bdc3f2a-1be6-4d1c-8e77-992a30824a2c`
    *   Watercolor: `1db308ce-c7ad-4d10-96fd-592fa6b75cc4`
*   **`enhancePrompt`**: `false` (სტანდარტულად გამორთულია. ჩასართავად: `true` და `enhancePromptInstruction: "INSTRUCTION_AS_STRING"`).
*   **`ultra`**: Flux Dev-ისთვის ეს პარამეტრი, როგორც წესი, არ გამოიყენება (განსხვავებით Flux Speed-ისგან).

## 3. JSON Payload მაგალითი (POST მოთხოვნისთვის)

```json
{
  "modelId": "b2614463-296c-462a-9586-aafdb8f00e36",
  "prompt": "YOUR_ENGLISH_PROMPT_HERE",
  "num_images": 1,
  "width": 1472,
  "height": 832,
  "contrast": 3.5,
  "styleUUID": "111dc692-d470-4eec-b791-3475abac4c46",
  "enhancePrompt": false
}