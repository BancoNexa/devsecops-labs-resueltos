
// validacion_SEGURO.dart
bool isValidUsername(String username) {
  // ✅ 4-16, alfanumérico y guión bajo
  final re = RegExp(r'^[a-zA-Z0-9_]{4,16}$');
  return re.hasMatch(username);
}

bool isValidPassword(String password) {
  // ✅ 8-64, mezcla de mayúsculas, minúsculas, dígitos
  final re = RegExp(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,64}$');
  return re.hasMatch(password);
}

bool login(String username, String password) {
  if (!isValidUsername(username) || !isValidPassword(password)) return false;
  // Autenticación real se delega a backend con MFA/JWT
  return true;
}
