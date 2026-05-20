function HEXtoRGB(h)
{
  let HEXtoRGBValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
  h = split(h,"")
  let r = (HEXtoRGBValues.indexOf(h[1])*16)+HEXtoRGBValues.indexOf(h[2])
  let g = (HEXtoRGBValues.indexOf(h[3])*16)+HEXtoRGBValues.indexOf(h[4])
  let b = (HEXtoRGBValues.indexOf(h[5])*16)+HEXtoRGBValues.indexOf(h[6])
  return [r,g,b]
}
