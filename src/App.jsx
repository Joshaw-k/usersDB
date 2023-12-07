import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import ListStudents from "./components/ListStudents";
import { Toaster, toast } from "sonner";

export default function Home() {
  return (
    <main className="mt-10">
      <Navbar />
      <Toaster position="top-center" richColors />
      <AddStudent />
      <ListStudents />
    </main>
  );
}
