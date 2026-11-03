import Section from '../components/Section'

const Result = ({fibre}:{fibre:string}) => {
  return (
    <Section>
        <p className='font-semibold text-brand-dark'>Recommended daily fibre intake</p>
        <div className='w-full flex items-center justify-center bg-linear-to-br from-brand-tint to-accent-tint p-12 rounded-2xl my-3'>
            <h1 className='text-8xl font-display font-extrabold text-brand-dark'>{fibre}g</h1>
        </div>
        {Number(fibre) > 0 &&  <p className='text-sm text-brand-dark/70'>Based on Dietary Guidelines for Americans 2020–2025</p>}
       
    </Section>
  )
}

export default Result
