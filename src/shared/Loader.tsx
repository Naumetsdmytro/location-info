import { CircularProgress } from "@mui/material"

export const Loader = () => {
    return (
        <div className="text-center mt-10">
            <CircularProgress color="secondary" />
        </div>
    )
}