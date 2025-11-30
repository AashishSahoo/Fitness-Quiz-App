// quizQuestions.js - Complete questions configuration
import Q1Male from "../assets/quizQuestion/Q1/Q1Male.png";
import Q1Female from "../assets/quizQuestion/Q1/Q1Female.png";

//Q3
import Q3Opt1 from "../assets/quizQuestion/Q3/Q3Option1.png";
import Q3Opt2 from "../assets/quizQuestion/Q3/Q3Option2.png";
import Q3Opt3 from "../assets/quizQuestion/Q3/Q3Option3.png";
import Q3Opt4 from "../assets/quizQuestion/Q3/Q3Option4.png";

//Q4
import Q4FOpt1 from "../assets/quizQuestion/Q4/Female/Q4F_Option1.png";
import Q4FOpt2 from "../assets/quizQuestion/Q4/Female/Q4F_Option2.png";
import Q4FOpt3 from "../assets/quizQuestion/Q4/Female/Q4F_Option3.png";
import Q4FOpt4 from "../assets/quizQuestion/Q4/Female/Q4F_Option4.png";
import Q4MOpt1 from "../assets/quizQuestion/Q4/Male/Q4M_Option1.png";
import Q4MOpt2 from "../assets/quizQuestion/Q4/Male/Q4M_Option2.png";
import Q4MOpt3 from "../assets/quizQuestion/Q4/Male/Q4M_Option3.png";
import Q4MOpt4 from "../assets/quizQuestion/Q4/Male/Q4M_Option4.png";

//Q5
import Q5FOpt1 from "../assets/quizQuestion/Q5/Female/Q5F_Option1.png";
import Q5FOpt2 from "../assets/quizQuestion/Q5/Female/Q5F_Option2.png";
import Q5FOpt3 from "../assets/quizQuestion/Q5/Female/Q5F_Option3.png";
import Q5FOpt4 from "../assets/quizQuestion/Q5/Female/Q5F_Option4.png";
import Q5MOpt1 from "../assets/quizQuestion/Q5/Male/Q5M_Option1.png";
import Q5MOpt2 from "../assets/quizQuestion/Q5/Male/Q5M_Option2.png";
import Q5MOpt3 from "../assets/quizQuestion/Q5/Male/Q5M_Option3.png";
import Q5MOpt4 from "../assets/quizQuestion/Q5/Male/Q5M_Option4.png";

//Q17
import Q17Opt1 from "../assets/quizQuestion/Q17/Q17Option1.png";
import Q17Opt2 from "../assets/quizQuestion/Q17/Q17Option2.png";
import Q17Opt3 from "../assets/quizQuestion/Q17/Q17Option3.png";
import Q17Opt4 from "../assets/quizQuestion/Q17/Q17Option4.png";

//Q18
import Q18Opt1 from "../assets/quizQuestion/Q18/Q18Option1.png";
import Q18Opt2 from "../assets/quizQuestion/Q18/Q18Option2.png";
import Q18Opt3 from "../assets/quizQuestion/Q18/Q18Option3.png";
import Q18Opt4 from "../assets/quizQuestion/Q18/Q18Option4.png";
import Q18Opt5 from "../assets/quizQuestion/Q18/Q18Option5.png";

