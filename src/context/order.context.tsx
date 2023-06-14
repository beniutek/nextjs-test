// orderContext.tsx
import { MenuItemProps } from '@/types';
import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the item object
interface Item {
  id: string;
  name: string;
  price: number;
}

// Define the shape of the context
interface OrderContextShape {
  items: Item[];
  addToOrder: (item: MenuItemProps) => void;
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

  const value = {
    items,
    addToOrder,
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
