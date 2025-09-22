// pages/api/updates.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const packageName = "com.seninoyunadi"; // senin oyun paket adın
  const response = await fetch(
    `https://api.playstoreapi.io/apps/details?id=${packageName}&hl=tr&gl=tr`
  );
  const data = await response.json();

  res.status(200).json({
    lastUpdate: data.updated,
    changes: data.recentChanges,
    version: data.version,
  });
}
