import { css } from '@emotion/css';

export const primaryFont = "inherit";
export const mobileScreenWidth = "600px";
export const tabScreenWidth = "1100px";

export const inputField = css`
    :focus{
        outline: none;
    }
    :placeholder{
        color: #A098AE;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #A098AE;
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: #A098AE;
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: #A098AE;
    }
    :-moz-placeholder { /* Firefox 18- */
        color: #A098AE;
    }
`

export const textAreaPlaceholder = props => css`
    ::placeholder{
        color: ${props.color};     
    }
    textarea::-webkit-input-placeholder {
        color: ${props.color};
    }

    textarea:-moz-placeholder { /* Firefox 18- */
        color: ${props.color};  
    }

    textarea::-moz-placeholder {  /* Firefox 19+ */
        color: ${props.color};  
    }

    textarea:-ms-input-placeholder {
        color: ${props.color};  
    }

    textarea::placeholder {
        color: ${props.color};
    }
`

export const loaderView = css`
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    justify-content: center;
    align-items: center;
    @media(max-width: ${tabScreenWidth}){
        top: calc(50% - 100px);
    }    
`

export const isMobileView = ()=>{

    if(typeof document==="object" && document.body.clientWidth){
        return document.body.clientWidth<=1100
    }
    return false;
}

export const LANDBOT_JSON = {
    "font": "Lato",
    "text": {
        "inline_input_placeholder": "Type your @field here...",
        "text_input_placeholder": "Type here...",
        "fields": [
            "name",
            "phone",
            "email",
            "postal code",
            "address",
            "country",
            "birthdate"
        ],
        "autocomplete_input_placeholder": "Type to search options...",
        "input_menu_help": "Choose an option",
        "input_multi_help": "Choose at least one",
        "input_instant_search_help": "Filter the options",
        "input_text_help": "Press enter to send",
        "input_autocomplete_help": "Press enter to select",
        "input_rating_help": "Click on the icons",
        "input_file_help": "Drop a file here",
        "input_number_help_min": "Minimum value is @field",
        "input_number_help_max": "Maximum value is @field",
        "send": "Send",
        "back": "Back",
        "search": "Search",
        "select_file": "Select a file",
        "next": "Next",
        "select": "Select",
        "hto_assignation_message": "@agent just joined the conversation!",
        "hto_agent_profile_text": "A human at @brand",
        "stripe_pay_button_label": "Pay @amount",
        "error_input_date": "Please enter a valid date (@format)",
        "error": "\u26a0\ufe0f  It seems there is a technical problem. Please reload this page"
    },
    "dark": "#34495E",
    "welcome": [
        {
            "samurai": -1,
            "extra": {
                "id": "welcome_4",
                "welcome": true,
                "hide_textbox": true
            },
            "type": "image",
            "url": "https://media3.giphy.com/media/1oEttHTW7Dh6WFabZd/giphy-downsized.gif"
        },
        {
            "samurai": -1,
            "extra": {
                "id": "welcome_3",
                "welcome": true,
                "hide_textbox": true
            },
            "type": "text",
            "message": "Welcome to our *help center*. \ud83e\udd17",
            "rich_text": "<p>Welcome to our <strong>help center</strong>. \ud83e\udd17</p>"
        },
        {
            "samurai": -1,
            "extra": {
                "id": "welcome_5",
                "welcome": true,
                "legal": {
                    "state": false,
                    "text": "*By clicking you are accepting our",
                    "link": "https://",
                    "linkText": "Privacy Policy"
                },
                "buttons": {}
            },
            "type": "dialog",
            "title": "How can we help?",
            "rich_text": "<p>How can we help?</p>",
            "buttons": [
                "I've got some questions..."
            ],
            "payloads": [
                "$2"
            ],
            "urls": [
                null
            ]
        }
    ],
    "light": "#FFFFFF",
    "colors": {
        "bot_message_background": null,
        "bot_message_text": null,
        "button_background": null,
        "textarea_text": null,
        "user_message_background": null,
        "textarea_border": null,
        "header_text": null,
        "user_message_text": null,
        "textarea_background": null,
        "button_text": null
    },
    "accent": "#de4561",
    "design": {
        "design_mode": "advanced",
        "background_custom": true,
        "header_custom": true,
        "message_custom": true,
        "form_custom": true,
        "background_type": "solid",
        "background_image": "https://storage.googleapis.com/media.helloumi.com/1831/channels/I2G474A5TRPN8GKWF0W5UJ5EP3YYYSKC.jpg",
        "background_color_mask": "rgba(47, 149, 175, 0.9)",
        "background_video_type": "custom",
        "background_video_webm": "https://static.videezy.com/system/resources/previews/000/052/589/original/74.mp4",
        "background_video_mp4": "https://static.videezy.com/system/resources/previews/000/052/589/original/74.mp4",
        "header_visible": false,
        "message_shape": "rounded",
        "message_color_bot": "rgba(86, 91, 111, 1)",
        "message_background_color_user": "rgba(86, 91, 111, 1)",
        "border_radius": 4,
        "form_buttons_border_color": "rgba(204, 51, 102, 1)",
        "form_buttons_background_color": "rgba(204, 51, 102, 1)",
        "form_inputs_background_color": "rgba(255, 255, 255, 1)",
        "form_inputs_color": "rgba(50, 55, 78, 1)",
        "form_help_color": "rgba(50, 55, 78, 1)",
        "font_family": "Ubuntu",
        "avatar_enabled": true,
        "avatar_url": "https://storage.googleapis.com/media.helloumi.com/1831/channels/YY0ZSYZGHIAGZUCM8242459WOE4I475Q.png",
        "avatar_scale": 1.4999999999999996,
        "launcher_custom": true,
        "form_inputs_border_color": "rgba(215, 75, 113, 0.6)",
        "font_size": "18",
        "launcher_type": "only_icon",
        "form_buttons_color": "rgba(255, 255, 255, 1)",
        "message_background_color_bot": "rgba(255, 255, 255, 1)",
        "avatar_shape": "rounded",
        "background_color": "rgba(208, 231, 227, 1)",
        "back_button_visible": true
    },
    "version": "3.0.0",
    "revisit": [],
    "logo": "https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png",
    "contrast": "#FFFFFF",
    "storage_off": false,
    "font_size": 16,
    "tagline": "",
    "avatar_url": "https://storage.googleapis.com/media.helloumi.com/1831/channels/YY0ZSYZGHIAGZUCM8242459WOE4I475Q.png",
    "branding": false,
    "revisit_off": false,
    "gradient_to": "#55e2ba",
    "staticUrl": "https://static.landbot.io/",
    "brandID": 207954,
    "channelToken": "H-973102-9X9CDMX47L0KP823",
    "serverUrl": "https://messages.landbot.io/",
    "filter_color": "#000000",
    "avatar_scale": 1.0,
    "videoname": "video_1",
    "hidden_fields": {},
    "gradient_from": "#00b2a9",
    "typing_options": {
        "state": true
    },
    "persistent_menu": [],
    "background_color": "#dfe1ed",
    "header_background": "transparent",
    "brand_name": "",
    "widget_hide_header": false,
    "filter_gradient_to": "#FFE199",
    "avatar_shape": "none",
    "filter_gradient_from": "#FFAD59",
    "background_image_url": "https://storage.googleapis.com/media.yexir.com/channels_back/31.png",
    "widget_hide_background": false,
    "conditional_proactives": {
        "enabled": false,
        "timeout": 0
    },
    "filter_type": "none",
    "style": null,
    "foot": null,
    "background_type": "gradient",
    "background_image_mobile_url": "",
    "apiKey": "AIzaSyAzT_5GGsNISwUvpqpIMGhpqFmhsMMjuxg",
    "databaseURL": "https://daisho.firebaseio.com",
    "storageBucket": "firebase-daisho.appspot.com",
    "authDomain": "daisho.firebaseapp.com",
    "keywords": {
        "#back": "back",
        "#init": "init"
    }
}

