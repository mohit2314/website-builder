<template>
  <section class="hl_wrapper nav-shrink d-flex">

    <section class="hl_wrapper--inner page-creator" id="page-creator">

      <section class="hl_page-creator--main">
        <!-- Editor toolbar -->
        <EditorToolbar />
        <!-- Editor playground -->
        <EditorPlayground />
        <button @click="store.openSidebar('add-row')">Open sidebar</button>
      </section>
      <!-- END of .hl_page-creator--main -->

      <section class="hl_page-creator--settings-group">
        <a href="#" class="close-group" id="close-settings-group"><i class="icon icon-close"></i></a>
        <div class="hl_settings-group">
          <div class="tab-content" id="hl_settings-group-tab">
            <div class="tab-pane fade" id="integrations" role="tabpanel" aria-labelledby="integrations-tab">
              <h2>Email Integration Settings</h2>
              <div class="integrations">
                <div class="text-center">
                  <h5>Auto Responder Integration</h5>
                  <p>Here you will be able to hook up your integrations with your auto-responder service...</p>
                  <p class="not-connected"><i class="icon icon-close"></i> Not Connected</p>
                </div>
                <hr>
                <div class="form-group">
                  <label>Integrations</label>
                  <select class="selectpicker" data-width="100%">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Action</label>
                  <select class="selectpicker" data-width="100%">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>List to Add</label>
                  <select class="selectpicker" data-width="100%">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="seo" role="tabpanel" aria-labelledby="seo-tab">
              <h2>SEO Mata Data</h2>
              <div class="seo">
                <div class="warning">
                  <p>Warning: Change the Default SEO Page Title.</p>
                </div>
                <div class="form-group">
                  <label>Title</label>
                  <input type="text" class="form-control" placeholder="Title">
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" placeholder="Description" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label>Keywords</label>
                  <input type="text" class="form-control" placeholder="Keywords"
                    value="clickfunnels, landing page, web site editor">
                </div>
                <div class="form-group">
                  <label>Author</label>
                  <input type="text" class="form-control" placeholder="Author" value="Your Name">
                </div>
                <div class="form-group">
                  <label>Social Image</label>
                  <input type="file" placeholder="Social Image">
                </div>
                <hr>
                <h3>SEO Preview</h3>
                <div class="seo-card --seo1">
                  <h4 class="seo-title">My Awesome Landing Page - Powered by ClickFunnels.com</h4>
                  <p><a href="#" class="seo-link">http://yourwebsite.com/would-be-here</a>
                  </p>
                  <p class="seo-description">description for your awesome landing page</p>
                </div>
                <div class="seo-card --seo2">
                  <h4 class="seo-title">My Awesome Landing Page - Powered by ClickFunnels.com</h4>
                  <p class="seo-description">description for your awesome landing page</p>
                  <p><a href="#" class="seo-link">http://yourwebsite.com/would-be-here</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="tracking" role="tabpanel" aria-labelledby="tracking-tab">
              <h2>Tracking Code</h2>
              <div class="tracking">
                <div class="form-group">
                  <label>Add HTML/Javascript</label>
                  <textarea class="form-control" placeholder="Add HTML/Javascript here..." rows="5"></textarea>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="css" role="tabpanel" aria-labelledby="css-tab">
              <h2>Custom CSS</h2>
              <div class="css">
                <div class="form-group">
                  <label>Add CSS</label>
                  <textarea class="form-control" placeholder="Add custo CSS here..." rows="5"></textarea>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="background" role="tabpanel" aria-labelledby="background-tab">
              <h2>Background</h2>
              <div class="background">
                <div class="form-group">
                  <label>Background Image</label>
                  <input type="file">
                </div>
                <div class="form-group">
                  <label>Color</label>
                  <input type="text" class="form-control" placeholder="Color">
                </div>
                <div class="form-group">
                  <label>Background Video</label>
                  <select class="selectpicker" data-width="100%">
                    <option>Off</option>
                    <option>On</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="typography" role="tabpanel" aria-labelledby="typography-tab">
              <h2>Typography</h2>
              <div class="typography">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, expedita. Porro, ea magni
                  doloremque et fuga optio laudantium? Mollitia esse aliquam enim facilis eius natus laborum dolor
                  laboriosam numquam sapiente?
                </p>
              </div>
            </div>
            <div class="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">
              <h2>General Settings</h2>
              <div class="general">
                <div class="form-group">
                  <label>On Submit Go To</label>
                  <input type="text" class="form-control" placeholder="On Submit Go To">
                </div>
                <div class="form-group">
                  <label>Digital Assets</label>
                  <select class="selectpicker" data-width="100%">
                    <option>- no asset / download -</option>
                    <option>Facebook Strategy Guide</option>
                    <option>Anurli</option>
                    <option>Horatio D Medium</option>
                    <option>Horatio D Light</option>
                    <option>Patient Rush Favicon</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Affiliate Badge</label>
                  <select class="selectpicker" data-width="100%">
                    <option>Hide</option>
                    <option>Show</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Search Engines</label>
                  <select class="selectpicker" data-width="100%">
                    <option>Hide</option>
                    <option>Show</option>
                  </select>
                </div>
                <button type="button" class="btn btn-success btn-block">Save Page as Template</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--settings-group -->

      <section class="hl_page-creator--sections-group">
        <a href="#" class="close-group" id="close-section-group"><i class="icon icon-close"></i></a>
        <div class="hl_section-group">
          <div class="tab-content" id="hl_section-group-tab">
            <div class="tab-pane fade" id="add-section" role="tabpanel" aria-labelledby="add-section-tab">
              <div class="add-section">
                <h2>Add Sections</h2>
                <div class="add-section-body">
                  <div class="section-cards">
                    <div class="section-card">
                      <div class="icon">
                        <i class="far fa-square"></i>
                      </div>
                      <h5>Full Width</h5>
                    </div>
                    <div class="section-card">
                      <div class="icon">
                        <i class="far fa-square"></i>
                      </div>
                      <h5>Wide</h5>
                    </div>
                    <div class="section-card">
                      <div class="icon">
                        <i class="far fa-square"></i>
                      </div>
                      <h5>Medium</h5>
                    </div>
                    <div class="section-card">
                      <div class="icon">
                        <i class="far fa-square"></i>
                      </div>
                      <h5>Small</h5>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="manage-sections" role="tabpanel" aria-labelledby="manage-sections-tab">
              <div class="manage-sections">
                <h2>Manage Sections</h2>
                <div class="sections-section-group-wrap">
                  <div class="sections-section-group">
                    <h3>All Sections</h3>
                    <ul class="sections">
                      <li>
                        <h4>Section</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Section</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Section</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Section</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Section</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--sections-group -->

      <CustomizationSidebar />
      <!-- END of .hl_page-creator--rows-group -->

      <section class="hl_page-creator--columns-group">
        <a href="#" class="close-group" id="close-column-group"><i class="icon icon-close"></i></a>
        <div class="manage-columns">
          <h2>Manage Columns</h2>
          <div class="columns-section-group-wrap">
            <div class="columns-section-group">
              <h3>Section > 2 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Left Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
                <li>
                  <h4>Right Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="columns-section-group">
              <h3>Section > 1 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Full Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="columns-section-group">
              <h3>Section > 2 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Left Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
                <li>
                  <h4>Right Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="columns-section-group">
              <h3>Section > 1 Column Row</h3>
              <ul class="columns">
                <li>
                  <h4>Full Column</h4>
                  <div class="actions">
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-edit"></i></a>
                    <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--columns-group -->

      <section class="hl_page-creator--element-group">
        <a href="#" class="close-group" id="close-element-group"><i class="icon icon-close"></i></a>
        <div class="hl_element-group">
          <div class="tab-content" id="hl_element-group-tab">
            <div class="tab-pane fade" id="add-element" role="tabpanel" aria-labelledby="add-element-tab">
              <div class="add-element">
                <div class="add-element-menu">
                  <ul>
                    <li class="active">
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">Text</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Form</a>
                    </li>
                    <li>
                      <a href="#">Content</a>
                    </li>
                    <li>
                      <a href="#">Countdown</a>
                    </li>
                    <li>
                      <a href="#">Misc</a>
                    </li>
                  </ul>
                </div>
                <div class="add-element-body">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                  </div>
                  <div class="element-group">
                    <h4>Text</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-heading"></i>
                        </div>
                        <h5>Headline</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-font"></i>
                        </div>
                        <h5>Sub-headline</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-paragraph"></i>
                        </div>
                        <h5>Paragraph</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-list"></i>
                        </div>
                        <h5>Bullet List</h5>
                      </div>
                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Media</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-image"></i>
                        </div>
                        <h5>Image</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-images"></i>
                        </div>
                        <h5>Image Popup</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <h5>Video</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-play-circle"></i>
                        </div>
                        <h5>Video popup</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-volume-up"></i>
                        </div>
                        <h5>Audio player</h5>
                      </div>
                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Form</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-stop"></i>
                        </div>
                        <h5>Button</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fab fa-facebook-f"></i>
                        </div>
                        <h5>Facebook Option</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-square"></i>
                        </div>
                        <h5>Input</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-hand-pointer"></i>
                        </div>
                        <h5>Select Box</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-comment-alt"></i>
                        </div>
                        <h5>Text Area</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-check-square"></i>
                        </div>
                        <h5>Checkbox Headline</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Advance Form</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-sms"></i>
                        </div>
                        <h5>SMS Sign up</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-file-invoice"></i>
                        </div>
                        <h5>Billing Add.</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-file-invoice"></i>
                        </div>
                        <h5>Shipping Add.</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-poll-h"></i>
                        </div>
                        <h5>Survey</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Content Blocks</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-circle"></i>
                        </div>
                        <h5>Icon</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-file-image"></i>
                        </div>
                        <h5>Img Feature</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-link"></i>
                        </div>
                        <h5>Navigation</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-question-circle"></i>
                        </div>
                        <h5>FAQ</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-window-minimize"></i>
                        </div>
                        <h5>Divider</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-window-minimize"></i>
                        </div>
                        <h5>Progress bar</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-list"></i>
                        </div>
                        <h5>Image List</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-table"></i>
                        </div>
                        <h5>Pricing Table</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Countdown</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-hourglass-start"></i>
                        </div>
                        <h5>Countdown</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="far fa-clock"></i>
                        </div>
                        <h5>Minute Timer</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-clock"></i>
                        </div>
                        <h5>Day Timer</h5>
                      </div>

                    </div>
                  </div>
                  <div class="element-group">
                    <h4>Misc Elements</h4>
                    <div class="element-cards">
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-share-alt-square"></i>
                        </div>
                        <h5>Social Share</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-bell"></i>
                        </div>
                        <h5>Privacy Notice</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-comments"></i>
                        </div>
                        <h5>FB Comments</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-align-center"></i>
                        </div>
                        <h5>Text Block</h5>
                      </div>
                      <div class="element-card">
                        <div class="icon">
                          <i class="fas fa-code"></i>
                        </div>
                        <h5>Custom JS/HTML</h5>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="manage-elements" role="tabpanel" aria-labelledby="manage-elements-tab">
              <div class="manage-elements">
                <h2>Manage Elements</h2>
                <div class="elements-section-group-wrap">
                  <div class="elements-section-group">
                    <h3>Section > Left Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Image</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="elements-section-group">
                    <h3>Section > Right Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="elements-section-group">
                    <h3>Section > Full Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="elements-section-group">
                    <h3>Section > Right Column</h3>
                    <ul class="elements">
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Headline</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Input Form</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                      <li>
                        <h4>Button</h4>
                        <div class="actions">
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="fas fa-arrows-alt-v"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-eye"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-copy"></i></a>
                          <a href="#" class="btn btn-square-sm btn-light4"><i class="far fa-trash-alt"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END of .hl_page-creator--element-group -->

    </section>
    <!-- END of .form-builder -->

  </section>
</template>

<script setup lang="ts">
import EditorToolbar from '@/components/website-builder/EditorToolbar.vue'
import EditorPlayground from '@/components/website-builder/EditorPlayground.vue'
import CustomizationSidebar from '@/components/website-builder/CustomizationSidebar.vue';
import { useCustomizationSidebarStore } from '@/stores/customizationSidebar'

const store = useCustomizationSidebarStore()

</script>

<style></style>