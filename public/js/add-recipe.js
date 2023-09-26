const form = document.querySelector('form')
const recipeId = document.getElementById('recipe-id')
const nameInput = document.querySelector('[name="name"]')
const categoryInput = document.querySelector('[name="category"]')
const allergensInput = document.querySelector('[name="allergens"]')
const yieldInput = document.querySelector('[name="yield"]')
const descriptionInput = document.querySelector('[name="description"]')
const prepInput = document.querySelector('[name="preptime"]')
const cookInput = document.querySelector('[name="cooktime"]')
const totalInput = document.querySelector('[name="totaltime"]')
const ingredientsInput = document.querySelector('[name="ingredients"]')
const instructionsInput = document.querySelector('[name="instructions"]')
const notesInput = document.querySelector('[name="notes"]')
const caloriesInput = document.querySelector('[name="calories"]')
const fatInput = document.querySelector('[name="fat"]')
const carbsInput = document.querySelector('[name="carbs"]')
const proteinInput = document.querySelector('[name="protein"]')
const ingredientBtn = document.getElementById('add-ingredient')
const instructionBtn = document.getElementById('add-instruction')
const ingredientDiv = document.querySelector('.ingredients')
const instructionDiv = document.querySelector('.instructions')

ingredientBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const newIngredient = document.createElement('input')
    let deleteBtn = document.createElement('button')

    newIngredient.setAttribute('type', 'text')
    newIngredient.classList.add('ingredientName')

    deleteBtn.textContent = 'Remove Ingredient'
    deleteBtn.classList.add('add-ingredient')
    
    ingredientDiv.appendChild(newIngredient)
    ingredientDiv.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        ingredientDiv.removeChild(newIngredient)
        ingredientDiv.removeChild(deleteBtn)
    })
})

instructionBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const newInstruction = document.createElement('input')
    let deleteBtn = document.createElement('button')

    newInstruction.setAttribute('type', 'text')
    newInstruction.classList.add('step')

    deleteBtn.textContent = 'Remove Step'
    deleteBtn.classList.add('add-ingredient')
    
    instructionDiv.appendChild(newInstruction)
    instructionDiv.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        instructionDiv.removeChild(newInstruction)
        instructionDiv.removeChild(deleteBtn)
    })
})



const handleSubmit = e => {
    e.preventDefault()

 
    const newIngredientInputs = document.querySelectorAll('.ingredientName')
    const ingredients = []
    let index = 0
    for (const newIngredientInput of newIngredientInputs) {
        ingredients.push({
            ingredientNumber: index + 1,
            ingredientName: newIngredientInput.value
        })
        index++
    }

    const newInstructionInputs = document.querySelectorAll('.step')
    const instructions = []
    index = 0
    for (const newInstructionInput of newInstructionInputs) {
        instructions.push({
            stepNumber: index + 1,
            stepText: newInstructionInput.value
        })
        index++
    }

    console.log(newIngredientInputs, newInstructionInputs)


const newRecipe = {
    recipe_id: recipeId.value,
    name: nameInput.value,
    category: categoryInput.value,
    allergens: allergensInput.value,
    yield: yieldInput.value,
    description: descriptionInput.value,
    preptime: prepInput.value,
    cooktime: cookInput.value,
    totaltime: totalInput.value,
    ingredients,
    instructions,
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
            window.location.assign('/recipe-book')
            document.location.replace('/recipe-book')
        }
    })
    .catch(err => console.log(err))

    // console.log(newRecipe)
}


form.addEventListener('submit', handleSubmit)