
// logs_SEGURO.dart
String mask(String input, {int visible = 4}) {
  if (input.length <= visible) return '*' * input.length;
  return '*' * (input.length - visible) + input.substring(input.length - visible);
}

void processPayment(String cardNumber) {
  // ✅ No imprimir CVV ni datos completos
  print("Procesando tarjeta: ${mask(cardNumber)}");
}
