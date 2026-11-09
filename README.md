# Cotizador de Préstamos

Aplicación web desarrollada con React + Vite para calcular de forma rápida y visual el costo de un préstamo según el monto solicitado, la tasa de interés y el plazo de pago.

La app permite estimar la cuota mensual, el total a pagar y el interés generado, ayudando al usuario a comparar distintas opciones de financiamiento antes de tomar una decisión.

## Descripción del proyecto

Este proyecto es un cotizador de préstamos diseñado para facilitar la simulación de financiamientos. Su objetivo es brindar una experiencia simple, clara y útil para cualquier persona que quiera conocer aproximadamente cuánto pagará por un préstamo.

La aplicación toma en cuenta:

- Monto del préstamo
- Tasa de interés
- Plazo de pago
- Resultado mensual estimado
- Total de intereses
- Total final a pagar

## Características principales

- Cálculo automático de la cuota mensual
- Visualización del total a pagar
- Cálculo del interés total generado
- Ajuste dinámico según cambios en monto, tasa y plazo
- Diseño responsivo para desktop y mobile
- Interfaz moderna y amigable
- Implementación con React para una experiencia más rápida
- Desarrollo basado en Vite para un entorno ligero y eficiente

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- Node.js

## Objetivo

El objetivo principal de esta app es permitir al usuario:

- Simular préstamos
- Comparar diferentes escenarios
- Entender cuánto pagará realmente
- Tomar decisiones financieras con mayor información

## Cómo funciona

La aplicación recibe tres datos principales:

1. Monto solicitado
2. Tasa de interés anual
3. Número de cuotas o plazo

Con estos valores, calcula la cuota mensual utilizando la fórmula estándar de amortización de préstamos:

Cuota = (capital × tasa) / (1 - (1 + tasa)^-n)

Donde:

- capital: monto del préstamo
- tasa: tasa de interés aplicada por periodo
- n: número total de cuotas

La interfaz actualiza automáticamente los resultados cada vez que el usuario modifica cualquier valor.

## Requisitos previos

Antes de iniciar el proyecto asegúrate de tener instalado:

- Node.js v18 o superior
- npm o yarn

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/wjuma19dev2026-wq/cotizador-prestamo-react.git
```
