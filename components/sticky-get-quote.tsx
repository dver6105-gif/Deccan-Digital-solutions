import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function StickyGetQuote() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 backdrop-blur md:hidden">
      <Button asChild size="lg" className="w-full">
        <Link href="/#contact">
          Get a Free Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
