describe('[e2e] >> Action ', function () {

    describe('Contact Home Page Action ', function () {

        beforeEach(function () {
            browser.get('contact');
        });

        it('enter the [5] in search textbox', function () {
            var list = element.all(by.repeater('user in $ctrl.userlist'));
            var query = element(by.model('$ctrl.search'));

            expect(list.count()).toBe(8);

            query.sendKeys('7');
            expect(list.count()).toBe(2);


        });



        it('test select box', function () {
            var namecol = element.all(by.repeater('user in $ctrl.userlist').column('user.name'));
            var query = element(by.model('$ctrl.search'));
            var name_order = element(by.model('$ctrl.orderProp')).element(by.css('option[value="name"]'));
            var no_order = element(by.model('$ctrl.orderProp')).element(by.css('option[value="no"]'));

            function getNames() {
                return namecol.map(function (item) {
                    return item.getText();
                });
            }


            name_order.click();

            expect(getNames()).toEqual([
                'Choromatsu',
                'Ichimatsu',
                'Jushimatsu',
                'Kamimatsu',
                'Karamatsu',
                'Osomatsu',
                'Todomatsu',
                'Totoko'
            ]);

            no_order.click();

            expect(getNames()).toEqual([
                'Osomatsu',
                'Karamatsu',
                'Choromatsu',
                'Ichimatsu',
                'Jushimatsu',
                'Todomatsu',
                'Kamimatsu',
                'Totoko'
         
            ]);

        });



        it('should render specific links', function () {
            //var query = element(by.model('$ctrl.search'));
            //query.sendKeys('01');

            element.all(by.css('.userlist tr td a')).first().click();
            expect(browser.getLocationAbsUrl()).toBe('/detail/01');
            // expect(browser.getCurrentUrl()).toBe('/detail/01');
        });

    });

    describe('Detail Page Action ', function () {


        beforeEach(function () {
            browser.get('contact#!/detail/06');
        });

        it('should display placeholder page with user no.', function () {
            expect(element(by.binding('$ctrl.user.no')).getText()).toBe('06')
        });

        it('should swap the main image when clicking on a thumbnail image.', function () {
           // var mainimg = element.all(by.id('main-image'));
            var mainimg = element(by.css('img.main-image'));
            expect(mainimg.getAttribute('src')).toMatch(/images\/06.png/);

            var thumbnails = element.all(by.css('.images-thumbs img'));
            thumbnails.get(1).click();
            expect(mainimg.getAttribute('src')).toMatch(/images\/06_02.png/);

            thumbnails.get(0).click();
            expect(mainimg.getAttribute('src')).toMatch(/images\/06.png/);
           // expect(/mainimg.getAttribute('src')/).toMatch(/images\/06.png/);

        });

    });


});