import { useEffect } from "react";

function useTitolo(titolo) {
  useEffect(() => {
    document.title = titolo;
  }, [titolo]);
}

export default useTitolo;