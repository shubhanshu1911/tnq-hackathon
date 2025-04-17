import React from "react";
import { LayoutDashboardIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "../../components/ui/tabs";

// Video data for mapping
const videoData = [
  {
    id: 1,
    title: "Learn Microsoft PowerBI In Just 2 Days",
    thumbnail:
      "/give-me-thumbnail-image-for-a-professor-teaching-product-managem.png",
    views: "6 M Views",
    timeAgo: "10 hours ago",
    likes: "40 Likes",
    author: "Joe Dylan",
    authorImage: "/shape-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnailHeight: "h-60",
  },
  {
    id: 2,
    title:
      "Ultimate Data Analyst Bootcamp [24 Hours!] for FREE | SQL, Excel, Tableau, Power BI, Python, Azure",
    thumbnail:
      "/give-me-thumbnail-image-for-a-professor-teaching-product-managem-1.png",
    views: "6 M Views",
    timeAgo: "10 hours ago",
    likes: "40 Likes",
    author: "Joe Dylan",
    authorImage: "/shape-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnailHeight: "h-60",
  },
  {
    id: 3,
    title:
      "Ultimate Data Analyst Bootcamp [24 Hours!] for FREE | SQL, Excel, Tableau, Power BI, Python, Azure",
    thumbnail:
      "/give-me-thumbnail-image-for-a-professor-teaching-product-managem-2.png",
    views: "6 M Views",
    timeAgo: "10 hours ago",
    likes: "40 Likes",
    author: "Joe Dylan",
    authorImage: "/shape-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnailHeight: "h-[101px]",
  },
];

export const YoutubeVideos = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1280px] h-[832px] relative">
        {/* Header */}
        <header className="flex w-full h-[72px] items-center justify-between fixed top-0 left-0 bg-white border-b border-[#d7d9db] z-10">
          <div className="flex w-[287px] items-center gap-2.5 px-4">
            <h1 className="text-[#35424d] text-[33px] font-semibold [font-family:'Source_Sans_Pro',Helvetica]">
              Study Copilot
            </h1>
          </div>

          <div className="flex items-center justify-end gap-4 px-12">
            <div className="flex w-60 h-8 items-center gap-2 px-2 relative rounded border border-solid border-[#c2c6ca]">
              <img className="w-4 h-4" alt="Search" src="/search.png" />
              <Input
                className="border-0 h-6 p-0 text-[13px] [font-family:'Source_Sans_Pro',Helvetica] text-[#868e94] placeholder:text-[#868e94] focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Search anything..."
              />
            </div>

            <Button
              variant="outline"
              className="h-8 px-3 py-2 border-2 border-[#1c40ca] rounded text-[#1c40ca] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-base"
            >
              Edit Goal
            </Button>

            <Avatar className="w-8 h-8">
              <AvatarImage src="/shape-3.png" alt="User profile" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Sidebar */}
        <aside className="flex w-72 h-[760px] flex-col items-start px-4 py-5 fixed top-[72px] left-0 bg-white border-r border-[#d7d9db]">
          <nav className="flex flex-col w-64 items-start gap-3 self-stretch">
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-4 p-3 w-full bg-selected-blue rounded text-[#1c40ca] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-base"
            >
              <LayoutDashboardIcon className="w-5 h-5" />
              <span className="flex-1 text-left">Dashboard</span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-4 p-3 w-full rounded text-primary-gray [font-family:'Source_Sans_Pro',Helvetica] font-normal text-base"
            >
              <img className="w-5 h-5" alt="U analysis" src="/u-analysis.svg" />
              <span className="flex-1 text-left">My Learning Path</span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-4 p-3 w-full rounded text-primary-gray [font-family:'Source_Sans_Pro',Helvetica] font-normal text-base"
            >
              <img className="w-5 h-5" alt="Language" src="/language.png" />
              <span className="flex-1 text-left">Explore</span>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="absolute w-[926px] h-[879px] top-[92px] left-80">
          <div className="flex flex-col w-[912px] items-end gap-4">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start justify-center gap-3 w-full">
                <div className="flex items-center w-full bg-white">
                  <h2 className="text-[#35424d] text-xl [font-family:'Source_Sans_Pro',Helvetica] font-semibold">
                    Dashboard
                  </h2>
                </div>
              </div>

              <Tabs defaultValue="youtube" className="w-full">
                <TabsList className="flex h-auto w-full justify-start bg-transparent p-0 border-b border-[#d7d9db]">
                  <TabsTrigger
                    value="youtube"
                    className="inline-flex items-center justify-center pt-2 pb-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-[#1c40ca] data-[state=active]:text-[#1c40ca] data-[state=active]:font-semibold rounded-none bg-transparent [font-family:'Source_Sans_Pro',Helvetica] text-[13px]"
                  >
                    Youtube Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="articles"
                    className="inline-flex items-center justify-center pt-2 pb-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-[#1c40ca] data-[state=active]:text-[#1c40ca] data-[state=active]:font-semibold rounded-none bg-transparent [font-family:'Source_Sans_Pro',Helvetica] text-[13px]"
                  >
                    Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="books"
                    className="inline-flex items-center justify-center pt-2 pb-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-[#1c40ca] data-[state=active]:text-[#1c40ca] data-[state=active]:font-semibold rounded-none bg-transparent [font-family:'Source_Sans_Pro',Helvetica] text-[13px]"
                  >
                    Books
                  </TabsTrigger>
                  <TabsTrigger
                    value="news"
                    className="inline-flex items-center justify-center pt-2 pb-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-[#1c40ca] data-[state=active]:text-[#1c40ca] data-[state=active]:font-semibold rounded-none bg-transparent [font-family:'Source_Sans_Pro',Helvetica] text-[13px]"
                  >
                    News
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="youtube" className="mt-4 p-0">
                  <div className="flex flex-col gap-8">
                    {videoData.map((video) => (
                      <Card
                        key={video.id}
                        className="flex flex-row items-start gap-4 border-none shadow-none p-0"
                      >
                        <img
                          className={`w-[368px] ${video.thumbnailHeight}`}
                          alt={`Thumbnail for ${video.title}`}
                          src={video.thumbnail}
                        />
                        <CardContent className="flex flex-col items-start gap-3 p-0 flex-1">
                          <div className="flex flex-col items-start gap-2 w-full">
                            <div className="flex flex-col items-start gap-1 w-full">
                              <h3 className="text-[#35424d] text-2xl [font-family:'Source_Sans_Pro',Helvetica] font-normal">
                                {video.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className="text-[#797979] text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-normal leading-4">
                                  {video.views}
                                </span>
                                <div className="w-[3px] h-[3px] bg-[#afafaf] rounded-[1.5px]" />
                                <span className="text-[#797979] text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-normal leading-4">
                                  {video.timeAgo}
                                </span>
                                <div className="w-[3px] h-[3px] bg-[#afafaf] rounded-[1.5px]" />
                                <span className="text-[#797979] text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-normal leading-4">
                                  {video.likes}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                              <Avatar className="w-5 h-5">
                                <AvatarImage
                                  src={video.authorImage}
                                  alt={video.author}
                                />
                                <AvatarFallback>
                                  {video.author[0]}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-[#797979] text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-normal leading-4">
                                {video.author}
                              </span>
                            </div>
                            <p className="text-[#797979] text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-normal leading-4">
                              {video.description}
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <Button className="h-7 px-2 py-1 bg-[#1c40ca] rounded text-white text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold">
                              Watch Now
                            </Button>
                            <Button
                              variant="outline"
                              className="h-7 px-2 py-1 border-2 border-[#1c40ca] rounded text-[#1c40ca] text-[13px] [font-family:'Source_Sans_Pro',Helvetica] font-semibold"
                            >
                              View Summary
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="articles">
                  <div className="p-4 text-center text-muted-foreground">
                    Articles content
                  </div>
                </TabsContent>

                <TabsContent value="books">
                  <div className="p-4 text-center text-muted-foreground">
                    Books content
                  </div>
                </TabsContent>

                <TabsContent value="news">
                  <div className="p-4 text-center text-muted-foreground">
                    News content
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Chatbot Button */}
          <div className="absolute w-[57px] h-[57px] top-[649px] left-[869px] bg-[#ff7b00] rounded-[28.5px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center cursor-pointer">
            <img
              className="w-[37px] h-[37px] object-cover"
              alt="Chatbot"
              src="/chatbot--1--1.png"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
