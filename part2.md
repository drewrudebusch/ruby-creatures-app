# The South Lake Union Bog - Part 2

* Finish bog tags (as done in class)
* Create tags CRUD
  * tags#index
    * lists all tags
    * each tag clickable (list creatures, as done in class)
    * delete button for each
  * tags#new
    * Add tag form
  * tags#create
    * creates a tag
  * tag#destroy
    * deletes a tag
    * Check if tag is in use and display error to user like: "cannot delete this tag because there are X creatures using it"


##Bonus

###Allow delete of tag in use

Make `tag#destroy` warn the user that the tag is in use, but allow them to delete it anyways: "There are X creatures using this tag. Are you sure you want to delete this tag? y/n"

Then remove the tag from each creature before deleting the tag.

###Create tag cloud

It's a tag cloud. Make one. Don't know what a tag cloud is? [try google](http://bit.ly/smNic6).

###Support tag creation from `creature#edit`

The user should be able to tag a creature as anything. If the tag already exists it should not be duplicated and just be associated. If the tag doesn't exist it should be created and associated.

**Implementation Options**

* Text field: "tag1, tag2, tag3"
* Type ahead / auto complete
    * [http://timschlechter.github.io/bootstrap-tagsinput/examples/](http://timschlechter.github.io/bootstrap-tagsinput/examples/)
