import React, { useState } from 'react';
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { useMediaQuery } from 'react-responsive'

function MyApp({ Component }: any) {
  const [queryClient] = useState(() => new QueryClient());
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 968px)' });
  return (
    <QueryClientProvider client={queryClient}>
      <Component isMobile={isMobile} isTablet={isTablet} />
    </QueryClientProvider>
  )
}

export default MyApp
