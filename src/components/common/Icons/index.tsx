type IconProps = {
  height?: number
  width?: number
  color?: string
  className?: string
}

export const TitleIcon: React.FC<IconProps> = ({
  height = 15,
  width = 225.246,
  color,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 225.246 15"
    >
      <g fill={color} data-name="Group 82">
        <path
          d="M0 0l5.222 7.512L0 15h4.335l5.222-7.488L4.335 0z"
          data-name="Path 177"
        ></path>
        <path
          d="M9.36 0l5.221 7.512L9.36 15h4.36l5.221-7.488L13.72 0z"
          data-name="Path 178"
        ></path>
        <path
          d="M18.744 0l5.221 7.512L18.744 15H23.1l5.221-7.488L23.1 0z"
          data-name="Path 179"
        ></path>
        <path
          d="M28.128 0l5.222 7.512L28.128 15h4.36l5.221-7.488L32.488 0z"
          data-name="Path 180"
        ></path>
        <path
          d="M37.488 0l5.222 7.512L37.488 15h4.36l5.221-7.488L41.848 0z"
          data-name="Path 181"
        ></path>
        <path
          d="M46.872 0l5.222 7.512L46.872 15h4.36l5.221-7.488L51.232 0z"
          data-name="Path 182"
        ></path>
        <path
          d="M56.256 0l5.222 7.512L56.256 15h4.36l5.221-7.488L60.616 0z"
          data-name="Path 183"
        ></path>
        <path
          d="M65.641 0l5.2 7.512-5.2 7.488h4.334L75.2 7.512 69.975 0z"
          data-name="Path 184"
        ></path>
        <path
          d="M75 0l5.222 7.512L75 15h4.36l5.221-7.488L79.36 0z"
          data-name="Path 185"
        ></path>
        <path
          d="M84.384 0l5.222 7.512L84.384 15h4.36l5.221-7.488L88.744 0z"
          data-name="Path 186"
        ></path>
        <path
          d="M93.768 0l5.222 7.512L93.768 15h4.36l5.2-7.488L98.128 0z"
          data-name="Path 187"
        ></path>
        <path
          d="M103.128 0l5.222 7.512L103.128 15h4.36l5.221-7.488L107.488 0z"
          data-name="Path 188"
        ></path>
        <path
          d="M112.513 0l5.222 7.512L112.513 15h4.36l5.221-7.488L116.873 0z"
          data-name="Path 189"
        ></path>
        <path
          d="M121.9 0l5.222 7.512L121.9 15h4.36l5.221-7.488L126.257 0z"
          data-name="Path 190"
        ></path>
        <path
          d="M131.281 0l5.2 7.512-5.2 7.488h4.334l5.222-7.488L135.615 0z"
          data-name="Path 191"
        ></path>
        <path
          d="M140.64 0l5.222 7.512L140.64 15H145l5.221-7.488L145 0z"
          data-name="Path 192"
        ></path>
        <path
          d="M150.025 0l5.222 7.512L150.025 15h4.36l5.221-7.488L154.385 0z"
          data-name="Path 193"
        ></path>
        <path
          d="M159.409 0l5.222 7.512L159.409 15h4.36l5.2-7.488-5.2-7.512z"
          data-name="Path 194"
        ></path>
        <path
          d="M168.769 0l5.221 7.512L168.769 15h4.36l5.221-7.488L173.129 0z"
          data-name="Path 195"
        ></path>
        <path
          d="M178.153 0l5.221 7.512L178.153 15h4.36l5.221-7.488L182.513 0z"
          data-name="Path 196"
        ></path>
        <path
          d="M187.538 0l5.221 7.512L187.538 15h4.36l5.221-7.488L191.9 0z"
          data-name="Path 197"
        ></path>
        <path
          d="M196.9 0l5.222 7.512L196.9 15h4.36l5.221-7.488L201.257 0z"
          data-name="Path 198"
        ></path>
        <path
          d="M206.281 0l5.219 7.512L206.281 15h4.36l5.221-7.488L210.641 0z"
          data-name="Path 199"
        ></path>
        <path
          d="M215.665 0l5.222 7.512L215.665 15h4.36l5.221-7.488L220.025 0z"
          data-name="Path 200"
        ></path>
      </g>
    </svg>
  )
}

