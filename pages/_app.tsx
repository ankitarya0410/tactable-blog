import React from 'react';
import 'src/index.css';
import { QueryClient, QueryClientProvider } from "react-query";

export default function MyApp({ Component }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
}