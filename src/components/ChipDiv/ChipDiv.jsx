import { Stack, Chip } from '@mui/material'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React from 'react'

export default function ChipDiv({ label, data, colorBG }) {
    return (
        <Stack direction="row" margin={{ xs: "0 0 0.5rem 0", md: "0 1rem 0 0" }}>
            <Chip
                sx={{
                    backgroundColor: "#1e3a8a",
                    fontFamily: "inherit",
                    marginRight: "-2.8rem",
                    zIndex: "100",
                    color: "white",
                    padding: "0.3rem"
                }}
                icon={<VideoLibraryIcon sx={{ color: "#fde047 !important", fontSize: "medium" }} />}
                label={label}

            >
            </Chip>
            <Chip
                sx={{ backgroundColor: colorBG, fontFamily: "inherit", paddingLeft: "2.5rem", color: "white" }}
                label={data}
            >
            </Chip>
        </Stack>
    )
}
