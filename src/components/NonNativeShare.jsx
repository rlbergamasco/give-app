import { InlineShareButtons } from 'sharethis-reactjs';

export const NonNativeShare = ({ cause, message }) => {
    return (
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
                    'sms',
                    'sms',
                ],
                padding: 12,          // padding within buttons (INTEGER)
                radius: 4,            // the corner radius on each button (INTEGER)
                show_total: false,
                size: 50,             // the size of each button (INTEGER)

                // OPTIONAL PARAMETERS
                url: "/give", // (defaults to current url)
                description: message,       // (defaults to og:description or twitter:description)
                title: `Help support ${cause}`,    // (defaults to og:title or twitter:title)
                message: message,     // (only for email sharing)
                subject: `Help support ${cause}`,  // (only for email sharing)
            }}
        />
    )
}