/**
 * AI Creations Showcase Script
 * Dynamically loads and parses AI media creations & markdown guides in memory
 */

$(document).ready(function () {
  // ==========================================
  // Inlined Georgian prompt engineering guides (Prevents local CORS limitations)
  // ==========================================

  const VEO_GUIDE_MD = `# Veo 3-სთვის ოპტიმალური პრომპტების შექმნის სახელმძღვანელო

ეს დოკუმენტი დაგეხმარებათ შექმნათ დეტალური და ეფექტური პრომპტები Google-ის Veo 3 ვიდეო გენერაციის მოდელისთვის, რათა მიიღოთ საუკეთესო შედეგი.

## 1. პრომპტის (Prompt) სტრუქტურა და საუკეთესო პრაქტიკა

პრომპტი არის მთავარი ინსტრუქცია, რომელიც მოდელს ეუბნება, თუ რა უნდა შექმნას. რაც უფრო დეტალური და აღწერითია პრომპტი, მით უკეთესი იქნება შედეგი.

### ძირითადი კომპონენტები, რომლებიც უნდა გაითვალისწინოთ:

*   **საგანი (Subject):** რა არის ვიდეოს მთავარი ობიექტი ან პერსონაჟი?
    *   *მაგალითად:* "მარტოხელა კოვბოი ცხენზე", "ფუტურისტული მანქანის ნეონის ჰოლოგრამა".
*   **მოქმედება (Action):** რას აკეთებს საგანი?
    *   *მაგალითად:* "მიაპობს დაბლობს მზის ჩასვლისას", "მოძრაობს სინათლის სიჩქარით".
*   **გარემო (Environment):** სად ხდება მოქმედება?
    *   *მაგალითად:* "ხალხმრავალ დისტოპიურ ქალაქში", "თოვლით დაფარულ არქტიკულ პეიზაჟზე", "ღრმა ოკეანეში".
*   **კამერის ხედვა და მოძრაობა (Camera View & Movement):** როგორ არის გადაღებული სცენა?
    *   *მაგალითად:* \`A fast-tracking shot\` (სწრაფი მოძრავი კადრი), \`extreme close-up\` (ექსტრემალურად ახლო კადრი), \`shallow depth of field\` (ველის მცირე სიღრმე).
*   **განათება და ფერები (Lighting & Colors):** როგორია განათება და ფერთა გამა?
    *   *მაგალითად:* \`bright neon signs\` (კაშკაშა ნეონის ნიშნები), \`volumetric lighting\` (მოცულობითი განათება), \`soft light, warm colors\` (რბილი შუქი, თბილი ფერები), \`lens flare\` (ლინზის ანარეკლი).
*   **სტილი და ატმოსფერო (Style & Atmosphere):** რა სტილის არის ვიდეო?
    *   *მაგალითად:* \`cinematic\` (კინემატოგრაფიული), \`dystopian\` (დისტოპიური), \`serene\` (მშვიდი).

### მაგალითები დოკუმენტაციიდან:

*   დეტალური სცენა: \`A fast-tracking shot through a bustling dystopian sprawl with bright neon signs, flying cars and mist, night, lens flare, volumetric lighting.\`
*   ფოკუსირებული ობიექტი: \`A neon hologram of a car driving at top speed, speed of light, cinematic, incredible details, volumetric lighting.\`
*   ბუნების სცენა: \`Timelapse of the northern lights dancing across the Arctic sky, stars twinkling, snow-covered landscape.\`
*   კონკრეტული კადრი: \`Extreme close-up with a shallow depth of field of a puddle in a street. reflecting a busy futuristic Tokyo city with bright neon signs, night, lens flare.\`

## 2. ვიდეოს პარამეტრების კონტროლი

პრომპტის გარდა, შეგიძლიათ გამოიყენოთ სხვადასხვა პარამეტრი შედეგის დასაზუსტებლად.

### \`negativePrompt\` (ნეგატიური პრომპტი)

გამოიყენეთ ეს პარამეტრი იმ ელემენტების ამოსაგდებად, რომელთა დანახვაც არ გსურთ ვიდეოში.
*   **რას შვრება:** უკრძალავს მოდელს კონკრეტული ობიექტების, ფერების ან სტილის გენერირებას.
*   **მაგალითები:**
    *   \`"people, animals"\` - თუ გსურთ პეიზაჟი ადამიანებისა და ცხოველების გარეშე.
    *   \`"overhead lighting, bright colors"\` - თუ გსურთ უფრო ბნელი და კონკრეტული განათება.
    *   \`"multiple cars, wind"\` - თუ გინდათ ფოკუსი ერთ მანქანაზე და სტატიკური გარემო.

### \`enhancePrompt\` (პრომპტის გაუმჯობესება)

*   **რას შვრება:** იყენებს Gemini მოდელს თქვენი პრომპტის გასაუმჯობესებლად და დეტალების დასამატებლად.
*   **მნიშვნელობები:** \`true\` (ნაგულისხმევი) ან \`false\`.
*   **როდის გამოვიყენოთ:**
    *   დააყენეთ \`true\`, თუ გსურთ, რომ მოდელმა თქვენი იდეა გაამდიდროს.
    *   დააყენეთ \`false\`, თუ გსურთ სრული კონტროლი პრომპტზე და არ გინდათ მისი ავტომატური ცვლილება.

### \`generateAudio\` (აუდიოს გენერაცია)

*   **რას შვრება:** ქმნის ვიდეოსთვის შესაბამის ხმოვან ფონს.
*   **მნიშვნელობები:** \`true\` ან \`false\`.
*   **შენიშვნა:** \`veo-3.0-generate-preview\` მოდელისთვის ეს პარამეტრი **სავალდებულოა**.

### \`durationSeconds\` (ხანგრძლივობა წამებში)

*   **რას შვრება:** განსაზღვრავს გენერირებული ვიდეოს სიგრძეს.
*   **მნიშვნელობა \`veo-3.0-generate-preview\`-სთვის:** **8 წამი**.

### სხვა მნიშვნელოვანი პარამეტრები

| პარამეტრი | აღწერა | ხელმისაწვდომი მნიშვნელობები | რჩევა |
| :--- | :--- | :--- | :--- |
| **\`aspectRatio\`** | ვიდეოს ასპექტის თანაფარდობა. | \`"16:9"\` (ნაგულისხმევი), \`"9:16"\` | აირჩიეთ პლატფორმის მიხედვით (YouTube-სთვის 16:9, TikTok/Reels-თვის 9:16). |
| **\`personGeneration\`** | აკონტროლებს ადამიანების გენერაციას. | \`"allow_adult"\` (ზრდასრულები), \`"dont_allow"\` (დაუშვებელია) | გამოიყენეთ \`"dont_allow"\`, თუ გსურთ მხოლოდ პეიზაჟები ან ობიექტები. |
| **\`seed\`** | უნიკალური რიცხვი შედეგის განმეორებადობისთვის. | 0-დან 4,294,967,295-მდე | თუ ერთი და იგივე პრომპტით და seed-ით გაუშვებთ, ზუსტად იგივე ვიდეოს მიიღებთ. |
| **\`sampleCount\`** | ერთ ჯერზე გენერირებული ვიდეოების რაოდენობა. | 1-დან 4-მდე | გამოიყენეთ 2 ან მეტი, რომ მიიღოთ რამდენიმე ვარიანტი და აარჩიოთ საუკეთესო. |

## 3. Image-to-Video (სურათიდან ვიდეოს გენერაცია)

შეგიძლიათ გამოიყენოთ სურათი, როგორც საწყისი წერტილი ვიდეოსთვის.

*   **როგორ მუშაობს:** აწვდით სურათს (\`image\`) და ტექსტურ პრომპტს (\`prompt\`), რომელიც აღწერს, თუ რა მოძრაობა დაემატოს სურათს.
*   **სურათის მოთხოვნები:**
    *   **ხარისხი:** 720p (1280x720) ან მეტი.
    *   **ფორმატი:** \`image/jpeg\` ან \`image/png\`.
    *   **ასპექტის თანაფარდობა:** 16:9 ან 9:16. სხვა ზომის სურათები შეიძლება ავტომატურად ჩამოიჭრას.

## 4. Flow-სთვის ოპტიმიზებული პროცესი

1.  **იდეის ფორმირება:** 명확하게 ჩამოაყალიბეთ, რისი დანახვა გსურთ.
2.  **დეტალური \`prompt\`-ის დაწერა:** გამოიყენეთ ზემოთ აღწერილი კომპონენტები (საგანი, მოქმედება, გარემო, კამერა, განათება, სტილი).
3.  **\`negativePrompt\`-ის დამატება:** წინასწარ იფიქრეთ, რა არ გინდათ, რომ ვიდეოში გამოჩნდეს.
4.  **პარამეტრების შერჩევა:**
    *   დააყენეთ \`durationSeconds: 8\`.
    *   აირჩიეთ \`aspectRatio\`.
    *   გადაწყვიტეთ, გჭირდებათ თუ არა აუდიო (\`generateAudio\`).
    *   თუ გსურთ, რომ მოდელმა პრომპტი გააუმჯობესოს, დატოვეთ \`enhancePrompt: true\`. სრული კონტროლისთვის გამოიყენეთ \`false\`.
5.  **გენერაცია და ანალიზი:** გაუშვით პროცესი \`sampleCount: 2\` ან მეტით, რათა შეადაროთ შედეგები.
6.  **დახვეწა:** თუ შედეგი არ არის იდეალური, დააზუსტეთ \`prompt\` და \`negativePrompt\`, ან გამოიყენეთ \`seed\` პარამეტრი თქვენთვის მოსაწონი შედეგის ვარიაციების შესაქმნელად.`;

  const KLING_I2V_GUIDE_MD = `# Kling AI - სურათიდან ვიდეოს გენერაცია (Web UI ხედვა)

გამოიყენეთ ეს დოკუმენტი თქვენი იდეების ჩამოსაყალიბებლად Kling AI-ს Web UI-ში სურათიდან ვიდეოს გენერაციისთვის.
შეავსეთ ქვემოთ მოცემული ველები, რათა უკეთ დაგეგმოთ თქვენი პროექტი.

---

## 1. საწყისი მასალა

**საწყისი სურათი (\`image\`):**
*   **აღწერა/იდეა:** [რა არის გამოსახული საწყის სურათზე?]
*   **ფაილის სახელი (თქვენს კომპიუტერში):** [მაგ: \`my_image.png\`]
*   **სურათის მოთხოვნები [1]:**
    *   ფორმატები: \`.jpg\`, \`.jpeg\`, \`.png\`
    *   ფაილის ზომა: მაქსიმუმ 10MB
    *   გაფართოება: მინიმუმ 300px (სიგანეც და სიმაღლეც)
    *   ასპექტის თანაფარდობა: 1:2.5-სა და 2.5:1-ს შორის

**საბოლოო კადრის სურათი (\`image_tail\`) - (სურვილისამებრ):**
*   **გამოიყენებთ თუ არა საბოლოო კადრს?** [კი/არა]
*   **თუ კი, აღწერა/იდეა:** [რა ცვლილება უნდა მოხდეს საწყისსა და საბოლოო კადრს შორის?]
*   **ფაილის სახელი (თქვენს კომპიუტერში):** [მაგ: \`my_end_image.png\`]
*   **მოთხოვნები:** იგივე, რაც საწყისი სურათისთვის [1].
*   *შენიშვნა: საწყისი (\`image\`) და საბოლოო (\`image_tail\`) სურათებიდან მინიმუმ ერთი აუცილებელია [1].*

---

## 2. ტექსტური აღწერა (Prompt)

**პოზიტიური პრომპტი (\`prompt\`):**
*   [დეტალურად აღწერეთ სასურველი მოძრაობა, ცვლილება, ემოცია. იყავით კონკრეტული. მაქსიმუმ 2500 სიმბოლო [1]. მაგ: "მძინარე კატა ნელა იღვიძებს და თვალებს ახელს", "მანქანა ჩქარა მიდის გზაზე მზის ჩასვლის ფონზე", "ყვავილი ნელ-ნელა იშლება"]

**ნეგატიური პრომპტი (\`negative_prompt\`):**
*   [მაგ: "დაბალი ხარისხი", "დეფორმაცია", "წყლის ნიშანი", "არასასურველი ობიექტები", "ხელების არასწორი გამოსახულება". მაქსიმუმ 2500 სიმბოლო [1].]

---

## 3. ვიზუალური და ტექნიკური პარამეტრები (Web UI-ში შესავსები)

**მოდელის ვერსია (\`model_name\`):**
*   [ ] kling-v1 (Default)
*   [ ] kling-v1-5
*   [ ] kling-v1-6
*   [ ] kling-v2-master
    *   *შენიშვნა: აირჩიეთ ის, რაც ხელმისაწვდომია და თქვენს მიზნებს შეესაბამება. სხვადასხვა ფუნქციის მხარდაჭერა შეიძლება დამოკიდებული იყოს მოდელზე [1].*

**ვიდეოს ხანგრძლივობა (\`duration\`):**
*   [ ] 5 წამი (Default)
*   [ ] 10 წამი

**გენერაციის რეჟიმი (\`mode\`):**
*   [ ] \`std\` (Standard - უფრო სწრაფი, საბაზისო ხარისხი, Default)
*   [ ] \`pro\` (Professional - უფრო ხანგრძლივი, მაღალი ხარისხი)

**CFG Scale (\`cfg_scale\`):**
*   [ჩაწერეთ სასურველი მნიშვნელობა. API დიაპაზონი: \`[0, 1]\`, Default: \`0.5\` [1]. უფრო მაღალი მნიშვნელობა = პრომპტთან მეტი შესაბამისობა, ნაკლები "კრეატიულობა". დააკვირდით Web UI-ზე წარმოდგენილ სკალას.]

---

## 4. მოძრაობის კონტროლი (Motion Control - Web UI-ში შესაბამისი ფუნქციონალი)

*   **მნიშვნელოვანი შეზღუდვა:** \`image\`+\`image_tail\` (ორივე ერთად), \`dynamic_masks\`/\`static_mask\` და \`camera_control\` პარამეტრებიდან მხოლოდ ერთის გამოყენებაა შესაძლებელი ერთდროულად [1]. Web UI-მ ეს შეიძლება ავტომატურად გააკონტროლოს.

**კამერის მოძრაობა (\`camera_control\`):**
*   **გსურთ თუ არა კამერის მოძრაობის მითითება?** [კი/არა/მოდელმა შეარჩიოს (Default)]
*   **თუ კი, აირჩიეთ ტიპი (\`camera_control.type\`) და კონფიგურაცია (\`camera_control.config\`) Web UI-ში:**
    *   **ტიპები [1]:** \`simple\`, \`down_back\`, \`forward_up\`, \`right_turn_forward\`, \`left_turn_forward\`.
    *   **\`simple\` ტიპისთვის:** მიუთითეთ 6-დან ერთი მიმართულება (horizontal, vertical, pan, tilt, roll, zoom) და მისი მნიშვნელობა (დიაპაზონი: \`[-10, 10]\` [1]).
    *   **სხვა ტიპებისთვის:** \`config\` ველი ცარიელი უნდა იყოს ან Web UI-მ ავტომატურად უნდა მართოს [1].
    *   **აღწერეთ სასურველი მოძრაობა სიტყვებით (თქვენთვის, UI-ში შესაბამისი ოფციების ასარჩევად):** [მაგ: "ზუმი ობიექტზე", "პანორამირება მარცხნიდან მარჯვნივ"]

**სტატიკური ნიღაბი (\`static_mask\`) - თუ გსურთ სურათის ნაწილი უძრავი დარჩეს:**
*   **გამოიყენებთ თუ არა სტატიკურ ნიღაბს?** [კი/არა]
*   **თუ კი, რომელი უბნები უნდა დარჩეს უძრავი? (აღწერეთ ან მოამზადეთ ნიღბის სურათი Web UI-ში ასატვირთად):**
    *   [აღწერა]
    *   **ნიღბის ფაილის სახელი (თქვენს კომპიუტერში):** [მაგ: \`static_mask_area.png\`]
    *   **მოთხოვნები ნიღაბზე [1]:**
        *   ფორმატები: \`.jpg\`, \`.jpeg\`, \`.png\`.
        *   ასპექტის თანაფარდობა უნდა ემთხვეოდეს საწყისი სურათის (\`image\`) ასპექტს.
        *   რეზოლუცია უნდა ემთხვეოდეს \`dynamic_masks.mask\`-ის (თუ გამოიყენება) რეზოლუციას.

**დინამიური ნიღბები (\`dynamic_masks\`) / მოძრაობის ფუნჯი (Motion Brush) - თუ გსურთ კონკრეტული ობიექტების მოძრაობის ტრაექტორიის მითითება:**
*   **გამოიყენებთ თუ არა დინამიურ ნიღბებს/მოძრაობის ფუნჯს?** [კი/არა]
    *   *შენიშვნა: 2024 წლის 29 ნოემბრამდე Dynamic Brush ფუნქცია მხოლოდ \`kling-v1\` მოდელისთვისაა ხელმისაწვდომი \`std 5s\` და \`pro 5s\` რეჟიმებში [1].*
*   **თუ კი, რომელი ობიექტ(ებ)ი და რა ტრაექტორიით უნდა იმოძრაოს? (Web UI-ში შესაბამისი ხელსაწყოებით დასახატად/შესავსებად):**
    *   **ობიექტი 1 (მაქსიმუმ 6 ჯგუფი) [1]:** [აღწერა, მაგ: "წითელი ბურთი"]
        *   **ნიღბის სურათი (\`dynamic_masks[].mask\`):** [მოამზადეთ ფაილი. მოთხოვნები იგივეა რაც \`static_mask\`-ისთვის [1].]
        *   **ტრაექტორია (\`dynamic_masks[].trajectories\`):** [აღწერეთ სიტყვებით ან მოამზადეთ კოორდინატები. კოორდინატთა სისტემის სათავე: სურათის ქვედა მარცხენა კუთხე (0,0). 5-წამიანი ვიდეოსთვის [2, 77] კოორდინატი [1].]
            *   [მაგ: (x1,y1), (x2,y2), ...]
    *   **ობიექტი 2 (თუ საჭიროა):** ...

---

## 5. დამატებითი შენიშვნები და იდეები

*   [ნებისმიერი სხვა დეტალი, რაც გსურთ გაითვალისწინოთ გენერაციისას, მაგ: \`external_task_id\` თუ UI ამის საშუალებას იძლევა.]`;

  const KLING_UI_GUIDE_MD = `# Kling AI - ვიდეო გენერაციის ხედვა

გთხოვთ, შეავსოთ ეს დოკუმენტი თქვენი იდეებითა და სურვილებით, რათა დაგეხმაროთ Kling AI-სთვის ოპტიმალური პრომპტებისა და პარამეტრების შექმნაში.

## 1. გენერაციის ტიპი

*   [ ] ტექსტიდან ვიდეო (Text-to-Video)
*   [ ] სურათიდან ვიდეო (Image-to-Video)

---

## 2. ზოგადი იდეა და კონცეფცია

**აღწერეთ თქვენი ვიდეოს მთავარი იდეა (1-2 წინადადებით):**
*   [აქ ჩაწერეთ თქვენი იდეა]

**რა არის ვიდეოს მთავარი ობიექტი(ები) ან პერსონაჟ(ებ)ი?**
*   [აღწერეთ ობიექტები/პერსონაჟები]

**რა მოქმედება ხდება ვიდეოში?**
*   [აღწერეთ მოქმედება]

**სად (რა გარემოში) ხდება მოქმედება?**
*   [აღწერეთ გარემო]

---

## 3. ვიზუალური სტილი და განწყობა

**როგორი ვიზუალური სტილი გსურთ? (მაგ: ფოტორეალისტური, კინემატოგრაფიული, ანიმაციური, ზეთის საღებავებით, ფანტასტიკური, კონკრეტული მხატვრის სტილი და ა.შ.):**
*   [ჩაწერეთ სასურველი სტილი]

**რა ფერები/განათება დომინირებს? (მაგ: თბილი ფერები, მზის ჩასვლა, ნეონის განათება, ბნელი და მისტიური):**
*   [აღწერეთ ფერები/განათება]

**რა განწყობა/ემოცია უნდა გადმოსცეს ვიდეომ? (მაგ: მხიარული, დრამატული, მშვიდი, ეპიკური, საშიში):**
*   [აღწერეთ განწყობა/ემოცია]

---

## 4. ტექნიკური დეტალები და სურვილები

**სასურველი ვიდეოს ხანგრძლივობა:**
*   [ ] 5 წამი
*   [ ] 10 წამი

**სასურველი ასპექტის თანაფარდობა:**
*   [ ] 16:9 (ჰორიზონტალური)
*   [ ] 9:16 (ვერტიკალური)
*   [ ] 1:1 (კვადრატი)

**გენერაციის რეჟიმი (თუ გაქვთ პრეფერენცია):**
*   [ ] \`std\` (სტანდარტული, სწრაფი)
*   [ ] \`pro\` (პროფესიონალური, მაღალი ხარისხი)
*   [ ] არ მაქვს პრეფერენცია, მირჩიეთ

**კამერის მოძრაობა (\`camera_control\`):**
*   **აღწერეთ სასურველი კამერის მოძრაობა სიტყვებით (მაგ: "კამერა ნელა მოძრაობს მარცხნიდან მარჯვნივ", "ზუმი ობიექტზე", "პანორამული ხედი ზემოდან"):**
    *   [აქ ჩაწერეთ]
*   **ან აირჩიეთ წინასწარ განსაზღვრული ტიპი (თუ იცით):**
    *   [ ] \`simple\` (და მიუთითეთ რომელი მიმართულებით: horizontal, vertical, pan, tilt, roll, zoom და რამდენად)
    *   [ ] \`down_back\`
    *   [ ] \`forward_up\`
    *   [ ] \`right_turn_forward\`
    *   [ ] \`left_turn_forward\`
    *   [ ] არ მჭირდება/მოდელმა შეარჩიოს

**რისი თავიდან აცილება გსურთ ვიდეოში (ნეგატიური პრომპტისთვის იდეები. მაგ: დაბალი ხარისხი, დეფორმაცია, ტექსტი, წყლის ნიშანი, ადამიანების სახეების დამახინჯება):**
*   [ჩამოწერეთ]

---

## 5. სპეციფიკურად სურათიდან ვიდეოსთვის (Image-to-Video)

**(შეავსეთ მხოლოდ იმ შემთხვევაში, თუ ირჩევთ სურათიდან ვიდეოს გენერაციას)**

**საწყისი სურათის URL ან Base64 (თუ ჩემთან ატვირთავთ, შეგიძლიათ აქ მიუთითოთ "ატვირთულია ჩატში"):**
*   [URL / Base64 / "ატვირთულია ჩატში"]

**საბოლოო კადრის სურათი (\`image_tail\`) - თუ გსურთ (URL, Base64 ან "ატვირთულია ჩატში"):**
*   [URL / Base64 / "ატვირთულია ჩატში" / არ მჭირდება]

**რა მოძრაობა/ცვლილება გსურთ, რომ მოხდეს საწყის სურათთან მიმართებაში? (ეს დაეხმარება \`prompt\`-ის და \`dynamic_masks\`-ის შექმნას):**
*   [აღწერეთ დეტალურად. მაგ: "სურათზე გამოსახულმა ჩიტმა უნდა გაიფრინოს მარჯვნივ", "წყალი უნდა ამოძრავდეს", "პერსონაჟმა თავი უნდა მოაბრუნოს"]

**არის თუ არა სურათზე უბნები, რომლებიც უძრავად უნდა დარჩეს (\`static_mask\`)? (აღწერეთ ან მომაწოდეთ ნიღბის სურათი):**
*   [აღწერეთ ან მიუთითეთ "ნიღბის სურათს მოგაწვდით"]

**გსურთ თუ არა დინამიური ნიღბების (\`dynamic_masks\`) გამოყენება კონკრეტული ობიექტების მოძრაობისთვის? (აღწერეთ რომელი ობიექტი რა ტრაექტორიით უნდა იმოძრაოს, ან მომაწოდეთ ნიღბის სურათ(ებ)ი და ტრაექტორიის წერტილები):**
*   [აღწერეთ დეტალურად]

---

## 6. დამატებითი კომენტარები/სურვილები

*   [აქ შეგიძლიათ დაამატოთ ნებისმიერი სხვა ინფორმაცია]`;

  const LEONARDO_FLUX_GUIDE_MD = `# Leonardo.ai & Flux Dev - პარამეტრები და პრომპტის მაგალითი

ეს დოკუმენტი შეიცავს Leonardo.ai-ს API-სთან მუშაობის ძირითად პარამეტრებს, კონკრეტულად Flux Dev მოდელისთვის, და პრომპტის მაგალითს.

## 1. Leonardo.ai API ძირითადი ინფორმაცია

*   **API Endpoint (გენერაცია):** \`https://cloud.leonardo.ai/api/rest/v1/generations\`
*   **მეთოდი (გენერაცია):** \`POST\`
*   **API Endpoint (შედეგის მიღება):** \`https://cloud.leonardo.ai/api/rest/v1/generations/<YOUR_GENERATION_ID>\`
*   **მეთოდი (შედეგის მიღება):** \`GET\`
*   **საჭირო Header-ები:**
    *   \`accept: application/json\`
    *   \`authorization: Bearer <YOUR_API_KEY>\`
    *   \`content-type: application/json\` (მხოლოდ \`POST\` მოთხოვნისთვის)

## 2. Flux Dev მოდელის პარამეტრები (Default)

*   **\`modelId\`**: \`b2614463-296c-462a-9586-aafdb8f00e36\` (Flux Dev / Flux Precision)
*   **\`contrast\`**: \`3.5\` (Medium). მისაღები მნიშვნელობები: \`[1.0, 1.3, 1.8, 2.5, 3, 3.5, 4, 4.5]\`.
*   **\`num_images\`**: \`1\` (შესაძლებელია 1-დან 4-მდე, ან მეტი, API დოკუმენტაციის მიხედვით).
*   **\`width\`**: \`1472\` (რეკომენდებული Flux-ისთვის, შესაძლებელია ცვლილება).
*   **\`height\`**: \`832\` (რეკომენდებული Flux-ისთვის, შესაძლებელია ცვლილება).
*   **\`styleUUID\` (Preset Style)**:
    *   None: \`556c1ee5-ec38-42e8-955a-1e82dad0ffa1\`
    *   3D Render: \`debdf72a-91a4-467b-bf61-cc02bdeb69c6\`
    *   Acrylic: \`3cbb655a-7ca4-463f-b697-8a03ad67327c\`
    *   Anime General: \`b2a54a51-230b-4d4f-ad4e-8409bf58645f\`
    *   **Creative**: \`6fedbf1f-4a17-45ec-84fb-92fe524a29ef\`
    *   **Dynamic**: \`111dc692-d470-4eec-b791-3475abac4c46\` (ხშირად გამოყენებული)
    *   Fashion: \`594c4a08-a522-4e0e-b7ff-e4dac4b6b622\`
    *   Game Concept: \`09d2b5b5-d7c5-4c02-905d-9f84051640f4\`
    *   Graphic Design 3D: \`7d7c2bc5-4b12-4ac3-81a9-630057e9e89f\`
    *   Illustration: \`645e4195-f63d-4715-a3f2-3fb1e6eb8c70\`
    *   Portrait: \`8e2bc543-6ee2-45f9-bcd9-594b6ce84dcd\`
    *   Portrait Cinematic: \`4edb03c9-8a26-4041-9d01-f85b5d4abd71\`
    *   Ray Traced: \`b504f83c-3326-4947-82e1-7fe9e839ec0f\`
    *   Stock Photo: \`5bdc3f2a-1be6-4d1c-8e77-992a30824a2c\`
    *   Watercolor: \`1db308ce-c7ad-4d10-96fd-592fa6b75cc4\`
*   **\`enhancePrompt\`**: \`false\` (სტანდარტულად გამორთულია. ჩასართავად: \`true\` და \`enhancePromptInstruction: "INSTRUCTION_AS_STRING"\`).
*   **\`ultra\`**: Flux Dev-ისთვის ეს პარამეტრი, როგორც წესი, არ გამოიყენება (განსხვავებით Flux Speed-ისგან).

## 3. JSON Payload მაგალითი (POST მოთხოვნისთვის)

\`\`\`json
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
\`\`\``;

  // Category Metadata Configuration
  const categoryConfig = {
    ads: {
      title: "AI Cinematic Advertisements",
      desc: "High-end product commercials and cinematic conceptual spots synthesized with advanced generative AI video models.",
      icon: "fa-bullhorn",
      items: [
        {
          file: "ai/ads/airpods.mp4",
          title: "AirPods Pro - Pure Soundscape",
          desc: "A clean, modern conceptual promotional ad showcasing fluid soundwaves, futuristic styling, and deep product immersion.",
        },
        {
          file: "ai/ads/ferrari.mp4",
          title: "Ferrari Roma - Coastal Cruise",
          desc: "Cinematic, photorealistic presentation of the Ferrari Roma winding through European coastal highways during the perfect golden hour.",
        },
        {
          file: "ai/ads/napertskali.mp4",
          title: "Napertskali Mineral Water",
          desc: "Refreshing high-speed fluid dynamics simulation capturing pristine mountain springs and crisp, active water droplets.",
        },
        {
          file: "ai/ads/perfiumeBottle.mp4",
          title: "Luxury Crystal Perfume",
          desc: "Elegant studio lighting simulation displaying product details, refractive crystal surfaces, and luxurious branding.",
        },
        {
          file: "ai/ads/smartwatch.mp4",
          title: "Next-Gen Active Smartwatch",
          desc: "High-energy commercial montage blending active motion tracking, athletic style, and futuristic UI widgets.",
        },
        {
          file: "ai/ads/sparklingAd.mp4",
          title: "Sparkling Citrus Drink Promo",
          desc: "Vibrant macro splash physics and slow-motion carbonated rise, creating a sense of delicious, icy refreshment.",
        },
      ],
    },
    cats: {
      title: "AI Cat Stories",
      desc: "Endearing compilations featuring fluffy cats rendered in astonishing photorealistic detail.",
      icon: "fa-youtube-play",
      items: [
        {
          file: "ai/cats/catAndChick.mp4",
          title: "Cat and Little Chick",
          desc: "A heart-melting rendering capturing the friendship between a cat and a chick.",
        },
        {
          file: "ai/cats/catAndPuppy.mp4",
          title: "Cat and Lost Puppy",
          desc: "A beautiful cinematic sequence displaying a Cat and lost Puppy.",
        },
        {
          file: "ai/cats/catAndPanda.mp4",
          title: "Cat and Panda",
          desc: "A cinematic fantasy sequence displaying a Cat and a cute panda.",
        },
      ],
    },
    tiktok: {
      title: "TikTok Style Video creations",
      desc: "Short, impactful vertical-format narratives and artistic compositions optimized for mobile-first scrolling layouts.",
      icon: "fa-mobile",
      items: [
        {
          file: "ai/tiktokStyle/giordano.mp4",
          title: "Giordano Bruno - Infinity of Worlds",
          desc: "An atmospheric vertical piece portraying the renaissance philosopher gazing into deep celestial maps of infinite stars.",
        },
        {
          file: "ai/tiktokStyle/minotaur.mp4",
          title: "The Mythical Labyrinth & Minotaur",
          desc: "A stylized vertical exploration showing the deep shadows of the mythical Cretan maze and the legendary Minotaur.",
        },
      ],
    },
    guides: {
      title: "AI Prompting & Engineering Guides",
      desc: "Interactive technical documents detailing model parameterization, camera movement presets, and creation prompts.",
      icon: "fa-book",
      items: [
        {
          file: "ai/guides/veo_prompt_guide.md",
          title: "Google Veo Prompt Engineering Guide",
          desc: "Master scene layouts, focal structures, and motion multipliers for Google's cinematic video generator.",
          content: VEO_GUIDE_MD,
        },
        {
          file: "ai/guides/kling_iamge_to_video_final.md",
          title: "Kling AI Image-to-Video Workflow Guide",
          desc: "Step-by-step masterclass on keyframing, motion brush masks, and consistency mapping inside Kling AI.",
          content: KLING_I2V_GUIDE_MD,
        },
        {
          file: "ai/guides/klingVideoPromptsWithUI.md",
          title: "Kling AI Video Prompts and UI Controls",
          desc: "Guide to setting aspect ratios, quality profiles (standard vs. pro), and camera movement commands.",
          content: KLING_UI_GUIDE_MD,
        },
        {
          file: "ai/guides/leonardoAndFluxDevParams.md",
          title: "Leonardo & Flux.1 Dev Parameter Tuning",
          desc: "Advanced parameter sheets detailing CFG weight scales, schedulers, and prompts for maximum texture output.",
          content: LEONARDO_FLUX_GUIDE_MD,
        },
      ],
    },
  };

  // Determine Active Category from URL parameters or default to 'ads'
  const urlParams = new URLSearchParams(window.location.search);
  let activeCat = urlParams.get("c") || "ads";
  if (!categoryConfig[activeCat]) {
    activeCat = "ads";
  }

  // Activate matching Tab Switcher button
  $(`.ai-switcher-btn[data-cat="${activeCat}"]`).addClass("active");

  // Load Initial Category Content
  loadCategory(activeCat);

  // Tab Switcher Button Event Handlers
  $(".ai-switcher-btn").on("click", function () {
    const newCat = $(this).data("cat");
    if (newCat === activeCat) return;

    // Toggle active tab classes
    $(".ai-switcher-btn").removeClass("active");
    $(this).addClass("active");

    // Update browser URL state gracefully
    const cleanUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?c=" +
      newCat;
    window.history.pushState({ path: cleanUrl }, "", cleanUrl);

    // Fade out old content and load new
    $("#ai-showcase-grid").fadeOut(250, function () {
      // Hide reader drawer in case it was open
      $("#ai-guide-reader").fadeOut(100);
      $("body").css("overflow", "");
      activeCat = newCat;
      loadCategory(newCat);
      $("#ai-showcase-grid").fadeIn(250);
    });
  });

  // Core Category Loader Function
  function loadCategory(catKey) {
    const cat = categoryConfig[catKey];

    // Update Hero Title and Subtitle with a nice transition
    $("#category-title").text(cat.title);
    $("#category-desc").text(cat.desc);

    const $grid = $("#ai-showcase-grid");
    $grid.empty();

    // Toggle grid aspect ratio classes for TikTok & Cats vertical videos (both are 9:16 aspect ratio)
    if (catKey === "tiktok" || catKey === "cats") {
      $grid.addClass("vertical-style");
    } else {
      $grid.removeClass("vertical-style");
    }

    // Build Cards
    if (catKey === "guides") {
      // Build Article Cards for Guides
      cat.items.forEach(function (item) {
        const cardHtml = `
          <div class="ai-guide-card shadow" data-file="${item.file}">
            <div class="ai-guide-card-header">
              <i class="fa fa-file-text-o" aria-hidden="true"></i>
              <h3>${item.title}</h3>
            </div>
            <p>${item.desc}</p>
            <div class="ai-guide-card-action">
              Read Guide <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        `;
        $grid.append(cardHtml);
      });

      // Bind Guide Card Click Event
      $(".ai-guide-card").on("click", function () {
        const filePath = $(this).data("file");
        openGuideViewer(filePath);
      });
    } else {
      // Build Video Showcase Player Cards
      cat.items.forEach(function (item) {
        const cardHtml = `
          <div class="ai-video-card shadow">
            <div class="ai-video-wrapper">
              <video controls preload="metadata" muted playsinline>
                <source src="${item.file}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <div class="ai-video-info">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          </div>
        `;
        $grid.append(cardHtml);
      });
    }
  }

  // Guide Reader View Functions (Loads instantly in a fixed pop-up overlay modal)
  function openGuideViewer(filePath) {
    const $reader = $("#ai-guide-reader");
    const $content = $("#guide-viewer-content");

    // Find the loaded guide in config memory
    const item = categoryConfig.guides.items.find((i) => i.file === filePath);

    if (item && item.content) {
      const renderedHtml = parseMarkdown(item.content);
      $content.html(renderedHtml);

      // Stop body scrolling and open quickview modal
      $("body").css("overflow", "hidden");
      $reader.css("display", "flex").hide().fadeIn(300);
    } else {
      $content.html(
        '<p style="text-align:center; color: #e74c3c; padding: 40px 0;"><i class="fa fa-exclamation-triangle fa-2x" aria-hidden="true"></i><br/>Could not load guide. Content not found in memory.</p>',
      );
      $("body").css("overflow", "hidden");
      $reader.css("display", "flex").hide().fadeIn(300);
    }
  }

  // Close Reader Event (Fade out modal and restore normal body scrolling)
  $("#close-reader-btn").on("click", function () {
    $("#ai-guide-reader").fadeOut(250, function () {
      $("body").css("overflow", "");
    });
  });

  // Close modal when clicking outside the content box (clicking the translucent background backdrop)
  $("#ai-guide-reader").on("click", function (e) {
    if ($(e.target).is("#ai-guide-reader")) {
      $("#ai-guide-reader").fadeOut(250, function () {
        $("body").css("overflow", "");
      });
    }
  });

  // ========================================================
  // Clean, High-Performance client-side Markdown-to-HTML Parser
  // ========================================================
  function parseMarkdown(md) {
    // Standardize newlines
    let html = md.replace(/\r\n/g, "\n");

    // Escape and isolate Fenced Code Blocks (```code```)
    const codeBlocks = [];
    html = html.replace(/```([\s\S]*?)```/g, function (match, code) {
      const placeholder = `__CODE_BLOCK_PLACEHOLDER_${codeBlocks.length}__`;
      const escapedCode = code
        .trim()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      codeBlocks.push(`<pre><code>${escapedCode}</code></pre>`);
      return placeholder;
    });

    // Split document into lines for block-level parsing
    let lines = html.split("\n");
    let result = [];
    let inList = false;
    let listType = null; // 'ul' or 'ol'

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // Close open list tags if next line is not a list item
      const isList =
        line.startsWith("* ") ||
        line.startsWith("- ") ||
        line.match(/^\d+\.\s+/);
      if (inList && !isList && line !== "") {
        result.push(`</${listType}>`);
        inList = false;
        listType = null;
      }

      if (line === "") {
        continue;
      }

      // 1. Headers (h1, h2, h3)
      if (line.startsWith("# ")) {
        result.push(`<h1>${line.substring(2)}</h1>`);
      } else if (line.startsWith("## ")) {
        result.push(`<h2>${line.substring(3)}</h2>`);
      } else if (line.startsWith("### ")) {
        result.push(`<h3>${line.substring(4)}</h3>`);
      }
      // 2. Horizontal Rules
      else if (line === "---" || line === "***") {
        result.push("<hr/>");
      }
      // 3. Blockquotes & Custom Alert Boxes
      else if (line.startsWith("> ")) {
        let quoteText = line.substring(2);

        // Render GitHub Alert tags (> [!NOTE], etc.)
        if (quoteText.startsWith("[!")) {
          const alertMatch = quoteText.match(/\[!(.*?)\]/);
          if (alertMatch) {
            const alertType = alertMatch[1].toUpperCase();
            result.push(
              `<blockquote class="alert-box alert-${alertType.toLowerCase()}"><strong>${alertType}:</strong> `,
            );
            quoteText = quoteText.replace(/\[!(.*?)\]/, "").trim();
            result.push(quoteText);
          } else {
            result.push(`<blockquote>${quoteText}`);
          }
        } else {
          result.push(`<blockquote>${quoteText}`);
        }

        // Consume multi-line blockquotes contiguous blocks
        while (i + 1 < lines.length && lines[i + 1].trim().startsWith("> ")) {
          i++;
          const nextQuoteLine = lines[i].trim().substring(2);
          result.push("<br/>" + nextQuoteLine);
        }
        result.push("</blockquote>");
      }
      // 4. Unordered and Task Checkbox Lists
      else if (line.startsWith("* ") || line.startsWith("- ")) {
        if (!inList) {
          result.push("<ul>");
          inList = true;
          listType = "ul";
        }

        let content = line.startsWith("* ")
          ? line.substring(2)
          : line.substring(2);

        // Parse checkboxes [ ] and [x]
        if (content.startsWith("[ ] ")) {
          result.push(
            `<li><input type="checkbox" disabled /> ${content.substring(4)}</li>`,
          );
        } else if (content.startsWith("[x] ")) {
          result.push(
            `<li><input type="checkbox" checked disabled /> ${content.substring(4)}</li>`,
          );
        } else {
          result.push(`<li>${content}</li>`);
        }
      }
      // 5. Ordered Lists
      else if (line.match(/^\d+\.\s+/)) {
        if (!inList) {
          result.push("<ol>");
          inList = true;
          listType = "ol";
        }
        const content = line.replace(/^\d+\.\s+/, "");
        result.push(`<li>${content}</li>`);
      }
      // 6. Fenced Code Block Placeholders or standard Paragraphs
      else {
        if (line.startsWith("__CODE_BLOCK_PLACEHOLDER_")) {
          result.push(line);
        } else {
          result.push(`<p>${line}</p>`);
        }
      }
    }

    // Wrap-up open lists
    if (inList) {
      result.push(`</${listType}>`);
    }

    let finalHtml = result.join("\n");

    // 7. Inline Formatting Elements
    // Bold **text**
    finalHtml = finalHtml.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic *text*
    finalHtml = finalHtml.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Inline code `code`
    finalHtml = finalHtml.replace(/`(.*?)`/g, "<code>$1</code>");

    // Restore preformatted fenced code blocks
    for (let i = 0; i < codeBlocks.length; i++) {
      finalHtml = finalHtml.replace(
        `__CODE_BLOCK_PLACEHOLDER_${i}__`,
        codeBlocks[i],
      );
    }

    return finalHtml;
  }
});
