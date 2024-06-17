const Skills = () => {
    return(
        <>
            <div className="bg-[#252024] text-[#D5BAA6] pt-20">
                <h1 className="text-3xl sm:text-4xl font-bold p-4 text-start ">
                    Skills
                </h1>

                <div className="flex items-center justify-center">      

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                        <div className="m-5 items-center justify-center flex flex-col ">
                            <svg className="transform duration-500 hover:scale-125" width="138" height="130" viewBox="0 0 138 130" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M101.501 57.7129C81.627 57.7129 65.5541 73.7858 65.5541 93.6596C65.5541 113.533 81.627 129.691 101.501 129.691C121.375 129.691 137.448 113.533 137.448 93.6596C137.448 73.7858 121.375 57.7129 101.501 57.7129ZM78.822 71.7522H82.9314C82.9314 71.8504 82.8893 72.0748 82.9314 72.0888C84.8809 73.0705 86.3816 74.8237 88.808 74.9499C92.8052 75.1463 95.8066 77.3202 98.808 79.5642C103.745 83.2529 106.704 88.2599 108.976 93.7578C109.551 95.1603 110.253 96.5909 111.08 97.8672C111.571 98.6246 112.342 99.3679 113.184 99.7185C117.069 101.317 120.421 103.604 123.436 106.942C120.954 107.46 118.738 107.923 116.213 108.456C116.704 108.989 116.943 109.34 117.307 109.634C119.495 111.416 121.725 113.253 123.941 115.006C124.208 115.216 124.628 115.287 124.951 115.427V115.679C122.988 114.669 120.982 113.772 119.074 112.65C117.644 111.822 116.171 110.855 115.049 109.705C113.352 107.993 113.605 107.446 115.975 106.928C117.588 106.577 119.271 106.409 121.01 106.17C120.926 105.932 120.884 105.665 120.758 105.581C118.205 103.828 115.793 101.808 112.609 101.135C110.842 100.756 109.902 99.6204 109.159 98.1056C107.307 94.3048 105.596 90.4479 103.366 86.8574C100.463 82.187 96.1852 78.849 90.8556 76.8574C90.6172 76.7732 90.3367 76.5909 90.0983 76.6049C86.9286 76.8854 84.6425 74.9219 82.0338 73.7438C81.6551 73.5755 81.2483 73.323 80.8556 73.323C80.3648 73.323 79.6915 73.4352 79.4251 73.7438C79.1726 74.0383 79.2427 74.6835 79.4251 75.0902C79.7336 75.7774 80.3087 76.3525 80.6873 77.0257C81.7392 78.877 82.6929 80.7003 83.7168 82.5656C84.7547 84.4731 85.8767 86.4086 86.8304 88.3581C87.0828 88.863 87.1109 89.6905 86.9146 90.2094C85.8627 92.8882 85.5681 95.539 86.073 98.3581C86.3535 99.9009 86.8024 101.331 88.3451 102.552C89.3129 100.209 88.6677 97.6007 90.9538 96.086C92.6369 99.0874 94.362 102.103 96.073 105.16C95.9608 105.259 95.7645 105.329 95.6523  105.413C94.0955 103.491 92.6088 101.598 90.9538 99.5362C90.7995 100.42 90.7294 101.247 90.4489 101.977C90.1684 102.678 89.7757 103.618 89.1866 103.828C88.6116 104.024 87.5176 103.632 86.9987 103.155C85.2035 101.472 84.6144 99.1575 84.6425 96.8574C84.6705 94.8097 85.0352 92.734 85.484 90.7284C85.7084 89.7045 85.6523 89.0734 85.0632 88.1197C83.8991 86.2122 83.0857 84.0944 82.1179 82.0748C81.599 80.9808 81.1922 79.8027 80.4349 78.877C78.6957 76.7311 76.9566 74.6414 78.822 
                            71.7522ZM87.8122 79.4661C88.289 79.6905 88.9061 79.7746 89.1586 80.1393C89.4531 80.5741 89.397 81.2473 89.4952 81.8223C89.3269 81.8363 89.1726 81.8924 88.9903  81.9065C88.5134 81.2192 88.0366 80.4899 87.5597 79.8027C87.6298 79.6905 87.742 79.5923 87.8122 79.4661Z" fill="#ff4800d2"></path> <path d="M62.8612  0.0127396C26.9566 0.433497 -1.2202 10.4335 0.0420758 22.355C1.30435 34.2905 31.4867 43.6874 67.4054 43.2666C103.324 42.8459 131.403 32.8599 130.14 20.9244C128.878 8.98891 98.7799 -0.393993 62.8612 0.0127396ZM0.0420758 24.2905V47.895C-0.0140253 48.3999 -0.0140253 48.9749 0.0420758 49.4939C1.30435  61.4294 31.4867 70.7421 67.4054 70.3214C67.4896 70.3214 67.5737 70.3214 67.6579 70.3214C73.0436 63.1124 80.8276 57.5023 90.3367 54.7814C101.851 51.4995 113.675 53.0984 123.422 58.3157C127.405 55.6369 129.818 52.6355 130.14 49.4939H130.225V25.8052C129.032 37.0535 101.767 46.226 67.4054 46.6327C31.5007 47.0535 1.3885 37.7407 0.126227 25.8052C0.0701262 25.3003 0.0701262 24.7954 0.126227 24.2905H0.0420758ZM0.0420758 51.9202V75.6089C-0.0140253 76.1138 -0.0140253 76.6047 0.0420758 77.1236C1.20617 88.1755 27.223 96.9553 59.5933 97.867C58.9482 89.536 60.9678 81.3733 65.0492 74.3466C30.1964 74.3326 1.34642 65.104 0.126227 53.435C0.0701262 52.93 0.0701262 52.4251 0.126227 51.9202H0.0420758ZM130.225 53.5191C129.986 55.8193 128.612 58.0072 126.368 60.0689C127.686 60.9104 129.004 61.766 130.225 62.7618V53.5191ZM0.0420758 79.6341V103.239C-0.0140253 103.744 -0.0140253 104.234 0.0420758 104.753C1.30435 116.689 31.4867 126.086 67.4054 125.665C69.4952 125.637 71.5849 125.581 73.6186 125.497C67.9524 120.546 63.5064 114.108 61.1922 106.521C60.7294 105.006 60.3787 103.505 60.0982 101.99C27.5035 101.163 1.30435 92.2709 0.126227 81.1629C0.0701262 80.658 0.0701262 80.1531 0.126227 79.6482H0.0420758V79.6341Z" fill="#ff4800d2"></path></svg>
                        </div>

                        <div className="m-5 items-center justify-center flex flex-col">
                            <svg className="transform duration-500 hover:scale-125"  width="311" height="142" viewBox="0 0 311 142" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_20_345)"> <path d="M87.4107 -0.0800781L79.4457 89.1487L43.6425 99.0744L7.93793 89.1624L-0.0188446 -0.0800781H87.4107Z" fill="#ff4800d2"></path><path d="M43.6959 91.4871L72.6267 83.4666L79.433 7.21631H43.6959V91.4871Z" fill="#b85832"></path> <path d="M28.2121 29.1078H43.6959V18.1626H16.2504L16.5123 21.099L19.2026 51.2611H43.6959V40.3159H29.2125L28.2121 29.1078ZM30.679 56.7339H19.6916L21.2249 73.9196L43.6455 80.1433L43.6959 80.1296V68.7419L43.6479 68.7546L31.4583 65.4632L30.679 56.7339Z" fill="#0F0F0F"></path><path d="M43.6582 51.2611H57.1361L55.8653 65.4563L43.6579 68.7512V80.1382L66.0963 73.9196L66.2608 72.0703L68.8332 43.255L69.1002 40.3159H43.6582V51.2611ZM43.6582 29.0811V29.1078H70.0961L70.3155 26.6478L70.8145 21.099L71.0759 18.1626H43.6582V29.0814V29.0811Z" fill="#0F0F0F"></path> </g> <g clip-path="url(#clip1_20_345)"> <path d="M119.521 131.262L111.563 41.8105H199.03L191.062 131.248L155.243 141.197L119.521 131.262Z" fill="#ff4800d2"></path> <path d="M155.297 133.595L184.242 125.555L191.051 49.1265H155.297V133.595Z" fill="#b85832"></path> <path d="M155.297 81.534H169.787L170.786 70.2997H155.297V59.3281H155.336H182.754L182.492 62.2707L179.803 92.5056H155.297V81.534Z" fill="#0F0F0F"></path> <path d="M155.364 110.025L155.314 110.039L143.12 106.738L142.34 97.9888H136.413H131.347L132.881 115.215L155.311 121.455L155.364 121.441V110.025Z" fill="#0F0F0F"></path> <path d="M168.855 92.0396L167.537 106.731L155.325 110.032V121.447L177.773 115.214L177.939 113.362L179.842 92.0396H168.855Z" fill="#0F0F0F"></path> <path d="M155.336 59.3281V66.1432V70.2713V70.2997H128.92H128.885L128.665 67.8328L128.165 62.2707L127.903 59.3281H155.336Z" fill="#0F0F0F"></path> <path d="M155.297 81.5332V88.3483V92.4764V92.5048H143.29H143.255L143.035 90.0379L142.539 84.4758L142.277 81.5332H155.297Z" fill="#0F0F0F"></path> </g> <g clip-path="url(#clip2_20_345)"> <path d="M230.706 88.976L223.388 0.166016L310.779 0.344484L303.042 88.976L267.414 99.2208L230.706 88.976Z" fill="#ff4800d2"></path> <path d="M267.414 90.6438V8.62402L303.402 8.743L296.984 82.1256L267.414 90.6438Z" fill="#b85832"></path> <path d="M263.56 18.3628H254.046V72.9531L246.645 71.5533V64.2046L237.836 62.8049V79.252L263.56 85.9008V18.3628ZM270.697 18.3628H297.036L295.274 28.8259H280.752V45.996H295.274L293.512 80.6517L270.697 85.9008V75.0527L286.112 69.8036L287.003 55.4562L270.697 57.8008V18.3628Z" fill="#0F0F0F"></path> </g> <defs> <clipPath id="clip0_20_345"> <rect width="87.3918" height="99.3868" fill="white"></rect> </clipPath> <clipPath id="clip1_20_345"> <rect width="87.3911" height="99.3868" fill="white" transform="translate(111.601 41.8105)"></rect> </clipPath> <clipPath id="clip2_20_345"> <rect width="87.3911" height="99.3868" fill="white" transform="translate(223.388)"></rect></clipPath></defs></svg>
                        </div>

                        <div className="m-5 items-center justify-center flex flex-col">
                            <svg className="transform duration-500 hover:scale-125"  width="149" height="133" viewBox="0 0 149 133" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_26_389)"> <path d="M74.4547 79.515C81.7849 79.515 87.7271 73.5727 87.7271 66.2426C87.7271 58.9125 81.7849 52.9702 74.4547 52.9702C67.1246 52.9702 61.1824 58.9125 61.1824 66.2426C61.1824 73.5727 67.1246 79.515 74.4547 79.515Z" fill="#ff4800d2"></path> <path d="M74.4548 93.4351C113.787 93.4351 145.672 81.2608 145.672 66.243C145.672 51.2251 113.787 39.0508 74.4548 39.0508C35.1224 39.0508 3.23718 51.2251 3.23718 66.243C3.23718 81.2608 35.1224 93.4351 74.4548 93.4351Z" stroke="#ff4800d2" stroke-width="6.47433"></path> <path d="M50.9056 79.8396C70.5718 113.902 97.0577 135.429 110.064 127.92C123.069 120.411 117.67 86.7103 98.0038 52.6474C78.3376 18.5846 51.8517 -2.94163 38.8459 4.56728C25.8401 12.0762 31.2394 45.7768 50.9056 79.8396Z" stroke="#ff4800d2" stroke-width="6.47433"></path> <path d="M50.9056 52.6486C31.2394 86.7115 25.8401 120.412 38.8459 127.921C51.8517 135.43 78.3376 113.904 98.0038 79.8408C117.67 45.7779 123.069 12.0774 110.064 4.56846C97.0577 -2.94045 70.5718 18.5858 50.9056 52.6486Z" stroke="#ff4800d2" stroke-width="6.47433"></path> </g> <defs> <clipPath id="clip0_26_389"> <rect width="149" height="132.487" fill="white"></rect> </clipPath> </defs> </svg>
                        </div>

                        <div className="m-5 items-center justify-center flex flex-col">                            
                            <svg className="transform duration-500 hover:scale-125"  fill="#ff4800d2" width="159" height="143" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>
                        </div>

                        <div className="m-5 items-center justify-center flex flex-col">
                            <svg className="transform duration-500 hover:scale-125"  fill="#ff4800d2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="145px" height="145px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#ff4800d2" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e2ea6"> <path display="inline" d="M401.054,224c3.714,4.115,4.595,11.181,2.653,21.19c-2.029,10.425-5.935,17.862-11.723,22.32 c-5.793,4.458-14.602,6.687-26.432,6.687h-17.849l10.957-56.37h20.103C389.913,217.827,397.34,219.886,401.054,224z M149.754,217.827h-20.103l-10.958,56.37h17.848c11.827,0,20.639-2.229,26.432-6.687c5.789-4.458,9.694-11.896,11.723-22.32 c1.942-10.01,1.06-17.075-2.653-21.19C168.33,219.886,160.903,217.827,149.754,217.827z M511.5,256 c0,74.229-114.393,134.403-255.5,134.403S0.5,330.229,0.5,256c0-74.228,114.393-134.403,255.5-134.403S511.5,181.772,511.5,256z M198.542,265.286c3.04-5.448,5.203-11.461,6.483-18.037c3.102-15.967,0.761-28.403-7.024-37.313 c-7.781-8.91-20.165-13.363-37.136-13.363h-56.423L78.265,331.261h29.342l6.958-35.805h25.134c11.087,0,20.21-1.164,27.372-3.497 c7.161-2.329,13.669-6.233,19.528-11.719C191.514,275.72,195.493,270.738,198.542,265.286z M301.814,295.456l12.181-62.682 c2.479-12.747,0.619-21.971-5.572-27.664c-6.196-5.688-17.449-8.537-33.768-8.537h-25.933l6.961-35.81h-29.11l-26.182,134.692 h29.11l14.996-77.165h23.267c7.448,0,12.317,1.232,14.604,3.698c2.287,2.467,2.773,7.091,1.455,13.869l-11.581,59.598H301.814z M427.011,209.937c-7.78-8.91-20.164-13.363-37.135-13.363h-56.424l-26.178,134.688h29.343l6.957-35.805h25.135 c11.086,0,20.21-1.164,27.371-3.497c7.161-2.329,13.669-6.233,19.528-11.719c4.92-4.521,8.896-9.502,11.943-14.954 c3.044-5.448,5.202-11.461,6.483-18.037C437.137,231.282,434.796,218.846,427.011,209.937z"> </path> </g> </g></svg>
                        </div>

                        <div className="m-5 items-center justify-center flex flex-col">
                            <svg className="transform duration-500 hover:scale-125"  width="148px" height="148px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ff4800" stroke="#ff4800d2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ff4800d2"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Skills