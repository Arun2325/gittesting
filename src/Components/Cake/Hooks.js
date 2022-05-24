import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { buyCake } from '../../Redux/Cakes/CakeActions'

export default function HookCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Num of Ice with Hooks{numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
