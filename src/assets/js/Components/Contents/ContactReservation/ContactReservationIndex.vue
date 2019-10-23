<template>
    <div class="bg-white contact m-10 p-10">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="page-title m-0 mb-10 text-primary">Contact & Reservation</h1>
                <p>
                    You can send us the message or visit us any of our below branches or location for any bookings
                    or reservations. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
        <div class="row ">
            <div class="col-sm-6">
                <form>
                    <div class="form-group input-group">
                        <label for="name" class="input-group-addon"><i class="glyphicon glyphicon-user"></i></label>
                        <input id="name" type="text" class="form-control" placeholder="Name" required>
                    </div>
                    <div class="form-group input-group">
                        <label for="email" class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></label>
                        <input id="email" type="text" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="form-group input-group">
                        <label for="phone" class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></label>
                        <input id="phone" type="text" class="form-control" placeholder="Phone Number" required>
                    </div>
                    <div class="form-group input-group">
                        <label for="persons" class="input-group-addon"><i class="glyphicon glyphicon-user"></i></label>
                        <select class="form-control" id="persons">
                            <option selected="selected">Number of Persons</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5+</option>
                        </select>
                    </div>
                    <div class="form-group input-group">
                        <label for="msg" class="input-group-addon"><i class="glyphicon glyphicon-question-sign"></i></label>
                        <textarea class="form-control" rows="5" id="msg" required></textarea>
                    </div>
                    <div class="form-group input-group">
                        <button type="submit" class="btn bg-primary">
                            <i class="glyphicon glyphicon-send"></i>
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#branch1">Branch 1</a></li>
                    <li><a data-toggle="tab" href="#branch2">Branch 2</a></li>
                </ul>
                <div class="tab-content">
                    <div id="branch1" class="tab-pane fade in active">
                        <ul class="list-group">
                            <li class="list-group-item"><i class="glyphicon glyphicon-user"></i> Manager: ABC</li>
                            <li class="list-group-item"><i class="glyphicon glyphicon-phone"></i>Contact Number: 0123456789</li>
                            <li class="list-group-item"><i class="glyphicon glyphicon-map-marker"></i>Address: </li>
                        </ul>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                class="embed-responsive-item"
                                src="https://maps.google.com/maps?q=bgc&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed">
                                ...
                            </iframe>
                        </div>
                    </div>
                    <div id="branch2" class="tab-pane fade">
                        <ul class="list-group">
                            <li class="list-group-item"><i class="glyphicon glyphicon-user"></i> Manager: DEF</li>
                            <li class="list-group-item"><i class="glyphicon glyphicon-phone"></i>Contact Number: 0123456789</li>
                            <li class="list-group-item"><i class="glyphicon glyphicon-map-marker"></i>Address: </li>
                        </ul>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                class="embed-responsive-item"
                                src="https://maps.google.com/maps?q=bgc&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed">
                                ...
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactIndex'
};
</script>
