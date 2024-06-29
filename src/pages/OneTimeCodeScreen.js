import * as React from "react";
import { useNavigate } from "react-router-dom";

function ProfileImage({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-full aspect-square"
    />
  );
}

function OneTimeCode({ code }) {
  return (
    <div className="flex flex-col px-6 mt-16 max-w-full text-black w-[262px]">
      <h2 className="justify-center text-lg font-semibold leading-7 text-center">
        One-time Code Login
      </h2>
      <div className="mt-6 text-6xl font-bold leading-[84px]">{code}</div>
    </div>
  );
}

function OneTimeCodeScreen() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col mt-6 w-full">
      <header className="self-start ml-4 text-lg text-black">
        <h1>Welcome back, Jessica!</h1>
      </header>
      <section className="flex flex-col items-center pt-8 pr-20 pb-2 pl-9 mt-4 w-full rounded-3xl bg-slate-100">
        <img
          loading="lazy"
          onClick={() => navigate("/parent")}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4fd6ef3741b5c8f557091a812a6705c7f688067dc8b235fb274456bf2263743?apiKey=8b7bde825caa4a699878600964889e8b&"
          alt=""
          className="self-start aspect-square w-[18px]"
        />
        <article className="flex flex-col justify-center items-center mt-24 max-w-full text-3xl font-bold text-black whitespace-nowrap w-[104px]">
          <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/189021f56083de40e8866b0542a256913b68042ab15141a1aab65f2c23ea1fa3?apiKey=8b7bde825caa4a699878600964889e8b&" alt="Profile picture of Andy" />
          <h2 className="mt-10">Andy</h2>
        </article>
        <OneTimeCode code="123123" />
        <nav className="flex flex-col justify-center mt-80 max-w-full w-[134px]">
          <div className="shrink-0 bg-black h-[5px] rounded-[100px]" />
        </nav>
      </section>
    </main>
  );
}

export default OneTimeCodeScreen;