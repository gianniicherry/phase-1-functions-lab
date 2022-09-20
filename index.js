let hq = 42

function distanceFromHqInBlocks(bstart){
  if(bstart > hq)
  return bstart - hq
  else if(hq > bstart)
  return hq - bstart
}
function distanceFromHqInFeet(cstart){
  if(cstart > hq)
  return(cstart - hq)*264
  else if(hq > cstart)
  return (hq - cstart)*264
}
function distanceTravelledInFeet(start,destination) {
  if((start > destination)*264)
return ((start - destination)*264)
else if((destination > start)*264)
return((destination-start)*264)
}

function calculatesFarePrice(start,destination) {
  const feetTravelled = distanceTravelledInFeet(start,destination)
   if(feetTravelled < 400)
   return 0
   else if(feetTravelled > 400 && feetTravelled <=2000)
   return 0.02*(feetTravelled - 400)
   else if(feetTravelled > 2000 && feetTravelled <=2500)
   return 25
   else if(feetTravelled > 2500)
   return 'cannot travel that far'
}