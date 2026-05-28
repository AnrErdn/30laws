import { laws } from "@/lib/laws";
import BookClient from "@/components/BookClient";

export default function Home() {
  return <BookClient laws={laws} />;
}
