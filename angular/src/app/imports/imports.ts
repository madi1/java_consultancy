import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-imports',
  imports: [NgFor],
  templateUrl: './imports.html',
  styleUrl: './imports.css',
})
export class Imports {
  readonly imports = [
    {
      title: 'Software and Hardware Imports',
      detail: 'Importing of High Tech Software, Hardware and Cyber Security Solutions.',
    },
    {
      title: 'Engineering Machinery Imports',
      detail: 'Importing of Bulldozers, Excavators, and other heavy machinery.',
    },
    {
      title: 'Material Imports',
      detail: 'Importing of building materials.',
    },
    {
      title: 'General Imports',
      detail: 'Importing of various products or services.',
    },
  ];
}
