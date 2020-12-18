import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { NextPageContext } from "next";
import { State } from "../components/reducer";

export interface PageProps extends State {
  pageProp: string;
  appProp: string;
}

class Index extends React.Component<PageProps> {
  public render() {
    const { pageProp, appProp, app, page } = this.props;
    return (
      <div className="index">
        <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
          <main>
            <h1 className="font-mono text-xl code">
              Deneme (CLevel) <span className="text-purple-700">Nextjs</span>, <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
            </h1>
          </main>
        </div>

       {/*
       <pre>{JSON.stringify({ pageProp, appProp, app, page }, null, 2)}</pre>

        <Link href="/server">
          <a>Navigate</a>
        </Link>
        {" | "}
        <Link href="/static">
          <a>Navigate to static</a>
        </Link>
        {" | "}
        <Link href="/error">
          <a>Navigate to error</a>
        </Link>
       */}
      </div>
    );
  }
}

export default connect(state => state)(Index);

