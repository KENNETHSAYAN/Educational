import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ProgressBarAndroid } from 'react-native';

const questions = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
    options: ['London', 'Paris', 'Berlin'], // Array of choices for this question
  },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
    options: ['Mars', 'Jupiter', 'Venus'],
  },
  {
    question: 'What is the formula for water?',
    answer: 'H2O',
    options: ['CO2', 'H2O', 'NH3'],
  },
];

const Explorer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0); // State for progress bar

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setProgress((currentQuestion + 1) / questions.length); // Update progress on answer
  };

  return (
    <View style={styles.container}>
      <ProgressBarAndroid
        styleAttr="Horizontal" // Use horizontal progress bar
        progress={progress} // Set progress based on current question
        color="#007bff" // Customize progress bar color (optional)
      />
      {currentQuestion < questions.length ? (
        <>
          <Text style={styles.question}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <View key={index} style={styles.choiceBox}>
              <Button
                title={option}
                onPress={() => handleAnswer(option)}
                style={styles.button} // Apply button styles to inner button
              />
            </View>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.result}>You scored {score} out of {questions.length}</Text>
          <Button title="Restart Quiz" onPress={() => {setCurrentQuestion(0); setScore(0); setProgress(0);}} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 15,
  },
  result: {
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    flex: 1, // Make button fill the choice box
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 5, // Add vertical padding
    backgroundColor: '#eee', // Set button background color (optional)
  },
  choiceBox: {
    marginBottom: 3,
    width:100,
    
    borderRadius: 5, // Add border radius for rounded corners
    borderWidth: 1, // Add border
    borderColor: '#ccc', // Set border color
  },
});

export default Explorer;