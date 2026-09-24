import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";

/**
 * The opening of a sector page, in the same red slab the home page leads with —
 * a sector is a destination in its own right, not an inner page of a catalogue,
 * and the plain white PageHero gave all eight of them the same face.
 *
 * Two things make one sector feel unlike another. The illustration, and the last
 * row: the five words the trade actually uses. A builder reads "smeta,
 * tələbnamə, subpodrat aktı" and a restaurateur reads "texnoloji xəritə, porsiya
 * maya dəyəri" before either has read a sentence.
 *
 * How the illustration is mounted depends on what it brought with it. A cut-out
 * with a real alpha channel sits straight on the slab. One that carries its own
 * flat background gets a panel, and fills it edge to edge — letting that
 * background become the panel means the artwork never has to match a CSS colour
 * exactly, which a near miss would otherwise expose as a square seam.
 */
export function SectorHero({
  crumbs,
  icon: Icon,
  title,
  lead,
  signature,
  image,
  actions,
}: {
  crumbs: Crumb[];
  icon: LucideIcon;
  title: string;
  lead: string;
  signature?: string[];
  /** Artwork under /public, or undefined while a sector has none yet. */
  image?: { src: string; cutout: boolean };
  actions?: ReactNode;
}) {
  return (
    <div className="px-3 pt-3 md:px-4 md:pt-4">
      <div className="on-deep mx-auto max-w-[82rem] rounded-lg bg-deep text-on-deep">
        <div className="mx-auto max-w-[76rem] px-5 pb-12 pt-4 md:px-12 md:pb-14">
          {/* On the slab the default ink-grey trail would sink into the red. */}
          <div className="[&_a:hover]:text-on-deep [&_a]:text-on-deep/70 [&_li>span]:text-on-deep/45 [&_ol]:text-on-deep/70 [&_span]:text-on-deep/85">
            <Breadcrumbs trail={crumbs} />
          </div>

          <div
            className={
              image
                ? "grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,23rem)] lg:gap-14"
                : ""
            }
          >
            <div className="min-w-0">
              <span
                aria-hidden="true"
                className="mt-6 flex h-14 w-14 items-center justify-center rounded-md border border-on-deep/40 text-on-deep"
              >
                <Icon size={26} strokeWidth={1.6} />
              </span>

              <h1 className="mt-7 max-w-3xl text-h1 font-extrabold text-on-deep">{title}</h1>
              <p className="mt-6 max-w-2xl text-lead text-on-deep/85">{lead}</p>

              {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
            </div>

            {image ? (
              <div
                className={`mx-auto w-full max-w-xs lg:max-w-none ${
                  image.cutout ? "" : "overflow-hidden rounded-md bg-cloud"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={1264}
                  height={1264}
                  sizes="(min-width: 1024px) 23rem, 20rem"
                  priority
                  className="block h-auto w-full"
                />
              </div>
            ) : null}
          </div>

          {/* Two columns on a phone rather than one long wrapped line: five terms
              with interpuncts reflow into lines that start with a stray
              separator and read as a paragraph rather than a list. From sm up
              there is room for the single inline row. */}
          {signature?.length ? (
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-on-deep/20 pt-7 text-sm font-medium text-on-deep/85 sm:flex sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2 md:mt-12">
              {signature.map((term, index) => (
                <li key={term} className="min-w-0 sm:flex sm:items-center sm:gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="hidden text-on-deep/40 sm:inline">
                      ·
                    </span>
                  ) : null}
                  {term}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
