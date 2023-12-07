import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import ListStudents from "./components/ListStudents";
import { Toaster, toast } from "sonner";

export default function Home() {
  return (
    <>
      <main className="mt-10 mb-20">
        <Navbar />
        <Toaster position="top-center" richColors />
        <AddStudent />
        <ListStudents />
      </main>
      <p className="text-center font-bold">
        This is a <span className="text-[#00F7FF]">Mumbai</span> Testnet Dapp.
      </p>
    </>
  );
}
