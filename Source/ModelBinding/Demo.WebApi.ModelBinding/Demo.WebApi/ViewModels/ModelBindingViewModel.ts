/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

class ModelBindingViewModel {

    public FirstName: KnockoutObservableString = ko.observable("Demo");
    public MiddleName: KnockoutObservableString = ko.observable("-- Middle --");
    public LastName: KnockoutObservableString = ko.observable("Dude");
    public FullName: KnockoutObservableString = ko.observable("");

    bindingPut() {
        var url = "http://localhost:49587/api/Awesome/ModelBinding";

        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName()
        };

        $.post(url, model)
            .done(results => {
                this.FullName(results);
            });
    }

    overBindingPut() {
        var url = "http://localhost:49587/api/Awesome/OverModelBinding";

        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName(),
            MiddleName: this.MiddleName()
        };

        $.post(url, model)
            .done(results => {
                this.FullName(results);
            });
    }


    validationBindingPut() {
        var url = "http://localhost:49587/api/Awesome/ValidationModelBinding";

        var model = {
            FirstName: this.FirstName(),
            LastName: this.LastName(),
            Age: 101
        };

        $.post(url, model)
            .done(results => {
                this.FullName(results);
            })
            .fail(results => {
                var x = results;
            })
            ;
    }
}