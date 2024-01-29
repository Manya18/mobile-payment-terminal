import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: Georgia, serif;
  font-size: 17px;
  color: #45322E;
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global />
      <Component {...pageProps} />
    </Layout>
  );
}
