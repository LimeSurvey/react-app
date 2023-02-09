import isString from 'lodash/isString'

const defaultLanguage = 'en';

const L10ns = ({ prop, language, l10ns }) => {
    if (l10ns?.[language]?.[prop] && isString(l10ns[language][prop])) {
        return l10ns[language][prop]
    } else if (l10ns?.[defaultLanguage]?.[prop] && isString(l10ns[defaultLanguage][prop])) {
        return l10ns[defaultLanguage][prop]
    }
    return ''
}

export default L10ns
