import levenshtein from "fast-levenshtein";

const defaultAutoSuggestedDomains = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "yahoo.com.br",
  "yahoo.com",
  "bol.com.br",
  "uol.com.br",
  "terra.com.br",
  "aol.com",
];

export default function useEmailField({
  emailDomainsSuggestions,
}: {
  emailDomainsSuggestions: string[];
}) {
  const usedDomains = emailDomainsSuggestions || defaultAutoSuggestedDomains;

  function handleOptions(currentInputValue: string) {
    const [idValue, domainValue] = currentInputValue.split("@");
    if (
      !!currentInputValue &&
      typeof domainValue === "string" &&
      domainValue === ""
    ) {
      return usedDomains.map((domain) => {
        const suggestion = `${idValue}@${domain}`;
        return { value: suggestion, label: suggestion };
      });
    }
    if (!domainValue || usedDomains.includes(domainValue)) {
      return [];
    }
    return usedDomains.reduce((acc, domain) => {
      const distanceString = levenshtein.get(domain, domainValue);
      const isSimilar = distanceString <= 5 || domain.includes(domainValue);
      const suggestion = `${idValue}@${domain}`;
      if (isSimilar || domainValue === "")
        return [...acc, { value: suggestion, label: suggestion }];

      return acc;
    }, []);
  }

  return { handleOptions };
}
