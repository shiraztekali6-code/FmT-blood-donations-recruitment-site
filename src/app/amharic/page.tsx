import type { Metadata } from "next";
import Home from "@/app/page";

export const metadata: Metadata = {
  title: "የእርግዝና እና ዳውን ሲንድሮም ምርምር | ባር-ኢላን ዩኒቨርሲቲ",
  description:
    "ዳውን ሲንድሮም ያላቸው ልጆች እናቶችን ለደም ናሙና ምርምር የሚጋብዝ የአማርኛ ገጽ።"
};

export default function AmharicPage() {
  return <Home />;
}
