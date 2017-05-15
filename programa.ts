class Programa {
	public nombre: string;
	public version: number;

	setNombre(nombre:string) {
		this.nombre = nombre;
	}

	setVersion(version:number) {
		this.version = version;
	}

	getNombre():string {
		return this.nombre;
	}

	getVersion():number {
		return this.version;
	}
}

class EditorVideo extends Programa {
	public timeline:number;

	setTimeline(timeline:number){
		this.timeline = timeline;
	}
	getTimeline():number{
		return this.timeline;
	}

	getAllData():string{
		return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeline();
	}
}


var editor = new EditorVideo();
editor.setNombre('Sony Vegas');
editor.setVersion(8);
editor.setTimeline(4000);

console.log('Mi programa: ' + editor.getAllData());