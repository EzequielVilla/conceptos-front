export const hookExampleOne = () => {
  return `
  
  export const useIsLogged = () => {
    const [logged, setLogged] = useState<boolean>();
  
    useEffect(() => {
      if (localStorage.getItem("token") === null) {
        localStorage.setItem("token", JSON.stringify(""));
      }
      const token = JSON.parse(localStorage.getItem("token") || "");
      const exist = token ? true : false;
  
      if (exist) setLogged(true);
      else setLogged(false);
    }, []);
  
    return logged;
  };
  
  export const useLogOut = () => {
    const [logged, setLogged] = useState<boolean>();
  
    const router = useRouter();
    const tokenExist = useIsLogged();
  
    useEffect(() => {
      if (!logged && tokenExist) {
        localStorage.setItem("token", JSON.stringify(""));
        localStorage.setItem("email", JSON.stringify(""));
        if (window.location.pathname === "/") router.reload();
        else router.push("/");
      }
    }, [logged]);
    return setLogged;
  };

  `;
};

export const hookExampleTwo = () => {
  return `import { useState, useEffect } from "react";

  const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };
  
  export const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    useDocumentTitle( You clicked ${`count`} times);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>Click me</button>
      </div>
    );
  };`;
};

export const hookExampleThree = () => {
  return `
  function MyResponsiveComponent() {
    const width = useWindowWidth(); // Our custom Hook
    return (
      <p>Window width is {width}</p>
    );
  }
  
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
    return width;
  }`;
};