export const Logo: React.FC<IconProps> = ({
  className,
  color = 'var(--white)',
  height = 85.7,
  width = 172.12,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Group 132"
      viewBox="0 0 172.124 85.741"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            fill="none"
            d="M0 0H172.124V85.741H0z"
            data-name="Rectangle 105"
          ></path>
        </clipPath>
      </defs>
      <g fill={color} clipPath="url(#clip-path)" data-name="Group 131">
        <path
          d="M343.661 379.938l.055-.263c.244-1.162-.126-1.425-1.924-1.425-2.059 0-2.611.263-2.855 1.425-.1.482-.057.833.143 1.008.214.219.351.241 1.682.329 3.778.263 3.825.263 4.759.548 1.621.5 1.986 1.468 1.492 3.814-.415 1.972-.935 2.981-1.878 3.638-1.216.833-2.55 1.1-5.673 1.1-4.023 0-5.459-.372-6.014-1.556-.345-.723-.32-1.512.053-3.287h4.023l-.06.285c-.129.614-.066.986.22 1.205.3.263.484.285 2.425.285 1.372 0 1.59-.022 2.005-.307a1.66 1.66 0 00.694-1.162c.217-1.03-.064-1.271-1.7-1.359a30.529 30.529 0 01-4.593-.438c-1.867-.46-2.351-1.534-1.8-4.142.374-1.775 1.007-2.871 2.031-3.463 1.184-.679 2.555-.9 5.632-.9 3.313 0 4.6.307 5.2 1.249a3.447 3.447 0 01.271 2.762l-.162.658z"
          data-name="Path 269"
          transform="translate(-270.248 -304.366)"
        ></path>
        <path
          d="M410.084 387.948l-1.288 2.52h-4.4l7.81-14.618h6.413l1.726 14.618h-4.307l-.3-2.52zm4.773-9.183l-3.279 6.356h3.928z"
          data-name="Path 270"
          transform="translate(-327.988 -304.837)"
        ></path>
        <path
          d="M501.587 390.468h-4.236l2.372-11.265h-4l.706-3.353h12.494l-.706 3.353h-4.259z"
          data-name="Path 271"
          transform="translate(-402.062 -304.837)"
        ></path>
        <path
          d="M574.569 384.475l-.092.438c-.554 2.52-.976 3.288-2.268 4.142a6.523 6.523 0 01-2.394.921 21.72 21.72 0 01-2.985.132c-2.887 0-3.559-.066-4.442-.482a3.185 3.185 0 01-1.891-3.046 34.892 34.892 0 01.833-5.194c.535-2.542 1.163-3.726 2.459-4.712 1.518-1.14 2.78-1.4 6.519-1.4 2.343 0 3.081.088 3.921.482a2.5 2.5 0 011.416 2.718 16.855 16.855 0 01-.334 2.148h-4.188c.146-.921.155-1.074.049-1.359-.187-.46-.77-.613-2.308-.613-1.491 0-2.185.263-2.6 1.008-.3.5-.5 1.271-1.146 4.318-.484 2.3-.113 2.783 2.182 2.783 2.083 0 2.705-.372 3.019-1.863a3.491 3.491 0 00.064-.416z"
          data-name="Path 272"
          transform="translate(-454.596 -304.366)"
        ></path>
        <path
          d="M655.426 375.774a3.191 3.191 0 012.048 3.2 19.021 19.021 0 01-.586 3.791c-.664 3.156-1.042 4.164-2.03 5.26-1.364 1.534-3.278 2.082-7.135 2.082-2.461 0-3.65-.2-4.543-.789a3.273 3.273 0 01-1.559-3.046 15.39 15.39 0 01.425-2.805 20.568 20.568 0 011.492-5.063 5.833 5.833 0 013.606-2.74 15.936 15.936 0 014.224-.395 10.056 10.056 0 014.059.5m-7.86 3.726c-.362.482-.585 1.205-1.042 3.375-.761 3.616-.623 3.857 2.264 3.857 1.728 0 2.318-.219 2.848-1.052a9.473 9.473 0 00.972-3.156c.424-2.016.474-2.476.348-3-.184-.7-.71-.9-2.414-.9-1.846 0-2.451.175-2.977.877"
          data-name="Path 273"
          transform="translate(-520.393 -304.366)"
        ></path>
        <path
          d="M744.787 390.468h-4.165l.923-4.383c.3-1.424.453-2.038 1.288-5.107l.455-1.709h-.142l-.895 1.666-.918 1.666-1.885 3.331-2.588 4.537h-3.62l-.72-4.559-.51-3.31c-.1-.855-.247-1.972-.435-3.331h-.142l-.241 1.709c-.457 3.069-.58 3.879-.839 5.107l-.923 4.383h-4.165l3.078-14.618h6.6l.586 4.186c.2 1.4.276 2.06.405 3.244.041.592.082 1.184.152 1.753h.165l.618-1.249c.9-1.819 1.03-2.082 1.944-3.726l2.306-4.208h6.744z"
          data-name="Path 274"
          transform="translate(-588.233 -304.837)"
        ></path>
      </g>
    </svg>
  )
}

