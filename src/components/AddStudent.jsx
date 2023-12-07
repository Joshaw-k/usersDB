import {
  useContract,
  useContractEvents,
  useContractWrite,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { ContractAbi, ContractAddress } from "../constants";
import { toast } from "sonner";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { contract } = useContract(ContractAddress, ContractAbi);

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "AddStudent"
  );

  const {
    data,
    isLoading: eventLoading,
    error: eventError,
  } = useContractEvents(contract, "StudentAdded", { subscribe: true });

  if (error) {
    setLoading(false);
  }

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (name === "") {
      toast.error("Username is required");
      setLoading(false);
      return;
    }
    if (email === "") {
      toast.error("Email is required");
      setLoading(false);
      return;
    } else if (!isValidEmail(email)) {
      toast.error("Provide a valid email address");
      setLoading(false);
      return;
    }

    if (password === "") {
      toast.error("Password is required");
      setLoading(false);
      return;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 character.");
      setLoading(false);
      return;
    }
    mutateAsync({ args: [name, email, password] });
  };

  useEffect(() => {
    if (data?.[0].data.email == email) {
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      document.getElementById("my_modal_3").close();
      toast.success("Adding User to the database");
      toast.info("Please this might take few minutes");
    }
  }, [data]);

  return (
    <div className="w-fit mx-auto mt-8">
      <button
        className="btn bg-primary text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        SignUp Here
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="" onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Put in your password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn bg-primary mt-3 w-full text-white"
              type="submit"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddStudent;
