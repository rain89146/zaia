export default function SvgIcon0({size}) {

    let width = 30;
    let height = 65;
    let radtio = width / height;

        width = size * radtio;

    return (
        <svg width={width} height={size} viewBox="0 0 30 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 52L14.2929 63.2929C14.6834 63.6834 15.3166 63.6834 15.7071 63.2929L27 52" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 8L15 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="1" y="1" width="28" height="44" rx="14" stroke="white" strokeWidth="2"/>
        </svg>
    )
}
