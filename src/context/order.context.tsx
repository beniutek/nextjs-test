// orderContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the item object
interface Item {
  name: string;
  description: string;
  price: number;
  // Add other fields as required...
}

// Define the shape of the context
interface OrderContextShape {
  order: Item[];
  addToOrder: (item: Item) => void;
}

// Initial state
const initialState: Item[] = [];

// Create context
export const OrderContext = createContext<OrderContextShape | undefined>(undefined);

// Provider component
export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<Item[]>(initialState);

  const addToOrder = (item: Item) => {
    console.log("adding item to order: ", item);
    setOrder(currentOrder => [...currentOrder, item]);
  };

  const value = {
    order,
    addToOrder
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
