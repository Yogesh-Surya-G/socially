import { Loader } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Loader className="size-8 animate-spin" />
        </div>
    );
}
