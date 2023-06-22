import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
    afterModel(){
        document.title = "Contact Page";
    }
}
