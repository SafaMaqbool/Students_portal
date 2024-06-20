"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { getUsers } from "@/actions/getUser";
import { deleteUser } from "@/actions/deleteUser";
import { useRouter } from "next/navigation";
import { string } from "zod";
import { updateUser } from "@/actions/updateUser";

const HomePage = () => {
  const [users, setUsers] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users]);

  const handleDelete = useCallback((userId: string) => {
    deleteUser(userId);
    router.refresh();
  }, []);

 
  const handleLike=useCallback((userId: string)=>{
      updateUser(userId,true).then(()=>{
        router.refresh()
      })
  },[])

  const handleUnLike=useCallback((userId: string)=>{
     updateUser(userId,true).then(()=>{
      router.refresh()
     })
  },[])
  return (
    <>
      <header className="flex justify-between items-center h-[100px] px-8">
        <h1 className="text-3xl font-bold text-slate-800">All Students</h1>
        <Button size={"lg"}>
          <Link href={"/userForm"} className="flex gap-x-2 items-center">
            <span>
              <FaPlus size={15} />
            </span>{" "}
            Add New
          </Link>
        </Button>
      </header>
      <div className="flex flex-col items-center gap-y-6 mt-8">
        {users?.map((users: any) => {
          return (
            <Card key={users.id} className="w-[500px] shadow-lg shadow-red-300">
              <CardHeader>
                <CardTitle>{users.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{users.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                {users.liked ? (
                  <AiFillLike size={25} onClick={() => handleUnLike(users.id)} />
                ) : (
                  <AiOutlineLike
                    size={25}
                    onClick={() => handleLike(users.id)}
                  />
                )}

                <MdDeleteForever
                  size={25}
                  onClick={() => handleDelete(users.id)}
                />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
