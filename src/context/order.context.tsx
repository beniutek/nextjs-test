// orderContext.tsx
import { MenuItemProps } from '@/types';
import { createContext, useState, useContext, ReactNode } from 'react';

export interface OrderItem extends MenuItemProps {
  quantity: number;
}

export type Order = Record<string, OrderItem>;

// Define the shape of the context
interface OrderContextShape {
  order: Order;
  addToOrder: (item: MenuItemProps) => void;
  removeFromOrder: (itemId: string) => void;
}

// Create context
export const OrderContext = createContext<OrderContextShape | undefined>(undefined);

// Provider component
export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<Order>({});

  const addToOrder = (item: MenuItemProps): void => {
    setOrder(currentOrder => {
      const existingItem = currentOrder[item.id];
      if (existingItem) {
        return {
          ...order,
          [item.id]: { ...existingItem, quantity: existingItem.quantity + 1 }
        };
      } else {
        return {
          ...order,
          [item.id]: { ...item, quantity: 1 }
        };
      }
    })
  }

  const removeFromOrder = (itemId: string): void => {
    setOrder(currentOrder => {
      const existingItem = currentOrder[itemId];
      if (!existingItem) {
        return order;
      }

      if (existingItem.quantity > 1) {
        return {
          ...order,
          [itemId]: { ...existingItem, quantity: existingItem.quantity - 1 }
        };
      } else {
        const { [itemId]: removed, ...newOrder } = order;
        return newOrder;
      }
    })
  }
  const value = {
    order,
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
