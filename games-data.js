// Grammar Buddy Burger Madness & Tense Showdown Data
window.GRAMMAR_BUDDY_BURGER_LEVELS = {
  "1": {
    "title": "Level 1: Present Habit Ticket",
    "subtitle": "Check daily routines, time clues like 'every day', and he/she/it verb endings.",
    "tickets": [
      { "id": "L1-1", "sentence": "He walk to school with his brother every day.", "targetVerb": "walk", "isCorrect": false, "expectedForm": "walks", "explanation": "The subject is 'he' and 'every day' shows a habit, so 'walk' needs '-s' to become 'walks'." },
      { "id": "L1-2", "sentence": "She walks to school every day.", "targetVerb": "walks", "isCorrect": true, "expectedForm": "walks", "explanation": "'Walks' matches the singular subject 'she' for a daily routine." },
      { "id": "L1-3", "sentence": "We eats lunch in the canteen every day.", "targetVerb": "eats", "isCorrect": false, "expectedForm": "eat", "explanation": "With the subject 'we' in the Simple Present, use the base verb 'eat' without '-s'." },
      { "id": "L1-4", "sentence": "Aina watches cartoons every Sunday.", "targetVerb": "watches", "isCorrect": true, "expectedForm": "watches", "explanation": "Aina is one person ('she'), and 'watches' correctly adds '-es' for a Sunday habit." },
      { "id": "L1-5", "sentence": "My sister studys English every night.", "targetVerb": "studys", "isCorrect": false, "expectedForm": "studies", "explanation": "For 'my sister' ('she'), 'study' changes 'y' before a consonant to '-ies' ('studies')." },
      { "id": "L1-6", "sentence": "They play football on the school field every evening.", "targetVerb": "play", "isCorrect": true, "expectedForm": "play", "explanation": "'They' takes the base form 'play' for a regular afternoon habit." }
    ]
  },
  "2": {
    "title": "Level 2: Past Tense Grill",
    "subtitle": "Check past time clues and regular or irregular Simple Past verbs.",
    "tickets": [
      { "id": "L2-1", "sentence": "They go to the library yesterday.", "targetVerb": "go", "isCorrect": false, "expectedForm": "went", "explanation": "'Yesterday' marks a finished past action, and the irregular past form of 'go' is 'went'." },
      { "id": "L2-2", "sentence": "Ali ate a banana yesterday.", "targetVerb": "ate", "isCorrect": true, "expectedForm": "ate", "explanation": "'Ate' is the correct irregular past tense of 'eat' with 'yesterday'." },
      { "id": "L2-3", "sentence": "The bus stoped near our school yesterday.", "targetVerb": "stoped", "isCorrect": false, "expectedForm": "stopped", "explanation": "'Stop' doubles the final consonant 'p' before '-ed' to become 'stopped'." },
      { "id": "L2-4", "sentence": "We brought food to the picnic last Saturday.", "targetVerb": "brought", "isCorrect": true, "expectedForm": "brought", "explanation": "'Brought' is the right irregular past form of 'bring' for 'last Saturday'." },
      { "id": "L2-5", "sentence": "She writed a letter to her friend last night.", "targetVerb": "writed", "isCorrect": false, "expectedForm": "wrote", "explanation": "'Write' is an irregular verb whose past tense is 'wrote' for 'last night'." },
      { "id": "L2-6", "sentence": "We visited our grandmother in the village last week.", "targetVerb": "visited", "isCorrect": true, "expectedForm": "visited", "explanation": "'Visited' is the proper regular past-tense form for 'last week'." }
    ]
  },
  "3": {
    "title": "Level 3: Combo Tense Challenge",
    "subtitle": "Compare Simple Present and Simple Past with varied subjects and time clues.",
    "tickets": [
      { "id": "L3-1", "sentence": "I go to school yesterday.", "targetVerb": "go", "isCorrect": false, "expectedForm": "went", "explanation": "Because the time clue is 'yesterday', the verb must be past tense 'went', not present 'go'." },
      { "id": "L3-2", "sentence": "I water the flowers in the garden every afternoon.", "targetVerb": "water", "isCorrect": true, "expectedForm": "water", "explanation": "'Every afternoon' signals a present routine, and 'I' uses the base verb 'water'." },
      { "id": "L3-3", "sentence": "The birds flyed over our school yesterday.", "targetVerb": "flyed", "isCorrect": false, "expectedForm": "flew", "explanation": "'Fly' has the irregular past form 'flew', not 'flyed'." },
      { "id": "L3-4", "sentence": "Our teacher carries a bag to school every day.", "targetVerb": "carries", "isCorrect": true, "expectedForm": "carries", "explanation": "'Our teacher' is singular ('he/she'), so 'carries' matches the daily routine." },
      { "id": "L3-5", "sentence": "She walk to the shop yesterday.", "targetVerb": "walk", "isCorrect": false, "expectedForm": "walked", "explanation": "'Yesterday' means the action is in the past, so 'walk' should be 'walked'." },
      { "id": "L3-6", "sentence": "We swam across the cool pool together.", "targetVerb": "swam", "isCorrect": true, "expectedForm": "swam", "explanation": "'Swam' is the correct irregular Simple Past form of 'swim'." }
    ]
  },
  "4": {
    "title": "Level 4: Speed Run Kitchen",
    "subtitle": "Mixed tense orders! Choose Timed (15s per ticket) or Untimed mode.",
    "tickets": [
      { "id": "L4-1", "sentence": "My friends plays football after school every day.", "targetVerb": "plays", "isCorrect": false, "expectedForm": "play", "explanation": "'My friends' means 'they', so use 'play' without '-s' for a daily habit." },
      { "id": "L4-2", "sentence": "I saw a rainbow yesterday.", "targetVerb": "saw", "isCorrect": true, "expectedForm": "saw", "explanation": "'Saw' is the right past form of 'see' for 'yesterday'." },
      { "id": "L4-3", "sentence": "He losed his pencil yesterday.", "targetVerb": "losed", "isCorrect": false, "expectedForm": "lost", "explanation": "The irregular past form of 'lose' is 'lost'." },
      { "id": "L4-4", "sentence": "She speaks English clearly during class presentations.", "targetVerb": "speaks", "isCorrect": true, "expectedForm": "speaks", "explanation": "'She' pairs with 'speaks' in the Simple Present." },
      { "id": "L4-5", "sentence": "We planed our class party yesterday.", "targetVerb": "planed", "isCorrect": false, "expectedForm": "planned", "explanation": "'Plan' is a short CVC verb, so it doubles 'n' to become 'planned' in the past." },
      { "id": "L4-6", "sentence": "They were happy after the match yesterday.", "targetVerb": "were", "isCorrect": true, "expectedForm": "were", "explanation": "'They' takes 'were' in the Simple Past." }
    ]
  },
  "5": {
    "title": "Level 5: Grand Master Banquet",
    "subtitle": "Final banquet check with varied subjects, negatives, and past/present clues.",
    "tickets": [
      { "id": "L5-1", "sentence": "He does not play badminton on Mondays.", "targetVerb": "does not play", "isCorrect": true, "expectedForm": "does not play", "explanation": "'He' uses 'does not' plus the base verb 'play' for a regular Monday routine." },
      { "id": "L5-2", "sentence": "I did not went to school yesterday.", "targetVerb": "did not went", "isCorrect": false, "expectedForm": "did not go", "explanation": "After 'did not', always use the base verb 'go', not 'went'." },
      { "id": "L5-3", "sentence": "My brother has a blue bicycle.", "targetVerb": "has", "isCorrect": true, "expectedForm": "has", "explanation": "'My brother' ('he') uses 'has' in the Simple Present." },
      { "id": "L5-4", "sentence": "They does not walk to school every day.", "targetVerb": "does not", "isCorrect": false, "expectedForm": "do not", "explanation": "'They' goes with 'do not' in the Simple Present, not 'does not'." },
      { "id": "L5-5", "sentence": "We did not eat breakfast yesterday.", "targetVerb": "did not eat", "isCorrect": true, "expectedForm": "did not eat", "explanation": "'Did not eat' correctly pairs past auxiliary 'did not' with base verb 'eat'." },
      { "id": "L5-6", "sentence": "She are my best friend.", "targetVerb": "are", "isCorrect": false, "expectedForm": "is", "explanation": "Singular subject 'she' takes 'is' in the Simple Present, not 'are'." }
    ]
  }
};

