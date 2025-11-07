'use client';

import CategoryTable from '@/components/CategoryTable';
import PersonaDetails from '@/components/PersonaDetails';
import { User, Brain, Award, Heart, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState('');

  const personas = [
    'Academic Achiever',
    'Creative Explorer',
    'Quiet Genius',
    'Struggling Fighter',
    'Social Learner',
    'Methodical Planner',
    'Gen-Z Maverick',
    'Steady Progresser',
    'Underconfident Talent',
    'Enthusiastic Beginner'
  ];

  // Persona-to-Attribute Mappings
  const personaMap: Record<string, Record<string, string>> = {
    'Academic Achiever': {
      'Learning Preference': 'Visual',
      'Social Energy': 'Extroverted',
      'Study Preference': 'Small Group (2-3)',
      'Chatbot Conversation Tone': 'Formal (Professional)',
      'Motivation Triggers': 'Achievement (Grades/Ranks)',
      'Logical Thinking': 'Advanced',
      'Spatial-Visual Intelligence': 'High',
      'Verbal Capabilities': 'Strong',
      'Mathematical Reasoning': 'Advanced',
      'Creative Problem-Solving': 'Conventional',
      'Current Knowledge Level': 'Above Grade Level',
      'Technical Competencies': 'Advanced',
      'Learning Velocity': 'Fast Learner',
      'Communication Skills': 'Articulate',
      'Growth Mindset': 'Strong (Embraces challenges)',
      'Resilience Level': 'High (Bounces back quickly)',
      'Persistence': 'Highly Persistent',
      'Focus Pattern': 'Deep Focus (Long sessions)',
      'Goal Orientation': 'Long-term Focused'
    },
    'Creative Explorer': {
      'Learning Preference': 'Kinesthetic',
      'Social Energy': 'Extroverted',
      'Study Preference': 'Large Group (4+)',
      'Chatbot Conversation Tone': 'Gen-Z (Trendy/Slang)',
      'Motivation Triggers': 'Social (Peer recognition)',
      'Logical Thinking': 'Proficient',
      'Spatial-Visual Intelligence': 'Medium',
      'Verbal Capabilities': 'Average',
      'Mathematical Reasoning': 'Intermediate',
      'Creative Problem-Solving': 'Innovative',
      'Current Knowledge Level': 'At Grade Level',
      'Technical Competencies': 'Intermediate',
      'Learning Velocity': 'Steady Pace',
      'Communication Skills': 'Articulate',
      'Growth Mindset': 'Strong (Embraces challenges)',
      'Resilience Level': 'High (Bounces back quickly)',
      'Persistence': 'Moderately Persistent',
      'Focus Pattern': 'Interval Focus (Breaks needed)',
      'Goal Orientation': 'Short-term Focused'
    },
    'Quiet Genius': {
      'Learning Preference': 'Reading/Writing',
      'Social Energy': 'Introverted',
      'Study Preference': 'Individual (Solo)',
      'Chatbot Conversation Tone': 'Formal (Professional)',
      'Motivation Triggers': 'Mastery (Deep understanding)',
      'Logical Thinking': 'Advanced',
      'Spatial-Visual Intelligence': 'High',
      'Verbal Capabilities': 'Strong',
      'Mathematical Reasoning': 'Advanced',
      'Creative Problem-Solving': 'Innovative',
      'Current Knowledge Level': 'Above Grade Level',
      'Technical Competencies': 'Advanced',
      'Learning Velocity': 'Fast Learner',
      'Communication Skills': 'Competent',
      'Growth Mindset': 'Strong (Embraces challenges)',
      'Resilience Level': 'Moderate (Normal recovery)',
      'Persistence': 'Highly Persistent',
      'Focus Pattern': 'Deep Focus (Long sessions)',
      'Goal Orientation': 'Long-term Focused'
    },
    'Struggling Fighter': {
      'Learning Preference': 'Visual',
      'Social Energy': 'Ambiverted',
      'Study Preference': 'Small Group (2-3)',
      'Chatbot Conversation Tone': 'Casual (Friendly)',
      'Motivation Triggers': 'Achievement (Grades/Ranks)',
      'Logical Thinking': 'Developing',
      'Spatial-Visual Intelligence': 'Low',
      'Verbal Capabilities': 'Building',
      'Mathematical Reasoning': 'Basic',
      'Creative Problem-Solving': 'Structured',
      'Current Knowledge Level': 'Below Grade Level',
      'Technical Competencies': 'Beginner',
      'Learning Velocity': 'Needs Time',
      'Communication Skills': 'Developing',
      'Growth Mindset': 'Developing (Open to growth)',
      'Resilience Level': 'Low (Needs support)',
      'Persistence': 'Easily Discouraged',
      'Focus Pattern': 'Short Bursts (Micro-sessions)',
      'Goal Orientation': 'Immediate Results'
    },
    'Social Learner': {
      'Learning Preference': 'Auditory',
      'Social Energy': 'Extroverted',
      'Study Preference': 'Large Group (4+)',
      'Chatbot Conversation Tone': 'Casual (Friendly)',
      'Motivation Triggers': 'Social (Peer recognition)',
      'Logical Thinking': 'Proficient',
      'Spatial-Visual Intelligence': 'Medium',
      'Verbal Capabilities': 'Average',
      'Mathematical Reasoning': 'Intermediate',
      'Creative Problem-Solving': 'Conventional',
      'Current Knowledge Level': 'At Grade Level',
      'Technical Competencies': 'Intermediate',
      'Learning Velocity': 'Steady Pace',
      'Communication Skills': 'Articulate',
      'Growth Mindset': 'Developing (Open to growth)',
      'Resilience Level': 'Moderate (Normal recovery)',
      'Persistence': 'Moderately Persistent',
      'Focus Pattern': 'Interval Focus (Breaks needed)',
      'Goal Orientation': 'Short-term Focused'
    },
    'Methodical Planner': {
      'Learning Preference': 'Reading/Writing',
      'Social Energy': 'Introverted',
      'Study Preference': 'Individual (Solo)',
      'Chatbot Conversation Tone': 'Formal (Professional)',
      'Motivation Triggers': 'Mastery (Deep understanding)',
      'Logical Thinking': 'Proficient',
      'Spatial-Visual Intelligence': 'Medium',
      'Verbal Capabilities': 'Strong',
      'Mathematical Reasoning': 'Intermediate',
      'Creative Problem-Solving': 'Structured',
      'Current Knowledge Level': 'At Grade Level',
      'Technical Competencies': 'Intermediate',
      'Learning Velocity': 'Steady Pace',
      'Communication Skills': 'Competent',
      'Growth Mindset': 'Developing (Open to growth)',
      'Resilience Level': 'High (Bounces back quickly)',
      'Persistence': 'Highly Persistent',
      'Focus Pattern': 'Deep Focus (Long sessions)',
      'Goal Orientation': 'Long-term Focused'
    },
    'Gen-Z Maverick': {
      'Learning Preference': 'Visual',
      'Social Energy': 'Extroverted',
      'Study Preference': 'Small Group (2-3)',
      'Chatbot Conversation Tone': 'Gen-Z (Trendy/Slang)',
      'Motivation Triggers': 'Social (Peer recognition)',
      'Logical Thinking': 'Proficient',
      'Spatial-Visual Intelligence': 'High',
      'Verbal Capabilities': 'Average',
      'Mathematical Reasoning': 'Basic',
      'Creative Problem-Solving': 'Innovative',
      'Current Knowledge Level': 'At Grade Level',
      'Technical Competencies': 'Advanced',
      'Learning Velocity': 'Fast Learner',
      'Communication Skills': 'Articulate',
      'Growth Mindset': 'Strong (Embraces challenges)',
      'Resilience Level': 'High (Bounces back quickly)',
      'Persistence': 'Moderately Persistent',
      'Focus Pattern': 'Short Bursts (Micro-sessions)',
      'Goal Orientation': 'Immediate Results'
    },
    'Steady Progresser': {
      'Learning Preference': 'Auditory',
      'Social Energy': 'Ambiverted',
      'Study Preference': 'Small Group (2-3)',
      'Chatbot Conversation Tone': 'Casual (Friendly)',
      'Motivation Triggers': 'Mastery (Deep understanding)',
      'Logical Thinking': 'Proficient',
      'Spatial-Visual Intelligence': 'Medium',
      'Verbal Capabilities': 'Average',
      'Mathematical Reasoning': 'Intermediate',
      'Creative Problem-Solving': 'Conventional',
      'Current Knowledge Level': 'At Grade Level',
      'Technical Competencies': 'Intermediate',
      'Learning Velocity': 'Steady Pace',
      'Communication Skills': 'Competent',
      'Growth Mindset': 'Developing (Open to growth)',
      'Resilience Level': 'Moderate (Normal recovery)',
      'Persistence': 'Moderately Persistent',
      'Focus Pattern': 'Interval Focus (Breaks needed)',
      'Goal Orientation': 'Short-term Focused'
    },
    'Underconfident Talent': {
      'Learning Preference': 'Visual',
      'Social Energy': 'Introverted',
      'Study Preference': 'Individual (Solo)',
      'Chatbot Conversation Tone': 'Casual (Friendly)',
      'Motivation Triggers': 'Mastery (Deep understanding)',
      'Logical Thinking': 'Advanced',
      'Spatial-Visual Intelligence': 'High',
      'Verbal Capabilities': 'Strong',
      'Mathematical Reasoning': 'Advanced',
      'Creative Problem-Solving': 'Innovative',
      'Current Knowledge Level': 'Above Grade Level',
      'Technical Competencies': 'Intermediate',
      'Learning Velocity': 'Steady Pace',
      'Communication Skills': 'Developing',
      'Growth Mindset': 'Fixed (Comfort zone)',
      'Resilience Level': 'Low (Needs support)',
      'Persistence': 'Easily Discouraged',
      'Focus Pattern': 'Interval Focus (Breaks needed)',
      'Goal Orientation': 'Short-term Focused'
    },
    'Enthusiastic Beginner': {
      'Learning Preference': 'Kinesthetic',
      'Social Energy': 'Extroverted',
      'Study Preference': 'Large Group (4+)',
      'Chatbot Conversation Tone': 'Gen-Z (Trendy/Slang)',
      'Motivation Triggers': 'Achievement (Grades/Ranks)',
      'Logical Thinking': 'Developing',
      'Spatial-Visual Intelligence': 'Low',
      'Verbal Capabilities': 'Building',
      'Mathematical Reasoning': 'Basic',
      'Creative Problem-Solving': 'Structured',
      'Current Knowledge Level': 'Below Grade Level',
      'Technical Competencies': 'Beginner',
      'Learning Velocity': 'Needs Time',
      'Communication Skills': 'Competent',
      'Growth Mindset': 'Strong (Embraces challenges)',
      'Resilience Level': 'Moderate (Normal recovery)',
      'Persistence': 'Moderately Persistent',
      'Focus Pattern': 'Short Bursts (Micro-sessions)',
      'Goal Orientation': 'Immediate Results'
    }
  };

  // Persona Detailed Information
  const personaDetails = {
    'Academic Achiever': {
      personalitySummary: `The Academic Achiever is a high-performing student who thrives on challenges and competition. With advanced logical thinking and strong verbal capabilities, they excel in traditional academic settings. They are extroverted yet prefer small group studies where they can engage in meaningful discussions without distractions.

Their achievement-driven motivation combined with high persistence and deep focus abilities makes them natural leaders in academic pursuits. They appreciate structure, formal communication, and data-driven feedback. They set long-term goals and work systematically toward them, often exceeding expectations.

Visual learners by nature, they benefit from charts, diagrams, and well-organized content. Their conventional problem-solving approach means they excel with proven methods and established strategies rather than experimental techniques.`,
      uiUxCustomization: {
        interfaceDesign: "Clean, professional interface with data-heavy dashboard. Performance metrics prominently displayed including rank, percentile, and study streaks. Minimal distractions with focus on content density and information hierarchy.",
        layoutStructure: "Leaderboards and comparison tools on homepage. Advanced analytics with graphs and charts. Quick access to challenging content and test series. Sidebar with achievement badges and progress indicators.",
        colorScheme: "Professional blues and grays with accent colors for achievements. High contrast for better readability during long study sessions. Dark mode option for late-night studying.",
        navigation: "Efficient navigation with keyboard shortcuts. Bookmark system for important topics. Advanced search with filters for difficulty level and topic tags."
      },
      chatbotBehavior: {
        communicationStyle: "Formal and professional tone throughout. Addresses user respectfully and maintains academic language. Provides detailed explanations with proper citations and references.",
        exampleInteractions: [
          "Good morning. Let's review your Constitutional Law progress. You've completed 78% of the module with an average score of 92%. Shall we focus on the remaining advanced topics?",
          "Excellent work on the mock test. You've scored in the 95th percentile. Here's a detailed analysis of your performance compared to top performers nationwide."
        ],
        feedbackApproach: "Data-driven feedback with specific metrics. Comparative analysis with peer performance. Challenges with advanced questions when performance is strong. Suggests optimization strategies for time management.",
        motivationStrategy: "Highlights rankings and competitive positioning. Sets challenging but achievable targets. Celebrates academic milestones with formal recognition. Provides pathways to expert-level content."
      },
      learningStructure: {
        contentDelivery: "Advanced track with optional topics beyond standard syllabus. Deep-dive modules with case studies and research papers. Comprehensive notes with detailed annotations and cross-references.",
        sessionFormat: "90-minute focused study sessions with minimal breaks. Structured progression through topics with prerequisite management. Weekly mock tests with All India rankings and detailed solutions.",
        assessmentStrategy: "Challenging question banks with previous years' toughest questions. Timed assessments simulating actual exam conditions. Detailed performance analytics with weak area identification.",
        specialFeatures: '"Challenge Mode" with expert-level questions. Access to academic webinars and masterclasses. Peer competition features and study group rankings. Advanced research library with academic papers.'
      }
    },
    'Creative Explorer': {
      personalitySummary: `The Creative Explorer is a social butterfly who learns best through hands-on experiences and creative exploration. As a kinesthetic learner, they need to actively engage with content rather than passively consume it. Their innovative problem-solving approach means they often find unique solutions that others might miss.

Highly extroverted and socially motivated, they thrive in large group settings where they can bounce ideas off others and share their achievements. They prefer Gen-Z communication style - casual, trendy, and filled with contemporary references that make learning feel relevant and fun.

With strong resilience and growth mindset, they're not afraid to experiment and fail. Their interval focus pattern means they work best in shorter bursts with regular breaks, and their short-term goal orientation keeps them motivated through quick wins and immediate feedback.`,
      uiUxCustomization: {
        interfaceDesign: "Vibrant, colorful interface with animations and transitions. Visual mind maps and interactive infographics dominate the screen. Gamification elements like badges, achievements, and progress bars are prominently displayed.",
        layoutStructure: "Social feed integrated on main screen showing friends' activities. Story-style updates for daily content. Swipeable cards for lessons. Floating action buttons for quick interactions.",
        colorScheme: "Bold gradients and bright colors. Animated backgrounds and parallax effects. Emoji reactions and stickers throughout. Instagram-like aesthetic with modern design elements.",
        navigation: "Gesture-based navigation with swipe controls. Quick access to social features and group activities. Visual progress paths instead of traditional menus. Voice and video integration options."
      },
      chatbotBehavior: {
        communicationStyle: "Gen-Z slang and casual tone throughout. Heavy use of emojis and memes. Pop culture references and trending topics. Enthusiastic and high-energy responses.",
        exampleInteractions: [
          "Yo! Ready to crush some Modern History? 🔥 Your squad just finished this module and they're killing it! Let's show them what you got! 💪",
          "Bestie, you just unlocked a new achievement! 🎉 Screenshot this and flex on your study group! BTW, there's a live session starting in 5 mins, wanna join? It's gonna be lit!"
        ],
        feedbackApproach: "Celebrates every small win with animations and rewards. Relates concepts to trending topics and current events. Encourages sharing achievements on social features. Uses FOMO to motivate participation.",
        motivationStrategy: "Social comparison with friendly competition. Group challenges and collaborative goals. Viral-style content sharing features. Streak counters and social accountability."
      },
      learningStructure: {
        contentDelivery: "Project-based learning with creative assignments. Video-first content approach with TikTok-style short lessons. Interactive simulations and virtual experiments. Mind maps and visual storytelling techniques.",
        sessionFormat: "30-minute interactive sessions with built-in break reminders. Group challenges and collaborative quizzes. Live study parties with real-time interaction. Hands-on activities and practical applications.",
        assessmentStrategy: "Gamified quizzes with power-ups and bonuses. Creative projects instead of traditional tests. Peer evaluation and group assessments. Instant feedback with visual rewards.",
        specialFeatures: '"Create & Share" feature for user-generated content. Virtual study rooms with video chat. Social leaderboards and team competitions. AR-based learning experiences for complex topics.'
      }
    },
    'Quiet Genius': {
      personalitySummary: `The Quiet Genius is a brilliant but reserved individual who prefers deep, solitary intellectual exploration. With advanced capabilities across all aptitude measures and innovative problem-solving skills, they often grasp complex concepts that others find challenging.

As an introverted reading/writing learner, they excel when given time to process information through text and written analysis. Their mastery-driven motivation means they pursue understanding for its own sake, not for external validation. They value depth over breadth and quality over quantity in their learning.

Despite being competent communicators, they prefer minimal social interaction during study. Their combination of high persistence and deep focus abilities allows them to tackle the most challenging topics independently, often discovering insights that collaborative learners might miss.`,
      uiUxCustomization: {
        interfaceDesign: "Minimalist design with dark mode as default. Distraction-free reading mode with customizable typography. Clean layouts with ample white space. Focus on content over decorative elements.",
        layoutStructure: "Advanced search and filtering options prominently placed. Personal notes section with comprehensive organization. Research library access on homepage. Minimal social elements, hidden by default.",
        colorScheme: "Muted, professional colors with high readability. Dark themes with blue light filtering options. Subtle accents that don't distract from content. Customizable color schemes for personal preference.",
        navigation: "Keyboard-first navigation with extensive shortcuts. Advanced bookmarking and tagging system. Quick access to reference materials and sources. Offline mode prominently available."
      },
      chatbotBehavior: {
        communicationStyle: "Formal, precise language with academic tone. Comprehensive responses with nuanced explanations. Minimal small talk or social elements. Focus on depth and accuracy of information.",
        exampleInteractions: [
          "Here's the detailed analysis of the Constitutional Amendment process you requested. I've included primary sources and scholarly interpretations for your review.",
          "Your essay on economic policy shows sophisticated understanding. Would you like to explore the advanced game theory implications of this concept?"
        ],
        feedbackApproach: "Detailed, analytical feedback with scholarly references. Suggests advanced reading materials and research papers. Engages in Socratic dialogue for deeper understanding. Respects need for reflection time.",
        motivationStrategy: "Intellectual challenges and thought experiments. Access to exclusive advanced content. Recognition of depth of understanding. Opportunities for independent research projects."
      },
      learningStructure: {
        contentDelivery: "Self-paced modules with no time restrictions. In-depth analytical essays and research papers. Original source documents and primary texts. Comprehensive reference library access.",
        sessionFormat: "Unlimited session lengths based on personal preference. No forced breaks or interruptions. Deep work mode with notification blocking. Personal study schedule without external pressure.",
        assessmentStrategy: "Essay-based assessments focusing on analysis. Open-book examinations testing understanding. Solo practice tests without public rankings. Self-evaluation tools with detailed rubrics.",
        specialFeatures: "Advanced research library with academic papers. Personal knowledge wiki builder. AI-powered Socratic dialogue mode. Offline study mode with full content access."
      }
    },
    'Struggling Fighter': {
      personalitySummary: `The Struggling Fighter represents students who face academic challenges but possess a strong desire to succeed. Despite developing aptitude levels and below-grade skills, they are achievement-driven and want to improve their situation. They need significant support but have the motivation to keep trying.

As ambiverts with visual learning preferences, they benefit from clear, simple visual aids and small group support where they feel safe to ask questions. Their casual communication preference helps them feel more comfortable and less intimidated by the learning process.

With low resilience and tendency to get discouraged easily, they require constant encouragement and celebration of small wins. Their need for immediate results and short focus bursts means content must be broken into micro-lessons with instant gratification to maintain engagement.`,
      uiUxCustomization: {
        interfaceDesign: "Simple, clutter-free interface with large, clear buttons. Progress celebration animations for every small achievement. Help button always visible and easily accessible. Encouraging messages throughout the interface.",
        layoutStructure: "Step-by-step guided navigation with clear next steps. Visual progress bars showing even tiny improvements. Simplified menu with only essential features. Quick access to support and doubt resolution.",
        colorScheme: "Warm, encouraging colors with calming effects. Green success indicators for positive reinforcement. Large fonts with high contrast for easy reading. Simple icons with text labels for clarity.",
        navigation: "Linear navigation path to prevent confusion. Breadcrumb trails showing where they are. One-click access to help and support. Voice-guided instructions available."
      },
      chatbotBehavior: {
        communicationStyle: "Warm, encouraging, and patient tone. Simple language avoiding complex terminology. Frequent check-ins and reassurance. Celebrates every small achievement enthusiastically.",
        exampleInteractions: [
          "Hey there! You're doing great! 😊 Let's take this step by step. First, let's just understand what this topic is about. Don't worry, we'll go slow and I'm here to help!",
          "Awesome! You just completed your first lesson today! 🎉 That's a big deal! You're 10% closer to your goal. Ready for a quick 5-minute break before we continue?"
        ],
        feedbackApproach: "Always starts with what they did right. Gentle corrections without highlighting failures. Breaks down errors into learning opportunities. Constant encouragement and positive reinforcement.",
        motivationStrategy: "Micro-achievements and instant rewards. Progress visualization showing improvement. Peer success stories from similar students. Daily motivational messages and quotes."
      },
      learningStructure: {
        contentDelivery: "Micro-learning modules of 10-15 minutes maximum. Concepts taught through simple stories and analogies. Heavy use of visual aids, diagrams, and infographics. Foundation-first approach building basics thoroughly.",
        sessionFormat: "Short bursts with frequent breaks built in. Revision loops to reinforce learning. Guided practice with step-by-step solutions. Optional peer support sessions for doubt clearing.",
        assessmentStrategy: "Low-stakes quizzes with multiple attempts allowed. Focus on improvement rather than absolute scores. Practice mode with hints and help available. Confidence-building exercises before tests.",
        specialFeatures: '"Basics Booster" simplified content track. 24/7 priority doubt resolution support. Visual mnemonics and memory aids library. Buddy system pairing with supportive peers.'
      }
    },
    'Social Learner': {
      personalitySummary: `The Social Learner thrives in collaborative environments where learning becomes a shared social experience. As an auditory learner with strong communication skills, they excel in discussion-based learning and verbal exchanges. They're extroverted and naturally articulate, making them the life of study groups and collaborative sessions.

Their social motivation means peer recognition and group achievement drive their efforts. They prefer casual, friendly communication that feels like conversations with friends rather than formal instruction. With moderate abilities across all areas, they represent the balanced, well-rounded student who succeeds through consistent effort and peer support.

Their interval focus pattern and short-term goal orientation mean they work best with regular breaks and achievable milestones. Moderately persistent with developing growth mindset, they benefit from group accountability and social reinforcement to maintain motivation and handle challenges.`,
      uiUxCustomization: {
        interfaceDesign: "Social-first interface with prominent friend activity feeds. Discussion forums and group chat integrated into main view. Collaborative features highlighted. Community-driven content recommendations.",
        layoutStructure: "Live group study sessions on homepage. Friend leaderboards and team challenges. Voice/video chat quick access. Shared notes and group resource library.",
        colorScheme: "Friendly, warm colors with social media aesthetics. Interactive elements with social feedback (likes, comments). Profile pictures and avatars prominently displayed. Notification badges for social interactions.",
        navigation: "Social hub as central navigation point. Quick access to study groups and discussions. Friend activity timeline. Group collaboration tools easily accessible."
      },
      chatbotBehavior: {
        communicationStyle: "Casual, friendly tone like talking to a peer. Conversational language with personal touches. Frequent social references and group context. Encouraging and inclusive communication.",
        exampleInteractions: [
          "Hey! Your study group just finished this chapter and they're discussing it in the lounge. Want to join the conversation? Sarah had a great question about the key concepts!",
          "Nice work today! You and your friends have completed 5 lessons this week together. The group is planning a review session tomorrow - I've added it to your calendar. See you there!"
        ],
        feedbackApproach: "Contextualizes feedback with peer performance. Encourages group discussion of concepts. Suggests collaborative problem-solving. Highlights social learning opportunities.",
        motivationStrategy: "Peer recognition and group achievements. Team goals and collaborative challenges. Social leaderboards with friends. Study group milestones and celebrations."
      },
      learningStructure: {
        contentDelivery: "Discussion-based lessons with group activities. Audio podcasts and recorded lectures. Peer-to-peer teaching opportunities. Collaborative note-taking and summaries.",
        sessionFormat: "45-minute group sessions with discussion breaks. Scheduled study parties with friends. Peer teaching rotations. Social accountability check-ins.",
        assessmentStrategy: "Group quizzes with team scores. Peer review assignments. Discussion-based evaluations. Collaborative project assessments.",
        specialFeatures: "Virtual study lounges with voice chat. Friend-based study groups and teams. Social learning feed and activity stream. Group achievement tracking and celebrations."
      }
    },
    'Methodical Planner': {
      personalitySummary: `The Methodical Planner approaches learning with careful organization and systematic execution. As a reading/writing learner with strong verbal capabilities, they excel at processing written information and creating comprehensive notes and summaries. They're introverted and prefer individual study where they can follow their own structured approach without distractions.

Their mastery-driven motivation means they pursue thorough understanding through careful planning and execution. They value organization, structure, and formal communication that respects the seriousness of their academic goals. With high persistence and resilience, they methodically work through challenges without getting discouraged.

Their deep focus pattern and long-term goal orientation make them excellent at sustained, planned study efforts. They thrive on schedules, checklists, and structured progression through material. While their pace is steady rather than fast, their consistent, organized approach ensures comprehensive mastery of every topic they tackle.`,
      uiUxCustomization: {
        interfaceDesign: "Organized, structured interface with clear hierarchies. Comprehensive planning and scheduling tools prominently featured. Progress tracking with detailed analytics. Customizable organizational systems.",
        layoutStructure: "Calendar and schedule view on homepage. Detailed task lists and study plans. Progress dashboards with completion metrics. Reference library with categorization system.",
        colorScheme: "Professional, clean colors with excellent organization. Subtle color coding for categories and subjects. Consistent visual patterns for predictability. High readability with structured visual flow.",
        navigation: "Hierarchical navigation with clear categorization. Favorites and frequently used sections easily accessible. Archive and organization tools prominent. Timeline and calendar-based access."
      },
      chatbotBehavior: {
        communicationStyle: "Professional, structured communication. Clear, organized explanations with logical flow. Respects planning preferences and schedules. Detailed and thorough responses.",
        exampleInteractions: [
          "Good day. Based on your study plan, today's topics are Constitutional Law Articles 1-10. I've prepared a structured outline and timeline for covering these systematically. Shall we proceed?",
          "Your weekly review is scheduled for tomorrow. I've compiled all this week's topics into an organized summary document. Would you like to adjust your review plan or add any specific areas to focus on?"
        ],
        feedbackApproach: "Structured feedback organized by topic and concept. Detailed progress reports with systematic analysis. Suggests refinements to study plans and schedules. Provides organized revision strategies.",
        motivationStrategy: "Progress toward long-term goals visualization. Completion of systematic study plans. Mastery milestones and comprehensive understanding. Achievement of scheduled objectives."
      },
      learningStructure: {
        contentDelivery: "Structured modules with clear progression paths. Comprehensive written materials and detailed notes. Organized reference materials with categorization. Step-by-step systematic explanations.",
        sessionFormat: "Scheduled study blocks with planned breaks. Systematic topic progression following curriculum. Regular review sessions built into schedule. Customizable study timelines and planning.",
        assessmentStrategy: "Comprehensive assessments covering full topics. Scheduled practice tests aligned with study plans. Detailed performance tracking over time. Systematic revision based on weak areas.",
        specialFeatures: "Advanced planning and scheduling tools. Customizable study plan templates. Personal knowledge organization system. Progress tracking with long-term analytics."
      }
    },
    'Gen-Z Maverick': {
      personalitySummary: `The Gen-Z Maverick is a tech-savvy, trend-conscious learner who brings digital native energy to their studies. As a visual learner with high spatial-visual intelligence, they excel with modern, interactive visual content and innovative approaches. They're extroverted and articulate, thriving in small group settings where they can share ideas and collaborate with like-minded peers.

Their social motivation combined with Gen-Z communication preferences means they connect learning to current trends, social media culture, and real-world relevance. With advanced technical competencies and innovative problem-solving skills, they often find creative shortcuts and modern solutions that traditional learners might overlook. They're fast learners who embrace new technologies and methods enthusiastically.

Their strong growth mindset and high resilience make them fearless experimenters who bounce back quickly from setbacks. However, their short burst focus pattern and desire for immediate results mean they need quick wins, viral-style content, and instant feedback to maintain engagement. They work best when learning feels current, relevant, and shareable.`,
      uiUxCustomization: {
        interfaceDesign: "Ultra-modern, app-like interface with sleek animations. Dark mode with neon accents and trendy design. Mobile-first design optimized for smartphones. Swipe-based interactions and gesture controls.",
        layoutStructure: "Story-style content cards that feel like social media. Quick-access floating action buttons. Trending topics and viral content highlighted. Screen time and streak trackers gamified.",
        colorScheme: "Bold, trendy color palettes with gradient overlays. Neon highlights and dark backgrounds. Instagram/TikTok-inspired aesthetics. Dynamic themes following current design trends.",
        navigation: "Bottom navigation bar like mobile apps. Quick shortcuts to frequently used features. Voice commands and AI assistant integration. Customizable interface with theme options."
      },
      chatbotBehavior: {
        communicationStyle: "Pure Gen-Z slang with trending expressions. Meme references and emoji-heavy communication. Self-aware, ironic humor mixed with genuine help. Fast-paced, energetic tone.",
        exampleInteractions: [
          "No cap, you're actually crushing this module rn! 💯 Your streak is bussin - 7 days straight! The boys in your study group are gonna be shook when they see your progress fr fr 🔥",
          "Okay bestie, speedrun time! ⚡ This topic lowkey slaps once you get it. I'ma break it down real quick - it's giving main character energy when you understand the basics. Ready? Let's goooo! 🚀"
        ],
        feedbackApproach: "Uses trending formats to deliver feedback. Relates concepts to viral content and current events. Meme-style explanations and visual metaphors. Celebrates wins with trending reactions.",
        motivationStrategy: "Viral challenge-style learning goals. Screenshot-worthy achievement moments. Trending topic connections. FOMO-driven engagement tactics."
      },
      learningStructure: {
        contentDelivery: "Short-form video lessons (TikTok-length). Interactive AR/VR experiences when available. Infographics and visual summaries. Bite-sized, shareable content chunks.",
        sessionFormat: "15-20 minute power sessions with breaks. Challenge-mode speed learning. Real-time collaboration with video chat. Quick-fire quizzes and instant results.",
        assessmentStrategy: "Gamified challenges with instant scoring. Creative format assessments (make a meme, create a reel). Speed-based bonus points. Shareable results and achievements.",
        specialFeatures: "AI-powered study assistant with voice control. AR visualization tools for complex topics. Content creator mode for sharing explanations. Integration with popular apps and platforms."
      }
    },
    'Steady Progresser': {
      personalitySummary: `The Steady Progresser represents the reliable, consistent student who achieves success through sustained effort and balanced approach. As an auditory learner with competent communication skills, they benefit from listening to lectures, discussions, and verbal explanations. They're ambiverted - comfortable in both solo and small group settings, making them adaptable to different learning environments.

Their mastery-driven motivation means they focus on truly understanding concepts rather than racing through material. With proficient to intermediate capabilities across all areas, they represent the solid, well-rounded student who may not be the fastest or most advanced, but who builds strong foundations through consistent work. They prefer casual communication that feels approachable and friendly.

Their moderate resilience and developing growth mindset mean they handle challenges reasonably well but need regular encouragement. With interval focus pattern and short-term goals, they work best with regular breaks and achievable milestones that mark their steady progress. They're the tortoise in the race - slow and steady wins through persistence and consistency.`,
      uiUxCustomization: {
        interfaceDesign: "Clean, balanced interface without extremes. Clear progress indicators showing consistent advancement. Comfortable, familiar layouts. Straightforward navigation without overwhelming options.",
        layoutStructure: "Dashboard showing steady progress over time. Regular milestone markers and achievements. Balanced mix of content types and features. Organized but not overly complex structure.",
        colorScheme: "Calm, balanced color palette. Consistent visual patterns for familiarity. Progress shown in encouraging colors. Professional yet friendly aesthetics.",
        navigation: "Intuitive, consistent navigation patterns. Favorite sections easily accessible. Clear breadcrumbs and progress paths. Balanced information density."
      },
      chatbotBehavior: {
        communicationStyle: "Friendly, casual but respectful tone. Clear explanations without being overly formal or slang-heavy. Encouraging and supportive without being patronizing. Balanced pace of communication.",
        exampleInteractions: [
          "Hey! Great to see you back. You've been making really solid progress on this topic. Let's continue where we left off yesterday and add to what you've learned. Ready to keep the momentum going?",
          "Nice work today! You've completed another section steadily. You're on track with your goals this week. Want to take a short break, or should we tackle the next part together?"
        ],
        feedbackApproach: "Balanced feedback highlighting both strengths and areas to improve. Acknowledges consistent effort and steady progress. Provides constructive suggestions without overwhelming. Celebrates incremental improvements.",
        motivationStrategy: "Progress tracking showing consistent advancement. Regular milestone celebrations. Emphasis on sustainable learning pace. Recognition of effort and persistence."
      },
      learningStructure: {
        contentDelivery: "Mixed-format content with emphasis on audio materials. Clear explanations with examples and practice. Balanced difficulty progression. Regular review and reinforcement built in.",
        sessionFormat: "45-60 minute sessions with planned breaks. Steady topic progression without rushing. Regular recap and review sessions. Flexible pacing allowing for thorough understanding.",
        assessmentStrategy: "Regular quizzes testing understanding. Moderate difficulty with fair grading. Progress tracking over time showing improvement. Practice opportunities with feedback.",
        specialFeatures: "Progress journal tracking consistent advancement. Audio library with lectures and explanations. Study streak tracker celebrating consistency. Milestone reward system for steady progress."
      }
    },
    'Underconfident Talent': {
      personalitySummary: `The Underconfident Talent represents a paradox - a highly capable student whose self-doubt holds them back from reaching their full potential. With advanced logical thinking, strong verbal capabilities, and high spatial-visual intelligence, they possess the raw intellectual ability to excel. As innovative problem-solvers performing above grade level, their academic potential is undeniable, yet they consistently underestimate their own abilities.

As introverted visual learners preferring solo study, they avoid social comparison and group settings where their talents might be recognized. Their mastery motivation drives them to understand deeply, but their fixed mindset makes them believe their abilities are limited. This creates a frustrating cycle where they achieve success but attribute it to luck rather than skill, preventing them from building confidence.

With low resilience and tendency to get easily discouraged, even small setbacks feel overwhelming despite their strong capabilities. Their developing communication skills mean they struggle to articulate their understanding, which further undermines their confidence. They need consistent, private reassurance and evidence-based confidence building to recognize and embrace their true potential.`,
      uiUxCustomization: {
        interfaceDesign: "Calm, non-threatening interface with minimal social elements. Private achievement tracking without public comparison. Focus on personal growth metrics. Gentle, encouraging visual feedback.",
        layoutStructure: "Personal progress dashboard emphasizing improvement. Hidden or minimized ranking/comparison features. Private workspace for individual study. Easy access to support without public exposure.",
        colorScheme: "Soft, reassuring colors avoiding overwhelming elements. Gentle success indicators. Calming aesthetic reducing anxiety. Subtle celebration of achievements.",
        navigation: "Private, safe exploration without pressure. Easy exit options from any section. Stress-free navigation with no time pressure. Personal bookmarks and safe spaces."
      },
      chatbotBehavior: {
        communicationStyle: "Gentle, casual, and deeply encouraging. Validates feelings while highlighting actual abilities. Provides specific evidence of competence. Patient and non-judgmental tone.",
        exampleInteractions: [
          "I noticed you solved that complex problem really well. I know you might think it was easy, but actually, that question stumps most students. Your approach showed real understanding - that's your skill, not luck.",
          "You've scored above 85% on the last three tests. I can see you're doubting yourself, but the data shows clear mastery. Your brain is actually really good at this - want to talk about what's making you feel uncertain?"
        ],
        feedbackApproach: "Evidence-based confidence building with specific examples. Separates feelings from facts about performance. Acknowledges anxiety while highlighting capability. Gentle redirection of negative self-talk.",
        motivationStrategy: "Private achievement tracking showing capability. Attribution retraining (skill vs. luck). Small confidence-building challenges. Safe environment for trying without judgment."
      },
      learningStructure: {
        contentDelivery: "Self-paced with zero external pressure. Complex content matching their actual ability level. Visual explanations with detailed breakdowns. Private learning without social exposure.",
        sessionFormat: "Flexible sessions with no time limits or pressure. Interval breaks when anxiety builds. Solo practice in judgment-free environment. Optional peer interaction, never forced.",
        assessmentStrategy: "Private testing without public results. Focus on growth and mastery, not rankings. Multiple attempts encouraged without penalty. Detailed feedback emphasizing capability.",
        specialFeatures: "Private \"Confidence Coach\" feature with evidence of ability. Anonymous peer comparison showing they're actually advanced. Growth tracking showing improvement over time. Safe space chatbot for expressing doubts and fears."
      }
    },
    'Enthusiastic Beginner': {
      personalitySummary: `The Enthusiastic Beginner represents the inspiring student who starts from behind but brings incredible energy and growth mindset to their learning journey. As a kinesthetic learner who needs hands-on experiences, they struggle with traditional lecture-based learning but light up when they can actively engage with material. Despite currently performing below grade level with developing aptitudes, their strong growth mindset means they genuinely believe effort will lead to improvement.

Highly extroverted and achievement-driven, they thrive in large group settings where their enthusiasm is contagious and their energy is celebrated. They prefer Gen-Z communication style that makes learning feel accessible and fun rather than intimidating. With competent communication skills despite academic challenges, they're great at expressing ideas even when they don't yet master the content.

Their moderate resilience and persistence mean they bounce back from setbacks reasonably well and keep trying. While they need time to learn and prefer structured approaches, their strong growth mindset prevents discouragement. Their short burst focus and need for immediate results mean they excel with micro-learning, quick wins, and gamified achievements that celebrate every step forward in their journey from beginner to competent.`,
      uiUxCustomization: {
        interfaceDesign: "Energetic, colorful interface celebrating every small win. Large, clear buttons with beginner-friendly design. Gamification with exciting achievements and rewards. Fun, encouraging visual elements throughout.",
        layoutStructure: "Achievement gallery prominently displayed. Clear \"next step\" guidance always visible. Large group activities and social features. Beginner-friendly content pathways clearly marked.",
        colorScheme: "Bright, energetic colors motivating progress. Rainbow achievement badges and celebrations. Fun, youthful aesthetic with trendy design. Exciting visual feedback for every action.",
        navigation: "Super simple, beginner-optimized navigation. Large icons with clear labels. Tutorial mode available everywhere. Social features easily accessible for group learning."
      },
      chatbotBehavior: {
        communicationStyle: "Hyper-enthusiastic Gen-Z tone celebrating effort. Uses trending slang while being encouraging. High energy with lots of emojis and excitement. Makes learning feel like an adventure.",
        exampleInteractions: [
          "YOOO! You just learned your first concept today! 🎉 That's literally so fire! You're building your knowledge from the ground up and that takes mad courage. Your squad is hyped to learn with you! Let's gooo! 💪✨",
          "Bestie! You got 3 out of 5 right and that's HUGE progress from yesterday! 📈 You're literally leveling up! Your brain is learning and growing - that's what we love to see! Ready to try those 2 again? No pressure, we got this together! 🚀"
        ],
        feedbackApproach: "Always celebrates effort and attempts enthusiastically. Reframes mistakes as learning opportunities with excitement. Compares progress to their own past, not others. Makes every small win feel like a major achievement.",
        motivationStrategy: "Achievement unlocking with exciting celebrations. Progress bars showing growth from the beginning. Peer group encouragement and social recognition. Daily streaks and consistency rewards."
      },
      learningStructure: {
        contentDelivery: "Hands-on, kinesthetic activities and interactive lessons. Structured, step-by-step explanations starting from basics. Fun, game-like content that feels playful. Group activities encouraging peer learning.",
        sessionFormat: "10-15 minute micro-sessions with active breaks. Hands-on practice with immediate feedback. Group learning sessions with peer support. Fun, energetic pacing keeping engagement high.",
        assessmentStrategy: "Low-pressure quizzes celebrating what they know. Multiple attempts encouraged with no penalties. Focus on improvement and growth metrics. Achievements for completing attempts, not just getting perfect scores.",
        specialFeatures: "\"Beginner's Journey\" pathway with clear progression. Group study parties with energetic vibes. Achievement system celebrating every milestone. Fun learning challenges with exciting rewards."
      }
    }
  };

  const personalityData = [
    {
      name: 'Learning Preference',
      attributes: ['Visual', 'Auditory', 'Kinesthetic', 'Reading/Writing'],
    },
    {
      name: 'Social Energy',
      attributes: ['Extroverted', 'Ambiverted', 'Introverted'],
    },
    {
      name: 'Study Preference',
      attributes: ['Individual (Solo)', 'Small Group (2-3)', 'Large Group (4+)'],
    },
    {
      name: 'Chatbot Conversation Tone',
      attributes: ['Formal (Professional)', 'Casual (Friendly)', 'Gen-Z (Trendy/Slang)'],
    },
    {
      name: 'Motivation Triggers',
      attributes: ['Achievement (Grades/Ranks)', 'Mastery (Deep understanding)', 'Social (Peer recognition)'],
    },
  ];

  const aptitudeData = [
    {
      name: 'Logical Thinking',
      attributes: ['Advanced', 'Proficient', 'Developing'],
    },
    {
      name: 'Spatial-Visual Intelligence',
      attributes: ['High', 'Medium', 'Low'],
    },
    {
      name: 'Verbal Capabilities',
      attributes: ['Strong', 'Average', 'Building'],
    },
    {
      name: 'Mathematical Reasoning',
      attributes: ['Advanced', 'Intermediate', 'Basic'],
    },
    {
      name: 'Creative Problem-Solving',
      attributes: ['Innovative', 'Conventional', 'Structured'],
    },
  ];

  const skillsData = [
    {
      name: 'Current Knowledge Level',
      attributes: ['Above Grade Level', 'At Grade Level', 'Below Grade Level'],
    },
    {
      name: 'Technical Competencies',
      attributes: ['Advanced', 'Intermediate', 'Beginner'],
    },
    {
      name: 'Learning Velocity',
      attributes: ['Fast Learner', 'Steady Pace', 'Needs Time'],
    },
    {
      name: 'Communication Skills',
      attributes: ['Articulate', 'Competent', 'Developing'],
    },
  ];

  const characterData = [
    {
      name: 'Growth Mindset',
      attributes: ['Strong (Embraces challenges)', 'Developing (Open to growth)', 'Fixed (Comfort zone)'],
    },
    {
      name: 'Resilience Level',
      attributes: ['High (Bounces back quickly)', 'Moderate (Normal recovery)', 'Low (Needs support)'],
    },
    {
      name: 'Persistence',
      attributes: ['Highly Persistent', 'Moderately Persistent', 'Easily Discouraged'],
    },
    {
      name: 'Focus Pattern',
      attributes: ['Deep Focus (Long sessions)', 'Interval Focus (Breaks needed)', 'Short Bursts (Micro-sessions)'],
    },
    {
      name: 'Goal Orientation',
      attributes: ['Long-term Focused', 'Short-term Focused', 'Immediate Results'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#10b981] via-[#3b82f6] to-[#a855f7] shadow-2xl relative overflow-hidden">
        {/* Decorative animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b]/30 via-transparent to-[#ec4899]/30 animate-pulse"></div>

        <div className="mx-auto px-8 py-16 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-5 tracking-tight drop-shadow-2xl">
            PASCO™ Framework for Personalized Education
          </h1>
          <p className="text-xl md:text-2xl text-white/95 text-center font-light drop-shadow-lg">
            AI-Powered Student Profiling for UPSC Preparation
          </p>
        </div>
      </header>

      {/* Persona Selector */}
      <section className="mx-auto px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Select Your Student Persona</h3>
              <p className="text-gray-600">Choose a profile to see personalized learning recommendations</p>
            </div>

            <div className="relative">
              <select
                value={selectedPersona}
                onChange={(e) => setSelectedPersona(e.target.value)}
                className="w-full px-6 py-4 text-lg font-medium text-gray-800 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-xl appearance-none cursor-pointer hover:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <option value="" className="text-gray-500">Select a persona...</option>
                {personas.map((persona, index) => (
                  <option key={index} value={persona} className="text-gray-800 py-2">
                    {persona}
                  </option>
                ))}
              </select>

              {/* Custom dropdown icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            {selectedPersona && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-xl border-2 border-purple-200 animate-fade-in">
                <p className="text-center text-lg font-semibold text-gray-800">
                  Selected: <span className="text-purple-600">{selectedPersona}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Personality */}
          <CategoryTable
            title="PERSONALITY"
            icon={User}
            color="personality"
            subcategories={personalityData}
            selectedPersona={selectedPersona}
            personaMap={personaMap}
          />

          {/* Aptitude */}
          <CategoryTable
            title="APTITUDE"
            icon={Brain}
            color="aptitude"
            subcategories={aptitudeData}
            selectedPersona={selectedPersona}
            personaMap={personaMap}
          />

          {/* Skills */}
          <CategoryTable
            title="SKILLS"
            icon={Award}
            color="skills"
            subcategories={skillsData}
            selectedPersona={selectedPersona}
            personaMap={personaMap}
          />

          {/* Character */}
          <CategoryTable
            title="CHARACTER"
            icon={Heart}
            color="character"
            subcategories={characterData}
            selectedPersona={selectedPersona}
            personaMap={personaMap}
          />
        </div>
      </main>

      {/* Persona Details Section */}
      {selectedPersona && personaDetails[selectedPersona as keyof typeof personaDetails] && (
        <PersonaDetails selectedPersona={selectedPersona} personaDetails={personaDetails} />
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="mx-auto px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-lg">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-3xl text-gray-900">19</span>
              <span className="text-xl">Subcategories</span>
            </div>
            <span className="hidden sm:inline text-gray-400 text-2xl">•</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-3xl text-gray-900">60+</span>
              <span className="text-xl">Attributes</span>
            </div>
            <span className="hidden sm:inline text-gray-400 text-2xl">•</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-3xl text-gray-900">10,000+</span>
              <span className="text-xl">Unique Profiles</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
