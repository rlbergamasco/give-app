import React from 'react';
import { InlineShareButtons } from 'sharethis-reactjs';
// import { Box } from '@mui/material';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const NonNativeShare = ({ cause, message }) => {
    // REPLACE URL WHEN DEPLOYED TO NEW DOMAIN
    console.log("Warning: Replace url in nonnative share when deployed to new domain");
    const url = "https://give-project.herokuapp.com/give";

    return (
        <React.Fragment>
            <InlineShareButtons
                config={{
                    alignment: 'center',  // alignment of buttons (left, center, right)
                    color: 'social',      // set the color of buttons (social, white)
                    enabled: true,        // show/hide buttons (true, false)
                    font_size: 16,        // font size for the buttons
                    labels: 'null',        // button labels (cta, counts, null)
                    language: 'en',       // which language to use (see LANGUAGES)
                    networks: [           // which networks to include (see SHARING NETWORKS)
                        'email',
                        'messenger',
                        'facebook',
                        'twitter',
                    ],
                    padding: 12,          // padding within buttons (INTEGER)
                    radius: 4,            // the corner radius on each button (INTEGER)
                    show_total: false,
                    size: 50,             // the size of each button (INTEGER)

                    // OPTIONAL PARAMETERS
                    url: url, // (defaults to current url)
                    description: message,       // (defaults to og:description or twitter:description)
                    title: `Help support ${cause}`,    // (defaults to og:title or twitter:title)
                    message: `${message} ${url}`,     // (only for email sharing)
                    subject: `Help support ${cause}`,  // (only for email sharing)
                }}
            />
            {/* <Box sx={{ backgroundColor: 'gray', width: "49px", height: "50px", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                <ContentCopyIcon sx={{ color: 'white' }} />
            </Box> */}
        </React.Fragment>
    )
}