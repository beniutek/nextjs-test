// orderContext.tsx
import { MenuItemProps } from '@/types';
import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the item object
export interface Item {
  id: string;
  name: string;
  price: number;
}

// Define the shape of the context
interface OrderContextShape {
  items: Item[];
  addToOrder: (item: MenuItemProps) => void;
  removeFromOrder: (item: MenuItemProps) => void;
}

// Create context
export const OrderContext = createContext<OrderContextShape | undefined>(undefined);

// Provider component
export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const addToOrder = (item: MenuItemProps) => {
    const orderItem: Item = {
      id: item.id,
      name: item.name,
      price: item.price,
    };

    setItems(currentItems => [...currentItems, orderItem]);
  }

  const removeFromOrder= (itemToRemove: Item): void => {
    setItems(items => {
      const index = items.findIndex((item) => item.id === itemToRemove.id)
      if (index === -1) {
        return items;
      } else {
        return [...items.slice(0, index), ...items.slice(index + 1)]
      }
    });
  }

  const value = {
    items,
    addToOrder,
    removeFromOrder,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

// Hook for easy usage of the context
export function useOrder() {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error('useOrder must be used within a OrderProvider');
  }

  return context;
}
