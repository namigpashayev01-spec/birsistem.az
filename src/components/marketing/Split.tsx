import type { ReactNode } from "react";

import { TextLink } from "@/components/ui/Cta";
import type { Href } from "@/i18n/navigation";
import { CheckList } from "./Cards";
import { Chip, type Tone } from "./Section";

/**
 * The page's workhorse layout: copy on one side, something to look at on the
 * other, sides swapping as you scroll. Each block carries a chip, a heading, a
 * short paragraph, the points a buyer scans for, and one link onward.
 */
export function Split({
  chip,
  title,
  text,
  checks,
  link,
  visual,
  reverse = false,
  tone = "paper",
}: {
  chip?: string;
  title: string;
  text: string;
  checks?: string[];
  link?: { href: Href; label: string };
  visual: ReactNode;
  reverse?: boolean;
  tone?: Tone;
}) {
  const dark = tone === "oxblood";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
        {chip ? (
          <div className="mb-4">
            <Chip tone={tone}>{chip}</Chip>
          </div>
        ) : null}
        <h3
          className={`text-h2 font-medium ${dark ? "text-on-oxblood" : "text-ink"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 max-w-xl text-lead ${dark ? "text-on-oxblood/80" : "text-ink-70"}`}
        >
          {text}
        </p>

        {checks?.length ? (
          <div className="mt-7">
            <CheckList items={checks} tone={dark ? "oxblood" : "paper"} />
          </div>
        ) : null}

        {link ? (
          <div className="mt-7">
            {dark ? (
              <TextLink
                href={link.href}
                className="!text-on-oxblood decoration-on-oxblood/40 hover:decoration-on-oxblood"
              >
                {link.label}
              </TextLink>
            ) : (
              <TextLink href={link.href}>{link.label}</TextLink>
            )}
          </div>
        ) : null}
      </div>

      <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
    </div>
  );
}
