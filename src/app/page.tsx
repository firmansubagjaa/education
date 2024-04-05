"use client";
import { useDataList } from "@/hooks/useDataList";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import loadingAsset from "../../public/images/loading-asset.gif";
import downloadAsset from "../../public/images/downloads.webp";

export default function Home() {
  const { data, isSuccess, isPending, error } = useDataList();
  const handleDownload = (url: string, title: string, type: string): void => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.${type === "video" ? "mp4" : "jpg"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isPending) {
    return (
      <main className="flex justify-center items-center h-screen">
        <Image src={loadingAsset} alt="" width={200} height={200} />
      </main>
    );
  }

  if (error) {
    return <div>Error</div>;
  }
  const { banner, title, description } = data[0];
  if (isSuccess)
    return (
      <Main>
        <Header
          bannerUrl={banner}
          firstTitle={title.substring(0, 9)}
          lastTitle={title.substring(9)}
          description={description}
        >
          <Navbar logoUrl={data[0].logo} />
        </Header>

        {data[0].playlist.map((item: Playlist) => {
          return (
            <section
              className="flex flex-col h-screen justify-center items-start"
              key={item.id}
            >
              <div
                className={`flex justify-between items-center w-full h-full ${
                  item.id % 2 === 0 ? "bg-gray-200" : ""
                }`}
              >
                <div
                  className={`container flex  ${
                    item.id % 2 === 0
                      ? "flex-col lg:flex-row-reverse"
                      : "flex-col-reverse lg:flex-row"
                  } items-center gap-10`}
                >
                  <div className="flex grow flex-col gap-2 md:gap-3">
                    <div className="space-y-2">
                      <h2 className="font-semibold text-4xl">{item.title}</h2>
                      <p className="text-normal md:text-xl w-full">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-full flex justify-end md:justify-start">
                      <div className="h-2 w-24 bg-[#f67c00] rounded-xl" />
                    </div>
                  </div>
                  {item.type === "image" && (
                    <>
                      <figure className="border-8 border-[#3422a0] shadow-2xl shadow-[#3422a0] bg-grey-200 rounded-xl w-full lg:w-[40rem] m-7">
                        <div className="absolute z-[1] translate-y-5">
                          <button
                            onClick={() =>
                              handleDownload(item.url, item.title, item.type)
                            }
                            className="block mt-2 bg-gray-50 text-black px-4 py-2 rounded-full hover:bg-gray-300 focus:outline-none w-full transform ease-in-out duration-300"
                          >
                            <Image
                              src={downloadAsset}
                              alt={item.title}
                              className="w-5"
                              width={400}
                              height={400}
                            />
                          </button>
                        </div>
                        <Image
                          src={item.url}
                          alt={item.title}
                          className="w-full rounded-md -translate-x-4 translate-y-4"
                          width={400}
                          height={400}
                        />
                      </figure>
                    </>
                  )}
                  {item.type === "video" && (
                    <div className="border-8 border-[#3422a0] shadow-2xl shadow-[#3422a0] rounded-xl w-full lg:w-[40rem] m-7">
                      <div className="absolute z-[1] translate-y-5">
                        <button
                          onClick={() =>
                            handleDownload(item.url, item.title, item.type)
                          }
                          className="block mt-2 bg-gray-50 text-black px-4 py-2 rounded-full hover:bg-gray-300 focus:outline-none w-full transform ease-in-out duration-300"
                        >
                          <Image
                            src={downloadAsset}
                            alt={item.title}
                            className="w-5"
                            width={400}
                            height={400}
                          />
                        </button>
                      </div>
                      <iframe
                        src={item.url}
                        title={item.title}
                        className="aspect-video w-full  rounded-md -translate-x-4 translate-y-4"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
        <Footer logoUrl={data[0].logo} />
      </Main>
    );
}
