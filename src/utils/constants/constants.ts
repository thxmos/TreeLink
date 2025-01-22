import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { CreateThemeDto } from "../../data-access/theme";
import { BLACK, WHITE } from "../colors";

export const APP_NAME = "Tree Link";
export const APP_DESCRIPTION =
  "Tree your links and manage your social media presence";
export const APP_DOMAIN = "treelink.app";

export const THEMES = [
  { name: "light", color: "#ffffff" },
  { name: "dark", color: "#1f2937" },
  { name: "blue", color: "#3b82f6" },
  { name: "green", color: "#10b981" },
  { name: "purple", color: "#8b5cf6" },
  { name: "orange", color: "#f97316" },
  { name: "pink", color: "#ec4899" },
  { name: "teal", color: "#14b8a6" },
];

export const DEFAULT_THEME = {
  fontFamily: "Arial",
  fontWeight: 400,
  fontColor: BLACK,
  secondaryColorFont: WHITE,
  backgroundType: "color",
  backgroundColor: WHITE,
  backgroundImageUrl: "",
  videoUrl: "",
  videoBackgroundActive: false,
  cardBackgroundColor: WHITE,
  iconColor: BLACK,
  borderColor: BLACK,
  borderRadius: 0,
  borderWidth: 0,
  borderStyle: "solid",
} as Omit<CreateThemeDto, "userId">;

export const SOCIAL_PLATFORMS = [
  {
    label: "Twitter/X",
    value: "twitterUsername",
    prefix: "https://twitter.com/",
    icon: Twitter,
  },
  {
    label: "Facebook",
    value: "facebookUsername",
    prefix: "https://facebook.com/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    value: "instagramUsername",
    prefix: "https://instagram.com/",
    icon: Instagram,
  },
  {
    label: "YouTube",
    value: "youtubeUsername",
    prefix: "https://youtube.com/",
    icon: Youtube,
  },
  { label: "TikTok", value: "tiktokUsername", prefix: "https://tiktok.com/" },
  {
    label: "Spotify",
    value: "spotifyUsername",
    prefix: "https://spotify.com/",
  },
  {
    label: "Apple Music",
    value: "appleMusicUsername",
    prefix: "https://applemusic.com/",
  },
  {
    label: "Patreon",
    value: "patreonUsername",
    prefix: "https://patreon.com/",
  },
];

