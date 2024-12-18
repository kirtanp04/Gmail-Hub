import LoadingPage from "@/components/Loading";
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
      ],
    },
  ]);
}
