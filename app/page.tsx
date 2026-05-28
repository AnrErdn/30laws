import { laws } from "@/lib/laws";
import BookEngine from "@/components/BookEngine";

export default function Home() {
  return <BookEngine laws={laws} />;
}