export const Loading: React.FC<IconProps> = ({
  className,
  color = '#989898',
  height = 50,
  width = 50,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      className={className}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <path fill="none" d="M0 0H100V100H0z" className="bk"></path>
      <defs>
        <filter
          id="uil-ring-shadow"
          width="300%"
          height="300%"
          x="-100%"
          y="-100%"
        >
          <feOffset in="SourceGraphic" result="offOut"></feOffset>
          <feGaussianBlur in="offOut" result="blurOut"></feGaussianBlur>
          <feBlend in="SourceGraphic" in2="blurOut"></feBlend>
        </filter>
      </defs>
      <path
        fill={color}
        d="M10 50s0 .5.1 1.4c0 .5.1 1 .2 1.7 0 .3.1.7.1 1.1.1.4.1.8.2 1.2.2.8.3 1.8.5 2.8.3 1 .6 2.1.9 3.2.3 1.1.9 2.3 1.4 3.5.5 1.2 1.2 2.4 1.8 3.7.3.6.8 1.2 1.2 1.9.4.6.8 1.3 1.3 1.9 1 1.2 1.9 2.6 3.1 3.7 2.2 2.5 5 4.7 7.9 6.7 3 2 6.5 3.4 10.1 4.6 3.6 1.1 7.5 1.5 11.2 1.6 4-.1 7.7-.6 11.3-1.6 3.6-1.2 7-2.6 10-4.6 3-2 5.8-4.2 7.9-6.7 1.2-1.2 2.1-2.5 3.1-3.7.5-.6.9-1.3 1.3-1.9.4-.6.8-1.3 1.2-1.9.6-1.3 1.3-2.5 1.8-3.7.5-1.2 1-2.4 1.4-3.5.3-1.1.6-2.2.9-3.2.2-1 .4-1.9.5-2.8.1-.4.1-.8.2-1.2 0-.4.1-.7.1-1.1.1-.7.1-1.2.2-1.7.1-.9.1-1.4.1-1.4V54.2c0 .4-.1.8-.1 1.2-.1.9-.2 1.8-.4 2.8-.2 1-.5 2.1-.7 3.3-.3 1.2-.8 2.4-1.2 3.7-.2.7-.5 1.3-.8 1.9-.3.7-.6 1.3-.9 2-.3.7-.7 1.3-1.1 2-.4.7-.7 1.4-1.2 2-1 1.3-1.9 2.7-3.1 4-2.2 2.7-5 5-8.1 7.1L70 85.7c-.8.5-1.7.9-2.6 1.3l-1.4.7-1.4.5c-.9.3-1.8.7-2.8 1C58 90.3 53.9 90.9 50 91l-3-.2c-1 0-2-.2-3-.3l-1.5-.2-.7-.1-.7-.2c-1-.3-1.9-.5-2.9-.7-.9-.3-1.9-.7-2.8-1l-1.4-.6-1.3-.6c-.9-.4-1.8-.8-2.6-1.3l-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1-1.2-1.2-2.1-2.7-3.1-4-.5-.6-.8-1.4-1.2-2-.4-.7-.8-1.3-1.1-2-.3-.7-.6-1.3-.9-2-.3-.7-.6-1.3-.8-1.9-.4-1.3-.9-2.5-1.2-3.7-.3-1.2-.5-2.3-.7-3.3-.2-1-.3-2-.4-2.8-.1-.4-.1-.8-.1-1.2v-1.1-1.7c-.1-1-.1-1.5-.1-1.5z"
        filter="url(#uil-ring-shadow)"
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          from="0 50 50"
          repeatCount="indefinite"
          to="360 50 50"
          type="rotate"
        ></animateTransform>
      </path>
    </svg>
  )
}
export const ArrowLeft: React.FC<IconProps> = ({
  height = 40,
  width = 25,
  color = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 40"
    >
      <path
        fill="var(--black)"
        fillRule="evenodd"
        d="M30.5 6l5 5-15 15 15 15-5 5-20-20z"
        data-name="arrow-left"
        transform="translate(-10.5 -6)"
      ></path>
    </svg>
  )
}

