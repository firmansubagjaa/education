import Image from "next/image";
import React from "react";

export default function Footer({ logoUrl }: { logoUrl: string }) {
  return (
    <footer className="bg-[#3f466c] text-white py-12 mt-4">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-left md:items-center gap-2">
          <div>
            <Image
              src={logoUrl}
              alt="Logo"
              className="w-64"
              width={400}
              height={400}
            />
          </div>
          <span className="text-sm">
            Hak Cipta ©{new Date().getFullYear()}, dibuat oleh Firman Subagja
          </span>
        </div>
      </div>
    </footer>
  );
}
