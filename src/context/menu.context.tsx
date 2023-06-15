// orderContext.tsx
import { MenuItemProps } from '@/types';
import { createContext, useState, useContext, ReactNode } from 'react';

type View = 'list' | 'grid';

// Define the shape of the context
interface MenuContextView {
  view: View
  handleViewChange: (view: View) => void;
}

// Create context
export const MenuContext = createContext<MenuContextView | undefined>(undefined);

// Provider component
export function MenuProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>('list');

  const handleViewChange = (newView: View) => {
    if(newView === 'list' || newView === 'grid'){
      setView(newView);
    } else {
      setView('list');
    }
  };

  const value = {
    view,
    handleViewChange,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

// Hook for easy usage of the context
export function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('no menu context!');
  }

  return context;
}
