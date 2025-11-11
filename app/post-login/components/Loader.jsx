import React from "react";
import { Loader2 } from "lucide-react";

function Loader() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-white animate-spin" />
                <p className="text-sm md:text-base text-gray-100 font-medium">Loading</p>
            </div>
        </div>
    );
}

export default Loader;