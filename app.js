// Ask user for input zodiac sign
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let zodiacSign = "";

// horoscope object to store different phrases for each sign
const horoscope = {
  aries: [
    "Embrace your inner warrior todday; a challenge awaits.",
    "Your energy is contagious—spread it wisely.",
    "Bold choices lead to unexpected rewards.",
    "Channel your passion into a creative outlet.",
    "A spark of inspiration will ignite new possibilities.",
    "Don’t shy away from leadership; it’s your time to shine.",
    "A surprising connection could change your perspective.",
    "Take the lead in group settings; your voice matters.",
    "Trust your instincts; they won’t steer you wrong.",
    "Adventure calls—don’t hesitate to answer!",
  ],
  taurus: [
    "Stability is key; nurture your foundations today.",
    "Sensual pleasures await; indulge in something beautiful.",
    "Financial decisions should be approached with caution.",
    "A slow and steady approach yields lasting results.",
    "Surround yourself with comfort to recharge your spirit.",
    "A close friend may need your unwavering support.",
    "Nature beckons; take time to connect with the earth.",
    "Small changes in routine can bring great joy.",
    "Trust your instincts in matters of the heart.",
    "Your patience will be rewarded in unexpected ways.",
  ],
  gemini: [
    "Communication is your superpower; wield it wisely.",
    "A burst of curiosity may lead to new interests.",
    "Don’t hesitate to ask questions; knowledge is key.",
    "A social outing could spark a meaningful connection.",
    "Balance your thoughts with moments of stillness.",
    "Your adaptability will shine in unexpected situations.",
    "Embrace your duality; it’s a source of strength.",
    "A sibling or close friend may bring surprising news.",
    "Creative collaborations could yield fantastic results.",
    "Embrace spontaneity; today is full of possibilities!",
  ],
  cancer: [
    "Nurture your emotions; self-care is essential.",
    "Home is where the heart is; create a cozy sanctuary.",
    "Trust your intuition; it’s guiding you to clarity.",
    "Family ties may strengthen; reach out to loved ones.",
    "A hidden talent could surface; explore it.",
    "Vulnerability is a strength; don’t fear sharing.",
    "Surround yourself with supportive energies today.",
    "A moment of solitude can bring you profound insight.",
    "Embrace change; it may lead to emotional growth.",
    "Your empathy will touch someone in need.",
  ],
  leo: [
    "Step into the spotlight; your charisma is magnetic.",
    "Creativity flows through you—let it shine.",
    "A personal project deserves your full attention.",
    "Leadership opportunities may present themselves.",
    "Romance is in the air; be open to love’s magic.",
    "Your generosity will be recognized and appreciated.",
    "Take time to celebrate your achievements, big and small.",
    "A new friendship could become a treasured bond.",
    "Your confidence will inspire others to follow suit.",
    "Embrace playfulness; joy is a vital part of life.",
  ],
  virgo: [
    "Attention to detail will pay off in your endeavors.",
    "Organize your space to clear your mind.",
    "A practical approach will solve current challenges.",
    "Your analytical skills will uncover hidden truths.",
    "Your analytical skills will uncover hidden truths.",
    "A coworker may need your expertise; lend a hand.",
    "Balance work and relaxation for optimal well-being.",
    "Trust your instincts in personal matters; they guide you.",
    "A thoughtful gesture could strengthen a relationship.",
    "Your hard work is about to bear fruit; stay patient.",
  ],
  libra: [
    "Seek harmony in your relationships; balance is key.",
    "A creative project will flourish with collaboration.",
    "Trust your judgment when faced with decisions.",
    "A new partnership may bring exciting opportunities.",
    "Embrace beauty in your surroundings for inspiration.",
    "Your diplomacy will help resolve conflicts peacefully.",
    "Self-reflection will enhance your personal growth.",
    "Don’t shy away from expressing your feelings.",
    "A social event could lead to meaningful connections.",
    "Your charm will attract positive energy today.",
  ],
  scorpio: [
    "Dive deep into your emotions; they hold valuable insights.",
    "Trust your intuition; it’s sharper than ever.",
    "A transformative experience is on the horizon.",
    "Your passion will inspire those around you.",
    "Let go of what no longer serves you to make space for growth.",
    "An intriguing mystery may captivate your interest.",
    "Vulnerability is a path to deeper connections.",
    "Trust is key in relationships—nurture it carefully.",
    "Your determination will lead to significant breakthroughs.",
    "Embrace your power; it’s a force for positive change.",
  ],
  sagittarius: [
    "Adventure beckons—embrace spontaneity today!",
    "Your thirst for knowledge will lead to exciting discoveries.",
    "Seek out new experiences to expand your horizons.",
    "Optimism is your ally; let it guide your path.",
    "A philosophical conversation could inspire new ideas.",
    "Freedom is essential; don’t let anyone hold you back.",
    "Travel plans may come to fruition—pack your bags!",
    "Your sense of humor will lighten the mood around you.",
    "Take a leap of faith; trust the journey ahead.",
    "Embrace your inner wanderer and explore uncharted territory.",
  ],
  capricorn: [
    "Hard work pays off—stay focused on your goals.",
    "Structure is your ally; create a plan for success.",
    "A mentor may offer valuable guidance today.",
    "Your discipline will inspire those around you.",
    "Take time for reflection; assess your progress.",
    "Building strong foundations will yield lasting results.",
    "A professional opportunity may arise—seize it!",
    "Balance ambition with self-care for optimal well-being.",
    "Trust your instincts in navigating challenges.",
    "Your perseverance will pave the way for achievement.",
  ],
  aquarius: [
    "Embrace your uniqueness; it’s your greatest asset.",
    "Innovation is in the air; let your ideas flow.",
    "A friend may inspire you to think outside the box.",
    "Collaboration will lead to groundbreaking results.",
    "Your vision for the future is powerful—share it!",
    "Take time to connect with like-minded souls.",
    "A new perspective may shift your understanding.",
    "Embrace change; it can lead to personal growth.",
    "Your compassion will uplift those around you.",
    "Explore unconventional paths to find fulfillment.",
  ],
  pisces: [
    "Trust your intuition; it knows the way forward.",
    "Creativity flows through you—let it take shape.",
    "A moment of solitude can spark profound insights.",
    "Nurture your dreams; they’re the seeds of your future.",
    "Empathy is your strength; use it wisely today.",
    "Explore your spiritual side for deeper understanding.",
    "A close relationship may need nurturing and care.",
    "Artistic pursuits will bring you joy and fulfillment.",
    "Your imagination can lead to innovative solutions.",
    "Embrace the ebb and flow of life; trust the process.",
  ],
};

