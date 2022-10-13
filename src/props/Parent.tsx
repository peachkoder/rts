import {ChildAsFC} from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    dfwfwefw
    </ChildAsFC>
}

export default Parent;