import Generated from "./Generated"

const Main = () => {
    return (
        <>
            <div className="p-6 my-4 w-full">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-red-500 dark:text-red-600 text-center">
                    GA Password Generator
                </h1>
            </div>

            <Generated />
        </>
    )
}

export default Main