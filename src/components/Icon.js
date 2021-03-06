import React from 'react'

export function IconFavorite({className}) {
  return (
    <svg
      className={className}
      style={{
        pointerEvents: 'none',
        display: 'block',
        width: '100%',
        height: '100%',
      }}
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17159 5.28681C4.80015 5.69477 4.50551 6.1791 4.30449 6.71213C4.10346 7.24516 4 7.81646 4 8.39341C4 8.97036 4.10346 9.54167 4.30449 10.0747C4.50551 10.6077 4.80015 11.0921 5.17159 11.5L12 19L18.8284 11.5C19.5786 10.6761 20 9.55862 20 8.39341C20 7.22821 19.5786 6.11073 18.8284 5.28681C18.0783 4.46289 17.0609 4.00001 16 4.00001C14.9391 4.00001 13.9217 4.46289 13.1716 5.28681L12 6.57358L10.8285 5.28681C10.457 4.87884 10.0161 4.55522 9.53076 4.33443C9.04546 4.11364 8.52531 4 8.00002 4C7.47473 4 6.95458 4.11364 6.46928 4.33443C5.98398 4.55522 5.54302 4.87884 5.17159 5.28681V5.28681Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconHart({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.464 5.458A4.978 4.978 0 002 8.98 4.961 4.961 0 003.464 12.5L12 21l8.535-8.5a4.969 4.969 0 000-7.042 5.01 5.01 0 00-7.071 0L12 6.917l-1.464-1.459A5.002 5.002 0 007 4a5.018 5.018 0 00-3.536 1.458v0z"
      />
    </svg>
  )
}

export function IconClock({className}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{display: 'block'}}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20a8 8 0 100-16 8 8 0 000 16z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4.5l3 1.5"
      />
    </svg>
  )
}

export function IconHappyBaby({className = 'empty-error-icon'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      display="block"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.995 15.412a.953.953 0 100-1.906.953.953 0 000 1.906zM17.005 15.412a.953.953 0 100-1.906.953.953 0 000 1.906z"
      />
      <path
        fill="currentColor"
        d="M24 14.054c0-1.38-1-2.53-2.314-2.765v-.417c0-5.34-4.345-9.686-9.686-9.686-5.34 0-9.686 4.345-9.686 9.686v.417A2.815 2.815 0 000 14.054a2.815 2.815 0 002.348 2.772c.188 2.134 1.164 3.71 2.911 4.691 1.554.873 3.759 1.297 6.741 1.297 2.982 0 5.187-.424 6.74-1.297 1.748-.98 2.724-2.557 2.912-4.69A2.815 2.815 0 0024 14.053zm-23.008 0c0-.83.56-1.532 1.322-1.749v3.498a1.821 1.821 0 01-1.322-1.749zm19.701 1.991c0 2.18-.797 3.686-2.438 4.607-1.401.787-3.447 1.17-6.255 1.17-2.807 0-4.854-.383-6.255-1.17-1.64-.921-2.438-2.428-2.438-4.607v-5.173c0-3.926 2.615-7.251 6.195-8.327 2.728.034 4.18 2.003 4.18 3.429 0 1.091-.888 1.98-1.98 1.98a1.487 1.487 0 01-1.485-1.485c0-.6.489-1.089 1.089-1.089a.496.496 0 100-.992c-1.147 0-2.081.933-2.081 2.08a2.48 2.48 0 002.477 2.478 2.976 2.976 0 002.972-2.972c0-1.03-.517-2.138-1.383-2.964a5.047 5.047 0 00-1.172-.83c4.739.064 8.574 3.938 8.574 8.692v5.173zm.993-.242v-3.498a1.821 1.821 0 011.322 1.75c0 .83-.56 1.532-1.322 1.748z"
      />
      <path
        fill="currentColor"
        d="M13.918 15.825a2.716 2.716 0 01-3.836 0 .496.496 0 00-.702.702A3.694 3.694 0 0012 17.61c.949 0 1.898-.361 2.62-1.083a.496.496 0 00-.701-.702z"
      />
    </svg>
  )
}
export function IconCheck({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.285 2L9 13.567 3.714 8.556 0 12.272 9 21 24 5.715 20.285 2z"
      />
    </svg>
  )
}

