import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{
  path:'home' ,component:HomeComponent ,title:'Home'
},
{
  path:'' ,redirectTo:'home' ,pathMatch:'full'
},
{
  path:'about' ,component:AboutComponent,title:'About'
},
{
  path:'portfolio', component:PortfolioComponent ,title:'Portfolio'
},
{
  path:'contact' ,component:ContactComponent ,title :'contact'

},
{
  path:'**' ,component:NotfoundComponent ,title:'Not-found'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   scrollPositionRestoration: "enabled"
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
