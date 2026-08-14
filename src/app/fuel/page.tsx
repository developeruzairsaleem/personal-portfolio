import { redirect } from "next/navigation";

// The service moved to the root; old /fuel links keep working.
export default function FuelRedirect() {
  redirect("/");
}
