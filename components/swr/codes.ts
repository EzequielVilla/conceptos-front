export const swrFirstExample = () => {
  return `
  export const useGetSearch = () => {
    const [offset, setOffset] = useState<number>();
    const [q, setQ] = useState("");
    const limit = 2;
    const { data, error,isLoading } = useSWR(
      q ? ["search?q=${"q"}&offset=${"offset"}&limit=${"limit"}"] : null,
      getConfig,
    );
    return {
      data,
      setQ,
      setOffset,
      isLoading, 
    };
  };
  `;
};
