import { MassageType } from "../models/MassageType";

const API_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? "http://localhost:8055";

export async function getMassages(): Promise<MassageType[]> {
  try {
    console.log("Fetching massages from:", API_URL);

    /**
     * Мы просим сервер вернуть:
     *  - все поля коллекции (*)
     *  - по связи image -> вложенный объект directus_files_id.url
     *  - все элементы из repeater-поля prices
     */
    const params = new URLSearchParams({
      fields: "*,image.directus_files_id.url,prices.*",
      limit: "-1",
    });

    const res = await fetch(`${API_URL}/items/massages?${params}`, {
      cache: "no-store",
      headers: {
        // Accept необязательно, но я обычно ставлю
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error(`❌ Failed to fetch massages: ${res.status} ${res.statusText}`);
      return [];
    }

    const payload = await res.json();
    const items: any[] = payload.data;

    // Преобразуем «сырные» записи в ваш интерфейс MassageType
    return items.map((m) => ({
      id: m.id,
      title: m.title,
      description: m.description,
      // вот тут возьмём реальный URL из вложенного объекта
      image: m.image?.directus_files_id?.url ?? "",
      prices: m.prices as { time: string; cost: number }[],
    }));
  } catch (error) {
    console.error("❌ Error fetching massages:", error);
    return [];
  }
}
