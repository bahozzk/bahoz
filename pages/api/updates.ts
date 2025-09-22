import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const packageName = "com.seninoyunadi"; // Burayı senin oyunun package name'i ile değiştir
    const response = await fetch(
      `https://api.playstoreapi.io/apps/details?id=${packageName}&hl=tr&gl=tr`
    );

    if (!response.ok) {
      throw new Error("Google Play API isteği başarısız oldu");
    }

    const data = await response.json();

    res.status(200).json({
      lastUpdate: data.updated,
      changes: data.recentChanges,
      version: data.version,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