window.GRAMMAR_BUDDY_SHOWDOWN_BANK = [
  { "id": "TS-01", "sentence": "We often watch scary movies during family night.", "targetVerb": "watch", "tense": "present", "reason": "'Watch' is in the Simple Present and 'often' is a clue for a regular activity." },
  { "id": "TS-02", "sentence": "The birds flew high over the school playground this morning.", "targetVerb": "flew", "tense": "past", "reason": "'Flew' is the Simple Past form of 'fly' for an action earlier this morning." },
  { "id": "TS-03", "sentence": "Aina walks to school with her friend every morning.", "targetVerb": "walks", "tense": "present", "reason": "'Walks' is Simple Present with '-s' for Aina, and 'every morning' shows a habit." },
  { "id": "TS-04", "sentence": "We visited our grandmother in the village last week.", "targetVerb": "visited", "tense": "past", "reason": "'Visited' ends in '-ed' and 'last week' tells us the visit happened in the past." },
  { "id": "TS-05", "sentence": "My father drinks coffee in the kitchen every day.", "targetVerb": "drinks", "tense": "present", "reason": "'Drinks' is Simple Present and 'every day' shows a daily routine." },
  { "id": "TS-06", "sentence": "Ali ate a sweet mango after lunch yesterday.", "targetVerb": "ate", "tense": "past", "reason": "'Ate' is the Simple Past form of 'eat' and 'yesterday' marks past time." },
  { "id": "TS-07", "sentence": "They play badminton in the hall on Fridays.", "targetVerb": "play", "tense": "present", "reason": "'Play' is in the Simple Present for a regular Friday game." },
  { "id": "TS-08", "sentence": "She wrote a neat note in her notebook last night.", "targetVerb": "wrote", "tense": "past", "reason": "'Wrote' is the Simple Past form of 'write' for an action last night." },
  { "id": "TS-09", "sentence": "I brush my teeth before going to bed every night.", "targetVerb": "brush", "tense": "present", "reason": "'Brush' is Simple Present and 'every night' shows a regular habit." },
  { "id": "TS-10", "sentence": "We swam in the clear sea near the island yesterday.", "targetVerb": "swam", "tense": "past", "reason": "'Swam' is the Simple Past form of 'swim' for a past trip." },
  { "id": "TS-11", "sentence": "The teacher explains grammar rules clearly in class.", "targetVerb": "explains", "tense": "present", "reason": "'Explains' is in the Simple Present for a regular classroom action." },
  { "id": "TS-12", "sentence": "Mother bought fresh fish and vegetables at the market.", "targetVerb": "bought", "tense": "past", "reason": "'Bought' is the Simple Past form of 'buy' for a completed shopping trip." }
];