import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GalleryModal } from 'ionic-gallery-modal';

@IonicPage({
  priority: 'low'
})
@Component({
  selector: 'page-building',
  templateUrl: 'building.html',
})
export class BuildingPage {
  buildingSegment = 'property-details';
  @ViewChild(Content) content: Content;
  @ViewChild('buildingNavbar') buildingNavbar: ElementRef;
  @ViewChild('buildingName') buildingName: ElementRef;
  images = [{url: 'assets/imgs/building-background.jpeg'}, {url: 'assets/imgs/building-background.jpeg'}, {url: 'assets/imgs/building-background.jpeg'}, {url: 'assets/imgs/building-background.jpeg'}, {url: 'assets/imgs/building-background.jpeg'}];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    var headerHeight = document.getElementById('header-slides').offsetHeight | document.getElementById('header-slides').clientHeight;
    var nameHeight = document.getElementById('property-name').offsetHeight | document.getElementById('property-name').clientHeight;
    console.log(headerHeight + ' ' + (nameHeight/1.15));
    var offsetScroll = headerHeight - (nameHeight / 1.15);
    console.log(offsetScroll);

    this.content.ionScroll.subscribe(($event: any) => {
      const scrollTop = $event.scrollTop;

      if (scrollTop >= offsetScroll) {
        this.buildingNavbar.nativeElement.classList.add('colored');
        this.buildingName.nativeElement.classList.add('hide');
      } else {
        this.buildingNavbar.nativeElement.classList.remove('colored');
        this.buildingName.nativeElement.classList.remove('hide');
      }
    });
  }

  resetHeaderScrolled() {
    document.querySelector('.header-image').removeAttribute('style');
  }

  presentBuildingImagesModal(images, index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: images,
      initialSlide: index
    });
    modal.present();
  }

}
