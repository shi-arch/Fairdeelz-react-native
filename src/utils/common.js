export const favCountFontSize = (count) => {
    switch (count.toString().length) {
        case 1:
            return 12
            break;
        case 2:
            return 10
            break;
        default:
            return 6
            break;
    }
}