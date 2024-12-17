export const discounts = [
    {
      code: 'XWY10',
      value: 10,
    },
    {
      code: 'XWY15',
      value: 15,
    },
    {
      code: 'XWY20',
      value: 20,
    },
    {
      code: 'XWY25',
      value: 25,
    },
    {
      code: 'XWY30',
      value: 30,
    },
    {
      code: 'XWY35',
      value: 35,
    },
    {
      code: 'XWY40',
      value: 40,
    },
    {
      code: 'XWY50',
      value: 50,
    },
  ];

  export const findDiscountbyCode = (code) => {
    return discounts.find((discount) => discount.code === code)
  }