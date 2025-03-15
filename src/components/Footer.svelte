<script>
    import Resume from "$lib/docs/AustinPoberezhnik_Resume.pdf";
</script>

<style>
    .footer {
        background-color: #fafafa;
    }

    p,a {
        color: #888;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<footer class="px2 py1 center footer">
    <p><a href="https://www.linkedin.com/in/austin-poberezhnik-4570b3167/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    <p><a href="https://github.com/austin-io" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    <p><a href="mailto:austinypwork@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
    <p class="mb1"><a href={Resume} download>Resume</a></p>

    <p>Copyright &copy; {new Date().getFullYear()}</p>
</footer>