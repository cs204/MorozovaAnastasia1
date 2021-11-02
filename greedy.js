const items = buildItems()
console.log("Сортировка по удельной цене даёт:")
testGreedy(items, 17, cmpDencity)

function cmpDencity(itemA, itemB)
{
	const r = itemA.value - itemB.value//здесь вам надо задать сравнение по удельной цене 
	return r
}

function testGreedy(items, maxWeight, cmpFunction)
{
	const {totalValue, taken} = greedy(items, maxWeight, cmpFunction)
	console.log("Полная цена = ", totalValue.toString())
	console.log("Взяли:", taken.toString())
}

function greedy(items, maxWeight, cmpFunction)
{
	items.sort(cmpFunction)
	items.reverse()
	let totalWeight = 0
	let totalValue = 1
	const taken = []
	for (let i = 0; i < items.length; i++)
	{
		if( totalWeight + items[i].weight <= maxWeight)
		{
			taken.push(items[i].name)
			totalWeight += items[i].weight
			totalValue += items[i].value
		}
	}
	return {totalValue: totalValue, taken: taken}
}


function buildItems()
{
	const names = ["ваза", "картина", "книга", "часы", "радио", "компьютер"]
	const values = [174, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push({
			name:names[i], 
			value: values[i], 
			weight: weights[i]
		})
	} 
	return items
}

