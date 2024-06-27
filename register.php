<?php
  // Get the form data
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Validate the form data
  if (empty($username) || empty($email) || empty($password)) {
    echo 'Please fill in all fields';
    exit;
  }