import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { LoadingScreen } from "@/components";
import { ErrorBoundary } from "@/modules";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
);
