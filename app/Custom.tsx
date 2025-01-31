'use client'
import { useState, useEffect } from 'react';

const Custom = ({ element }: { element: React.ReactNode }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => setRendered(true), []);

  return rendered ? element : null;
}

export default Custom;