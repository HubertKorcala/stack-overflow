import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do I use express as a custom server in NextJS" },
    { _id: 2, title: "How do I use express as a custom server in NextJS" },
    { _id: 3, title: "How do I use express as a custom server in NextJS" },
    { _id: 4, title: "How do I use express as a custom server in NextJS" },
    { _id: 5, title: "How do I use express as a custom server in NextJS" },
  ];

  const popularTags = [
    { _id: 1, name: "javascript", totalQuestions: 5 },
    { _id: 2, name: "react", totalQuestions: 5 },
    { _id: 3, name: "Next.js", totalQuestions: 5 },
    { _id: 4, name: "Node.js", totalQuestions: 5 },
    { _id: 5, name: "Python", totalQuestions: 5 },
  ];
  return (
    <section className=" custom-scrollbar light-border background-light900_dark200 sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/qustions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="text-dark500_light700 body-medium">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
