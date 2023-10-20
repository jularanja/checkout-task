import { createContext, ReactNode, useContext } from "react"
import { ShoppingBasket } from "../components/ShoppingBasket"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingBasketProviderProps = {
  children: ReactNode
}

type BasketItem = {
  id: number
  quantity: number
}

type ShoppingBasketContext = {
  getItemQuantity: (id: number) => number
  increaseBasketQuantity: (id: number) => void
  decreaseBasketQuantity: (id: number) => void
  removeFromBasket: (id: number) => void
  BasketQuantity: number
  BasketItems: BasketItem[]
}



const ShoppingBasketContext = createContext({} as ShoppingBasketContext)

export function useShoppingBasket() {
  return useContext(ShoppingBasketContext)
}
export function ShoppingBasketProvider({ children }: ShoppingBasketProviderProps) {

  const [BasketItems, setBasketItems] = useLocalStorage<BasketItem[]>(
    "shopping-Basket",
    []
  )

  const BasketQuantity = BasketItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  function getItemQuantity(id: number) {
    return BasketItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseBasketQuantity(id: number) {
    setBasketItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }


    function decreaseBasketQuantity(id: number) {
      setBasketItems((currItems) => {
        const itemIndex = currItems.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
          if (currItems[itemIndex].quantity <= 1) {
            // Remove the item from the basket when quantity is less than or equal to 1.
            return currItems.filter((item) => item.id !== id);
          } else {
            // Decrease the quantity of the item by 1.
            currItems[itemIndex].quantity -= 1;
            return [...currItems];
          }
        }
        return currItems;
      });
    }
  function removeFromBasket(id: number) {
    setBasketItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingBasketContext.Provider
      value={{
        getItemQuantity,
        increaseBasketQuantity,
        decreaseBasketQuantity,
        removeFromBasket,
        BasketItems,
        BasketQuantity,
      }}
    >
      {children}
      <ShoppingBasket/>
    </ShoppingBasketContext.Provider>
  )
}