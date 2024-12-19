import LoadingPage from "@/components/Loading";
import PageLayout from "@/layout/PageLayout";
import { ElementType, lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component {...props} />
    </Suspense>
  );
};

const LandingPage = Loadable(lazy(() => import("@/pages/LandingPage")));
const DashBoard = Loadable(lazy(() => import("@/pages/DashBoard")));
export default function AppRouter() {
  return useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          element: <LandingPage />,
          index: true,
        },
        {
          element: <PageLayout />,
          path: "dashboard",
          children: [
            {
              element: <DashBoard />,
              index: true,
            },
          ],
        },
      ],
    },
  ]);
}
