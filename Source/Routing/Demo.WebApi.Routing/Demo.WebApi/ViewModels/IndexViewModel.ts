/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

class IndexViewModel {
    
    public SimpleGetResult: KnockoutObservableString = ko.observable("Waiting on response...");

    simpleGet() {
        var url = "http://localhost:49587/api/Awesome/Status";
        $.get(url)
            .done(results => {
                this.SimpleGetResult(results);
            });
    }   
}

