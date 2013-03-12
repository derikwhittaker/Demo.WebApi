/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

class ModelBindingViewModel {

    public FirstName: KnockoutObservableString = ko.observable("Demo");
    public LastName: KnockoutObservableString = ko.observable("Dude");

    bindingPut() {
        var url = "http://localhost:49587/api/Awesome/ModelBinding";

        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName()
        };

        $.post(url, model)
            .done(results => {
                
            });
    }
}