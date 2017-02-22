'use strict';


const gifteeList = require ('../templates/gifteelist.handlebars');
const ideasList = require('../templates/ideaslist.handlebars');

const displayGifteesForUser = (data) => {
  const events = require('../session/events.js');

// TODO: Style the gifteelist.handlebars on the left column on the name pickers (padding, size, etc)
  let html = gifteeList({people: data.giftees});
  $('.giftees-lister').append(html);

  $('.giftee-selectable').click(function() {
      let id = this.getAttribute('data-id');
      events.selectedGiftee(id)
  });
};

const displayDetailsForGiftee = (data) => {
  $('#notesGeneralInput').val(data.notes.general);
  $('#notesFavoritesInput').val(data.notes.favorites);
  $('#notesSizesInput').val(data.notes.sizes);

// TODO: Style the ideaslist on the right column on the ideas (padding, size, etc), delete button, etc
  let html = ideasList({ideas: data.ideas});
  $('.pending-ideas-holder').empty();
  $('.pending-ideas-holder').append(html);
}

module.exports = {
  displayGifteesForUser,
  displayDetailsForGiftee
};