export const YtIcon: React.FC<IconProps> = ({
  className,
  color = 'var(--yellow-light)',
  height = 36,
  width = 36,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Component 14 – 6"
      viewBox="0 0 36 36"
      className="icons-circle"
    >
      <circle
        cx="18"
        cy="18"
        r="18"
        fill={color}
        data-name="Ellipse 7"
      ></circle>
      <path
        d="M22.647 17.961a71.379 71.379 0 01-10.152.781q-2.1 0-4.637-.2t-4.027-.391l-1.489-.2a1.809 1.809 0 01-1.159-.915 5.733 5.733 0 01-.732-1.906q-.232-1.123-.342-2.1A15.93 15.93 0 010 11.25V7.492Q0 1.269 2.343.781A71.379 71.379 0 0112.495 0q2.1 0 4.637.2t4.027.391l1.489.2a1.724 1.724 0 011.208.891 5.573 5.573 0 01.719 1.94q.219 1.147.317 2.1a17.454 17.454 0 01.1 1.781v3.758q0 .879-.073 1.781a20.223 20.223 0 01-.293 2.074 5.323 5.323 0 01-.732 1.953 1.86 1.86 0 01-1.245.9zm-5.735-9.2l-6.394-3.9a.727.727 0 00-.708-.134q-.439.11-.439.354v8.59q0 .269.439.366a.753.753 0 00.708-.146l6.394-3.9a.827.827 0 000-1.22z"
        transform="translate(6 9)"
      ></path>
    </svg>
  )
}

export const LnkdIcon: React.FC<IconProps> = ({
  className,
  color = 'var(--yellow-light)',
  height = 36,
  width = 36,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Component 23 – 5"
      viewBox="0 0 36 36"
      className="icons-circle"
    >
      <circle
        cx="18"
        cy="18"
        r="18"
        fill={color}
        data-name="Ellipse 6"
      ></circle>
      <path
        d="M4.52.009A4.527 4.527 0 00.007 4.523V18.53a4.527 4.527 0 004.514 4.513h14.007a4.526 4.526 0 004.512-4.513V4.523A4.527 4.527 0 0018.528.009zm1.136 3.8a1.814 1.814 0 11-.023 3.616H5.61a1.813 1.813 0 11.046-3.615zm10.256 4.8c2.289 0 4 1.5 4 4.711v6h-3.474v-5.6c0-1.407-.5-2.367-1.762-2.367a1.905 1.905 0 00-1.785 1.272 2.375 2.375 0 00-.115.849v5.845H9.3s.045-9.485 0-10.467h3.479v1.482a3.453 3.453 0 013.135-1.728zm-12.018.248h3.478v10.466H3.894V8.857z"
        transform="translate(6.476 6.475)"
      ></path>
    </svg>
  )
}

export const FbIcon: React.FC<IconProps> = ({
  className,
  color = 'var(--yellow-light)',
  height = 36,
  width = 36,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Component 12 – 6"
      viewBox="0 0 35.998 35.78"
      className="icons-path"
    >
      <circle
        cx="17"
        cy="17"
        r="17"
        data-name="Ellipse 5"
        transform="translate(1 1)"
      ></circle>
      <path
        fill={color}
        d="M36 18a18 18 0 10-20.814 17.778V23.2h-4.569V18h4.569v-3.966c0-4.512 2.688-7 6.8-7a27.706 27.706 0 014.029.351v4.429h-2.27a2.6 2.6 0 00-2.933 2.811V18H25.8l-.8 5.2h-4.188v12.58A18 18 0 0036 18z"
      ></path>
    </svg>
  )
}

