export default function useEmailField({ emailDomainsSuggestions, }: {
    emailDomainsSuggestions: string[];
}): {
    handleOptions: (currentInputValue: string) => any[];
};
