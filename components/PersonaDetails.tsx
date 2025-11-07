import React from 'react';
import { User, Palette, MessageSquare, BookOpen } from 'lucide-react';

interface PersonaDetailsData {
  personalitySummary: string;
  uiUxCustomization: {
    interfaceDesign: string;
    layoutStructure: string;
    colorScheme: string;
    navigation: string;
  };
  chatbotBehavior: {
    communicationStyle: string;
    exampleInteractions: string[];
    feedbackApproach: string;
    motivationStrategy: string;
  };
  learningStructure: {
    contentDelivery: string;
    sessionFormat: string;
    assessmentStrategy: string;
    specialFeatures: string;
  };
}

interface PersonaDetailsProps {
  selectedPersona: string;
  personaDetails: Record<string, PersonaDetailsData>;
}

export default function PersonaDetails({ selectedPersona, personaDetails }: PersonaDetailsProps) {
  const details = personaDetails[selectedPersona];

  if (!details) return null;

  return (
    <div className="mx-auto px-8 pb-16">
      <div className="space-y-8">
        {/* Personality Summary */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-2xl shadow-2xl p-8 border-2 border-purple-200 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg">
                <User className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Personality Summary</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              {details.personalitySummary.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

        {/* UI/UX Customization */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-2xl shadow-2xl p-8 border-2 border-blue-200 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">UI/UX Customization</h2>
            </div>

            <div className="space-y-5">
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Interface Design
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.uiUxCustomization.interfaceDesign}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Layout Structure
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.uiUxCustomization.layoutStructure}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Color Scheme
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.uiUxCustomization.colorScheme}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Navigation
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.uiUxCustomization.navigation}</p>
              </div>
            </div>
          </div>

        {/* Chatbot Behavior */}
        <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-white rounded-2xl shadow-2xl p-8 border-2 border-green-200 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl shadow-lg">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Chatbot Behavior</h2>
            </div>

            <div className="space-y-5">
              <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Communication Style
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.chatbotBehavior.communicationStyle}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Example Interactions
                </h3>
                <div className="space-y-3">
                  {details.chatbotBehavior.exampleInteractions.map((example, index) => (
                    <div key={index} className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                      <p className="text-gray-700 italic text-sm">&ldquo;{example}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Feedback Approach
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.chatbotBehavior.feedbackApproach}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                <h3 className="text-lg font-bold text-green-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Motivation Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.chatbotBehavior.motivationStrategy}</p>
              </div>
            </div>
          </div>

        {/* Learning Structure */}
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-white rounded-2xl shadow-2xl p-8 border-2 border-orange-200 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-xl shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Learning Structure</h2>
            </div>

            <div className="space-y-5">
              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Content Delivery
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.learningStructure.contentDelivery}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Session Format
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.learningStructure.sessionFormat}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Assessment Strategy
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.learningStructure.assessmentStrategy}</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Special Features
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">{details.learningStructure.specialFeatures}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
