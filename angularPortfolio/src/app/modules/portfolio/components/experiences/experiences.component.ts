import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Programador Full-Stack",
        p: "Comunhão Espírita | Jun 2023 - Presente",
      },
      text: "<p> Trabalho como desenvolvedor Full-Stack em um sistema Hospitalar de grande porte</p><p>focado em Laravel 10, Boostrap 5 e outras tecnologias.</p>",
    },
    {
      summary: {
        strong: "Técnico em Suporte e Redes",
        p: "Comunhão Espírita | Jun 2023 - Presente",
      },
      text: "<p>Faço suporte nível 2 focado em manuntenção e solução de problemas em rápida velocidade</p><p>Além de admnistrar a rede de dados e suas partições.</p>",
    },
    {
      summary: {
        strong: "Professor de Inglês",
        p: "Autônomo | Ago 2020 - Jun 2022",
      },
      text: "<p>Ao desevolver a capacidade de lecionar a lingua inglesa fui capaz de criar habilidades úteis</p><p>como uma boa oratória e facilidade com o trabalho em equipe.</p>",
    },
  ])
}
