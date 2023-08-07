


const useQueryHook = async () =>  {
  const productData = await fetch("data.json", {
   headers: {
     "Content-Type": "application/json",
     Accept: "application/json",
   },
 }).then((response) => (response?.json()
 )).then((data) => {
return data;
 })
return productData
}

export default useQueryHook