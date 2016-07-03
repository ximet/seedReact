import dataService from './dataService';

export default class dataServiceFactory {

    createDataService(dataUrl) {
        return dataService.getInstance(dataUrl);
    }

}
