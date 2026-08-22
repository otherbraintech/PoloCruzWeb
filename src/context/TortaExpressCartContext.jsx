import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const TortaExpressCartContext = createContext(null);

export function TortaExpressCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [fulfillment, setFulfillment] = useState("delivery");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("te_cart") || "null");
      if (saved) {
        setItems(saved.items || []);
        setFulfillment(saved.fulfillment || "delivery");
      }
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("te_cart", JSON.stringify({ items, fulfillment }));
  }, [items, fulfillment]);

  const addItem = useCallback((tortaId, sizeKey, fulfillmentChoice) => {
    if (fulfillmentChoice) setFulfillment(fulfillmentChoice);
    setItems((prev) => {
      const id = `${tortaId}__${sizeKey}`;
      const existing = prev.find((i) => i.id === id);
      if (existing) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id, tortaId, sizeKey, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i)).filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <TortaExpressCartContext.Provider
      value={{
        items,
        fulfillment,
        addItem,
        setQty,
        removeItem,
        setFulfillment,
        clear,
        count,
        open,
        setOpen,
      }}
    >
      {children}
    </TortaExpressCartContext.Provider>
  );
}

export const useTortaExpressCart = () => {
  const ctx = useContext(TortaExpressCartContext);
  if (!ctx) throw new Error('useTortaExpressCart must be used within TortaExpressCartProvider');
  return ctx;
};
