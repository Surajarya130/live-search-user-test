"use client";

import { useState } from "react";

import { SearchBar, Phone, Lists } from "@/components/index";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Phone>
        <div className="sticky top-0 z-10">
          <header className=" bg-blue-500 px-4 pb-6 pt-12">
            <h1 className="text-4xl text-white">Messages</h1>
          </header>
        </div>
        <section className="">
          <SearchBar onSearchQuery={onSearch} />
          <Lists searchQuery={searchQuery} />
        </section>
      </Phone>
    </main>
  );
}
