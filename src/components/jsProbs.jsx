import React from 'react'

function jsProbs() {
  return (
    <div>
      <header>
        <h1>JS Practice</h1>
      </header>
      <section>
        <div>
          <h3>Problem: 1</h3>{' '}
          <h4>
            Consider an array/list of sheep where some sheep may be missing from
            their place. We need a function that counts the number of sheep
            present in the array (true means present). For example, [true, true,
            true, false, true, true, true, true , true, false, true, false,
            true, false, false, true , true, true, true, true , false, false,
            true, true] The correct answer would be 17. Hint: Don't forget to
            check for bad values like null/undefined
          </h4>
          <h4>
            Answer:{' '}
            {/*countSheeps \([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true \]);
  
  function countSheeps (arrayOfSheep) {
    var sheepCounter = 0;
    for( var i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]=== true) {
        sheepCounter++;
      }
    }
    return sheepCounter;
  } */}
          </h4>
        </div>
        <div>
          <h3>Problem: 2</h3> <h4>text</h4>
        </div>
        <div>
          <h3>Problem: 3</h3> <h4>text</h4>
        </div>
        <div>
          <h3>Problem: 4</h3> <h4>text</h4>
        </div>
      </section>
    </div>
  )
}
export default jsProbs
