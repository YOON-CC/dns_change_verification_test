import React, { useEffect, useState } from "react";

const DNSLookup = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchDNS = async () => {
      try {
        const response = await fetch(
          `https://dns.google/resolve?name=www.google.com`
        );
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error("Error fetching DNS data:", error);
      }
    };

    fetchDNS();
  }, []);

  return (
    <div>
      <h2>www.google.com의 결과</h2>
      {result ? (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DNSLookup;
