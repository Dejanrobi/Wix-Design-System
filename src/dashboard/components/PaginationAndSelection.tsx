import React, { useState } from 'react'

const PaginationAndSelection = () => {

    const [selectedSecondTablePage,setSelectedSecondTablePage]=useState(1);

    const [selected, setSelected] = useState(1);

    const data = [
        {
          name: `Light grey hoodie`,
          SKU: '00224239',
          price: '$59.00',
          inventory: 'In stock',
        },
        {
          name: `Black watch`,
          SKU: '00352464',
          price: '$229.00',
          inventory: 'In stock',
        },
        {
          name: 'Reading glasses',
          SKU: '00486430',
          price: '$69.00',
          inventory: 'In stock',
        },
        {
          name: 'Leather shoes',
          SKU: '00515642',
          price: '$129.00',
          inventory: 'Out of stock',
        },
        {
          name: `Ceramic plant pots`,
          SKU: '00224239',
          price: '$19.00',
          inventory: 'In stock',
        },
        {
          name: `Black table lamp`,
          SKU: '00352464',
          price: '$119.00',
          inventory: 'In stock',
        },
        {
          name: 'Knitted scarf',
          SKU: '00486430',
          price: '$19.00',
          inventory: 'In stock',
        },
        {
          name: 'Home fragrance',
          SKU: '00515642',
          price: '$89.00',
          inventory: 'In stock',
        },
        {
          name: `Ceramic plant pots`,
          SKU: '00224239',
          price: '$19.00',
          inventory: 'In stock',
        },
        {
          name: `Black table lamp`,
          SKU: '00352464',
          price: '$119.00',
          inventory: 'In stock',
        },
        {
          name: 'Knitted scarf',
          SKU: '00486430',
          price: '$19.00',
          inventory: 'In stock',
        },
        {
          name: 'Home fragrance',
          SKU: '00515642',
          price: '$89.00',
          inventory: 'In stock',
        },
      ];
    


    // const records = Array.from(Array(12).keys)
    
  return (
    <div>PaginationAndSelection</div>
  )
}

export default PaginationAndSelection