import { LogoIcon } from '@/components/logo'
 
export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'
 
export default function Icon() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '8px',
      }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '28px', height: '28px' }}
      >
        <rect
          x="4"
          y="4"
          width="32"
          height="32"
          rx="6"
          stroke="#1D1D1F"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M8 8L8 32L28 28L28 12L8 8Z"
          fill="url(#iconGradient)"
        />
        <circle
          cx="24"
          cy="20"
          r="2"
          fill="white"
        />
        <defs>
          <linearGradient id="iconGradient" x1="8" y1="8" x2="28" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0052FF" />
            <stop offset="1" stopColor="#4D7CFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
