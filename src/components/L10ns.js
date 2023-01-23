const default_language = 'en';

const L10ns = ({ prop, lang, l10ns }) => l10ns?.[lang]?.[prop] || l10ns?.[default_language]?.[prop]

export default L10ns
