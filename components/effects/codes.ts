export const moveFunctionsInsideEffectsCode = () => {
  return `
  function SearchResults() {
    // ...
    useEffect(() => {
      // We moved these functions inside!
      function getFetchUrl() {
        return 'https://hn.algolia.com/api/v1/search?query=react';
      }
      async function fetchData() {
        const result = await axios(getFetchUrl());
        setData(result.data);
      }
  
      fetchData();
    }, []); // ✅ Deps are OK
    // ...
  }
  `;
};

export const wrapEffectsInFunction = () => {
  return ` 
  // ✅ Not affected by the data flow
function getFetchUrl(query) {
  return 'https://hn.algolia.com/api/v1/search?query=' + query;
}

function SearchResults() {
  useEffect(() => {
    const url = getFetchUrl('react');
    // ... Fetch data and do something ...
  }, []); // ✅ Deps are OK

  useEffect(() => {
    const url = getFetchUrl('redux');
    // ... Fetch data and do something ...
  }, []); // ✅ Deps are OK

  // ...
}
  `;
};

export const changeEffectToMemo = () => {
  return `
  import { useMemo, useState } from 'react';

  function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
  
    // 🔴 Avoid: redundant state and unnecessary Effect
    const [visibleTodos, setVisibleTodos] = useState([]);
    useEffect(() => {
      setVisibleTodos(getFilteredTodos(todos, filter));
    }, [todos, filter]);
    // ...
  }
  
  function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    // ✅ This is fine if getFilteredTodos() is not slow.
    const visibleTodos = getFilteredTodos(todos, filter);
    // ...
  }

  function TodoList({ todos, filter }) {
    const [newTodo, setNewTodo] = useState('');
    const visibleTodos = useMemo(() => {
      // ✅ Does not re-run unless todos or filter change
      return getFilteredTodos(todos, filter);
    }, [todos, filter]);
  // ...
  }
  `;
};

export const timeFunction = () => {
  return `
  console.time("filter array");
  const visibleTodos = getFilteredTodos(todos, filter);
  console.timeEnd("filter array");
  `;
};

export const initializeComponentBad = () => {
  return `
  function App() {
    // 🔴 Avoid: Effects with logic that should only ever run once
    useEffect(() => {
      loadDataFromLocalStorage();
      checkAuthToken();
    }, []);
    // ...
  }
  `;
};

export const initializeComponentGoodOne = () => {
  return `
  let didInit = false;
  
  function App() {
    useEffect(() => {
      if (!didInit) {
        didInit = true;
        // ✅ Only runs once per app load
        loadDataFromLocalStorage();
        checkAuthToken();
      }
    }, []);
    // ...
  }
  `;
};
export const initializeComponentGoodTwo = () => {
  return `
  if (typeof window !== 'undefined') { // Check if we're running in the browser.
    // ✅ Only runs once per app load
   checkAuthToken();
   loadDataFromLocalStorage();
  }
  
  function App() {
   // ...
  }
  `;
};

export const dataFetchingBad = () => {
  return `
  function SearchResults({ query }) {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      // 🔴 Avoid: Fetching without cleanup logic
      fetchResults(query, page).then(json => {
        setResults(json);
      });
    }, [query, page]);
  
    function handleNextPageClick() {
      setPage(page + 1);
    }
    // 
  `;
};
export const dataFetchingGood = () => {
  return `
  function SearchResults({ query }) {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      let ignore = false;
      fetchResults(query, page).then(json => {
        if (!ignore) {
          setResults(json);
        }
      });
      return () => {
        ignore = true;
      };
    }, [query, page]);
  
    function handleNextPageClick() {
      setPage(page + 1);
    }
    // ...
  }
  `;
};
export const dataFetchingWithCustomHook = () => {
  return `
  function SearchResults({ query }) {
    const [page, setPage] = useState(1);
    const params = new URLSearchParams({ query, page });
    const results = useData(/api/search?"$"{params}); 
  
    function handleNextPageClick() {
      setPage(page + 1);
    }
    // ...
  }
  
  function useData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
      let ignore = false;
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setData(json);
          }
        });
      return () => {
        ignore = true;
      };
    }, [url]);
    return data;
  }
  `;
};
