import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Calendar, Users, Home, Edit } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  Calendar,
  Users,
  Home,
  Edit
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule {}
