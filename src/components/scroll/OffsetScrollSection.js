const OffsetScrollSection = ({offset, scrollRange, children}) => {
  return (
    <group position={[offset[0],offset[1],-offset[2]]}>
      {children}
    </group>
  )
}

export default OffsetScrollSection