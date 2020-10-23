<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="">
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Login',
}
</script>

<style scoped>

</style>