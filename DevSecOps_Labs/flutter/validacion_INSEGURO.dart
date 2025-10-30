
// validacion_INSEGURO.dart
bool login(String username, String password) {
  // ❌ Sin validación mínima
  if (username == "admin") return true;
  return false;
}