export function IconSearch({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 22l-6-6 6 6zm-4-11a7.001 7.001 0 01-11.95 4.95A7 7 0 1117 11z"
      />
    </svg>
  )
}
export function IconMovie({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11.45 8.25L21 6.281l-.006-.031L20.238 3 4.361 6.147A1.69 1.69 0 003 7.802V18.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V8.25h-9.55zm6.633-3.932L19.88 5.52l-2.246.446-1.799-1.204 2.247-.445zm-4.424.877l1.8 1.204-2.245.446-1.801-1.205 2.246-.446zm-4.428.878l1.802 1.206-2.244.446-1.805-1.207 2.247-.445zM7.315 10.5L8.844 9h2.29l-1.529 1.5h-2.29zM10.5 18v-5.25l4.5 2.56L10.5 18zm3.62-7.5h-2.29L13.359 9h2.29l-1.529 1.5zm4.51 0h-2.291L17.868 9h2.29l-1.529 1.5z"
      />
    </svg>
  )
}

export function IconSadbaby({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      display="block"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.995 15.412a.953.953 0 100-1.906.953.953 0 000 1.905zm10.01 0a.953.953 0 100-1.906.953.953 0 000 1.905z"
      />
      <path
        fill="currentColor"
        d="M24 14.054c0-1.38-1-2.53-2.314-2.765v-.417c0-5.34-4.345-9.686-9.686-9.686-5.34 0-9.686 4.345-9.686 9.686v.417A2.814 2.814 0 000 14.054a2.814 2.814 0 002.348 2.772c.188 2.134 1.164 3.71 2.911 4.691 1.554.873 3.759 1.297 6.741 1.297 2.982 0 5.187-.424 6.74-1.297 1.748-.98 2.724-2.557 2.912-4.691A2.814 2.814 0 0024 14.054zm-23.008 0c0-.83.56-1.532 1.322-1.749v3.498a1.821 1.821 0 01-1.322-1.749zm19.701 1.991c0 2.179-.797 3.686-2.438 4.607-1.401.787-3.447 1.17-6.255 1.17-2.807 0-4.853-.383-6.255-1.17-1.64-.921-2.438-2.428-2.438-4.607v-5.173c0-3.926 2.615-7.251 6.195-8.327 2.728.034 4.18 2.003 4.18 3.429 0 1.091-.888 1.98-1.98 1.98a1.487 1.487 0 01-1.485-1.485c0-.6.489-1.089 1.089-1.089a.496.496 0 100-.992 2.083 2.083 0 00-2.081 2.08 2.48 2.48 0 002.477 2.478 2.976 2.976 0 002.972-2.972c0-1.03-.517-2.138-1.383-2.964a5.046 5.046 0 00-1.171-.83c4.738.064 8.574 3.938 8.574 8.692v5.173zm.993-.242v-3.498a1.821 1.821 0 011.322 1.75c0 .83-.56 1.532-1.322 1.748z"
      />
      <path
        fill="currentColor"
        d="M9.38 18.24a.496.496 0 10.701.7 2.716 2.716 0 013.838 0 .494.494 0 00.701 0 .496.496 0 000-.7 3.71 3.71 0 00-5.24 0zm-2.031-7.271a.496.496 0 00-.992 0c0 .52-.423.943-.944.943a.496.496 0 000 .992A1.938 1.938 0 007.35 10.97zm10.294 0a.496.496 0 00-.992 0c0 1.067.869 1.935 1.936 1.935a.496.496 0 000-.992.945.945 0 01-.944-.944z"
      />
    </svg>
  )
}
export function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="21" fill="none">
      <path
        fill="#F7FAFC"
        d="M38.778 13.643c0-.498-.175-.88-.527-1.143-.352-.27-.984-.55-1.898-.844-.915-.299-1.638-.591-2.171-.879-1.454-.785-2.18-1.842-2.18-3.173 0-.69.193-1.306.58-1.845.393-.545.952-.97 1.679-1.275.732-.304 1.552-.457 2.46-.457.915 0 1.73.167 2.444.501.715.328 1.269.794 1.661 1.398.399.603.598 1.289.598 2.056h-2.637c0-.586-.184-1.04-.554-1.362-.369-.328-.887-.492-1.555-.492-.645 0-1.146.138-1.503.413-.358.27-.536.627-.536 1.072 0 .416.208.765.624 1.046.422.281 1.04.545 1.854.791 1.5.451 2.593 1.01 3.279 1.679.685.668 1.028 1.5 1.028 2.496 0 1.107-.42 1.977-1.257 2.61-.838.627-1.966.94-3.384.94-.984 0-1.88-.178-2.69-.535-.808-.364-1.426-.859-1.854-1.486-.422-.627-.633-1.353-.633-2.18h2.646c0 1.413.844 2.119 2.531 2.119.627 0 1.116-.126 1.468-.378.352-.258.527-.615.527-1.072zm14.95-2.751c0 1.26-.222 2.364-.668 3.313-.445.95-1.083 1.682-1.916 2.197-.826.516-1.775.774-2.847.774-1.06 0-2.007-.255-2.839-.765-.832-.51-1.477-1.236-1.934-2.18-.457-.949-.688-2.039-.694-3.27v-.632c0-1.26.226-2.367.677-3.322.457-.961 1.099-1.696 1.925-2.206.832-.516 1.78-.774 2.847-.774s2.013.258 2.84.774c.831.51 1.473 1.245 1.924 2.206.457.955.685 2.06.685 3.313v.572zm-2.671-.58c0-1.342-.24-2.362-.721-3.06-.48-.696-1.166-1.045-2.057-1.045-.885 0-1.567.346-2.048 1.037-.48.686-.723 1.694-.729 3.024v.624c0 1.306.24 2.32.72 3.04.481.721 1.172 1.082 2.075 1.082.885 0 1.564-.346 2.039-1.037.474-.698.715-1.711.72-3.042v-.623zM66.05 17h-2.637L58.28 8.58V17h-2.636V4.203h2.636l5.142 8.438V4.203h2.628V17zm9.685-2.637h-4.623L70.234 17h-2.803l4.763-12.797h2.444L79.428 17h-2.804l-.888-2.637zm-3.91-2.136h3.198l-1.608-4.79-1.59 4.79zm13.534.088h-2.1V17h-2.637V4.203h4.755c1.512 0 2.678.337 3.498 1.01.82.675 1.23 1.627 1.23 2.857 0 .873-.19 1.603-.57 2.189-.376.58-.947 1.043-1.715 1.389l2.769 5.229V17h-2.83l-2.4-4.685zm-2.1-2.135h2.127c.662 0 1.174-.167 1.538-.501.363-.34.545-.806.545-1.398 0-.603-.173-1.078-.519-1.424-.34-.345-.864-.518-1.573-.518H83.26v3.84zm11.496 4.702h5.598V17h-8.235V4.203h2.637v10.679zm9.07-4.913l2.663-5.766h2.883l-4.201 8.156V17h-2.681v-4.64l-4.2-8.157h2.891l2.645 5.766z"
      />
      <path
        fill="#667EEA"
        d="M17.924 3.076l-1.481 1.481A8.415 8.415 0 0118.9 10.5c0 4.641-3.759 8.4-8.4 8.4a8.398 8.398 0 01-8.4-8.4 8.388 8.388 0 017.35-8.326v2.12C6.468 4.8 4.2 7.383 4.2 10.5c0 3.476 2.824 6.3 6.3 6.3s6.3-2.825 6.3-6.3a6.241 6.241 0 00-1.848-4.452l-1.48 1.48A4.226 4.226 0 0114.7 10.5a4.2 4.2 0 11-8.4 0c0-1.953 1.344-3.58 3.15-4.053v2.247A2.079 2.079 0 008.4 10.5c0 1.155.945 2.1 2.1 2.1 1.155 0 2.1-.945 2.1-2.1 0-.777-.42-1.449-1.05-1.806V0H10.5C4.704 0 0 4.704 0 10.5S4.704 21 10.5 21 21 16.296 21 10.5a10.47 10.47 0 00-3.076-7.424z"
      />
    </svg>
  )
}
