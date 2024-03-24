#include <NewPing.h> // Library for ultrasonic sensor

#define TRIGGER_PIN 9       // Ultrasonic sensor's trigger pin
#define ECHO_PIN 10         // Ultrasonic sensor's echo pin
#define MAX_DISTANCE 50    // Maximum distance for ultrasonic sensor in cm
#define TOUCH_SENSOR_PIN 2  // Pin for capacitive touch sensor
#define MIC_PIN A0          // Microphone's analog pin
#define LED_GREEN 7        // Pin for green LED
#define LED_RED 6          // Pin for red LED

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  Serial.begin(9600);
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_RED, OUTPUT);
  pinMode(TOUCH_SENSOR_PIN, INPUT);
}

void loop() {
  bool touchAuthenticated = false;
  bool voiceAuthenticated = false;
  bool presenceDetected = false;

  // Step 1: Ultrasonic Sensor - Presence Detection
  Serial.println("Please step infront of the sensor.");
  int presence = sonar.ping_cm();
  if (presence > 0 && presence < MAX_DISTANCE) {
    Serial.println("Presence detected. Please provide touch.");

    presenceDetected = true;

    // Step 2: Capacitive Touch Sensor - Touch Authentication
    touchAuthenticated = authenticateTouch();
    if (touchAuthenticated) {
      Serial.println("Touch authentication successful.");
      digitalWrite(LED_GREEN, HIGH); // Turn on green LED for successful touch authentication
      delay(1000); // Keep the LED on for 1 second
      digitalWrite(LED_GREEN, LOW); // Turn off green LED
    } else {
      Serial.println("Touch authentication failed.");
      digitalWrite(LED_RED, HIGH); // Turn on red LED for failed touch authentication
      delay(1000); // Keep the LED on for 1 second
      digitalWrite(LED_RED, LOW); // Turn off red LED
    }

    // Step 3: Microphone - Voice Authentication
    if (touchAuthenticated) {
      voiceAuthenticated = authenticateVoice();
      if (voiceAuthenticated) {
        delay(1000);
        Serial.println("Voice authentication successful.");
        digitalWrite(LED_GREEN, HIGH); // Turn on green LED for successful voice authentication
        delay(1000); // Keep the LED on for 1 second
        digitalWrite(LED_GREEN, LOW); // Turn off green LED
      } else {
        Serial.println("Voice authentication failed.");
        digitalWrite(LED_RED, HIGH); // Turn on red LED for failed voice authentication
        delay(1000); // Keep the LED on for 1 second
        digitalWrite(LED_RED, LOW); // Turn off red LED
      }
    }
  }

  // If all three authentications are successful, blink green LED three times
  if (presenceDetected && touchAuthenticated && voiceAuthenticated) {
    for (int i = 0; i < 3; i++) {
      digitalWrite(LED_GREEN, HIGH);
      delay(500);
      digitalWrite(LED_GREEN, LOW);
      delay(500);
    }
    exit(0);
  }

  delay(1000);
}

bool authenticateTouch() {
  unsigned long startTime = millis(); // Record the start time
  while (millis() - startTime < 5000) { // Check if 5 seconds have elapsed
    int sensorVal = digitalRead(TOUCH_SENSOR_PIN);
    if (sensorVal == HIGH) {
      return true; // Touch detected, authentication succeeds
    }
  }
  return false; // Timeout reached, authentication fails
}

bool authenticateVoice() {
  unsigned long startTime = millis(); // Record the start time
  int sensorValue = 0;
  int mn = 1024;
  int mx = 0;
  int delta = 0;

  while (millis() - startTime < 5000) { // Check if 5 seconds have elapsed
    for (int i = 0; i < 100; ++i) {
      sensorValue = analogRead(MIC_PIN);
      mn = min(mn, sensorValue);
      mx = max(mx, sensorValue);
    }

    delta = mx - mn;
    
    if (delta > 2) {
      return true; // Sound detected, authentication succeeds
    }
  }
  return false; // Timeout reached, authentication fails
}