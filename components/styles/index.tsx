import { useRouter } from "next/router";

export const HomeStyled = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          router.push("/styles/ui");
        }}
      >
        UI
      </button>
    </>
  );
};
