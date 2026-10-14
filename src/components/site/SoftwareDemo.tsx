import { useId, useReducer, useState } from "react";
import { Play, RotateCcw, ReceiptText } from "lucide-react";
import { demoReducer, initialDemoState } from "@/lib/software-demo";

const money = (value: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);

export function SoftwareDemo() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(demoReducer, undefined, initialDemoState);
  const [productId, setProductId] = useState("camiseta");
  const [quantity, setQuantity] = useState("1");
  const id = useId();
  const product = state.products.find((item) => item.id === productId)!;
  const amount = Number(quantity);
  const valid = Number.isInteger(amount) && amount > 0 && amount <= product.stock;
  const reset = () => { dispatch({ type: "reset" }); setProductId("camiseta"); setQuantity("1"); };

  return (
    <div className="software-demo">
      <button type="button" className="btn-base btn-primary w-full" aria-expanded={open} aria-controls={`${id}-demo`} onClick={() => setOpen((value) => !value)}>
        <Play aria-hidden="true" className="h-4 w-4" /> {open ? "Cerrar demostración" : "Probar demostración"}
      </button>
      {open ? <div id={`${id}-demo`} className="software-demo-body">
        <h3 className="font-display text-lg">Ventas e inventario</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Datos de ejemplo. Registra una venta y mira cómo cambia el inventario y aparece el comprobante.</p>
        <form className="software-demo-form" onSubmit={(event) => { event.preventDefault(); dispatch({ type: "sale", productId, quantity: amount }); }}>
          <label htmlFor={`${id}-product`}>Producto
            <select id={`${id}-product`} value={productId} onChange={(event) => setProductId(event.target.value)}>
              {state.products.map((item) => <option key={item.id} value={item.id}>{item.name} · {money(item.price)}</option>)}
            </select>
          </label>
          <label htmlFor={`${id}-quantity`}>Cantidad
            <input id={`${id}-quantity`} type="number" inputMode="numeric" min={1} max={Math.max(product.stock, 1)} step={1} value={quantity} onChange={(event) => setQuantity(event.target.value)} />
          </label>
          <p className="software-demo-stock" aria-live="polite">Inventario disponible: <strong>{product.stock}</strong> unidades</p>
          <p className="text-sm">Total: <strong>{money(valid ? product.price * amount : 0)}</strong></p>
          <button type="submit" className="btn-base btn-primary w-full" disabled={!valid}>Registrar venta de ejemplo</button>
          {state.error ? <p className="text-sm text-destructive" role="alert">{state.error}</p> : null}
          {product.stock === 0 ? <p className="text-sm text-muted-foreground">Producto agotado. Elige otro o reinicia la demostración.</p> : null}
        </form>
        {state.receipt ? <div className="software-demo-receipt" role="status">
          <p className="inline-flex items-center gap-2 font-semibold"><ReceiptText aria-hidden="true" className="h-4 w-4" /> Comprobante de ejemplo</p>
          <p className="mt-2 font-mono text-xs">DEMO-{String(state.receipt.number).padStart(3, "0")}</p>
          <p className="mt-2 text-sm">{state.receipt.quantity} × {state.receipt.product}</p>
          <p className="mt-2 text-sm">Total: <strong>{money(state.receipt.total)}</strong></p>
        </div> : null}
        <button type="button" className="btn-base btn-outline mt-4 w-full" onClick={reset}><RotateCcw aria-hidden="true" className="h-4 w-4" /> Reiniciar demostración</button>
      </div> : null}
    </div>
  );
}
