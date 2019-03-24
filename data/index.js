
const tagSchema = {
  id: 0,
  text: 'Tag',
};

const categorySchema = {
  id: 0,
  text: 'Category',
};

const textContentSchema = {
  id: 1,
  content: ` Cras non velit consequat, bibendum magna eget, consequat mi. Nulla volutpat, ante et posuere tincidunt, ipsum urna mollis est, ut tincidunt dui sapien posuere sem. Mauris cursus ante quam, ut dapibus mi fermentum ut. Sed ac varius massa, in sodales sapien. Ut quis purus lectus. Etiam feugiat mollis lacus, id ullamcorper urna mattis id. Duis tincidunt quam quis sagittis dapibus. Phasellus pulvinar eget velit non mollis. Fusce at malesuada ligula. Vestibulum tempor laoreet arcu. Pellentesque ac eros id leo fringilla porttitor ac a sem. Curabitur pellentesque odio nulla, quis accumsan libero lacinia et. Etiam ac aliquet mi. Sed venenatis ipsum fermentum, mollis diam sit amet, ornare ex. Etiam eleifend varius gravida. Cras eu pharetra diam.

  Integer feugiat ipsum vel ultricies mollis. Phasellus sapien lorem, tempor sit amet aliquet sit amet, pretium sed mauris. Vestibulum ut condimentum nulla. Curabitur at pretium tellus. Nulla tincidunt facilisis diam. Duis convallis pretium lectus a luctus. Sed eget ligula fringilla, maximus urna non, faucibus purus. Suspendisse a ante molestie, posuere nisi vitae, mollis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean libero nulla, ultrices vel erat ac, faucibus vehicula turpis. Donec convallis congue tempor. Fusce ullamcorper ipsum eget mi ultricies, et ultricies tortor faucibus. Phasellus vehicula, nunc sit amet elementum interdum, est dolor convallis velit, at venenatis elit lorem sit amet turpis. Nulla at lacus at elit tincidunt blandit ut et ipsum. Proin at metus malesuada, ornare justo non, volutpat mi. `,
  updatedAt: new Date(),
  createdAt: new Date(),
};

const blogSchema = {
  id: 1,
  title: 'Title',
  description: 'Description',
  content: 1,
  owener: 1,
  updatedAt: new Date(),
  createdAt: new Date(),
  deletedAt: new Date(),
};

const userSchema = {
  id: 0,
  firstName: 'First',
  lastName: 'Last',
};

class DataMocker {
  constructor() {
    this.blogs = [];
    this.textContents = [];
    this.categories = [];
    this.user = {};
    this.tags = [];

    for(let i = 0; i < 5; i++) {
      this.newBlog();
      this.newTag();
      this.newCategory();
      // this.newTextContent();
    }
  }

  newBlog = () => {
    const newBlog = {...blogSchema};
    newBlog.id = this.blogs.length + 1;
    const content = this.newTextContent();
    newBlog.content = content;
    this.blogs.push(newBlog);
  }
  
  newTag = () => {
    const newTag = {...tagSchema};
    newTag.id = this.tags.length + 1;
    this.tags.push(newTag);
  }
  
  newCategory = () => {
    const newCategory = {...categorySchema};
    newCategory.id = this.categories.length + 1;
    this.categories.push(newCategory);
  }
  
  newTextContent = () => {
    const newTextContent = {...textContentSchema};
    newTextContent.id = this.textContents.length + 1;
    this.textContents.push(newTextContent);
    return newTextContent;
  }
}

export default new DataMocker();