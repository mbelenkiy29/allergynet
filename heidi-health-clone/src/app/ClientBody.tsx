"use client";

import type { ReactNode } from "react";

export function ClientBody({ children }: { children: ReactNode }) {
  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
