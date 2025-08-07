import { FindMeetingHeader } from '@/widgets/';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FindMeetingHeader>{children}</FindMeetingHeader>;
}
