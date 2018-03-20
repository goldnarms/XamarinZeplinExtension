/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */
import {
    getStyleguideColorsCode
} from "./code-helpers";

function layer(context, selectedLayer) {

}

function styleguideColors(context, colors) {
    var options = { colorFormat: context.getOption(OPTION_NAMES.COLOR_FORMAT) };
    var code = getStyleguideColorsCode(options, colors);

    return {
        code: code,
        language: "javascript"
};
}

function styleguideTextStyles(context, colors) {

}

function exportStyleguideColors(context, colors) {

}

function exportStyleguideTextStyles(context, colors) {

}

function comment(context, text) {

}

export default {
    styleguideColors,
    styleguideTextStyles,
    exportStyleguideColors,
    exportStyleguideTextStyles
};