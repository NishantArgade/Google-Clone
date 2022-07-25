import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ERROR, IDLE, LOADING } from "../redux/Constants";
import {} from "../redux/googleSlice";
import { getResults } from "../redux/googleSlice";

import Loading from "./Loading";

const Results = () => {
  const location = useLocation(); // /search, /images, /videos
  const dispatch = useDispatch();
  const { results, status, searchTerm } = useSelector((state) => state.google);

  useEffect(() => {
    if (searchTerm) {
      dispatch(getResults(`${location.pathname}/q=${searchTerm}&num=40`));
    }
  }, [searchTerm, location.pathname]);

  if (status === ERROR) alert("Something went wrong");
  if (status === LOADING) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {typeof link === "string"
                    ? link.length > 30
                      ? link.substring(0, 30)
                      : link
                    : ""}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/image":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a
              className="sm:p-3 p-5"
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );

    case "/video":
      return (
        <div className="flex flex-wrap">
          {results?.map(
            (video, index) =>
              video?.additional_links?.[0]?.href.includes(
                "www.youtube.com"
              ) && (
                <div key={index} className="p-2">
                  <ReactPlayer
                    url={video.additional_links?.[0].href}
                    controls
                    width="355px"
                    height="200px"
                  />
                </div>
              )
          )}
        </div>
      );

    default:
      break;
  }
};

export default Results;
