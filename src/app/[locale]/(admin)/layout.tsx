import AdminTopNavbar from "@/components/AdminTopNavbar";
import LeftFilter from "@/components/LeftFilter";

export default async function Layout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <div className="grid grid-cols-1">
                <AdminTopNavbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[20%_80%]">
                <div className="bg-gray-200 p-4">
                    <LeftFilter/>
                </div>
                <div className="bg-gray-300 p-4">{children}</div>
            </div>
        </>
    );
}