import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { LoadingScreen } from "@/components";
import { ErrorBoundary } from "@/modules";
import { AuthProvider } from "@/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <Suspense fallback={<LoadingScreen />}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
);
