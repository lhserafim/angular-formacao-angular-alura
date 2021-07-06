import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
    const valor = control.value as string; // Fiz o cast para string para o TS entender e habilitar o autocomplete
    if (valor !== valor.toLowerCase()) {
        return { minusculo: true }; // este atributo deste objeto (minusculo) é o que será passado no template
    } else {
        return null;
    }
}