export const quizQuestions = [
  {
    id: 1,
    type: "gender-selection",
    question:
      "Want to lose weight, improve flexibility, and tone your body with Wall Pilates?",
    description: "Select Your Gender",
    options: [
      { label: "👨 Male", value: "male", imgUrl: Q1Male },
      { label: "👩 Female", value: "female", imgUrl: Q1Female },
    ],
    preferNotToSay: true,
  },
  {
    id: 2,
    type: "single-choice",
    question: "What's your primary goal?",
    options: [
      { label: "🔥 Lose Weight", value: "lose_weight" },
      { label: "🧘🏼‍♀️ Improve Flexibility", value: "improve_flexibility" },
      { label: "⛹️‍♂️ Tone booty and Abs", value: "tone_body" },
      { label: "💪 Increase Muscle Strength", value: "increase_strength" },
    ],
  },
  {
    id: 3,
    type: "single-choice",
    question: "How flexible are you?",
    options: [
      {
        label: "Not flexible, I can't reach my toes",
        value: "not_flexible",
        imgUrl: Q3Opt1,
      },
      {
        label: "I can almost reach my toes",
        value: "almost_flexible",
        imgUrl: Q3Opt2,
      },
      {
        label: "I can easily touch my feet",
        value: "very_flexible",
        imgUrl: Q3Opt3,
      },
      {
        label: "Not sure",
        value: "not_sure",
        imgUrl: Q3Opt4,
      },
    ],
  },
  {
    id: 4,
    type: "single-choice",
    question: "What is your current physical build?",
    options: [
      {
        label: "Slim",
        value: "slim",
        imgUrlMale: Q4MOpt1,
        imgUrlFemale: Q4FOpt1,
        imgUrl: Q4MOpt1,
      },
      {
        label: "Mid-sized",
        value: "mid_sized",
        imgUrlMale: Q4MOpt2,
        imgUrlFemale: Q4FOpt2,
        imgUrl: Q4MOpt2,
      },
      {
        label: "On a heavier side",
        value: "heavier",
        imgUrlMale: Q4MOpt3,
        imgUrlFemale: Q4FOpt3,
        imgUrl: Q4MOpt3,
      },
      {
        label: "Overweight",
        value: "overweight",
        imgUrlMale: Q4MOpt4,
        imgUrlFemale: Q4FOpt4,
        imgUrl: Q4MOpt4,
      },
    ],
  },
  {
    id: 5,
    type: "single-choice",
    question: "What is your dream body?",
    options: [
      {
        label: "Skinny",
        value: "skinny",
        imgUrlMale: Q5MOpt1,
        imgUrlFemale: Q5FOpt1,
        imgUrl: Q5MOpt1,
      },
      {
        label: "Toned",
        value: "toned",
        imgUrlMale: Q5MOpt2,
        imgUrlFemale: Q5FOpt2,
        imgUrl: Q5MOpt2,
      },
      {
        label: "Curvy",
        value: "curvy",
        imgUrlMale: Q5MOpt3,
        imgUrlFemale: Q5FOpt3,
        imgUrl: Q5MOpt3,
      },
      {
        label: "Just a few sizes smaller",
        value: "smaller",
        imgUrlMale: Q5MOpt4,
        imgUrlFemale: Q5FOpt4,
        imgUrl: Q5MOpt4,
      },
    ],
  },
  {
    id: 6,
    type: "single-choice",
    question: "How long ago were you in great shape?",
    options: [
      { label: "🙋‍♂️ Less than a year ago", value: "less_than_year" },
      { label: "🙍‍♀️ 1 to 2 years ago", value: "1_2_years" },
      { label: "🤦‍♀️ More than 3 years ago", value: "more_than_3" },
      { label: "🤷‍♂️ Never", value: "never" },
    ],
  },
  {
    id: 7,
    type: "single-choice",
    question: "Have you tried Wall Pilates before?",
    options: [
      { label: "🧘‍♀️ Yes, I practice regularly", value: "regular" },
      { label: "🤏 I've tried it", value: "tried" },
      { label: "🤔 No, I have never tried it", value: "never" },
    ],
  },
  {
    id: 8,
    type: "single-choice",
    question: "How often do you exercise?",
    options: [
      { label: "🚴‍♂️ Daily", value: "daily" },
      { label: "🤸‍♂️ A few times a week", value: "few_times_week" },
      { label: "🗓️ A few times a month", value: "few_times_month" },
      { label: "🤷 Almost never", value: "almost_never" },
    ],
  },
  {
    id: 9,
    type: "single-choice",
    question: "What best describes your experience with fitness?",
    options: [
      { label: "🥺 I find it hard to lose weight", value: "hard_to_lose" },
      {
        label: "😏 I gain and lose weight without effort",
        value: "easy_weight_change",
      },
      { label: "😓 I have trouble gaining weight", value: "hard_to_gain" },
    ],
  },
  {
    id: 10,
    type: "height-input",
    question: "How tall are you?",
    toggleOptions: ["FT", "CM"],
  },
  {
    id: 11,
    type: "weight-input",
    question: "What's your current weight?",
    toggleOptions: ["LBS", "KG"],
    placeholder: "0",
    showBMI: true,
  },
  {
    id: 12,
    type: "weight-input",
    question: "What's your goal weight?",
    toggleOptions: ["LBS", "KG"],
    inputType: "number",
    placeholder: "0",
  },
  {
    id: 13,
    type: "info-page",
    question: "Worried about results?",
    description: "Over 45,132 people lost more than 13 kg with Wall Pilates",
    subDescription: "See how your body can change in just 1 week!",
  },
  {
    id: 14,
    type: "single-choice",
    question: "How much water do you drink daily?",
    options: [
      { label: "☕ Only tea or coffee", value: "tea_coffee" },
      { label: "💧 1-2 glasses a day", value: "1_2_glasses" },
      { label: "🥤 2-6 glasses a day", value: "2_6_glasses" },
      { label: "🌊 More than 6 glasses", value: "more_than_6" },
    ],
  },
  {
    id: 15,
    type: "single-choice",
    question: "How much sleep do you get on average?",
    options: [
      { label: "🛌 8+ hours per night", value: "8_plus" },
      { label: "🌙 7-8 hours per night", value: "7_8" },
      { label: "💤 6-7 hours per night", value: "6_7" },
      { label: "😴 Less than 6 hours per night", value: "less_than_6" },
    ],
  },
  {
    id: 16,
    type: "single-choice",
    question: "Do you eat a healthy diet?",
    options: [
      { label: "🥑 Yes, always", value: "always" },
      { label: "⚖️ Sometimes", value: "sometimes" },
      { label: "🌭 No", value: "no" },
    ],
  },
  {
    id: 17,
    type: "single-choice",
    question: "Which area would you like to target first?",
    options: [
      { label: "Belly", value: "belly", imgUrl: Q17Opt1 },
      { label: "Booty", value: "booty", imgUrl: Q17Opt2 },
      { label: "Legs", value: "legs", imgUrl: Q17Opt3 },
      { label: "Whole body", value: "whole_body", imgUrl: Q17Opt4 },
    ],
  },
  {
    id: 18,
    type: "single-choice",
    question: "Do you have pain in any of these areas?",
    description: "Select all that apply",
    options: [
      { label: "Back", value: "back", imgUrl: Q18Opt1 },
      { label: "Knees", value: "knees", imgUrl: Q18Opt2 },
      { label: "Ankles", value: "ankles", imgUrl: Q18Opt3 },
      { label: "Wrists", value: "wrists", imgUrl: Q18Opt4 },
      { label: "Shoulders", value: "shoulders", imgUrl: Q18Opt5 },
      { label: "None of the above", value: "none", imgUrl: false },
    ],
  },
  {
    id: 19,
    type: "single-choice",
    question: "How do you feel after walking up the stairs?",
    options: [
      { label: "😷 I'm so out of breath I can't talk", value: "cant_talk" },
      {
        label: "😮 I'm somewhat out of breath, but I can talk",
        value: "somewhat_breath",
      },
      {
        label: "🙂 I feel fine after one flight of stairs",
        value: "feel_fine",
      },
      {
        label: "😀 I can easily walk up multiple flights of stairs",
        value: "easily_multiple",
      },
    ],
  },
  {
    id: 20,
    type: "single-choice",
    question: "How would you describe your typical day?",
    options: [
      { label: "🪑 I spend most of my time sitting", value: "sitting" },
      { label: "🤾‍♀️ I take active breaks", value: "active_breaks" },
      { label: "🚶‍♀️ I'm usually on my feet", value: "on_feet" },
    ],
  },
  {
    id: 21,
    type: "single-choice",
    question: "How are your energy levels during the day?",
    options: [
      { label: "🔋 High and steady", value: "high_steady" },
      { label: "📉 Dragging before meals", value: "dragging_meals" },
      { label: "🔻 Post lunch slump", value: "post_lunch_slump" },
      { label: "😴 Low, I feel tired throughout the day", value: "low_tired" },
    ],
  },
  {
    id: 22,
    type: "multi-choice",
    question: "Do you have any of the following bad habits?",
    description: "Select all that apply",
    options: [
      { label: "🌛 I eat late at night", value: "eat_late" },
      { label: "🍭 I can't quit sugar", value: "sugar" },
      { label: "🥤 I can't live without soda", value: "soda" },
      { label: "🧂 I eat too much salt", value: "salt" },
      { label: "🍞 I eat too many carbs", value: "carbs" },
      { label: "✅ None of the above", value: "none" },
    ],
  },
  {
    id: 23,
    type: "multi-choice",
    question:
      "Have any of the following life events led to weight gain in the last few years?",
    description: "Select all that apply",
    options: [
      { label: "🍔 Slower metabolism", value: "metabolism" },
      { label: "⏱ Busy work or family life", value: "busy_life" },
      { label: "💰 Financial struggles", value: "financial" },
      { label: "🙀 Stress or mental health issues", value: "stress" },
      { label: "💍 Marriage or relationship", value: "marriage" },
      { label: "🤷‍ None of the above", value: "none" },
    ],
  },
  {
    id: 24,
    type: "text-input",
    question: "What is your age?",
    placeholder: "--",
    validation: { min: 16, max: 100 },
  },
  {
    id: 25,
    type: "text-input",
    question: "What is your name?",
    placeholder: "first name",
    validation: { minLength: 3, maxLength: 10 },
  },
  {
    id: 26,
    type: "summary-page",
    question: "Your Wellness Profile",
    description: "You have great potential to crush your goals!",
    subDescription:
      "Based on Wall Pilates historical data, men in their 20s can drastically improve their hormonal balance and start burning off excess weight rapidly.",
    showBMI: true,
    showProfile: true,
  },
  {
    id: 27,
    type: "single-choice",
    question: "What motivates you most?",
    options: [
      { label: "🏋️ Being stronger", value: "stronger" },
      { label: "👸 Looking more attractive", value: "attractive" },
      { label: "⛹️‍♂️ Being more athletic", value: "athletic" },
      { label: "🧘‍♀️ Releasing stress", value: "stress" },
      { label: "🦁 Feeling confident", value: "confident" },
      { label: "⚡️ Having more energy", value: "energy" },
    ],
  },
  {
    id: 28,
    type: "single-choice",
    question: "Do you have an important event coming up?",
    options: [
      { label: "💍 Wedding", value: "wedding" },
      { label: "🎂 Birthday", value: "birthday" },
      { label: "🎉 Anniversary", value: "anniversary" },
      { label: "🌴 Vacation", value: "vacation" },
      { label: "🎊 Friends reunion", value: "reunion" },
      { label: "🛫 New job or career", value: "job" },
      { label: "🎈 Other", value: "other" },
      { label: "🤷 None", value: "none" },
    ],
  },
  {
    id: 29,
    type: "date-input",
    question: "When is your event?",
    description: "We will keep this important event in mind for your journey",
    inputType: "date",
    placeholder: "Select event date",
    allowSkip: true,
  },
  {
    id: 30,
    type: "single-choice",
    question:
      "Once you reach goal weight with Wall Pilates, how would you see yourself?",
    options: [
      { label: "👍 Being proud of myself", value: "proud" },
      { label: "😉 Worrying less about my body", value: "worry_less" },
      { label: "🔋 Having more energy", value: "energy" },
      { label: "🥰 Feeling sexier", value: "sexier" },
      { label: "👑 More confident", value: "confident" },
      { label: "🙌 All of the above", value: "all" },
    ],
  },
  {
    id: 31,
    type: "single-choice",
    question: "After reaching your goal weight, how would you reward yourself?",
    options: [
      { label: "👗 Buying new clothes", value: "clothes" },
      { label: "📸 Taking more pictures", value: "pictures" },
      { label: "✈️ Travelling somewhere new", value: "travel" },
      { label: "🥂 Fun hang-out with friends", value: "friends" },
      { label: "😎 Taking a personal day", value: "personal_day" },
      { label: "🎁 Other", value: "other" },
    ],
  },
  {
    id: 32,
    type: "prediction-page",
    description: "We predict you'll weigh {goalWeight} kg by {targetDate}",
    showComparison: true,
    showGraph: true,
  },
  {
    id: 33,
    type: "processing-page",
    question: "WAIT! Your personal program is processing!",
    showSpeedometer: true,
    showStats: true,
    showFeedback: true,
  },
];
