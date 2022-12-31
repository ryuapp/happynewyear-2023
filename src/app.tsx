export function App() {
    return (
        <div className="m-0 mt-52 text-center">
            <div className="mb-10 flex justify-center font-noto">
                <div id="bamboo" className="cursor-pointer transition" onClick={animation2023}>
                    <Bamboo />
                    <div id="message" className="flex justify-center transition">
                        あけおめ
                        <Rabbit />
                    </div>
                </div>
                <h1 className="my-2 pt-8 text-4xl">謹賀新年</h1>
            </div>
            <div class="mx-auto max-w-sm py-8 text-center text-xs text-gray-600">© 2023 ryu.app</div>
        </div>
    )
}

async function animation2023() {
    const message = document.getElementById('message')
    const bamboo = document.getElementById('bamboo')
    if (!message?.classList.contains('opacity-0')) return
    bamboo?.classList.add('-translate-y-10')
    await sleep(1 * 30)
    message?.classList.remove('opacity-0')
    await sleep(1 * 1200)
    message?.classList.add('opacity-0')
    bamboo?.classList.remove('-translate-y-10')
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function Bamboo() {
    return (
        <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.1994 18.1378C27.1043 17.8785 26.817 17.7455 26.5577 17.8406C26.2985 17.9358 26.1655 18.223 26.2606 18.4823L26.9691 20.4129L26.2469 21.4353L25.7701 20.1197C25.676 19.86 25.3893 19.7259 25.1297 19.8199C24.87 19.914 24.7358 20.2008 24.8299 20.4604L25.5439 22.4306L23.1416 25.8316C22.9823 26.0571 23.036 26.3691 23.2615 26.5284C23.4871 26.6877 23.7991 26.634 23.9584 26.4085L26.3853 22.9726L28.4057 22.99C28.6818 22.9924 28.9076 22.7705 28.91 22.4943C28.9124 22.2182 28.6904 21.9924 28.4143 21.99L27.0874 21.9786L27.7842 20.9922L29.8457 21.01C30.1218 21.0124 30.3476 20.7905 30.35 20.5143C30.3524 20.2382 30.1304 20.0124 29.8543 20.01L28.4863 19.9982L29.2984 18.8485C29.4577 18.6229 29.404 18.3109 29.1785 18.1516C28.9529 17.9923 28.6409 18.046 28.4816 18.2715L27.6701 19.4204L27.1994 18.1378Z"
                fill="#86D72F"
            />
            <path
                d="M7.1615 18.0839C7.39686 18.2283 7.47058 18.5362 7.32615 18.7715L6.24615 20.5315C6.24116 20.5396 6.23598 20.5476 6.23062 20.5553L6.69971 21.3958L7.21393 20.5584C7.35842 20.3231 7.66632 20.2494 7.90164 20.3939C8.13696 20.5384 8.21059 20.8463 8.0661 21.0816L7.3661 22.2216C7.33175 22.2776 7.28818 22.3244 7.23854 22.3613L7.7087 23.2037L7.94436 23.2914C8.20317 23.3877 8.3349 23.6756 8.2386 23.9344C8.22338 23.9753 8.20337 24.013 8.17945 24.0472L8.63661 24.8663C8.77119 25.1075 8.68481 25.412 8.44368 25.5466C8.20255 25.6812 7.89798 25.5948 7.7634 25.3537L7.01491 24.0126L6.32662 23.7564L5.33115 24.6856C5.12928 24.874 4.81288 24.8631 4.62447 24.6612C4.43605 24.4593 4.44696 24.1429 4.64883 23.9545L5.27877 23.3665L4.61763 23.1205L3.24794 24.105C3.05742 24.242 2.79195 24.1985 2.655 24.008C2.51806 23.8175 2.5615 23.552 2.75203 23.415L3.65837 22.7636L2.86562 22.4686C2.60682 22.3723 2.47508 22.0845 2.57138 21.8256C2.66768 21.5668 2.95555 21.4351 3.21436 21.5314L3.93801 21.8007L3.67021 20.8222C3.60827 20.5959 3.74152 20.3622 3.96784 20.3002C4.19415 20.2383 4.42783 20.3716 4.48977 20.5979L4.91884 22.1656L6.26336 22.6659L4.3534 19.2437C4.21883 19.0026 4.30521 18.698 4.54634 18.5634C4.78747 18.4288 5.09204 18.5152 5.22661 18.7563L5.67223 19.5548L6.47383 18.2485C6.61825 18.0131 6.92613 17.9394 7.1615 18.0839Z"
                fill="#86D72F"
            />
            <path
                d="M7.02999 30H25.92C26.24 30 26.49 29.74 26.49 29.43V27.82H6.45999V29.43C6.45999 29.74 6.71999 30 7.02999 30Z"
                fill="#86D72F"
            />
            <path d="M13.81 5.5H19.15L19.15 15.1H24.49V24L16.48 25.453L8.46997 24V12.1H13.81V5.5Z" fill="#44911B" />
            <path
                d="M26.07 24H6.88002C6.65002 24 6.46002 24.19 6.46002 24.42V28.61H26.49V24.42C26.49 24.19 26.31 24 26.07 24Z"
                fill="#F3AD61"
            />
            <path
                d="M16.48 2C15.01 2 13.81 3.2 13.81 4.67V6.56C13.81 8.03 15.01 9.23 16.48 9.23C17.95 9.23 19.15 8.03 19.15 6.56V4.67C19.15 3.19 17.95 2 16.48 2Z"
                fill="#FFDEA7"
            />
            <path d="M13.79 13.62H19.16V14.9H13.79V13.62Z" fill="#86D72F" />
            <path d="M8.46997 16.84H13.81V18.12H8.46997V16.84Z" fill="#86D72F" />
            <path d="M24.4909 19.937H19.1809V18.657H24.4909V19.937Z" fill="#86D72F" />
            <path d="M19.16 21.2H13.79V22.48H19.16V21.2Z" fill="#86D72F" />
            <path
                d="M21.82 10.25C20.35 10.25 19.15 11.45 19.15 12.92V14.81C19.15 16.28 20.35 17.48 21.82 17.48C23.29 17.48 24.49 16.28 24.49 14.81V12.92C24.49 11.44 23.29 10.25 21.82 10.25Z"
                fill="#FFDEA7"
            />
            <path
                d="M11.14 7.25C9.66997 7.25 8.46997 8.45 8.46997 9.92V11.81C8.46997 13.28 9.66997 14.48 11.14 14.48C12.61 14.48 13.81 13.28 13.81 11.81V9.92C13.81 8.44 12.61 7.25 11.14 7.25Z"
                fill="#FFDEA7"
            />
            <path
                d="M14.57 4.94C14.57 3.88 15.43 3.03 16.48 3.03C17.53 3.03 18.38 3.89 18.39 4.94V6.29001C18.39 7.35001 17.53 8.2 16.48 8.2C15.42 8.2 14.57 7.34001 14.57 6.29001V4.94Z"
                fill="#533566"
            />
            <path
                d="M11.14 8.28C10.09 8.28 9.22998 9.13 9.22998 10.19V11.54C9.22998 12.59 10.08 13.45 11.14 13.45C12.19 13.45 13.05 12.6 13.05 11.54V10.19C13.04 9.14 12.19 8.28 11.14 8.28Z"
                fill="#533566"
            />
            <path
                d="M21.82 11.28C20.77 11.28 19.91 12.13 19.91 13.19V14.54C19.91 15.59 20.76 16.45 21.82 16.45C22.87 16.45 23.73 15.6 23.73 14.54V13.19C23.72 12.14 22.87 11.28 21.82 11.28Z"
                fill="#533566"
            />
        </svg>
    )
}
export function Rabbit() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4889 5.3447C17.7732 4.67235 17.7502 3.88017 17.3598 3.19996C16.6598 1.98996 15.0798 1.62996 13.9198 2.41996L8.64818 6.02814C5.99365 6.31089 3.7108 7.71568 2.62948 10.0965C2.5729 10.2211 2.51779 10.3533 2.46987 10.4683L2.46692 10.4754L1.41929 12.9997C1.13231 13.6642 1 14.3783 1 15.08C1 17.7923 3.20772 20 5.92 20H8.03003V27.1718C6.86681 27.5852 6.03003 28.698 6.03003 30V30C6.03003 30.5523 6.47774 31 7.03003 31C12.01 31 16.99 31 21.9699 31C24.2099 31 26.1996 29.5657 26.9168 27.4518C27.0999 26.9131 27.2868 26.3708 27.4745 25.8261C27.875 24.664 28.2796 23.4901 28.6588 22.3171L28.6634 22.3028L28.6676 22.2883C28.8821 21.5493 29 20.7842 29 20C29 19.3731 28.9167 18.701 28.7792 18.0963C28.7446 17.9444 28.7054 17.7912 28.6612 17.6396C30.0414 17.0087 31 15.6167 31 14C31 11.7908 29.2091 9.99999 27 9.99999C25.3782 9.99999 23.9825 10.9647 23.3545 12.3519C22.6099 12.123 21.819 12 21 12H19.6146C21.4802 11.9921 23 10.4674 23 8.60002C23 6.62149 21.3179 5.0476 19.3327 5.20301L19.3317 5.20309L17.4889 5.3447Z"
                fill="#9B9B9B"
            />
            <path
                d="M9 7.00003L19.41 6.20003C20.81 6.09003 22 7.20003 22 8.60003C22 9.92003 20.92 11 19.6 11H14.66C14.88 11.63 15 12.3 15 13H21C22.0819 13 23.1048 13.2447 24.0167 13.6812C24.1759 12.1742 25.4508 11 27 11C28.6569 11 30 12.3431 30 14C30 15.5519 28.8216 16.8286 27.3107 16.9841C27.7073 17.61 28 18.9104 28 20C28 20.683 27.8974 21.3543 27.7073 22.0096C27.1531 23.7238 26.5498 25.424 25.97 27.13C25.39 28.84 23.78 30 21.97 30C21.97 30 15.031 30 14 30C14 28.9 14.9 28 16 28H16.7C16.87 28 17.01 27.86 17.01 27.69V27H14.03L13.32 29.12C13.14 29.65 12.65 30 12.1 30H7.03003C7.03003 28.9 7.93003 28 9.03003 28V19H5.92C3.76 19 2 17.24 2 15.08C2 14.5 2.11 13.92 2.34 13.39L3.39 10.86C3.44 10.74 3.49 10.62 3.54 10.51C4.48 8.44003 6.52 7.19003 9 7.00003Z"
                fill="white"
            />
            <path
                d="M19.49 7.18994H19.6C20.39 7.18994 21.03 7.84994 20.99 8.64994C20.96 9.40994 20.31 9.99994 19.55 9.99994H12.51C12.22 9.99994 12 9.71994 12.07 9.42994C12.31 8.43994 13.16 7.67994 14.22 7.59994L19.49 7.18994Z"
                fill="#FF8687"
            />
            <path
                d="M2 15.08C2.12 15.03 2.25 15 2.38 15C2.94 15 3.38 15.45 3.38 16C3.38 16.51 3 16.93 2.5 16.99C2.18 16.43 2 15.78 2 15.08Z"
                fill="#FF8687"
            />
            <path
                d="M6.81 14.62C7.25735 14.62 7.62 14.2574 7.62 13.81C7.62 13.3626 7.25735 13 6.81 13C6.36265 13 6 13.3626 6 13.81C6 14.2574 6.36265 14.62 6.81 14.62Z"
                fill="#1C1C1C"
            />
        </svg>
    )
}
