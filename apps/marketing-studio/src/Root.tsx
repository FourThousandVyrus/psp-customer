import { Composition } from 'remotion';
import { CheckoutSuccess } from './compositions/CheckoutSuccess';
import { Hero } from './compositions/Hero';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Hero"
        component={Hero}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: 'Links Payments',
          subtitle: 'Mobile Money Made Easy',
        }}
      />
      <Composition
        id="CheckoutSuccess"
        component={CheckoutSuccess}
        durationInFrames={90}
        fps={60}
        width={800}
        height={600}
        defaultProps={{
          amount: 10000, // 100 GHS in pesewas
          currency: 'GHS',
          merchantName: 'Demo Store',
        }}
      />
    </>
  );
};
