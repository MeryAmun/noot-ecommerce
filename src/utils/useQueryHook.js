


const useQueryHook = async () =>  {
   let productData = null
   await fetch("data.json", {
   headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
   },
 }).then((response) => (response?.json()
 )).then((data) => {
productData = data;
 })
return productData
}

export default useQueryHook