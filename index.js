const express = require('express');
const { initializeDatabase } = require('./db/db.connection');
const { Exercise } = require('./models/exercise')
const { Food } = require('./models/food')
const { Goal } = require('./models/goal')

initializeDatabase();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

//////////////////////////////////////
// Exercises

////////// 
// Fetch Exercise
const fetchExercises = async () => {
    try {
        const allExercises = await Exercise.find();
        return allExercises;
    } catch (error) {
        throw error
    }
}


app.get('/api/exercises', async (req, res) => {
    try {
        const allExercises = await fetchExercises()
        res.json(allExercises)
    } catch (error) {
        res.status(404).json({ error: 'Could not fetch Exercises' })
    }
})

////////// 
// Add New Exercise
const addExercise = async (exerciseData) => {
    try {
        const exercise = new Exercise(exerciseData);
        const savedExercise = await exercise.save()
        return savedExercise;
    } catch (error) {
        throw error;
    }
}

app.post('/api/exercises', async (req, res) => {
    try {
        const savedExercise = await addExercise(req.body)
        res.status(201).json({ message: 'Exercise added', exercise: savedExercise })
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Exercise' })
    }
})

////////// 
// Delete An Exercise
const deleteExercise = async (exerciseId) => {
    try {
        await Exercise.findByIdAndDelete(exerciseId)
    } catch (error) {
        throw error
    }
}

app.delete('/api/exercises/:exerciseId', async (req, res) => {
    try {
        const deletedExercise = await deleteExercise(req.params.exerciseId)
        if (deletedExercise) {
            res.status(204).json({ message: 'Exercise deleted' })
        } else {
            res.status(404).json({ error: 'Exercise not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete exercise' })
    }
})

//////////////////////////////////////
// Food

////////// 
// Fetch Food
const fetchFoods = async () => {
    try {
        const allFoods = await Food.find();
        return allFoods;
    } catch (error) {
        throw error
    }
}


app.get('/api/food', async (req, res) => {
    try {
        const allFoods = await fetchFoods()
        res.json(allFoods)
    } catch (error) {
        res.status(404).json({ error: 'Could not fetch Foods' })
    }
})

////////// 
// Add New Food
const addFood = async (foodData) => {
    try {
        const food = new Food(foodData);
        const savedFood = await food.save()
        return savedFood;
    } catch (error) {
        throw error;
    }
}

app.post('/api/food', async (req, res) => {
    try {
        const savedFood = await addFood(req.body)
        res.status(201).json({ message: 'Food added', exercise: savedFood })
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Food' })
    }
})

////////// 
// Delete a Food
const deleteFood = async (foodId) => {
    try {
        await Food.findByIdAndDelete(foodId)
    } catch (error) {
        throw error
    }
}

app.delete('/api/food/:foodId', async (req, res) => {
    try {
        const deletedFood = await deleteFood(req.params.foodId)
        if (deletedFood) {
            res.status(204).json({ message: 'Food deleted' })
        } else {
            res.status(404).json({ error: 'Food not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Food' })
    }
})


//////////////////////////////////////
// Goals

////////// 
// Fetch Goals
const fetchGoals = async () => {
    try {
        const allGoals = await Goal.find();
        return allGoals;
    } catch (error) {
        throw error
    }
}


app.get('/api/goals', async (req, res) => {
    try {
        const allGoals = await fetchGoals()
        res.json(allGoals)
    } catch (error) {
        res.status(404).json({ error: 'Could not fetch Goals' })
    }
})

////////// 
// Add New Goal
const addGoal = async (goalData) => {
    try {
        const goal = new Goal(goalData);
        const savedGoal = await goal.save()
        return savedGoal;
    } catch (error) {
        throw error;
    }
}

app.post('/api/goals', async (req, res) => {
    try {
        const savedGoal = await addGoal(req.body)
        res.status(201).json({ message: 'Goal added', exercise: savedGoal })
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Goal' })
    }
})

////////// 
// Delete a Goal
const deleteGoal = async (goalId) => {
    try {
        await Goal.findByIdAndDelete(goalId)
    } catch (error) {
        throw error
    }
}

app.delete('/api/goals/:goalId', async (req, res) => {
    try {
        const deletedGoal = await deleteGoal(req.params.goalId)
        if (deletedGoal) {
            res.status(204).json({ message: 'Goal deleted' })
        } else {
            res.status(404).json({ error: 'Goal not found' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete goal' })
    }
})