// random number to choose different phrases each time
let randNum = Math.floor(Math.random() * 10);

// ask the user for a zodiac sign and return a random phrase
function askForZodiacSign() {
  rl.question("Please enter your zodiac sign: ", (answer) => {
    zodiacSign = answer.toLocaleLowerCase();
    switch (zodiacSign) {
      case "aries":
        console.log(`Aries: ${horoscope.aries[randNum]}`);
        break;
      case "taurus":
        console.log(`Taurus: ${horoscope.taurus[randNum]}`);
        break;

      case "gemini":
        console.log(`Gemini: ${horoscope.gemini[randNum]}`);
        break;

      case "cancer":
        console.log(`Cancer: ${horoscope.cancer[randNum]}`);
        break;

      case "leo":
        console.log(`Leo: ${horoscope.leo[randNum]}`);
        break;

      case "virgo":
        console.log(`Virgo: ${horoscope.virgo[randNum]}`);
        break;

      case "libra":
        console.log(`Libra: ${horoscope.libra[randNum]}`);
        break;

      case "scorpio":
        console.log(`Scorpio: ${horoscope.scorpio[randNum]}`);
        break;

      case "sagittarius":
        console.log(`Sagittarius: ${horoscope.sagittarius[randNum]}`);
        break;

      case "capricorn":
        console.log(`Capricorn: ${horoscope.capricorn[randNum]}`);
        break;

      case "aquarius":
        console.log(`Aquarius: ${horoscope.aquarius[randNum]}`);
        break;

      case "pisces":
        console.log(`Pisces: ${horoscope.pisces[randNum]}`);
        break;

      default:
        console.log("Please enter a valid zodiac sign.");
        break;
    }

    //ask the user if they want to continue
    rl.question(
      "Do you want to check another sign? (yes/no): ",
      (continueAnswer) => {
        if (continueAnswer.toLowerCase() === "yes") {
          askForZodiacSign(); // Start over
        } else {
          console.log("Thank you for using the horoscope program!");
          rl.close(); // Close the readline interface
        }
      },
    );
  });
}

askForZodiacSign();
