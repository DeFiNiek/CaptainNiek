import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import '../components/styles/sectionTitleStyle.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
