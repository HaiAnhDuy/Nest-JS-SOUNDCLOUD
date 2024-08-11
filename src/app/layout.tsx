
import ThemeRegistry from '@/components/theme-registry/theme.registry';

import HeaderBar from '@/components/HeaderBar/headerbar';
import FooterAppBar from "@/components/Footer/FooterAppBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <HeaderBar />

          {children}
          <FooterAppBar />
        </ThemeRegistry>
      </body>
    </html>
  );
}