export const FONTS = [
  { label: "Inter", value: "'Inter', sans-serif" },
  { label: "Roboto", value: "'Roboto', sans-serif" },
  { label: "Poppins", value: "'Poppins', sans-serif" },
  { label: "Lato", value: "'Lato', sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  {
    label: "Helvetica",
    value: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Georgia Pro", value: "'Georgia Pro', Georgia, serif" },
  {
    label: "Palatino",
    value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
  },
  { label: "Bookman", value: "'Bookman Old Style', serif" },
  { label: "Comic Sans MS", value: "'Comic Sans MS', cursive" },
  { label: "Impact", value: "Impact, Charcoal, sans-serif" },
  {
    label: "Lucida Sans Unicode",
    value: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
  },
  {
    label: "Lucida Sans",
    value: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', sans-serif",
  },
  { label: "Geneva", value: "Geneva, Verdana, sans-serif" },
  { label: "Lucida Console", value: "'Lucida Console', Monaco, monospace" },
  { label: "Monaco", value: "Monaco, monospace" },
  { label: "Courier New", value: "'Courier New', Courier, monospace" },
  { label: "Lucida Bright", value: "'Lucida Bright', Georgia, serif" },
];

export const COUNTRIES = [
  { code: "AF", name: "Afghanistan", emoji: "🇦🇫" },
  { code: "AL", name: "Albania", emoji: "🇦🇱" },
  { code: "DZ", name: "Algeria", emoji: "🇩🇿" },
  { code: "AD", name: "Andorra", emoji: "🇦🇩" },
  { code: "AO", name: "Angola", emoji: "🇦🇴" },
  { code: "AG", name: "Antigua and Barbuda", emoji: "🇦🇬" },
  { code: "AR", name: "Argentina", emoji: "🇦🇷" },
  { code: "AM", name: "Armenia", emoji: "🇦🇲" },
  { code: "AU", name: "Australia", emoji: "🇦🇺" },
  { code: "AT", name: "Austria", emoji: "🇦🇹" },
  { code: "AZ", name: "Azerbaijan", emoji: "🇦🇿" },
  { code: "BS", name: "Bahamas", emoji: "🇧🇸" },
  { code: "BH", name: "Bahrain", emoji: "🇧🇭" },
  { code: "BD", name: "Bangladesh", emoji: "🇧🇩" },
  { code: "BB", name: "Barbados", emoji: "🇧🇧" },
  { code: "BY", name: "Belarus", emoji: "🇧🇾" },
  { code: "BE", name: "Belgium", emoji: "🇧🇪" },
  { code: "BZ", name: "Belize", emoji: "🇧🇿" },
  { code: "BJ", name: "Benin", emoji: "🇧🇯" },
  { code: "BT", name: "Bhutan", emoji: "🇧🇹" },
  { code: "BO", name: "Bolivia", emoji: "🇧🇴" },
  { code: "BA", name: "Bosnia and Herzegovina", emoji: "🇧🇦" },
  { code: "BW", name: "Botswana", emoji: "🇧🇼" },
  { code: "BR", name: "Brazil", emoji: "🇧🇷" },
  { code: "BN", name: "Brunei", emoji: "🇧🇳" },
  { code: "BG", name: "Bulgaria", emoji: "🇧🇬" },
  { code: "BF", name: "Burkina Faso", emoji: "🇧🇫" },
  { code: "BI", name: "Burundi", emoji: "🇧🇮" },
  { code: "CV", name: "Cabo Verde", emoji: "🇨🇻" },
  { code: "KH", name: "Cambodia", emoji: "🇰🇭" },
  { code: "CM", name: "Cameroon", emoji: "🇨🇲" },
  { code: "CA", name: "Canada", emoji: "🇨🇦" },
  { code: "CF", name: "Central African Republic", emoji: "🇨🇫" },
  { code: "TD", name: "Chad", emoji: "🇹🇩" },
  { code: "CL", name: "Chile", emoji: "🇨🇱" },
  { code: "CN", name: "China", emoji: "🇨🇳" },
  { code: "CO", name: "Colombia", emoji: "🇨🇴" },
  { code: "KM", name: "Comoros", emoji: "🇰🇲" },
  { code: "CG", name: "Congo", emoji: "🇨🇬" },
  { code: "CR", name: "Costa Rica", emoji: "🇨🇷" },
  { code: "HR", name: "Croatia", emoji: "🇭🇷" },
  { code: "CU", name: "Cuba", emoji: "🇨🇺" },
  { code: "CY", name: "Cyprus", emoji: "🇨🇾" },
  { code: "CZ", name: "Czech Republic", emoji: "🇨🇿" },
  { code: "DK", name: "Denmark", emoji: "🇩🇰" },
  { code: "DJ", name: "Djibouti", emoji: "🇩🇯" },
  { code: "DM", name: "Dominica", emoji: "🇩🇲" },
  { code: "DO", name: "Dominican Republic", emoji: "🇩🇴" },
  { code: "EC", name: "Ecuador", emoji: "🇪🇨" },
  { code: "EG", name: "Egypt", emoji: "🇪🇬" },
  { code: "SV", name: "El Salvador", emoji: "🇸🇻" },
  { code: "GQ", name: "Equatorial Guinea", emoji: "🇬🇶" },
  { code: "ER", name: "Eritrea", emoji: "🇪🇷" },
  { code: "EE", name: "Estonia", emoji: "🇪🇪" },
  { code: "SZ", name: "Eswatini", emoji: "🇸🇿" },
  { code: "ET", name: "Ethiopia", emoji: "🇪🇹" },
  { code: "FJ", name: "Fiji", emoji: "🇫🇯" },
  { code: "FI", name: "Finland", emoji: "🇫🇮" },
  { code: "FR", name: "France", emoji: "🇫🇷" },
  { code: "GA", name: "Gabon", emoji: "🇬🇦" },
  { code: "GM", name: "Gambia", emoji: "🇬🇲" },
  { code: "GE", name: "Georgia", emoji: "🇬🇪" },
  { code: "DE", name: "Germany", emoji: "🇩🇪" },
  { code: "GH", name: "Ghana", emoji: "🇬🇭" },
  { code: "GR", name: "Greece", emoji: "🇬🇷" },
  { code: "GD", name: "Grenada", emoji: "🇬🇩" },
  { code: "GT", name: "Guatemala", emoji: "🇬🇹" },
  { code: "GN", name: "Guinea", emoji: "🇬🇳" },
  { code: "GW", name: "Guinea-Bissau", emoji: "🇬🇼" },
  { code: "GY", name: "Guyana", emoji: "🇬🇾" },
  { code: "HT", name: "Haiti", emoji: "🇭🇹" },
  { code: "HN", name: "Honduras", emoji: "🇭🇳" },
  { code: "HU", name: "Hungary", emoji: "🇭🇺" },
  { code: "IS", name: "Iceland", emoji: "🇮🇸" },
  { code: "IN", name: "India", emoji: "🇮🇳" },
  { code: "ID", name: "Indonesia", emoji: "🇮🇩" },
  { code: "IR", name: "Iran", emoji: "🇮🇷" },
  { code: "IQ", name: "Iraq", emoji: "🇮🇶" },
  { code: "IE", name: "Ireland", emoji: "🇮🇪" },
  { code: "IL", name: "Israel", emoji: "🇮🇱" },
  { code: "IT", name: "Italy", emoji: "🇮🇹" },
  { code: "JM", name: "Jamaica", emoji: "🇯🇲" },
  { code: "JP", name: "Japan", emoji: "🇯🇵" },
  { code: "JO", name: "Jordan", emoji: "🇯🇴" },
  { code: "KZ", name: "Kazakhstan", emoji: "🇰🇿" },
  { code: "KE", name: "Kenya", emoji: "🇰🇪" },
  { code: "KI", name: "Kiribati", emoji: "🇰🇮" },
  { code: "KP", name: "North Korea", emoji: "🇰🇵" },
  { code: "KR", name: "South Korea", emoji: "🇰🇷" },
  { code: "KW", name: "Kuwait", emoji: "🇰🇼" },
  { code: "KG", name: "Kyrgyzstan", emoji: "🇰🇬" },
  { code: "LA", name: "Laos", emoji: "🇱🇦" },
  { code: "LV", name: "Latvia", emoji: "🇱🇻" },
  { code: "LB", name: "Lebanon", emoji: "🇱🇧" },
  { code: "LS", name: "Lesotho", emoji: "🇱🇸" },
  { code: "LR", name: "Liberia", emoji: "🇱🇷" },
  { code: "LY", name: "Libya", emoji: "🇱🇾" },
  { code: "LI", name: "Liechtenstein", emoji: "🇱🇮" },
  { code: "LT", name: "Lithuania", emoji: "🇱🇹" },
  { code: "LU", name: "Luxembourg", emoji: "🇱🇺" },
  { code: "MG", name: "Madagascar", emoji: "🇲🇬" },
  { code: "MW", name: "Malawi", emoji: "🇲🇼" },
  { code: "MY", name: "Malaysia", emoji: "🇲🇾" },
  { code: "MV", name: "Maldives", emoji: "🇲🇻" },
  { code: "ML", name: "Mali", emoji: "🇲🇱" },
  { code: "MT", name: "Malta", emoji: "🇲🇹" },
  { code: "MH", name: "Marshall Islands", emoji: "🇲🇭" },
  { code: "MR", name: "Mauritania", emoji: "🇲🇷" },
  { code: "MU", name: "Mauritius", emoji: "🇲🇺" },
  { code: "MX", name: "Mexico", emoji: "🇲🇽" },
  { code: "FM", name: "Micronesia", emoji: "🇫🇲" },
  { code: "MD", name: "Moldova", emoji: "🇲🇩" },
  { code: "MC", name: "Monaco", emoji: "🇲🇨" },
  { code: "MN", name: "Mongolia", emoji: "🇲🇳" },
  { code: "ME", name: "Montenegro", emoji: "🇲🇪" },
  { code: "MA", name: "Morocco", emoji: "🇲🇦" },
  { code: "MZ", name: "Mozambique", emoji: "🇲🇿" },
  { code: "MM", name: "Myanmar", emoji: "🇲🇲" },
  { code: "NA", name: "Namibia", emoji: "🇳🇦" },
  { code: "NR", name: "Nauru", emoji: "🇳🇷" },
  { code: "NP", name: "Nepal", emoji: "🇳🇵" },
  { code: "NL", name: "Netherlands", emoji: "🇳🇱" },
  { code: "NZ", name: "New Zealand", emoji: "🇳🇿" },
  { code: "NI", name: "Nicaragua", emoji: "🇳🇮" },
  { code: "NE", name: "Niger", emoji: "🇳🇪" },
  { code: "NG", name: "Nigeria", emoji: "🇳🇬" },
  { code: "MK", name: "North Macedonia", emoji: "🇲🇰" },
  { code: "NO", name: "Norway", emoji: "🇳🇴" },
  { code: "OM", name: "Oman", emoji: "🇴🇲" },
  { code: "PK", name: "Pakistan", emoji: "🇵🇰" },
  { code: "PW", name: "Palau", emoji: "🇵🇼" },
  { code: "PA", name: "Panama", emoji: "🇵🇦" },
  { code: "PG", name: "Papua New Guinea", emoji: "🇵🇬" },
  { code: "PY", name: "Paraguay", emoji: "🇵🇾" },
  { code: "PE", name: "Peru", emoji: "🇵🇪" },
  { code: "PH", name: "Philippines", emoji: "🇵🇭" },
  { code: "PL", name: "Poland", emoji: "🇵🇱" },
  { code: "PT", name: "Portugal", emoji: "🇵🇹" },
  { code: "QA", name: "Qatar", emoji: "🇶🇦" },
  { code: "RO", name: "Romania", emoji: "🇷🇴" },
  { code: "RU", name: "Russia", emoji: "🇷🇺" },
  { code: "RW", name: "Rwanda", emoji: "🇷🇼" },
  { code: "KN", name: "Saint Kitts and Nevis", emoji: "🇰🇳" },
  { code: "LC", name: "Saint Lucia", emoji: "🇱🇨" },
  { code: "VC", name: "Saint Vincent and the Grenadines", emoji: "🇻🇨" },
  { code: "WS", name: "Samoa", emoji: "🇼🇸" },
  { code: "SM", name: "San Marino", emoji: "🇸🇲" },
  { code: "ST", name: "Sao Tome and Principe", emoji: "🇸🇹" },
  { code: "SA", name: "Saudi Arabia", emoji: "🇸🇦" },
  { code: "SN", name: "Senegal", emoji: "🇸🇳" },
  { code: "RS", name: "Serbia", emoji: "🇷🇸" },
  { code: "SC", name: "Seychelles", emoji: "🇸🇨" },
  { code: "SL", name: "Sierra Leone", emoji: "🇸🇱" },
  { code: "SG", name: "Singapore", emoji: "🇸🇬" },
  { code: "SK", name: "Slovakia", emoji: "🇸🇰" },
  { code: "SI", name: "Slovenia", emoji: "🇸🇮" },
  { code: "SB", name: "Solomon Islands", emoji: "🇸🇧" },
  { code: "SO", name: "Somalia", emoji: "🇸🇴" },
  { code: "ZA", name: "South Africa", emoji: "🇿🇦" },
  { code: "SS", name: "South Sudan", emoji: "🇸🇸" },
  { code: "ES", name: "Spain", emoji: "🇪🇸" },
  { code: "LK", name: "Sri Lanka", emoji: "🇱🇰" },
  { code: "SD", name: "Sudan", emoji: "🇸🇩" },
  { code: "SR", name: "Suriname", emoji: "🇸🇷" },
  { code: "SE", name: "Sweden", emoji: "🇸🇪" },
  { code: "CH", name: "Switzerland", emoji: "🇨🇭" },
  { code: "SY", name: "Syria", emoji: "🇸🇾" },
  { code: "TW", name: "Taiwan", emoji: "🇹🇼" },
  { code: "TJ", name: "Tajikistan", emoji: "🇹🇯" },
  { code: "TZ", name: "Tanzania", emoji: "🇹🇿" },
  { code: "TH", name: "Thailand", emoji: "🇹🇭" },
  { code: "TL", name: "Timor-Leste", emoji: "🇹🇱" },
  { code: "TG", name: "Togo", emoji: "🇹🇬" },
  { code: "TO", name: "Tonga", emoji: "🇹🇴" },
  { code: "TT", name: "Trinidad and Tobago", emoji: "🇹🇹" },
  { code: "TN", name: "Tunisia", emoji: "🇹🇳" },
  { code: "TR", name: "Turkey", emoji: "🇹🇷" },
  { code: "TM", name: "Turkmenistan", emoji: "🇹🇲" },
  { code: "TV", name: "Tuvalu", emoji: "🇹🇻" },
  { code: "UG", name: "Uganda", emoji: "🇺🇬" },
  { code: "UA", name: "Ukraine", emoji: "🇺🇦" },
  { code: "AE", name: "United Arab Emirates", emoji: "🇦🇪" },
  { code: "GB", name: "United Kingdom", emoji: "🇬🇧" },
  { code: "US", name: "United States", emoji: "🇺🇸" },
  { code: "UY", name: "Uruguay", emoji: "🇺🇾" },
  { code: "UZ", name: "Uzbekistan", emoji: "🇺🇿" },
  { code: "VU", name: "Vanuatu", emoji: "🇻🇺" },
  { code: "VA", name: "Vatican City", emoji: "🇻🇦" },
  { code: "VE", name: "Venezuela", emoji: "🇻🇪" },
  { code: "VN", name: "Vietnam", emoji: "🇻🇳" },
  { code: "YE", name: "Yemen", emoji: "🇾🇪" },
  { code: "ZM", name: "Zambia", emoji: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", emoji: "🇿🇼" },
];
