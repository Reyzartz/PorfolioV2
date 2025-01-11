/// <reference types="vite/client" />

import { createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../../components/common/layout";
import "../../style/index.css";
import { lazy } from "react";

let TanStackRouterDevtools = null;

if (import.meta.env.DEV) {
  TanStackRouterDevtools = lazy(
    async () =>
      await import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
  );
}

export const Route = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>

      {TanStackRouterDevtools !== null && <TanStackRouterDevtools />}
    </>
  ),
});
