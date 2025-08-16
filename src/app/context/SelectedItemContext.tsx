'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ItemType } from '../component/PhotoItem';

interface SelectedItemContextType {
  selectedItem: ItemType | null;
  setSelectedItem: (item: ItemType | null) => void;
}

const SelectedItemContext = createContext<SelectedItemContextType | undefined>(undefined);

export const useSelectedItem = () => {
  const context = useContext(SelectedItemContext);
  if (context === undefined) {
    throw new Error('useSelectedItem must be used within a SelectedItemProvider');
  }
  return context;
};

interface SelectedItemProviderProps {
  children: ReactNode;
}

export const SelectedItemProvider: React.FC<SelectedItemProviderProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
