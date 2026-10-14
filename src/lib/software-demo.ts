export type DemoProduct = { id: string; name: string; price: number; stock: number };
export type DemoReceipt = { number: number; product: string; quantity: number; total: number };
export type DemoState = { products: DemoProduct[]; receipt: DemoReceipt | null; error: string };
export type DemoAction = { type: "sale"; productId: string; quantity: number } | { type: "reset" };

export function initialDemoState(): DemoState {
  return { products: [
    { id: "camiseta", name: "Camiseta", price: 45000, stock: 8 },
    { id: "gorra", name: "Gorra", price: 35000, stock: 6 },
    { id: "perfume", name: "Perfume", price: 120000, stock: 5 },
  ], receipt: null, error: "" };
}

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  if (action.type === "reset") return initialDemoState();
  const product = state.products.find((item) => item.id === action.productId);
  if (!product || !Number.isInteger(action.quantity) || action.quantity < 1) {
    return { ...state, error: "Elige un producto y una cantidad entera mayor que cero." };
  }
  if (action.quantity > product.stock) return { ...state, error: "La cantidad supera el inventario disponible." };
  return {
    products: state.products.map((item) => item.id === product.id ? { ...item, stock: item.stock - action.quantity } : item),
    receipt: { number: (state.receipt?.number ?? 0) + 1, product: product.name, quantity: action.quantity, total: product.price * action.quantity },
    error: "",
  };
}
