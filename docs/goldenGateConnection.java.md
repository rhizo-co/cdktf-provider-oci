# `goldenGateConnection` Submodule <a name="`goldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateConnection <a name="GoldenGateConnection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnection;

GoldenGateConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .connectionType(java.lang.String)
    .displayName(java.lang.String)
    .technologyType(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .accountKey(java.lang.String)
//  .accountKeySecretId(java.lang.String)
//  .accountName(java.lang.String)
//  .additionalAttributes(IResolvable)
//  .additionalAttributes(java.util.List<GoldenGateConnectionAdditionalAttributes>)
//  .authenticationMode(java.lang.String)
//  .authenticationType(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .bootstrapServers(IResolvable)
//  .bootstrapServers(java.util.List<GoldenGateConnectionBootstrapServers>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretSecretId(java.lang.String)
//  .connectionFactory(java.lang.String)
//  .connectionString(java.lang.String)
//  .connectionUrl(java.lang.String)
//  .consumerProperties(java.lang.String)
//  .coreSiteXml(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentId(java.lang.String)
//  .description(java.lang.String)
//  .doesUseSecretIds(java.lang.Boolean)
//  .doesUseSecretIds(IResolvable)
//  .endpoint(java.lang.String)
//  .fingerprint(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .jndiConnectionFactory(java.lang.String)
//  .jndiInitialContextFactory(java.lang.String)
//  .jndiProviderUrl(java.lang.String)
//  .jndiSecurityCredentials(java.lang.String)
//  .jndiSecurityCredentialsSecretId(java.lang.String)
//  .jndiSecurityPrincipal(java.lang.String)
//  .keyId(java.lang.String)
//  .keyStore(java.lang.String)
//  .keyStorePassword(java.lang.String)
//  .keyStorePasswordSecretId(java.lang.String)
//  .keyStoreSecretId(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<GoldenGateConnectionLocks>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .password(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .port(java.lang.Number)
//  .privateIp(java.lang.String)
//  .privateKeyFile(java.lang.String)
//  .privateKeyFileSecretId(java.lang.String)
//  .privateKeyPassphrase(java.lang.String)
//  .privateKeyPassphraseSecretId(java.lang.String)
//  .producerProperties(java.lang.String)
//  .publicKeyFingerprint(java.lang.String)
//  .redisClusterId(java.lang.String)
//  .region(java.lang.String)
//  .routingMethod(java.lang.String)
//  .sasToken(java.lang.String)
//  .sasTokenSecretId(java.lang.String)
//  .secretAccessKey(java.lang.String)
//  .secretAccessKeySecretId(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .servers(java.lang.String)
//  .serviceAccountKeyFile(java.lang.String)
//  .serviceAccountKeyFileSecretId(java.lang.String)
//  .sessionMode(java.lang.String)
//  .shouldUseJndi(java.lang.Boolean)
//  .shouldUseJndi(IResolvable)
//  .shouldValidateServerCertificate(java.lang.Boolean)
//  .shouldValidateServerCertificate(IResolvable)
//  .sslCa(java.lang.String)
//  .sslCert(java.lang.String)
//  .sslClientKeystash(java.lang.String)
//  .sslClientKeystashSecretId(java.lang.String)
//  .sslClientKeystoredb(java.lang.String)
//  .sslClientKeystoredbSecretId(java.lang.String)
//  .sslCrl(java.lang.String)
//  .sslKey(java.lang.String)
//  .sslKeyPassword(java.lang.String)
//  .sslKeyPasswordSecretId(java.lang.String)
//  .sslKeySecretId(java.lang.String)
//  .sslMode(java.lang.String)
//  .sslServerCertificate(java.lang.String)
//  .streamPoolId(java.lang.String)
//  .subnetId(java.lang.String)
//  .tenancyId(java.lang.String)
//  .timeouts(GoldenGateConnectionTimeouts)
//  .triggerRefresh(java.lang.Boolean)
//  .triggerRefresh(IResolvable)
//  .trustStore(java.lang.String)
//  .trustStorePassword(java.lang.String)
//  .trustStorePasswordSecretId(java.lang.String)
//  .trustStoreSecretId(java.lang.String)
//  .url(java.lang.String)
//  .userId(java.lang.String)
//  .username(java.lang.String)
//  .vaultId(java.lang.String)
//  .wallet(java.lang.String)
//  .walletSecretId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.technologyType">technologyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKeySecretId">accountKeySecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.additionalAttributes">additionalAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>></code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.bootstrapServers">bootstrapServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>></code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecretSecretId">clientSecretSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionFactory">connectionFactory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.consumerProperties">consumerProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.coreSiteXml">coreSiteXml</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.doesUseSecretIds">doesUseSecretIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiProviderUrl">jndiProviderUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStore">keyStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStoreSecretId">keyStoreSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFile">privateKeyFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.producerProperties">producerProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.routingMethod">routingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasToken">sasToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasTokenSecretId">sasTokenSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.servers">servers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldUseJndi">shouldUseJndi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCa">sslCa</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCert">sslCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystash">sslClientKeystash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKey">sslKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPassword">sslKeyPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeySecretId">sslKeySecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslServerCertificate">sslServerCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.streamPoolId">streamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.triggerRefresh">triggerRefresh</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStore">trustStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePassword">trustStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStoreSecretId">trustStoreSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.wallet">wallet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.walletSecretId">walletSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.technologyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accessKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `accountKeySecretId`<sup>Optional</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKeySecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `additionalAttributes`<sup>Optional</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.additionalAttributes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>>

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.azureTenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `bootstrapServers`<sup>Optional</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.bootstrapServers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>>

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `clientSecretSecretId`<sup>Optional</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecretSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `connectionFactory`<sup>Optional</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionFactory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `consumerProperties`<sup>Optional</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.consumerProperties"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `coreSiteXml`<sup>Optional</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.coreSiteXml"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `doesUseSecretIds`<sup>Optional</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.doesUseSecretIds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.fingerprint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `jndiConnectionFactory`<sup>Optional</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiConnectionFactory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `jndiInitialContextFactory`<sup>Optional</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiInitialContextFactory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `jndiProviderUrl`<sup>Optional</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiProviderUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `jndiSecurityCredentials`<sup>Optional</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `jndiSecurityCredentialsSecretId`<sup>Optional</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentialsSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `jndiSecurityPrincipal`<sup>Optional</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityPrincipal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `keyStore`<sup>Optional</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStore"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `keyStorePasswordSecretId`<sup>Optional</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePasswordSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `keyStoreSecretId`<sup>Optional</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStoreSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.passwordSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `privateKeyFile`<sup>Optional</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `privateKeyFileSecretId`<sup>Optional</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFileSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphrase"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `privateKeyPassphraseSecretId`<sup>Optional</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphraseSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `producerProperties`<sup>Optional</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.producerProperties"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `publicKeyFingerprint`<sup>Optional</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.publicKeyFingerprint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `redisClusterId`<sup>Optional</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.redisClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `routingMethod`<sup>Optional</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.routingMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `sasTokenSecretId`<sup>Optional</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasTokenSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `secretAccessKeySecretId`<sup>Optional</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKeySecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.securityProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.servers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `serviceAccountKeyFile`<sup>Optional</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `serviceAccountKeyFileSecretId`<sup>Optional</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFileSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `sessionMode`<sup>Optional</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sessionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `shouldUseJndi`<sup>Optional</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldUseJndi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `shouldValidateServerCertificate`<sup>Optional</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldValidateServerCertificate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCa"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `sslCert`<sup>Optional</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCert"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `sslClientKeystash`<sup>Optional</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `sslClientKeystashSecretId`<sup>Optional</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystashSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `sslClientKeystoredb`<sup>Optional</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredb"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `sslClientKeystoredbSecretId`<sup>Optional</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredbSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `sslCrl`<sup>Optional</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `sslKey`<sup>Optional</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `sslKeyPassword`<sup>Optional</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `sslKeyPasswordSecretId`<sup>Optional</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPasswordSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `sslKeySecretId`<sup>Optional</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeySecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `sslServerCertificate`<sup>Optional</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslServerCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `streamPoolId`<sup>Optional</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.streamPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.tenancyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `triggerRefresh`<sup>Optional</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.triggerRefresh"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStore"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `trustStorePassword`<sup>Optional</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `trustStorePasswordSecretId`<sup>Optional</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePasswordSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `trustStoreSecretId`<sup>Optional</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStoreSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.wallet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.walletSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes">putAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers">putBootstrapServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId">resetAccountKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName">resetAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes">resetAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers">resetBootstrapServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId">resetClientSecretSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory">resetConnectionFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties">resetConsumerProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml">resetCoreSiteXml</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds">resetDoesUseSecretIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory">resetJndiConnectionFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory">resetJndiInitialContextFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl">resetJndiProviderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials">resetJndiSecurityCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId">resetJndiSecurityCredentialsSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal">resetJndiSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore">resetKeyStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword">resetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId">resetKeyStorePasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId">resetKeyStoreSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile">resetPrivateKeyFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId">resetPrivateKeyFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId">resetPrivateKeyPassphraseSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties">resetProducerProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint">resetPublicKeyFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId">resetRedisClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod">resetRoutingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId">resetSasTokenSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId">resetSecretAccessKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers">resetServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile">resetServiceAccountKeyFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId">resetServiceAccountKeyFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode">resetSessionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi">resetShouldUseJndi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate">resetShouldValidateServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa">resetSslCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert">resetSslCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash">resetSslClientKeystash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId">resetSslClientKeystashSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb">resetSslClientKeystoredb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId">resetSslClientKeystoredbSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl">resetSslCrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey">resetSslKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword">resetSslKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId">resetSslKeyPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId">resetSslKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate">resetSslServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId">resetStreamPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId">resetTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh">resetTriggerRefresh</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore">resetTrustStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword">resetTrustStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId">resetTrustStorePasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId">resetTrustStoreSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet">resetWallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId">resetWalletSecretId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAttributes` <a name="putAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes"></a>

```java
public void putAdditionalAttributes(IResolvable OR java.util.List<GoldenGateConnectionAdditionalAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>>

---

##### `putBootstrapServers` <a name="putBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers"></a>

```java
public void putBootstrapServers(IResolvable OR java.util.List<GoldenGateConnectionBootstrapServers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>>

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<GoldenGateConnectionLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts"></a>

```java
public void putTimeouts(GoldenGateConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAccountKey` <a name="resetAccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetAccountKeySecretId` <a name="resetAccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId"></a>

```java
public void resetAccountKeySecretId()
```

##### `resetAccountName` <a name="resetAccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName"></a>

```java
public void resetAccountName()
```

##### `resetAdditionalAttributes` <a name="resetAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes"></a>

```java
public void resetAdditionalAttributes()
```

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetBootstrapServers` <a name="resetBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers"></a>

```java
public void resetBootstrapServers()
```

##### `resetClientId` <a name="resetClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetClientSecretSecretId` <a name="resetClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId"></a>

```java
public void resetClientSecretSecretId()
```

##### `resetConnectionFactory` <a name="resetConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory"></a>

```java
public void resetConnectionFactory()
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl"></a>

```java
public void resetConnectionUrl()
```

##### `resetConsumerProperties` <a name="resetConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties"></a>

```java
public void resetConsumerProperties()
```

##### `resetCoreSiteXml` <a name="resetCoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml"></a>

```java
public void resetCoreSiteXml()
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId"></a>

```java
public void resetDatabaseId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId"></a>

```java
public void resetDeploymentId()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDoesUseSecretIds` <a name="resetDoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds"></a>

```java
public void resetDoesUseSecretIds()
```

##### `resetEndpoint` <a name="resetEndpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetFingerprint` <a name="resetFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint"></a>

```java
public void resetFingerprint()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHost` <a name="resetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId"></a>

```java
public void resetId()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetJndiConnectionFactory` <a name="resetJndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory"></a>

```java
public void resetJndiConnectionFactory()
```

##### `resetJndiInitialContextFactory` <a name="resetJndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory"></a>

```java
public void resetJndiInitialContextFactory()
```

##### `resetJndiProviderUrl` <a name="resetJndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl"></a>

```java
public void resetJndiProviderUrl()
```

##### `resetJndiSecurityCredentials` <a name="resetJndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials"></a>

```java
public void resetJndiSecurityCredentials()
```

##### `resetJndiSecurityCredentialsSecretId` <a name="resetJndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId"></a>

```java
public void resetJndiSecurityCredentialsSecretId()
```

##### `resetJndiSecurityPrincipal` <a name="resetJndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal"></a>

```java
public void resetJndiSecurityPrincipal()
```

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetKeyStore` <a name="resetKeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore"></a>

```java
public void resetKeyStore()
```

##### `resetKeyStorePassword` <a name="resetKeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword"></a>

```java
public void resetKeyStorePassword()
```

##### `resetKeyStorePasswordSecretId` <a name="resetKeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId"></a>

```java
public void resetKeyStorePasswordSecretId()
```

##### `resetKeyStoreSecretId` <a name="resetKeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId"></a>

```java
public void resetKeyStoreSecretId()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetPrivateKeyFile` <a name="resetPrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile"></a>

```java
public void resetPrivateKeyFile()
```

##### `resetPrivateKeyFileSecretId` <a name="resetPrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId"></a>

```java
public void resetPrivateKeyFileSecretId()
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase"></a>

```java
public void resetPrivateKeyPassphrase()
```

##### `resetPrivateKeyPassphraseSecretId` <a name="resetPrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId"></a>

```java
public void resetPrivateKeyPassphraseSecretId()
```

##### `resetProducerProperties` <a name="resetProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties"></a>

```java
public void resetProducerProperties()
```

##### `resetPublicKeyFingerprint` <a name="resetPublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint"></a>

```java
public void resetPublicKeyFingerprint()
```

##### `resetRedisClusterId` <a name="resetRedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId"></a>

```java
public void resetRedisClusterId()
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoutingMethod` <a name="resetRoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod"></a>

```java
public void resetRoutingMethod()
```

##### `resetSasToken` <a name="resetSasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken"></a>

```java
public void resetSasToken()
```

##### `resetSasTokenSecretId` <a name="resetSasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId"></a>

```java
public void resetSasTokenSecretId()
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey"></a>

```java
public void resetSecretAccessKey()
```

##### `resetSecretAccessKeySecretId` <a name="resetSecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId"></a>

```java
public void resetSecretAccessKeySecretId()
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol"></a>

```java
public void resetSecurityProtocol()
```

##### `resetServers` <a name="resetServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers"></a>

```java
public void resetServers()
```

##### `resetServiceAccountKeyFile` <a name="resetServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile"></a>

```java
public void resetServiceAccountKeyFile()
```

##### `resetServiceAccountKeyFileSecretId` <a name="resetServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId"></a>

```java
public void resetServiceAccountKeyFileSecretId()
```

##### `resetSessionMode` <a name="resetSessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode"></a>

```java
public void resetSessionMode()
```

##### `resetShouldUseJndi` <a name="resetShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi"></a>

```java
public void resetShouldUseJndi()
```

##### `resetShouldValidateServerCertificate` <a name="resetShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate"></a>

```java
public void resetShouldValidateServerCertificate()
```

##### `resetSslCa` <a name="resetSslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa"></a>

```java
public void resetSslCa()
```

##### `resetSslCert` <a name="resetSslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert"></a>

```java
public void resetSslCert()
```

##### `resetSslClientKeystash` <a name="resetSslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash"></a>

```java
public void resetSslClientKeystash()
```

##### `resetSslClientKeystashSecretId` <a name="resetSslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId"></a>

```java
public void resetSslClientKeystashSecretId()
```

##### `resetSslClientKeystoredb` <a name="resetSslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb"></a>

```java
public void resetSslClientKeystoredb()
```

##### `resetSslClientKeystoredbSecretId` <a name="resetSslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId"></a>

```java
public void resetSslClientKeystoredbSecretId()
```

##### `resetSslCrl` <a name="resetSslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl"></a>

```java
public void resetSslCrl()
```

##### `resetSslKey` <a name="resetSslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey"></a>

```java
public void resetSslKey()
```

##### `resetSslKeyPassword` <a name="resetSslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword"></a>

```java
public void resetSslKeyPassword()
```

##### `resetSslKeyPasswordSecretId` <a name="resetSslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId"></a>

```java
public void resetSslKeyPasswordSecretId()
```

##### `resetSslKeySecretId` <a name="resetSslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId"></a>

```java
public void resetSslKeySecretId()
```

##### `resetSslMode` <a name="resetSslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode"></a>

```java
public void resetSslMode()
```

##### `resetSslServerCertificate` <a name="resetSslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate"></a>

```java
public void resetSslServerCertificate()
```

##### `resetStreamPoolId` <a name="resetStreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId"></a>

```java
public void resetStreamPoolId()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTenancyId` <a name="resetTenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId"></a>

```java
public void resetTenancyId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggerRefresh` <a name="resetTriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh"></a>

```java
public void resetTriggerRefresh()
```

##### `resetTrustStore` <a name="resetTrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore"></a>

```java
public void resetTrustStore()
```

##### `resetTrustStorePassword` <a name="resetTrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword"></a>

```java
public void resetTrustStorePassword()
```

##### `resetTrustStorePasswordSecretId` <a name="resetTrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId"></a>

```java
public void resetTrustStorePasswordSecretId()
```

##### `resetTrustStoreSecretId` <a name="resetTrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId"></a>

```java
public void resetTrustStoreSecretId()
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId"></a>

```java
public void resetUserId()
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId"></a>

```java
public void resetVaultId()
```

##### `resetWallet` <a name="resetWallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet"></a>

```java
public void resetWallet()
```

##### `resetWalletSecretId` <a name="resetWalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId"></a>

```java
public void resetWalletSecretId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnection;

GoldenGateConnection.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnection;

GoldenGateConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnection;

GoldenGateConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnection;

GoldenGateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoldenGateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoldenGateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers">bootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput">accountKeySecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput">additionalAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput">clientSecretSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput">connectionFactoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput">connectionUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput">consumerPropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput">coreSiteXmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput">doesUseSecretIdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput">fingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput">jndiConnectionFactoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput">jndiInitialContextFactoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput">jndiProviderUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput">jndiSecurityCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput">jndiSecurityCredentialsSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput">jndiSecurityPrincipalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput">keyStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput">keyStorePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput">keyStorePasswordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput">keyStoreSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput">privateKeyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput">privateKeyFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput">privateKeyPassphraseSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput">producerPropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput">publicKeyFingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput">redisClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput">routingMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput">sasTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput">sasTokenSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput">secretAccessKeySecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput">securityProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput">serversInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput">serviceAccountKeyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput">serviceAccountKeyFileSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput">sessionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput">shouldUseJndiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput">shouldValidateServerCertificateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput">sslCaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput">sslCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput">sslClientKeystashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput">sslClientKeystashSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput">sslClientKeystoredbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput">sslClientKeystoredbSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput">sslCrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput">sslKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput">sslKeyPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput">sslKeyPasswordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput">sslKeySecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput">sslModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput">sslServerCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput">streamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput">technologyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput">tenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput">triggerRefreshInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput">trustStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput">trustStorePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput">trustStorePasswordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput">trustStoreSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput">walletInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput">walletSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId">accountKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory">connectionFactory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties">consumerProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml">coreSiteXml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore">keyStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile">privateKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties">producerProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod">routingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers">servers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi">shouldUseJndi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert">sslCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash">sslClientKeystash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey">sslKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword">sslKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId">sslKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate">sslServerCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId">streamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType">technologyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh">triggerRefresh</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore">trustStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword">trustStorePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet">wallet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId">walletSecretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes"></a>

```java
public GoldenGateConnectionAdditionalAttributesList getAdditionalAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers"></a>

```java
public GoldenGateConnectionBootstrapServersList getBootstrapServers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a>

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps"></a>

```java
public GoldenGateConnectionIngressIpsList getIngressIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks"></a>

```java
public GoldenGateConnectionLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts"></a>

```java
public GoldenGateConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `accountKeySecretIdInput`<sup>Optional</sup> <a name="accountKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput"></a>

```java
public java.lang.String getAccountKeySecretIdInput();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `additionalAttributesInput`<sup>Optional</sup> <a name="additionalAttributesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput"></a>

```java
public java.lang.Object getAdditionalAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput"></a>

```java
public java.lang.Object getBootstrapServersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientSecretSecretIdInput`<sup>Optional</sup> <a name="clientSecretSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput"></a>

```java
public java.lang.String getClientSecretSecretIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionFactoryInput`<sup>Optional</sup> <a name="connectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput"></a>

```java
public java.lang.String getConnectionFactoryInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput"></a>

```java
public java.lang.String getConnectionUrlInput();
```

- *Type:* java.lang.String

---

##### `consumerPropertiesInput`<sup>Optional</sup> <a name="consumerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput"></a>

```java
public java.lang.String getConsumerPropertiesInput();
```

- *Type:* java.lang.String

---

##### `coreSiteXmlInput`<sup>Optional</sup> <a name="coreSiteXmlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput"></a>

```java
public java.lang.String getCoreSiteXmlInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `doesUseSecretIdsInput`<sup>Optional</sup> <a name="doesUseSecretIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput"></a>

```java
public java.lang.Object getDoesUseSecretIdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput"></a>

```java
public java.lang.String getFingerprintInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jndiConnectionFactoryInput`<sup>Optional</sup> <a name="jndiConnectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput"></a>

```java
public java.lang.String getJndiConnectionFactoryInput();
```

- *Type:* java.lang.String

---

##### `jndiInitialContextFactoryInput`<sup>Optional</sup> <a name="jndiInitialContextFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput"></a>

```java
public java.lang.String getJndiInitialContextFactoryInput();
```

- *Type:* java.lang.String

---

##### `jndiProviderUrlInput`<sup>Optional</sup> <a name="jndiProviderUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput"></a>

```java
public java.lang.String getJndiProviderUrlInput();
```

- *Type:* java.lang.String

---

##### `jndiSecurityCredentialsInput`<sup>Optional</sup> <a name="jndiSecurityCredentialsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput"></a>

```java
public java.lang.String getJndiSecurityCredentialsInput();
```

- *Type:* java.lang.String

---

##### `jndiSecurityCredentialsSecretIdInput`<sup>Optional</sup> <a name="jndiSecurityCredentialsSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput"></a>

```java
public java.lang.String getJndiSecurityCredentialsSecretIdInput();
```

- *Type:* java.lang.String

---

##### `jndiSecurityPrincipalInput`<sup>Optional</sup> <a name="jndiSecurityPrincipalInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput"></a>

```java
public java.lang.String getJndiSecurityPrincipalInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyStoreInput`<sup>Optional</sup> <a name="keyStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput"></a>

```java
public java.lang.String getKeyStoreInput();
```

- *Type:* java.lang.String

---

##### `keyStorePasswordInput`<sup>Optional</sup> <a name="keyStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput"></a>

```java
public java.lang.String getKeyStorePasswordInput();
```

- *Type:* java.lang.String

---

##### `keyStorePasswordSecretIdInput`<sup>Optional</sup> <a name="keyStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput"></a>

```java
public java.lang.String getKeyStorePasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `keyStoreSecretIdInput`<sup>Optional</sup> <a name="keyStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput"></a>

```java
public java.lang.String getKeyStoreSecretIdInput();
```

- *Type:* java.lang.String

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `privateKeyFileInput`<sup>Optional</sup> <a name="privateKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput"></a>

```java
public java.lang.String getPrivateKeyFileInput();
```

- *Type:* java.lang.String

---

##### `privateKeyFileSecretIdInput`<sup>Optional</sup> <a name="privateKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput"></a>

```java
public java.lang.String getPrivateKeyFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput"></a>

```java
public java.lang.String getPrivateKeyPassphraseInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseSecretIdInput`<sup>Optional</sup> <a name="privateKeyPassphraseSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput"></a>

```java
public java.lang.String getPrivateKeyPassphraseSecretIdInput();
```

- *Type:* java.lang.String

---

##### `producerPropertiesInput`<sup>Optional</sup> <a name="producerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput"></a>

```java
public java.lang.String getProducerPropertiesInput();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintInput`<sup>Optional</sup> <a name="publicKeyFingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput"></a>

```java
public java.lang.String getPublicKeyFingerprintInput();
```

- *Type:* java.lang.String

---

##### `redisClusterIdInput`<sup>Optional</sup> <a name="redisClusterIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput"></a>

```java
public java.lang.String getRedisClusterIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routingMethodInput`<sup>Optional</sup> <a name="routingMethodInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput"></a>

```java
public java.lang.String getRoutingMethodInput();
```

- *Type:* java.lang.String

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput"></a>

```java
public java.lang.String getSasTokenInput();
```

- *Type:* java.lang.String

---

##### `sasTokenSecretIdInput`<sup>Optional</sup> <a name="sasTokenSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput"></a>

```java
public java.lang.String getSasTokenSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeySecretIdInput`<sup>Optional</sup> <a name="secretAccessKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput"></a>

```java
public java.lang.String getSecretAccessKeySecretIdInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput"></a>

```java
public java.lang.String getSecurityProtocolInput();
```

- *Type:* java.lang.String

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput"></a>

```java
public java.lang.String getServersInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountKeyFileInput`<sup>Optional</sup> <a name="serviceAccountKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput"></a>

```java
public java.lang.String getServiceAccountKeyFileInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountKeyFileSecretIdInput`<sup>Optional</sup> <a name="serviceAccountKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput"></a>

```java
public java.lang.String getServiceAccountKeyFileSecretIdInput();
```

- *Type:* java.lang.String

---

##### `sessionModeInput`<sup>Optional</sup> <a name="sessionModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput"></a>

```java
public java.lang.String getSessionModeInput();
```

- *Type:* java.lang.String

---

##### `shouldUseJndiInput`<sup>Optional</sup> <a name="shouldUseJndiInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput"></a>

```java
public java.lang.Object getShouldUseJndiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldValidateServerCertificateInput`<sup>Optional</sup> <a name="shouldValidateServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput"></a>

```java
public java.lang.Object getShouldValidateServerCertificateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput"></a>

```java
public java.lang.String getSslCaInput();
```

- *Type:* java.lang.String

---

##### `sslCertInput`<sup>Optional</sup> <a name="sslCertInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput"></a>

```java
public java.lang.String getSslCertInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeystashInput`<sup>Optional</sup> <a name="sslClientKeystashInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput"></a>

```java
public java.lang.String getSslClientKeystashInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeystashSecretIdInput`<sup>Optional</sup> <a name="sslClientKeystashSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput"></a>

```java
public java.lang.String getSslClientKeystashSecretIdInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeystoredbInput`<sup>Optional</sup> <a name="sslClientKeystoredbInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput"></a>

```java
public java.lang.String getSslClientKeystoredbInput();
```

- *Type:* java.lang.String

---

##### `sslClientKeystoredbSecretIdInput`<sup>Optional</sup> <a name="sslClientKeystoredbSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput"></a>

```java
public java.lang.String getSslClientKeystoredbSecretIdInput();
```

- *Type:* java.lang.String

---

##### `sslCrlInput`<sup>Optional</sup> <a name="sslCrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput"></a>

```java
public java.lang.String getSslCrlInput();
```

- *Type:* java.lang.String

---

##### `sslKeyInput`<sup>Optional</sup> <a name="sslKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput"></a>

```java
public java.lang.String getSslKeyInput();
```

- *Type:* java.lang.String

---

##### `sslKeyPasswordInput`<sup>Optional</sup> <a name="sslKeyPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput"></a>

```java
public java.lang.String getSslKeyPasswordInput();
```

- *Type:* java.lang.String

---

##### `sslKeyPasswordSecretIdInput`<sup>Optional</sup> <a name="sslKeyPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput"></a>

```java
public java.lang.String getSslKeyPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `sslKeySecretIdInput`<sup>Optional</sup> <a name="sslKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput"></a>

```java
public java.lang.String getSslKeySecretIdInput();
```

- *Type:* java.lang.String

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput"></a>

```java
public java.lang.String getSslModeInput();
```

- *Type:* java.lang.String

---

##### `sslServerCertificateInput`<sup>Optional</sup> <a name="sslServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput"></a>

```java
public java.lang.String getSslServerCertificateInput();
```

- *Type:* java.lang.String

---

##### `streamPoolIdInput`<sup>Optional</sup> <a name="streamPoolIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput"></a>

```java
public java.lang.String getStreamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `technologyTypeInput`<sup>Optional</sup> <a name="technologyTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput"></a>

```java
public java.lang.String getTechnologyTypeInput();
```

- *Type:* java.lang.String

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput"></a>

```java
public java.lang.String getTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---

##### `triggerRefreshInput`<sup>Optional</sup> <a name="triggerRefreshInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput"></a>

```java
public java.lang.Object getTriggerRefreshInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput"></a>

```java
public java.lang.String getTrustStoreInput();
```

- *Type:* java.lang.String

---

##### `trustStorePasswordInput`<sup>Optional</sup> <a name="trustStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput"></a>

```java
public java.lang.String getTrustStorePasswordInput();
```

- *Type:* java.lang.String

---

##### `trustStorePasswordSecretIdInput`<sup>Optional</sup> <a name="trustStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput"></a>

```java
public java.lang.String getTrustStorePasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `trustStoreSecretIdInput`<sup>Optional</sup> <a name="trustStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput"></a>

```java
public java.lang.String getTrustStoreSecretIdInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `walletInput`<sup>Optional</sup> <a name="walletInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput"></a>

```java
public java.lang.String getWalletInput();
```

- *Type:* java.lang.String

---

##### `walletSecretIdInput`<sup>Optional</sup> <a name="walletSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput"></a>

```java
public java.lang.String getWalletSecretIdInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `accountKeySecretId`<sup>Required</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId"></a>

```java
public java.lang.String getAccountKeySecretId();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretSecretId`<sup>Required</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId"></a>

```java
public java.lang.String getClientSecretSecretId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionFactory`<sup>Required</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory"></a>

```java
public java.lang.String getConnectionFactory();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `consumerProperties`<sup>Required</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties"></a>

```java
public java.lang.String getConsumerProperties();
```

- *Type:* java.lang.String

---

##### `coreSiteXml`<sup>Required</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml"></a>

```java
public java.lang.String getCoreSiteXml();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `doesUseSecretIds`<sup>Required</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds"></a>

```java
public java.lang.Object getDoesUseSecretIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jndiConnectionFactory`<sup>Required</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory"></a>

```java
public java.lang.String getJndiConnectionFactory();
```

- *Type:* java.lang.String

---

##### `jndiInitialContextFactory`<sup>Required</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory"></a>

```java
public java.lang.String getJndiInitialContextFactory();
```

- *Type:* java.lang.String

---

##### `jndiProviderUrl`<sup>Required</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl"></a>

```java
public java.lang.String getJndiProviderUrl();
```

- *Type:* java.lang.String

---

##### `jndiSecurityCredentials`<sup>Required</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials"></a>

```java
public java.lang.String getJndiSecurityCredentials();
```

- *Type:* java.lang.String

---

##### `jndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```java
public java.lang.String getJndiSecurityCredentialsSecretId();
```

- *Type:* java.lang.String

---

##### `jndiSecurityPrincipal`<sup>Required</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal"></a>

```java
public java.lang.String getJndiSecurityPrincipal();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore"></a>

```java
public java.lang.String getKeyStore();
```

- *Type:* java.lang.String

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

---

##### `keyStorePasswordSecretId`<sup>Required</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId"></a>

```java
public java.lang.String getKeyStorePasswordSecretId();
```

- *Type:* java.lang.String

---

##### `keyStoreSecretId`<sup>Required</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId"></a>

```java
public java.lang.String getKeyStoreSecretId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `privateKeyFile`<sup>Required</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile"></a>

```java
public java.lang.String getPrivateKeyFile();
```

- *Type:* java.lang.String

---

##### `privateKeyFileSecretId`<sup>Required</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId"></a>

```java
public java.lang.String getPrivateKeyFileSecretId();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseSecretId`<sup>Required</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```java
public java.lang.String getPrivateKeyPassphraseSecretId();
```

- *Type:* java.lang.String

---

##### `producerProperties`<sup>Required</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties"></a>

```java
public java.lang.String getProducerProperties();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprint`<sup>Required</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint"></a>

```java
public java.lang.String getPublicKeyFingerprint();
```

- *Type:* java.lang.String

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId"></a>

```java
public java.lang.String getRedisClusterId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routingMethod`<sup>Required</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod"></a>

```java
public java.lang.String getRoutingMethod();
```

- *Type:* java.lang.String

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

---

##### `sasTokenSecretId`<sup>Required</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId"></a>

```java
public java.lang.String getSasTokenSecretId();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `secretAccessKeySecretId`<sup>Required</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId"></a>

```java
public java.lang.String getSecretAccessKeySecretId();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers"></a>

```java
public java.lang.String getServers();
```

- *Type:* java.lang.String

---

##### `serviceAccountKeyFile`<sup>Required</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile"></a>

```java
public java.lang.String getServiceAccountKeyFile();
```

- *Type:* java.lang.String

---

##### `serviceAccountKeyFileSecretId`<sup>Required</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```java
public java.lang.String getServiceAccountKeyFileSecretId();
```

- *Type:* java.lang.String

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode"></a>

```java
public java.lang.String getSessionMode();
```

- *Type:* java.lang.String

---

##### `shouldUseJndi`<sup>Required</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi"></a>

```java
public java.lang.Object getShouldUseJndi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldValidateServerCertificate`<sup>Required</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate"></a>

```java
public java.lang.Object getShouldValidateServerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert"></a>

```java
public java.lang.String getSslCert();
```

- *Type:* java.lang.String

---

##### `sslClientKeystash`<sup>Required</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash"></a>

```java
public java.lang.String getSslClientKeystash();
```

- *Type:* java.lang.String

---

##### `sslClientKeystashSecretId`<sup>Required</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId"></a>

```java
public java.lang.String getSslClientKeystashSecretId();
```

- *Type:* java.lang.String

---

##### `sslClientKeystoredb`<sup>Required</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb"></a>

```java
public java.lang.String getSslClientKeystoredb();
```

- *Type:* java.lang.String

---

##### `sslClientKeystoredbSecretId`<sup>Required</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```java
public java.lang.String getSslClientKeystoredbSecretId();
```

- *Type:* java.lang.String

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl"></a>

```java
public java.lang.String getSslCrl();
```

- *Type:* java.lang.String

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey"></a>

```java
public java.lang.String getSslKey();
```

- *Type:* java.lang.String

---

##### `sslKeyPassword`<sup>Required</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword"></a>

```java
public java.lang.String getSslKeyPassword();
```

- *Type:* java.lang.String

---

##### `sslKeyPasswordSecretId`<sup>Required</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```java
public java.lang.String getSslKeyPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `sslKeySecretId`<sup>Required</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId"></a>

```java
public java.lang.String getSslKeySecretId();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `sslServerCertificate`<sup>Required</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate"></a>

```java
public java.lang.String getSslServerCertificate();
```

- *Type:* java.lang.String

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId"></a>

```java
public java.lang.String getStreamPoolId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType"></a>

```java
public java.lang.String getTechnologyType();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `triggerRefresh`<sup>Required</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh"></a>

```java
public java.lang.Object getTriggerRefresh();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore"></a>

```java
public java.lang.String getTrustStore();
```

- *Type:* java.lang.String

---

##### `trustStorePassword`<sup>Required</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword"></a>

```java
public java.lang.String getTrustStorePassword();
```

- *Type:* java.lang.String

---

##### `trustStorePasswordSecretId`<sup>Required</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId"></a>

```java
public java.lang.String getTrustStorePasswordSecretId();
```

- *Type:* java.lang.String

---

##### `trustStoreSecretId`<sup>Required</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId"></a>

```java
public java.lang.String getTrustStoreSecretId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet"></a>

```java
public java.lang.String getWallet();
```

- *Type:* java.lang.String

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId"></a>

```java
public java.lang.String getWalletSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateConnectionAdditionalAttributes <a name="GoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionAdditionalAttributes;

GoldenGateConnectionAdditionalAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}.

---

### GoldenGateConnectionBootstrapServers <a name="GoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionBootstrapServers;

GoldenGateConnectionBootstrapServers.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .privateIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

### GoldenGateConnectionConfig <a name="GoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionConfig;

GoldenGateConnectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .connectionType(java.lang.String)
    .displayName(java.lang.String)
    .technologyType(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .accountKey(java.lang.String)
//  .accountKeySecretId(java.lang.String)
//  .accountName(java.lang.String)
//  .additionalAttributes(IResolvable)
//  .additionalAttributes(java.util.List<GoldenGateConnectionAdditionalAttributes>)
//  .authenticationMode(java.lang.String)
//  .authenticationType(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .bootstrapServers(IResolvable)
//  .bootstrapServers(java.util.List<GoldenGateConnectionBootstrapServers>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .clientSecretSecretId(java.lang.String)
//  .connectionFactory(java.lang.String)
//  .connectionString(java.lang.String)
//  .connectionUrl(java.lang.String)
//  .consumerProperties(java.lang.String)
//  .coreSiteXml(java.lang.String)
//  .databaseId(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentId(java.lang.String)
//  .description(java.lang.String)
//  .doesUseSecretIds(java.lang.Boolean)
//  .doesUseSecretIds(IResolvable)
//  .endpoint(java.lang.String)
//  .fingerprint(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .jndiConnectionFactory(java.lang.String)
//  .jndiInitialContextFactory(java.lang.String)
//  .jndiProviderUrl(java.lang.String)
//  .jndiSecurityCredentials(java.lang.String)
//  .jndiSecurityCredentialsSecretId(java.lang.String)
//  .jndiSecurityPrincipal(java.lang.String)
//  .keyId(java.lang.String)
//  .keyStore(java.lang.String)
//  .keyStorePassword(java.lang.String)
//  .keyStorePasswordSecretId(java.lang.String)
//  .keyStoreSecretId(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<GoldenGateConnectionLocks>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .password(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .port(java.lang.Number)
//  .privateIp(java.lang.String)
//  .privateKeyFile(java.lang.String)
//  .privateKeyFileSecretId(java.lang.String)
//  .privateKeyPassphrase(java.lang.String)
//  .privateKeyPassphraseSecretId(java.lang.String)
//  .producerProperties(java.lang.String)
//  .publicKeyFingerprint(java.lang.String)
//  .redisClusterId(java.lang.String)
//  .region(java.lang.String)
//  .routingMethod(java.lang.String)
//  .sasToken(java.lang.String)
//  .sasTokenSecretId(java.lang.String)
//  .secretAccessKey(java.lang.String)
//  .secretAccessKeySecretId(java.lang.String)
//  .securityProtocol(java.lang.String)
//  .servers(java.lang.String)
//  .serviceAccountKeyFile(java.lang.String)
//  .serviceAccountKeyFileSecretId(java.lang.String)
//  .sessionMode(java.lang.String)
//  .shouldUseJndi(java.lang.Boolean)
//  .shouldUseJndi(IResolvable)
//  .shouldValidateServerCertificate(java.lang.Boolean)
//  .shouldValidateServerCertificate(IResolvable)
//  .sslCa(java.lang.String)
//  .sslCert(java.lang.String)
//  .sslClientKeystash(java.lang.String)
//  .sslClientKeystashSecretId(java.lang.String)
//  .sslClientKeystoredb(java.lang.String)
//  .sslClientKeystoredbSecretId(java.lang.String)
//  .sslCrl(java.lang.String)
//  .sslKey(java.lang.String)
//  .sslKeyPassword(java.lang.String)
//  .sslKeyPasswordSecretId(java.lang.String)
//  .sslKeySecretId(java.lang.String)
//  .sslMode(java.lang.String)
//  .sslServerCertificate(java.lang.String)
//  .streamPoolId(java.lang.String)
//  .subnetId(java.lang.String)
//  .tenancyId(java.lang.String)
//  .timeouts(GoldenGateConnectionTimeouts)
//  .triggerRefresh(java.lang.Boolean)
//  .triggerRefresh(IResolvable)
//  .trustStore(java.lang.String)
//  .trustStorePassword(java.lang.String)
//  .trustStorePasswordSecretId(java.lang.String)
//  .trustStoreSecretId(java.lang.String)
//  .url(java.lang.String)
//  .userId(java.lang.String)
//  .username(java.lang.String)
//  .vaultId(java.lang.String)
//  .wallet(java.lang.String)
//  .walletSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType">technologyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId">accountKeySecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes">additionalAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>></code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>></code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory">connectionFactory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties">consumerProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml">coreSiteXml</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore">keyStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile">privateKeyFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties">producerProperties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod">routingMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers">servers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi">shouldUseJndi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert">sslCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash">sslClientKeystash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey">sslKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword">sslKeyPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId">sslKeySecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate">sslServerCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId">streamPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh">triggerRefresh</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore">trustStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword">trustStorePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet">wallet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId">walletSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType"></a>

```java
public java.lang.String getTechnologyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `accountKeySecretId`<sup>Optional</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId"></a>

```java
public java.lang.String getAccountKeySecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `additionalAttributes`<sup>Optional</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes"></a>

```java
public java.lang.Object getAdditionalAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>>

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `bootstrapServers`<sup>Optional</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers"></a>

```java
public java.lang.Object getBootstrapServers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>>

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `clientSecretSecretId`<sup>Optional</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId"></a>

```java
public java.lang.String getClientSecretSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `connectionFactory`<sup>Optional</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory"></a>

```java
public java.lang.String getConnectionFactory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `consumerProperties`<sup>Optional</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties"></a>

```java
public java.lang.String getConsumerProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `coreSiteXml`<sup>Optional</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml"></a>

```java
public java.lang.String getCoreSiteXml();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `doesUseSecretIds`<sup>Optional</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds"></a>

```java
public java.lang.Object getDoesUseSecretIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `jndiConnectionFactory`<sup>Optional</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory"></a>

```java
public java.lang.String getJndiConnectionFactory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `jndiInitialContextFactory`<sup>Optional</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory"></a>

```java
public java.lang.String getJndiInitialContextFactory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `jndiProviderUrl`<sup>Optional</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl"></a>

```java
public java.lang.String getJndiProviderUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `jndiSecurityCredentials`<sup>Optional</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials"></a>

```java
public java.lang.String getJndiSecurityCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `jndiSecurityCredentialsSecretId`<sup>Optional</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId"></a>

```java
public java.lang.String getJndiSecurityCredentialsSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `jndiSecurityPrincipal`<sup>Optional</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal"></a>

```java
public java.lang.String getJndiSecurityPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `keyStore`<sup>Optional</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore"></a>

```java
public java.lang.String getKeyStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `keyStorePasswordSecretId`<sup>Optional</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId"></a>

```java
public java.lang.String getKeyStorePasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `keyStoreSecretId`<sup>Optional</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId"></a>

```java
public java.lang.String getKeyStoreSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `privateKeyFile`<sup>Optional</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile"></a>

```java
public java.lang.String getPrivateKeyFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `privateKeyFileSecretId`<sup>Optional</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId"></a>

```java
public java.lang.String getPrivateKeyFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `privateKeyPassphraseSecretId`<sup>Optional</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId"></a>

```java
public java.lang.String getPrivateKeyPassphraseSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `producerProperties`<sup>Optional</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties"></a>

```java
public java.lang.String getProducerProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `publicKeyFingerprint`<sup>Optional</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint"></a>

```java
public java.lang.String getPublicKeyFingerprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `redisClusterId`<sup>Optional</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId"></a>

```java
public java.lang.String getRedisClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `routingMethod`<sup>Optional</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod"></a>

```java
public java.lang.String getRoutingMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `sasTokenSecretId`<sup>Optional</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId"></a>

```java
public java.lang.String getSasTokenSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `secretAccessKeySecretId`<sup>Optional</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId"></a>

```java
public java.lang.String getSecretAccessKeySecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers"></a>

```java
public java.lang.String getServers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `serviceAccountKeyFile`<sup>Optional</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile"></a>

```java
public java.lang.String getServiceAccountKeyFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `serviceAccountKeyFileSecretId`<sup>Optional</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId"></a>

```java
public java.lang.String getServiceAccountKeyFileSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `sessionMode`<sup>Optional</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode"></a>

```java
public java.lang.String getSessionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `shouldUseJndi`<sup>Optional</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi"></a>

```java
public java.lang.Object getShouldUseJndi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `shouldValidateServerCertificate`<sup>Optional</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate"></a>

```java
public java.lang.Object getShouldValidateServerCertificate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `sslCert`<sup>Optional</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert"></a>

```java
public java.lang.String getSslCert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `sslClientKeystash`<sup>Optional</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash"></a>

```java
public java.lang.String getSslClientKeystash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `sslClientKeystashSecretId`<sup>Optional</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId"></a>

```java
public java.lang.String getSslClientKeystashSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `sslClientKeystoredb`<sup>Optional</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb"></a>

```java
public java.lang.String getSslClientKeystoredb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `sslClientKeystoredbSecretId`<sup>Optional</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId"></a>

```java
public java.lang.String getSslClientKeystoredbSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `sslCrl`<sup>Optional</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl"></a>

```java
public java.lang.String getSslCrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `sslKey`<sup>Optional</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey"></a>

```java
public java.lang.String getSslKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `sslKeyPassword`<sup>Optional</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword"></a>

```java
public java.lang.String getSslKeyPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `sslKeyPasswordSecretId`<sup>Optional</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId"></a>

```java
public java.lang.String getSslKeyPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `sslKeySecretId`<sup>Optional</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId"></a>

```java
public java.lang.String getSslKeySecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `sslServerCertificate`<sup>Optional</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate"></a>

```java
public java.lang.String getSslServerCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `streamPoolId`<sup>Optional</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId"></a>

```java
public java.lang.String getStreamPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts"></a>

```java
public GoldenGateConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `triggerRefresh`<sup>Optional</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh"></a>

```java
public java.lang.Object getTriggerRefresh();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore"></a>

```java
public java.lang.String getTrustStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `trustStorePassword`<sup>Optional</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword"></a>

```java
public java.lang.String getTrustStorePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `trustStorePasswordSecretId`<sup>Optional</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId"></a>

```java
public java.lang.String getTrustStorePasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `trustStoreSecretId`<sup>Optional</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId"></a>

```java
public java.lang.String getTrustStoreSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet"></a>

```java
public java.lang.String getWallet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId"></a>

```java
public java.lang.String getWalletSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

### GoldenGateConnectionIngressIps <a name="GoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionIngressIps;

GoldenGateConnectionIngressIps.builder()
    .build();
```


### GoldenGateConnectionLocks <a name="GoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionLocks;

GoldenGateConnectionLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}.

---

### GoldenGateConnectionTimeouts <a name="GoldenGateConnectionTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionTimeouts;

GoldenGateConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateConnectionAdditionalAttributesList <a name="GoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionAdditionalAttributesList;

new GoldenGateConnectionAdditionalAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get"></a>

```java
public GoldenGateConnectionAdditionalAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>>

---


### GoldenGateConnectionAdditionalAttributesOutputReference <a name="GoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionAdditionalAttributesOutputReference;

new GoldenGateConnectionAdditionalAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>

---


### GoldenGateConnectionBootstrapServersList <a name="GoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionBootstrapServersList;

new GoldenGateConnectionBootstrapServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get"></a>

```java
public GoldenGateConnectionBootstrapServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>>

---


### GoldenGateConnectionBootstrapServersOutputReference <a name="GoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionBootstrapServersOutputReference;

new GoldenGateConnectionBootstrapServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>

---


### GoldenGateConnectionIngressIpsList <a name="GoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionIngressIpsList;

new GoldenGateConnectionIngressIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get"></a>

```java
public GoldenGateConnectionIngressIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoldenGateConnectionIngressIpsOutputReference <a name="GoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionIngressIpsOutputReference;

new GoldenGateConnectionIngressIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```java
public java.lang.String getIngressIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```java
public GoldenGateConnectionIngressIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a>

---


### GoldenGateConnectionLocksList <a name="GoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionLocksList;

new GoldenGateConnectionLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get"></a>

```java
public GoldenGateConnectionLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>>

---


### GoldenGateConnectionLocksOutputReference <a name="GoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionLocksOutputReference;

new GoldenGateConnectionLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>

---


### GoldenGateConnectionTimeoutsOutputReference <a name="GoldenGateConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_connection.GoldenGateConnectionTimeoutsOutputReference;

new GoldenGateConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---



