import { getTranslations } from "next-intl/server";

// Base and Fitmost prices from the supplied price list, in worksheet order.
const groups = [
  { key: "manicure", prices: [600, 2700, 2700, 2500, 2500, 1500, 1500, 1000, 1000, 200, 4200, 4000], fitmostPrices: [1400, 4500, 4500, 4500, 3500, 2500, 2800, 1700, 1700, 600, 7200, 7000] },
  { key: "pedicure", prices: [3000, 2700, 1500, 1500, 300], fitmostPrices: [5000, 4500, 2500, 2500, 600] },
  { key: "offers", prices: [2700, 5200], fitmostPrices: [4500, 8700] },
] as const;

export default async function NailPriceTable() {
  const t = await getTranslations("nailPrice");

  return (
    <section id="nail-price" className="bg-[#1F1D1A] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <table className="w-full table-fixed border-collapse border border-[#C8A96A] text-left text-xs text-[#EDEAE4] sm:text-base">
          <caption className="sr-only">{t("title")}</caption>
          <colgroup>
            <col />
            <col className="w-[22%] sm:w-40" />
            <col className="w-[22%] sm:w-40" />
          </colgroup>
          {groups.map((group, index) => (
            <tbody key={group.key}>
              <tr>
                <th scope="rowgroup" colSpan={3} className="border border-[#C8A96A] bg-[#2A2723] px-3 py-4 text-center text-lg font-bold text-[#C8A96A] sm:px-5 sm:text-xl">
                  {t(`${group.key}.title`)}
                </th>
              </tr>
              {index === 0 && (
                <tr>
                  <th scope="col" className="border border-[#C8A96A] px-3 py-3 font-semibold sm:px-5">{t("service")}</th>
                  <th scope="col" className="border border-[#C8A96A] px-2 py-3 text-center font-semibold sm:px-4">{t("price")}</th>
                  <th scope="col" className="border border-[#C8A96A] px-2 py-3 text-center font-semibold sm:px-4">{t("fitmostPrice")}</th>
                </tr>
              )}
              {group.key === "offers" && (
                <tr>
                  <td colSpan={3} className="border border-[#C8A96A] px-3 py-3 leading-relaxed sm:px-5">{t("coupon")}</td>
                </tr>
              )}
              {group.prices.map((price, serviceIndex) => (
                <tr key={serviceIndex}>
                  <th scope="row" className="break-words border border-[#C8A96A] px-3 py-3 font-normal leading-relaxed sm:px-5">
                    {t(`${group.key}.services.${serviceIndex}`)}
                  </th>
                  <td className="border border-[#C8A96A] px-2 py-3 text-center tabular-nums sm:px-4">{price}</td>
                  <td className="border border-[#C8A96A] px-2 py-3 text-center tabular-nums sm:px-4">{group.fitmostPrices[serviceIndex]}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}
