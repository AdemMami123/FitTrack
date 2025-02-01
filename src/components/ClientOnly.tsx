"use client"; // Ensure this runs on the client side

import { useState, useEffect } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div suppressHydrationWarning />;
  }

  return <>{children}</>;
}
