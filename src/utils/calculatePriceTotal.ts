const calculatePriceTotal = (price: number, quantity: number) => {
	return (Number(price) * quantity).toFixed(2)
}
export default calculatePriceTotal
