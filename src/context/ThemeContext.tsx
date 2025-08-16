// import React, { createContext, useContext, useState } from 'react';

// type Theme = 'blue' | 'green' | 'purple' | 'rose';

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// const themes = {
//   blue: {
//     primary: 'from-blue-500 to-purple-600',
//     accent: 'text-blue-500',
//     hover: 'hover:text-blue-500',
//   },
//   green: {
//     primary: 'from-emerald-500 to-teal-600',
//     accent: 'text-emerald-500',
//     hover: 'hover:text-emerald-500',
//   },
//   purple: {
//     primary: 'from-purple-500 to-pink-600',
//     accent: 'text-purple-500',
//     hover: 'hover:text-purple-500',
//   },
//   rose: {
//     primary: 'from-rose-500 to-orange-600',
//     accent: 'text-rose-500',
//     hover: 'hover:text-rose-500',
//   },
// };

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>('blue');

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return { ...context, themes, currentTheme: themes[context.theme] };
// };


// import React, { createContext, useContext, useState } from 'react';

// type Theme = 'blue' | 'green' | 'purple' | 'rose';

// interface ThemeStyle {
//   primary: string;
//   accent: string;
//   hover: string;
// }

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
//   themes: Record<Theme, ThemeStyle>;
//   currentTheme: ThemeStyle;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// const themes: Record<Theme, ThemeStyle> = {
//   blue: {
//     primary: 'from-blue-500 to-purple-600',
//     accent: 'text-blue-500',
//     hover: 'hover:text-blue-500',
//   },
//   green: {
//     primary: 'from-emerald-500 to-teal-600',
//     accent: 'text-emerald-500',
//     hover: 'hover:text-emerald-500',
//   },
//   purple: {
//     primary: 'from-purple-500 to-pink-600',
//     accent: 'text-purple-500',
//     hover: 'hover:text-purple-500',
//   },
//   rose: {
//     primary: 'from-rose-500 to-orange-600',
//     accent: 'text-rose-500',
//     hover: 'hover:text-rose-500',
//   },
// };

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>('blue'); // Default theme

//   // Provide the current theme's styles and the setTheme function
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, themes, currentTheme: themes[theme] }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);

//   // Throw an error if the hook is used outside the ThemeProvider
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }

//   return context;
// };

import React, { createContext, useContext, useState } from 'react';

type Theme = 'blue' | 'green' | 'purple' | 'rose' | 'red' | 'orange' | 'cyan';

interface ThemeStyle {
  primary: string; // Tailwind gradient classes
  accent: string; // Tailwind text color class
  hover: string; // Tailwind hover color class
  rawColors: {
    primaryStart: string; // Actual color value for inline styles
    primaryEnd: string; // Actual color value for inline styles
  };
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Record<Theme, ThemeStyle>;
  currentTheme: ThemeStyle;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Record<Theme, ThemeStyle> = {
blue: {
  primary: 'from-blue-500 to-indigo-600',
  accent: 'text-blue-500',
  hover: 'hover:text-blue-500',
  rawColors: {
    primaryStart: '#3b82f6', // Blue
    primaryEnd: '#6366f1',   // Indigo
  },
},

  green: {
    primary: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-500',
    hover: 'hover:text-emerald-500',
    rawColors: {
      primaryStart: '#10b981', // Emerald
      primaryEnd: '#14b8a6',   // Teal
    },
  },
  purple: {
    primary: 'from-purple-500 to-pink-600',
    accent: 'text-purple-500',
    hover: 'hover:text-purple-500',
    rawColors: {
      primaryStart: '#8b5cf6', // Purple
      primaryEnd: '#ec4899',   // Pink
    },
  },
  rose: {
    primary: 'from-rose-500 to-orange-600',
    accent: 'text-rose-500',
    hover: 'hover:text-rose-500',
    rawColors: {
      primaryStart: '#f43f5e', // Rose
      primaryEnd: '#f97316',   // Orange
    },
  },
    red: {
    primary: 'from-red-500 to-rose-600',
    accent: 'text-red-500',
    hover: 'hover:text-red-500',
    rawColors: {
      primaryStart: '#ef4444', // Red
      primaryEnd: '#e11d48',   // Rose
    },
  },

orange: {
  primary: 'from-orange-500 to-amber-600',
  accent: 'text-orange-500',
  hover: 'hover:text-orange-500',
  rawColors: {
    primaryStart: '#f97316', // Orange
    primaryEnd: '#d97706',   // Amber
  },
},

cyan: {
  primary: 'from-cyan-500 to-sky-600',
  accent: 'text-cyan-500',
  hover: 'hover:text-cyan-500',
  rawColors: {
    primaryStart: '#06b6d4', // Cyan
    primaryEnd: '#0ea5e9',   // Sky
  },
},
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('green'); // Default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, currentTheme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
