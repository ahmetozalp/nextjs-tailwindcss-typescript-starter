import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from "next";



const Error: NextPage = () => {
  const dispatch = useDispatch();
  const { loading, app, page } = useSelector(({ ui }: any) => ui);

  return (
    <>
      <p>
        This is an error page, it also has access to store: <code>{app}</code>
      </p>
      <nav>
        <Link href="/">
          <a>Navigate to index</a>
        </Link>
      </nav>
    </>
  );
};

export default Error;
