import { AppInitialProps, AppProps } from "next/app";
import AppContent from "./_app_content";
import { wrapper } from "@redux/store";
import { Provider } from "react-redux";
import "@assets/styles/global.scss";
import { setRecipes, setActiveRecipe } from "@redux/general/action-creators";

type TProps = { isMobileView: boolean };

const CustomApp = ({ Component, ...rest }: AppProps & TProps) => {
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <AppContent Component={Component} />
    </Provider>
  );
};

CustomApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }: any): Promise<TProps & AppInitialProps> => {
      if (ctx.req?.recipes) {
        await store.dispatch(setRecipes(ctx.req.recipes));
      }

      if (ctx?.req?.activeRecipe) {
        await store.dispatch(setActiveRecipe(ctx.req.activeRecipe));
      }

      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx, {})
        : {};

      return {
        pageProps: pageProps,
        isMobileView: false,
      };
    }
);

export default CustomApp;
