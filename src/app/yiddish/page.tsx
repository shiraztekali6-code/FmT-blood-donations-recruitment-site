import type { Metadata } from "next";
import Home from "@/app/page";

export const metadata: Metadata = {
  title: "פֿאָרשונג וועגן טראָגן און דאון־סינדראָם | בר־אילן אוניווערסיטעט",
  description:
    "אַ יידישע איבערזעצונג פֿון דער פֿאָרשונג־אײַנלאַדונג פֿאַר מוטערס פֿון קינדער מיט דאון־סינדראָם."
};

export default function YiddishPage() {
  return <Home />;
}
