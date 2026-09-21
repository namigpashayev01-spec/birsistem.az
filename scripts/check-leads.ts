import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const db = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  const total = await db.lead.count();
  const latest = await db.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      createdAt: true,
      type: true,
      name: true,
      company: true,
      phone: true,
      sector: true,
      modules: true,
      locale: true,
      sourcePath: true,
      status: true,
    },
  });

  console.log(`Ümumi sorğu sayı: ${total}`);
  if (latest.length === 0) {
    console.log("Hələ heç bir sorğu yoxdur.");
    return;
  }
  console.table(
    latest.map((lead) => ({
      tarix: lead.createdAt.toISOString().slice(0, 16).replace("T", " "),
      növ: lead.type,
      ad: lead.name,
      şirkət: lead.company ?? "—",
      telefon: lead.phone,
      sektor: lead.sector ?? "—",
      modullar: lead.modules.join(", ") || "—",
      səhifə: lead.sourcePath,
      status: lead.status,
    })),
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
