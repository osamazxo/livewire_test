import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "src/util/router.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
