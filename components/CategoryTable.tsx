import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Subcategory {
  name: string;
  attributes: string[];
}

interface CategoryTableProps {
  title: string;
  icon: LucideIcon;
  color: 'personality' | 'aptitude' | 'skills' | 'character';
  subcategories: Subcategory[];
  selectedPersona?: string;
  personaMap?: Record<string, Record<string, string>>;
}

const colorClasses = {
  personality: {
    bg: 'bg-[#d1fae5]',
    border: 'border-[#10b981]',
    text: 'text-[#10b981]',
    iconBg: 'bg-[#10b981]',
    cardBg: 'bg-gradient-to-br from-[#d1fae5] to-[#a7f3d0]',
    cardBorder: 'border-[#10b981]/30',
    cardHover: 'hover:shadow-lg hover:shadow-[#10b981]/20',
  },
  aptitude: {
    bg: 'bg-[#dbeafe]',
    border: 'border-[#3b82f6]',
    text: 'text-[#3b82f6]',
    iconBg: 'bg-[#3b82f6]',
    cardBg: 'bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]',
    cardBorder: 'border-[#3b82f6]/30',
    cardHover: 'hover:shadow-lg hover:shadow-[#3b82f6]/20',
  },
  skills: {
    bg: 'bg-[#fef3c7]',
    border: 'border-[#f59e0b]',
    text: 'text-[#f59e0b]',
    iconBg: 'bg-[#f59e0b]',
    cardBg: 'bg-gradient-to-br from-[#fef3c7] to-[#fde68a]',
    cardBorder: 'border-[#f59e0b]/30',
    cardHover: 'hover:shadow-lg hover:shadow-[#f59e0b]/20',
  },
  character: {
    bg: 'bg-[#f3e8ff]',
    border: 'border-[#a855f7]',
    text: 'text-[#a855f7]',
    iconBg: 'bg-[#a855f7]',
    cardBg: 'bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff]',
    cardBorder: 'border-[#a855f7]/30',
    cardHover: 'hover:shadow-lg hover:shadow-[#a855f7]/20',
  },
};

export default function CategoryTable({ title, icon: Icon, color, subcategories, selectedPersona, personaMap }: CategoryTableProps) {
  const colors = colorClasses[color];

  // Define adaptive subcategories (can evolve over time)
  const adaptiveSubcategories = [
    'Logical Thinking',
    'Verbal Capabilities',
    'Mathematical Reasoning',
    'Current Knowledge Level',
    'Technical Competencies',
    'Communication Skills',
    'Growth Mindset',
    'Resilience Level',
    'Persistence',
    'Goal Orientation'
  ];

  // Find the maximum number of attributes to determine number of rows
  const maxAttributes = Math.max(...subcategories.map(sub => sub.attributes.length));

  // Function to check if a subcategory is adaptive
  const isAdaptive = (subcategoryName: string): boolean => {
    return adaptiveSubcategories.includes(subcategoryName);
  };

  // Function to check if an attribute is selected for the current persona
  const isAttributeSelected = (subcategoryName: string, attributeValue: string): boolean => {
    if (!selectedPersona || !personaMap || !personaMap[selectedPersona]) {
      return false;
    }
    return personaMap[selectedPersona][subcategoryName] === attributeValue;
  };

  return (
    <div className={`border-3 ${colors.border} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}>
      {/* Header */}
      <div className={`${colors.bg} px-8 py-6 flex items-center gap-4`}>
        <div className={`${colors.iconBg} p-3 rounded-xl`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h2 className={`text-3xl font-bold ${colors.text} tracking-wide`}>{title}</h2>
      </div>

      {/* Table */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-8">
        <table className="w-full border-collapse border-2 border-gray-300">
          <thead>
            <tr className="border-b-2 border-gray-300">
              {subcategories.map((subcategory, index) => (
                <th
                  key={index}
                  className={`px-4 py-5 text-sm font-semibold text-center border-r-2 border-gray-300 last:border-r-0 tracking-wide ${
                    isAdaptive(subcategory.name)
                      ? 'bg-gradient-to-br from-orange-400 to-amber-500 text-white'
                      : colors.text
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="leading-snug">{subcategory.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxAttributes }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b-2 border-gray-300 last:border-b-0">
                {subcategories.map((subcategory, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-4 border-r-2 border-gray-300 last:border-r-0"
                  >
                    {subcategory.attributes[rowIndex] ? (
                      <div className={`
                        ${isAttributeSelected(subcategory.name, subcategory.attributes[rowIndex])
                          ? 'bg-gradient-to-br from-emerald-400 via-green-400 to-teal-500 !text-white border-emerald-500 shadow-lg shadow-emerald-200'
                          : selectedPersona
                            ? 'bg-white'
                            : colors.cardBg
                        }
                        ${colors.cardHover}
                        border-2 ${isAttributeSelected(subcategory.name, subcategory.attributes[rowIndex]) ? 'border-emerald-500' : colors.cardBorder}
                        rounded-xl
                        px-5 py-4
                        text-sm
                        font-medium
                        ${isAttributeSelected(subcategory.name, subcategory.attributes[rowIndex]) ? 'text-white' : colors.text}
                        text-center
                        shadow-md
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:-translate-y-1
                        cursor-pointer
                        min-h-[80px]
                        flex
                        items-center
                        justify-center
                        leading-relaxed
                      `}>
                        {subcategory.attributes[rowIndex]}
                      </div>
                    ) : (
                      <div className="min-h-[80px]"></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
