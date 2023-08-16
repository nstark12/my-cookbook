const form = document.querySelector('form')
const nameInput = document.querySelector('[name="name"]')
const categoryInput = document.querySelector('[name="category"]')
const allergensInput = document.querySelector('[name="allergens"]')
const yieldInput = document.querySelector('[name="yield"]')
const descriptionInput = document.querySelector('[name="description"]')
const prepInput = document.querySelector('[name="prep-time"]')
const cookInput = document.querySelector('[name="cook-time"]')
const totalInput = document.querySelector('[name="total-time"]')
const ingredientsInput = document.querySelector('[name="ingredients"]')
const instructionsInput = document.querySelector('[name="instructions"]')
const notesInput = document.querySelector('[name="notes"]')
const caloriesInput = document.querySelector('[name="calories"]')
const fatInput = document.querySelector('[name="fat"]')
const carbsInput = document.querySelector('[name="carbs"]')
const proteinInput = document.querySelector('[name="protein"]')

console.log(fatInput)

const handleSubmit = e => {
    e.preventDefault()


const newRecipe = {
    name: nameInput.value,
    category: categoryInput.value,
    allergens: allergensInput.value,
    yield: yieldInput.value,
    description: descriptionInput.value,
    'prep-time': prepInput.value,
    'cook-time': cookInput.value,
    'total-time': totalInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value,
    notes: notesInput.value,
    calories: caloriesInput.value,
    fat: fatInput.value,
    carbs: carbsInput.value,
    protein: proteinInput.value,
}

fetch('/api/add-recipe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRecipe)
})
    .then(response => {
        if (response.status === 201) {
            window.location.assign('/')
        }
    })
    .catch(err => console.log(err))

    console.log(newRecipe)
}
  

form.addEventListener('submit', handleSubmit)