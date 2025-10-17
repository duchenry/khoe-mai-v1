import { getAllData, getFilterData } from "@/lib/api";
import BlogList from "../components/BlogList";
import { Card, CardContent } from "@/components/ui/card";

export default async function BlogPage({ searchParams }: {
  searchParams: Promise<{ category?: string }>;
}) {
     const params = await searchParams;
  const category = params?.category || "";

     let data;
     category === "" 
     ? 
    data = await getAllData() 
     :
    data = await getFilterData({ category });
     return (
        data.length === 0 
        ? 
        <div className="m-6 p-4 flex flex-col items-center justify-center min-h-[380px] w-full">
            <Card className="w-full max-w-md mx-auto mt-10">
                <CardContent className="text-center text-gray-600">
                Chưa có bài viết nào
                </CardContent>
            </Card>
        </div>
        :
        <div>
            <BlogList list={data}/>
        </div>
    )
}