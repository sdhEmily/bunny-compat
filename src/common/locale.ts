import { getIDByName } from "enmity/api/assets";
import Manifest from "../../manifest.json"

export default {
    errors: {
        unload: [
            "Error when trying to unload Bunny"
        ]
    },
    dialogs: {
        enabled: {
            title: [
                "Enabled Bunny"
            ],
            description: [
                "Successfully enabled Bunny. To disable it, just disable the plugin."
            ],
            okayText: [
                "Okay"
            ]
        },
        unload: {
            title: [
                "Must reload"
            ],
            description: [
                "To fully disable Bunny, you need to reload your Discord. Please note that Bunny will not work until you reload Discord."
            ],
            okayText: [
                "Reload"
            ],
            cancelText: [
                "Later"
            ]
        }
    },
    toasts: {
        clear: [
            "Successfully cleared all stored data."
        ],
        icons: {
            success: getIDByName('ic_check_18px')
        }
    }
}