export const EmailIcon: React.FC<IconProps> = ({
  className,
  color = 'var(--yellow-light)',
  height = 25,
  width = 25,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 25"
    >
      <g data-name="Group 55" transform="translate(-1607 -71)">
        <rect
          width={width}
          height={height}
          fill={color}
          data-name="Rectangle 48"
          rx="3"
          transform="translate(1607 71)"
        ></rect>
        <g fillRule="evenodd" transform="translate(1607.313 69.075)">
          <path
            d="M3.564 8.712h17.224l-8.612 4.875z"
            data-name="Path 173"
          ></path>
          <path
            d="M3.6 11.736l8.591 4.811 8.634-4.811v9.622H3.6z"
            data-name="Path 174"
            transform="translate(-.015 -1.22)"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export const PhoneIcon: React.FC<IconProps> = ({
  className,
  color = 'var(--yellow-light)',
  height = 25,
  width = 25,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 25"
    >
      <g data-name="Group 81" transform="translate(-128 -7968)">
        <rect
          width={width - 2}
          height={height - 2}
          data-name="Rectangle 58"
          rx="6"
          transform="translate(129 7969)"
        ></rect>
        <path
          fill={color}
          d="M22.321 2.25H2.679A2.679 2.679 0 000 4.929v19.642a2.679 2.679 0 002.679 2.679h19.642A2.679 2.679 0 0025 24.571V4.929a2.679 2.679 0 00-2.679-2.679zm-.914 17.15l-.837 3.63a.837.837 0 01-.815.649A16.184 16.184 0 013.571 7.5a.876.876 0 01.649-.82l3.627-.837a1.017 1.017 0 01.188-.022.908.908 0 01.77.507l1.674 3.906a1 1 0 01.068.33.949.949 0 01-.307.648l-2.114 1.73a12.941 12.941 0 006.182 6.182l1.73-2.114a.949.949 0 01.648-.307 1 1 0 01.33.068l3.906 1.674a.907.907 0 01.507.77.972.972 0 01-.022.188z"
          data-name="Icon awesome-phone-square-alt"
          transform="translate(128 7965.75)"
        ></path>
      </g>
    </svg>
  )
}

export const CrossIcon: React.FC<IconProps> = ({
  width = 25,
  height = 25,
  color = 'var(--white)',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 14"
    >
      <rect
        width="18"
        height="2"
        x="3.414"
        fill={color}
        rx="1"
        transform="rotate(45 3.414 0)"
      ></rect>
      <rect
        width="18"
        height="2"
        fill={color}
        rx="1"
        transform="scale(-1 1) rotate(45 -7.363 -17.777)"
      ></rect>
    </svg>
  )
}

export const Hamburger: React.FC<IconProps> = ({
  height = 25,
  width = 38,
  color = 'var(--white)',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 448 512"
    >
      <path
        // fill="var(--color-p)"
        fill={color}
        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
      />
    </svg>
  )
}

export const CheckIcon: React.FC<IconProps> = ({
  color,
  height = 52.7,
  width = 52.7,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 52.785 52.785"
    >
      <path
        d="M18.947 24.753l-3.7 3.7 11.88 11.872L53.52 13.932l-3.694-3.694L27.127 32.8l-8.182-8.049zm31.935 5.015A21.025 21.025 0 1135.575 9.446l4.089-4.091a24.547 24.547 0 00-9.9-1.98A26.393 26.393 0 1056.16 29.768z"
        transform="translate(-3.375 -3.375)"
      ></path>
    </svg>
  )
}

export const LineHorizontal: React.FC<IconProps> = ({
  height = 3,
  width = 160,
  color = 'var(--yellow-dark)',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 160.056 3"
    >
      <path
        fill="none"
        stroke={color}
        strokeDasharray="5 8"
        strokeWidth="3"
        d="M160.056 1.5H0"
        data-name="Path 206"
        opacity="0.5"
      ></path>
    </svg>
  )
}

export const LineVertical: React.FC<IconProps> = ({
  height = 160,
  width = 3,
  color = 'var(--yellow-dark)',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 3 160.056"
    >
      <path
        fill="none"
        stroke={color}
        strokeDasharray="5 8"
        strokeWidth="3"
        d="M1.5 160.056V0"
        data-name="Path 203"
        opacity="0.5"
      ></path>
    </svg>
  )
}

export const Circle: React.FC<IconProps> = ({
  height = 42,
  width = 42,
  color = 'var(--yellow-dark)',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 42"
    >
      <g
        fill="none"
        stroke={color}
        strokeDasharray="5 8"
        strokeLinecap="round"
        strokeWidth="3"
        data-name="Ellipse 8"
        opacity="0.5"
      >
        <circle cx="21" cy="21" r="21" stroke="none"></circle>
        <circle cx="21" cy="21" r="19.5"></circle>
      </g>
    </svg>
  )
}

export const ArrowDown: React.FC<IconProps> = ({
  className,
  color = '#fff',
  height = 23,
  width = 23,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className && className}
      viewBox="0 0 23.063 23.062"
    >
      <g fill={color} fillRule="evenodd" transform="rotate(180 16.593 16.593)">
        <path
          d="M18 12.375c.621 0 1.125.776 1.125 1.734v17.342c0 .958-.5 1.734-1.125 1.734s-1.125-.776-1.125-1.734V14.109c0-.958.504-1.734 1.125-1.734z"
          data-name="Path 350"
          transform="translate(3.656)"
        ></path>
        <path
          d="M20.489 10.454a2.223 2.223 0 012.332 0L32.7 17.2a.9.9 0 010 1.593 2.226 2.226 0 01-2.332 0l-8.716-5.956-8.714 5.963a2.226 2.226 0 01-2.332 0 .9.9 0 010-1.593l9.883-6.75z"
          data-name="Path 351"
        ></path>
      </g>
    </svg>
  )
}
