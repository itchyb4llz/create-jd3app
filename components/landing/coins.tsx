import {
  IconCurrencyBitcoin,
  IconCurrencyEthereum,
  IconCurrencyDogecoin,
  IconCurrencyXrp,
  IconCurrencySolana
} from '@tabler/icons-react'

const coins = [
  { icon: IconCurrencyBitcoin },
  { icon: IconCurrencyEthereum },
  { icon: IconCurrencyDogecoin },
  { icon: IconCurrencyXrp },
  { icon: IconCurrencySolana }
]

export default function Coins() {
  return (
    <section className='mt-24'>
      <h2 className='text-center text-muted-foreground'>Supported Coins</h2>
      <div className='flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap'>
        {coins.map((coin, index) => {
          const Icon = coin.icon
          return (
            <div key={index} className='p-4 hover:scale-105 transition-transform cursor-pointer'>
              <Icon className='w-8 h-8' />
            </div>
          )
        })}
      </div>
    </section>
  )
}
