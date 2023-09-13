import { Component, ErrorInfo, ReactNode } from "react";

import ErrorFallback from "./ErrorFallback";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  /**
   * Wait for error and update the state
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /**
   * Catch and log the error
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });

    console.error("Uncaught error:", { error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      const error = this.state.error || new Error("Unknown error");

      return <ErrorFallback error={error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
