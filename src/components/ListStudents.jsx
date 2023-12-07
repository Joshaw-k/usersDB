import {
  useContract,
  useContractEvents,
  useContractRead,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { ContractAbi, ContractAddress } from "../constants";

const ListStudents = () => {
  const { contract } = useContract(ContractAddress, ContractAbi);
  const { data: eventData } = useContractEvents(contract, "StudentAdded", {
    subscribe: true,
  });

  const { data, isLoading, error } = useContractRead(contract, "StudentList");

  const [students, setStudents] = useState(null);

  console.log(data);
  useEffect(() => {}, [eventData]);
  return (
    <div className="w-fit mx-auto mt-16">
      <div className="overflow-x-auto">
        <h1 className="text-white text-xl mb-5 font-bold text-center">
          List of Users
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div className="place-content-center">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            ) : (
              data?.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudents;
