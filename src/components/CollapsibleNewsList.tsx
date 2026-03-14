"use client";

import type { NewsItem } from "@/app/data";

export function CollapsibleNewsList({ items }: { items: NewsItem[] }) {
  return (
    <div className="max-h-[12rem] overflow-y-auto overflow-x-hidden border border-[#eee] rounded-md px-3 py-2 bg-[#fafafa]">
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#666] shrink-0">{item.date}</span>
            <span dangerouslySetInnerHTML={{ __html: item.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
