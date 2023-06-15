'use client';

import { OrderProvider } from "@/context/order.context";
import { MenuProvider } from "@/context/menu.context";

const Providers = ({ children }) => {
  return (
    <OrderProvider>
      <MenuProvider>
        {children}
      </MenuProvider>
    </OrderProvider>
  );
}

export default Providers;
