'use client';

import { OrderProvider } from "@/context/order.context";

const Providers = ({ children }) => {
  return (
    <OrderProvider>
      {children}
    </OrderProvider>
  );
}

export default Providers;
