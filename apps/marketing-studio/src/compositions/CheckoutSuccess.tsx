import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export interface CheckoutSuccessProps {
  amount: number; // In pesewas
  currency: string;
  merchantName: string;
}

export const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({
  amount,
  currency,
  merchantName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const checkmarkProgress = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 200,
    },
  });

  const textOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const amountInGHS = (amount / 100).toFixed(2);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Checkmark Circle */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          backgroundColor: '#10b981',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `scale(${checkmarkProgress})`,
        }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
        >
          <polyline
            points="20 6 9 17 4 12"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: 30 - 30 * checkmarkProgress,
            }}
          />
        </svg>
      </div>

      {/* Success Text */}
      <div
        style={{
          marginTop: 30,
          opacity: textOpacity,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 'bold',
            color: '#10b981',
            marginBottom: 10,
          }}
        >
          Payment Successful!
        </h2>
        <p
          style={{
            fontSize: 24,
            color: '#6b7280',
            marginBottom: 5,
          }}
        >
          {currency} {amountInGHS}
        </p>
        <p
          style={{
            fontSize: 18,
            color: '#9ca3af',
          }}
        >
          Paid to {merchantName}
        </p>
      </div>
    </AbsoluteFill>
  );
};
