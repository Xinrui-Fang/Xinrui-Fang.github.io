import type { NewsItem, Publication } from "@/app/data";

export function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="font-sans text-sm font-medium uppercase tracking-wider text-[#666] mb-6 pb-2 border-b border-[#eee]">
        {title}
      </h2>
      <div className="font-serif text-[1.05rem] leading-relaxed">{children}</div>
    </section>
  );
}

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-[#666] shrink-0">{item.date}</span>
          <span dangerouslySetInnerHTML={{ __html: item.content }} />
        </li>
      ))}
    </ul>
  );
}

export function PublicationItem({ p }: { p: Publication }) {
  return (
    <div className="mb-8 last:mb-0 -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-[#fafafa]">
      <p className="mb-1">
        <span className="font-medium">{p.venue}</span>
        <br />
        <span className="font-semibold inline-block relative group/title">
          {p.teaserImage ? (
            <>
              <span className="inline-block">
                {p.title}
              </span>
              <span className="absolute right-full mr-3 top-0 flex items-start opacity-0 pointer-events-none group-hover/title:opacity-100 group-hover/title:pointer-events-auto transition-opacity z-10">
                <span className="w-64 shrink-0 overflow-hidden rounded border border-[#e5e5e5] bg-white shadow-sm block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.teaserImage}
                    alt=""
                    className="w-full h-auto block align-top"
                    width={256}
                  />
                </span>
              </span>
            </>
          ) : (
            p.title
          )}
        </span>
        <br />
        <span>{p.authors}</span>
        <br />
        <em className="text-[#666]">{p.venueDetail}</em>
      </p>
      {p.links && (
        <p className="mt-2 text-sm text-[#666]">
          {p.links.map((link, i) => (
            <span key={i}>
              {i > 0 && " · "}
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline decoration-[#ccc] underline-offset-2 hover:decoration-[#666] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-1">
                {link.label}
              </a>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
