import { ReactNode } from "react";
import { CartProvider } from "./cart";
import { ProductsProvider } from "./Products";
interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartProvider>
  );
};
