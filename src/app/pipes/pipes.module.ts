import { NgModule } from "@angular/core";
import { FiltroPersonajesPipe } from "./filtro-personajes.pipe";

@NgModule ({
    declarations:[
        FiltroPersonajesPipe
    ],
    imports:[
        
    ],
    exports:[
        FiltroPersonajesPipe,
    ]
})

export class PipesModule {}