export type StepType = 
  | 'validation'
  | 'choice'
  | 'grounding'
  | 'grounding'
  | 'somatic'
  | 'completion';

export interface Step {
  id: string;
  type: StepType;
  title?: string;
  icon?: string;
  content?: {
    heading?: string;
    subheading?: string;
    description?: string;
  };
  choices?: Array<{
    id: string;
    label: string;
    icon: string;
  }>;
  canGoBack?: boolean;
}

export interface Emotion {
  id: string;
  name: string;
  icon: string;
  steps: Step[];
}

export const emotions: Emotion[] = [
  {
    id: 'anxious',
    name: 'Anxious',
    icon: 'anxious',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Look around and name five things you can see",
          description: 'e.g., a pen, a spot on the wall, a tree',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Identify four things you can physically feel",
          description: 'the texture of your clothes, the ground beneath your feet, or a smooth object',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Listen for three distinct sounds",
          description: 'e.g., distant traffic, a clock ticking, your own grounding',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Notice two things you can smell ",
          description: 'e.g., soap, coffee, or even just the air',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Focus on one thing you can taste, or recall a favourite flavour",
          description: 'e.g., mint from toothpaste, or take a sip of water',
        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'overwhelmed',
    name: 'Overwhelmed',
    icon: 'overwhelmed',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
      
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Strategic Prioritisation',
        content: {
          heading: "Categorise your tasks",
          description: 'What must be done now?',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Strategic Prioritisation',
        content: {
          heading: "Categorise your tasks",
          description: 'What should be done soon?',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Strategic Prioritisation',
        content: {
          heading: "Categorise your tasks",
          description: 'What can be done later?',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Strategic Prioritisation',
        content: {
          heading: "Categorise your tasks",
          description: 'What can be delegated or eliminated?',
        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'stressed',
    name: 'Stressed',
    icon: 'stressed',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Find a place to sit or lie down",
          description: 'Keep grounding deeply',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Start by squeezing your toes and feet as tight as you can for 10 seconds, then release ",
          description: '',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Now, tense up your calf muscles, hold for 10 seconds,  then release",
          description: '',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Now, tense up your thigh muscles, hold for 10 seconds,  then release",
          description: '',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Now, make tight fists with your hands, hold for 10 seconds, then release",
          description: '',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Now, lift your shoulders up to your ears, hold for 10 seconds, then release",
          description: '',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Body Tension Release',
        content: {
          heading: "Finally, scrunch your face tightly, hold for 10 seconds, then release all facial muscles",
          description: '',
        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'angry',
    name: 'Angry',
    icon: 'angry',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
   
      {
        id: 'somatic',
        type: 'somatic',
        title: 'Somatic Release',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Somatic Release',
        content: {
          heading: 'Use up your energy safely in other ways',
          description: 'e.g., tearing up paper, hitting a pillow, smashing ice cubes, clenching and unclenching your fists',
        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },

      },
    ],
  },
  {
    id: 'sad',
    name: 'Sad',
    icon: 'sad',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Acknowledge your pain",
          description: 'Say to yourself, \n“This is a moment of suffering.” \nor \n“This hurts.”',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Recognise shared experience",
          description: 'Say to yourself, \n“Suffering is a part of life.” \nor \n“I am not alone.”',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Give yourself a supportive touch. Gently place a hand over your heart, cradle your face, or hug yourself.",
          description: 'Feel the warmth and physical support as you offer yourself kindness',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Offer kind and supportive words to yourself",
          description: 'Say to yourself, \n“May I be kind to myself.” \nor \n“May I give myself the compassion that I need.” \nor \n“May I learn to accept myself as I am.”',

        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'lonely',
    name: 'Lonely',
    icon: 'lonely',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Acknowledge your pain",
          description: 'Say to yourself, \n“This is a moment of suffering.” \nor \n“This hurts.”',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Recognise shared experience",
          description: 'Say to yourself, \n“Suffering is a part of life.” \nor \n“I am not alone.”',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Give yourself a supportive touch. Gently place a hand over your heart, cradle your face, or hug yourself.",
          description: 'Feel the warmth and physical support as you offer yourself kindness',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Self-Compassion Break',
        content: {
          heading: "Offer kind and supportive words to yourself",
          description: 'Say to yourself, \n“May I be kind to myself.” \nor \n“May I give myself the compassion that I need.” \nor \n“May I learn to accept myself as I am.”',

        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'ashamed',
    name: 'Ashamed',
    icon: 'ashamed',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Cognitive Reframing',
        content: {
          heading: "Separate yourself from what happened",
          description: 'Shame can make it feel like you are bad.\n Let\'s slow down and look at what happened instead of who you are.',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Cognitive Reframing',
        content: {
          heading: "Focus on the action",
          description: 'Complete this sentence in your head: \n“I did something that I regret.”\nIf it helps, be specific about what you did or didn’t do without judging yourself.',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Cognitive Reframing',
        content: {
          heading: "Actions can be changed",
          description: 'Behaviours can be learned from, repaired, or done differently next time. This doesn’t define who you are. \n\nTake a breath and let that sink in.',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Cognitive Reframing',
        content: {
          heading: "What\'s one gentle, realistic thing you could do next?",
          description: '• Apologise or acknowledge \n• Clarify or correct\n• Make amends\n• Learn and move on\n• Do nothing right now\n\nThere\'s no right choice; just one that feels possible.',
        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'numb',
    name: 'Numb',
    icon: 'numb',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: 'That makes sense.',
          description: "Let's take this one step at a time.",
        },
      },

      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Look around and name five things you can see",
          description: 'e.g., a pen, a spot on the wall, a tree',
        },
        canGoBack: true,
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Identify four things you can physically feel",
          description: 'the texture of your clothes, the ground beneath your feet, or a smooth object',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Listen for three distinct sounds",
          description: 'e.g., distant traffic, a clock ticking, your own grounding',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Notice two things you can smell ",
          description: 'e.g., soap, coffee, or even just the air',
        },
        canGoBack: true,
      },{
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: "Focus on one thing you can taste, or recall a favourite flavour",
          description: 'e.g., mint from toothpaste, or take a sip of water',
        },
        canGoBack: true,
      },
      {
        id: 'completion',
        type: 'completion',
        icon: 'wind',
        content: {
          heading: 'You did what you could right now.',
          description: 'Take a deep breath and carry this moment of calm with you.',
        },
      },
    ],
  },
  {
    id: 'not-sure',
    name: "I'm not sure",
    icon: 'question',
    steps: [
      {
        id: 'validation',
        type: 'validation',
        icon: 'stones',
        content: {
          heading: "That's okay.",
          subheading: "You don't need to have the right words right now.",
          description: "Let's take a moment to slow things down.",
        },
      },
      {
        id: 'grounding',
        type: 'grounding',
        title: 'Grounding Exercise',
        content: {
          heading: 'Take 5 deep breaths',
          description: 'Inhale for 4 seconds, hold for 2 seconds, exhale for 6 seconds',
        },
        canGoBack: true,
      },

         {
        id: 'choice',
        type: 'choice',
        title: 'Choose what fits best',
        choices: [
          { id: 'sad', label: 'Heavy / Flat', icon: 'cloud' },
          { id: 'stressed', label: 'Tense / Activated', icon: 'lightning' },
        ],
      },
    ],
  },
];
