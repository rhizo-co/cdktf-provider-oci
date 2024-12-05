# `goldenGateConnection` Submodule <a name="`goldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateConnection <a name="GoldenGateConnection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  connection_type: str,
  display_name: str,
  technology_type: str,
  access_key_id: str = None,
  account_key: str = None,
  account_key_secret_id: str = None,
  account_name: str = None,
  additional_attributes: typing.Union[IResolvable, typing.List[GoldenGateConnectionAdditionalAttributes]] = None,
  authentication_mode: str = None,
  authentication_type: str = None,
  azure_tenant_id: str = None,
  bootstrap_servers: typing.Union[IResolvable, typing.List[GoldenGateConnectionBootstrapServers]] = None,
  client_id: str = None,
  client_secret: str = None,
  client_secret_secret_id: str = None,
  connection_factory: str = None,
  connection_string: str = None,
  connection_url: str = None,
  consumer_properties: str = None,
  core_site_xml: str = None,
  database_id: str = None,
  database_name: str = None,
  db_system_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  deployment_id: str = None,
  description: str = None,
  does_use_secret_ids: typing.Union[bool, IResolvable] = None,
  endpoint: str = None,
  fingerprint: str = None,
  freeform_tags: typing.Mapping[str] = None,
  host: str = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  jndi_connection_factory: str = None,
  jndi_initial_context_factory: str = None,
  jndi_provider_url: str = None,
  jndi_security_credentials: str = None,
  jndi_security_credentials_secret_id: str = None,
  jndi_security_principal: str = None,
  key_id: str = None,
  key_store: str = None,
  key_store_password: str = None,
  key_store_password_secret_id: str = None,
  key_store_secret_id: str = None,
  locks: typing.Union[IResolvable, typing.List[GoldenGateConnectionLocks]] = None,
  nsg_ids: typing.List[str] = None,
  password: str = None,
  password_secret_id: str = None,
  port: typing.Union[int, float] = None,
  private_ip: str = None,
  private_key_file: str = None,
  private_key_file_secret_id: str = None,
  private_key_passphrase: str = None,
  private_key_passphrase_secret_id: str = None,
  producer_properties: str = None,
  public_key_fingerprint: str = None,
  redis_cluster_id: str = None,
  region: str = None,
  routing_method: str = None,
  sas_token: str = None,
  sas_token_secret_id: str = None,
  secret_access_key: str = None,
  secret_access_key_secret_id: str = None,
  security_protocol: str = None,
  servers: str = None,
  service_account_key_file: str = None,
  service_account_key_file_secret_id: str = None,
  session_mode: str = None,
  should_use_jndi: typing.Union[bool, IResolvable] = None,
  should_validate_server_certificate: typing.Union[bool, IResolvable] = None,
  ssl_ca: str = None,
  ssl_cert: str = None,
  ssl_client_keystash: str = None,
  ssl_client_keystash_secret_id: str = None,
  ssl_client_keystoredb: str = None,
  ssl_client_keystoredb_secret_id: str = None,
  ssl_crl: str = None,
  ssl_key: str = None,
  ssl_key_password: str = None,
  ssl_key_password_secret_id: str = None,
  ssl_key_secret_id: str = None,
  ssl_mode: str = None,
  ssl_server_certificate: str = None,
  stream_pool_id: str = None,
  subnet_id: str = None,
  tenancy_id: str = None,
  timeouts: GoldenGateConnectionTimeouts = None,
  trigger_refresh: typing.Union[bool, IResolvable] = None,
  trust_store: str = None,
  trust_store_password: str = None,
  trust_store_password_secret_id: str = None,
  trust_store_secret_id: str = None,
  url: str = None,
  user_id: str = None,
  username: str = None,
  vault_id: str = None,
  wallet: str = None,
  wallet_secret_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.technologyType">technology_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKeySecretId">account_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.additionalAttributes">additional_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.bootstrapServers">bootstrap_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]</code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecretSecretId">client_secret_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionFactory">connection_factory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionUrl">connection_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.consumerProperties">consumer_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.coreSiteXml">core_site_xml</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.doesUseSecretIds">does_use_secret_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.fingerprint">fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiConnectionFactory">jndi_connection_factory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiInitialContextFactory">jndi_initial_context_factory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiProviderUrl">jndi_provider_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentials">jndi_security_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentialsSecretId">jndi_security_credentials_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityPrincipal">jndi_security_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStore">key_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePasswordSecretId">key_store_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStoreSecretId">key_store_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFile">private_key_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFileSecretId">private_key_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphraseSecretId">private_key_passphrase_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.producerProperties">producer_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.publicKeyFingerprint">public_key_fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.redisClusterId">redis_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.routingMethod">routing_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasToken">sas_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasTokenSecretId">sas_token_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKeySecretId">secret_access_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.securityProtocol">security_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.servers">servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFile">service_account_key_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFileSecretId">service_account_key_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sessionMode">session_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldUseJndi">should_use_jndi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldValidateServerCertificate">should_validate_server_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCa">ssl_ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCert">ssl_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystash">ssl_client_keystash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystashSecretId">ssl_client_keystash_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredb">ssl_client_keystoredb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredbSecretId">ssl_client_keystoredb_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCrl">ssl_crl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKey">ssl_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPassword">ssl_key_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPasswordSecretId">ssl_key_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeySecretId">ssl_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslServerCertificate">ssl_server_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.streamPoolId">stream_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.triggerRefresh">trigger_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStore">trust_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePassword">trust_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePasswordSecretId">trust_store_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStoreSecretId">trust_store_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.wallet">wallet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.technologyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `account_key`<sup>Optional</sup> <a name="account_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `account_key_secret_id`<sup>Optional</sup> <a name="account_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountKeySecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `account_name`<sup>Optional</sup> <a name="account_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `additional_attributes`<sup>Optional</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.additionalAttributes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.azureTenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `bootstrap_servers`<sup>Optional</sup> <a name="bootstrap_servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.bootstrapServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `client_secret_secret_id`<sup>Optional</sup> <a name="client_secret_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.clientSecretSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `connection_factory`<sup>Optional</sup> <a name="connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionFactory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.connectionUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `consumer_properties`<sup>Optional</sup> <a name="consumer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.consumerProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `core_site_xml`<sup>Optional</sup> <a name="core_site_xml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.coreSiteXml"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `does_use_secret_ids`<sup>Optional</sup> <a name="does_use_secret_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.doesUseSecretIds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.endpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.fingerprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `jndi_connection_factory`<sup>Optional</sup> <a name="jndi_connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiConnectionFactory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `jndi_initial_context_factory`<sup>Optional</sup> <a name="jndi_initial_context_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiInitialContextFactory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `jndi_provider_url`<sup>Optional</sup> <a name="jndi_provider_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiProviderUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `jndi_security_credentials`<sup>Optional</sup> <a name="jndi_security_credentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `jndi_security_credentials_secret_id`<sup>Optional</sup> <a name="jndi_security_credentials_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityCredentialsSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `jndi_security_principal`<sup>Optional</sup> <a name="jndi_security_principal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.jndiSecurityPrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `key_store`<sup>Optional</sup> <a name="key_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `key_store_password_secret_id`<sup>Optional</sup> <a name="key_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStorePasswordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `key_store_secret_id`<sup>Optional</sup> <a name="key_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.keyStoreSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `private_key_file`<sup>Optional</sup> <a name="private_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `private_key_file_secret_id`<sup>Optional</sup> <a name="private_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphrase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `private_key_passphrase_secret_id`<sup>Optional</sup> <a name="private_key_passphrase_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.privateKeyPassphraseSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `producer_properties`<sup>Optional</sup> <a name="producer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.producerProperties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `public_key_fingerprint`<sup>Optional</sup> <a name="public_key_fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.publicKeyFingerprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `redis_cluster_id`<sup>Optional</sup> <a name="redis_cluster_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.redisClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `routing_method`<sup>Optional</sup> <a name="routing_method" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.routingMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `sas_token`<sup>Optional</sup> <a name="sas_token" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `sas_token_secret_id`<sup>Optional</sup> <a name="sas_token_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sasTokenSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `secret_access_key_secret_id`<sup>Optional</sup> <a name="secret_access_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.secretAccessKeySecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `security_protocol`<sup>Optional</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.securityProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.servers"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `service_account_key_file`<sup>Optional</sup> <a name="service_account_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `service_account_key_file_secret_id`<sup>Optional</sup> <a name="service_account_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.serviceAccountKeyFileSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `session_mode`<sup>Optional</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sessionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `should_use_jndi`<sup>Optional</sup> <a name="should_use_jndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldUseJndi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `should_validate_server_certificate`<sup>Optional</sup> <a name="should_validate_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.shouldValidateServerCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCa"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `ssl_cert`<sup>Optional</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCert"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `ssl_client_keystash`<sup>Optional</sup> <a name="ssl_client_keystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `ssl_client_keystash_secret_id`<sup>Optional</sup> <a name="ssl_client_keystash_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystashSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `ssl_client_keystoredb`<sup>Optional</sup> <a name="ssl_client_keystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `ssl_client_keystoredb_secret_id`<sup>Optional</sup> <a name="ssl_client_keystoredb_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslClientKeystoredbSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `ssl_crl`<sup>Optional</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslCrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `ssl_key`<sup>Optional</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `ssl_key_password`<sup>Optional</sup> <a name="ssl_key_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `ssl_key_password_secret_id`<sup>Optional</sup> <a name="ssl_key_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeyPasswordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `ssl_key_secret_id`<sup>Optional</sup> <a name="ssl_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslKeySecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `ssl_server_certificate`<sup>Optional</sup> <a name="ssl_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.sslServerCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `stream_pool_id`<sup>Optional</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.streamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `tenancy_id`<sup>Optional</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `trigger_refresh`<sup>Optional</sup> <a name="trigger_refresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.triggerRefresh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `trust_store`<sup>Optional</sup> <a name="trust_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `trust_store_password`<sup>Optional</sup> <a name="trust_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `trust_store_password_secret_id`<sup>Optional</sup> <a name="trust_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStorePasswordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `trust_store_secret_id`<sup>Optional</sup> <a name="trust_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.trustStoreSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.wallet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `wallet_secret_id`<sup>Optional</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.walletSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes">put_additional_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers">put_bootstrap_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey">reset_account_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId">reset_account_key_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName">reset_account_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes">reset_additional_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode">reset_authentication_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers">reset_bootstrap_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId">reset_client_secret_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory">reset_connection_factory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl">reset_connection_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties">reset_consumer_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml">reset_core_site_xml</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds">reset_does_use_secret_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint">reset_fingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory">reset_jndi_connection_factory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory">reset_jndi_initial_context_factory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl">reset_jndi_provider_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials">reset_jndi_security_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId">reset_jndi_security_credentials_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal">reset_jndi_security_principal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore">reset_key_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword">reset_key_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId">reset_key_store_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId">reset_key_store_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile">reset_private_key_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId">reset_private_key_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase">reset_private_key_passphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId">reset_private_key_passphrase_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties">reset_producer_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint">reset_public_key_fingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId">reset_redis_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod">reset_routing_method</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken">reset_sas_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId">reset_sas_token_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId">reset_secret_access_key_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol">reset_security_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers">reset_servers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile">reset_service_account_key_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId">reset_service_account_key_file_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode">reset_session_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi">reset_should_use_jndi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate">reset_should_validate_server_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa">reset_ssl_ca</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert">reset_ssl_cert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash">reset_ssl_client_keystash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId">reset_ssl_client_keystash_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb">reset_ssl_client_keystoredb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId">reset_ssl_client_keystoredb_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl">reset_ssl_crl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey">reset_ssl_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword">reset_ssl_key_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId">reset_ssl_key_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId">reset_ssl_key_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode">reset_ssl_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate">reset_ssl_server_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId">reset_stream_pool_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId">reset_tenancy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh">reset_trigger_refresh</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore">reset_trust_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword">reset_trust_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId">reset_trust_store_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId">reset_trust_store_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId">reset_vault_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet">reset_wallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId">reset_wallet_secret_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_attributes` <a name="put_additional_attributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes"></a>

```python
def put_additional_attributes(
  value: typing.Union[IResolvable, typing.List[GoldenGateConnectionAdditionalAttributes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]

---

##### `put_bootstrap_servers` <a name="put_bootstrap_servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers"></a>

```python
def put_bootstrap_servers(
  value: typing.Union[IResolvable, typing.List[GoldenGateConnectionBootstrapServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[GoldenGateConnectionLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}.

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_account_key` <a name="reset_account_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey"></a>

```python
def reset_account_key() -> None
```

##### `reset_account_key_secret_id` <a name="reset_account_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId"></a>

```python
def reset_account_key_secret_id() -> None
```

##### `reset_account_name` <a name="reset_account_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName"></a>

```python
def reset_account_name() -> None
```

##### `reset_additional_attributes` <a name="reset_additional_attributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes"></a>

```python
def reset_additional_attributes() -> None
```

##### `reset_authentication_mode` <a name="reset_authentication_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode"></a>

```python
def reset_authentication_mode() -> None
```

##### `reset_authentication_type` <a name="reset_authentication_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_bootstrap_servers` <a name="reset_bootstrap_servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers"></a>

```python
def reset_bootstrap_servers() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_secret_id` <a name="reset_client_secret_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId"></a>

```python
def reset_client_secret_secret_id() -> None
```

##### `reset_connection_factory` <a name="reset_connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory"></a>

```python
def reset_connection_factory() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_connection_url` <a name="reset_connection_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl"></a>

```python
def reset_connection_url() -> None
```

##### `reset_consumer_properties` <a name="reset_consumer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties"></a>

```python
def reset_consumer_properties() -> None
```

##### `reset_core_site_xml` <a name="reset_core_site_xml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml"></a>

```python
def reset_core_site_xml() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deployment_id` <a name="reset_deployment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_does_use_secret_ids` <a name="reset_does_use_secret_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds"></a>

```python
def reset_does_use_secret_ids() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_fingerprint` <a name="reset_fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_host` <a name="reset_host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_jndi_connection_factory` <a name="reset_jndi_connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory"></a>

```python
def reset_jndi_connection_factory() -> None
```

##### `reset_jndi_initial_context_factory` <a name="reset_jndi_initial_context_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory"></a>

```python
def reset_jndi_initial_context_factory() -> None
```

##### `reset_jndi_provider_url` <a name="reset_jndi_provider_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl"></a>

```python
def reset_jndi_provider_url() -> None
```

##### `reset_jndi_security_credentials` <a name="reset_jndi_security_credentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials"></a>

```python
def reset_jndi_security_credentials() -> None
```

##### `reset_jndi_security_credentials_secret_id` <a name="reset_jndi_security_credentials_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId"></a>

```python
def reset_jndi_security_credentials_secret_id() -> None
```

##### `reset_jndi_security_principal` <a name="reset_jndi_security_principal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal"></a>

```python
def reset_jndi_security_principal() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_key_store` <a name="reset_key_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore"></a>

```python
def reset_key_store() -> None
```

##### `reset_key_store_password` <a name="reset_key_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword"></a>

```python
def reset_key_store_password() -> None
```

##### `reset_key_store_password_secret_id` <a name="reset_key_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId"></a>

```python
def reset_key_store_password_secret_id() -> None
```

##### `reset_key_store_secret_id` <a name="reset_key_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId"></a>

```python
def reset_key_store_secret_id() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_private_key_file` <a name="reset_private_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile"></a>

```python
def reset_private_key_file() -> None
```

##### `reset_private_key_file_secret_id` <a name="reset_private_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId"></a>

```python
def reset_private_key_file_secret_id() -> None
```

##### `reset_private_key_passphrase` <a name="reset_private_key_passphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase"></a>

```python
def reset_private_key_passphrase() -> None
```

##### `reset_private_key_passphrase_secret_id` <a name="reset_private_key_passphrase_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId"></a>

```python
def reset_private_key_passphrase_secret_id() -> None
```

##### `reset_producer_properties` <a name="reset_producer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties"></a>

```python
def reset_producer_properties() -> None
```

##### `reset_public_key_fingerprint` <a name="reset_public_key_fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint"></a>

```python
def reset_public_key_fingerprint() -> None
```

##### `reset_redis_cluster_id` <a name="reset_redis_cluster_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId"></a>

```python
def reset_redis_cluster_id() -> None
```

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_routing_method` <a name="reset_routing_method" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod"></a>

```python
def reset_routing_method() -> None
```

##### `reset_sas_token` <a name="reset_sas_token" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken"></a>

```python
def reset_sas_token() -> None
```

##### `reset_sas_token_secret_id` <a name="reset_sas_token_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId"></a>

```python
def reset_sas_token_secret_id() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```

##### `reset_secret_access_key_secret_id` <a name="reset_secret_access_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId"></a>

```python
def reset_secret_access_key_secret_id() -> None
```

##### `reset_security_protocol` <a name="reset_security_protocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol"></a>

```python
def reset_security_protocol() -> None
```

##### `reset_servers` <a name="reset_servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers"></a>

```python
def reset_servers() -> None
```

##### `reset_service_account_key_file` <a name="reset_service_account_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile"></a>

```python
def reset_service_account_key_file() -> None
```

##### `reset_service_account_key_file_secret_id` <a name="reset_service_account_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId"></a>

```python
def reset_service_account_key_file_secret_id() -> None
```

##### `reset_session_mode` <a name="reset_session_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode"></a>

```python
def reset_session_mode() -> None
```

##### `reset_should_use_jndi` <a name="reset_should_use_jndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi"></a>

```python
def reset_should_use_jndi() -> None
```

##### `reset_should_validate_server_certificate` <a name="reset_should_validate_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate"></a>

```python
def reset_should_validate_server_certificate() -> None
```

##### `reset_ssl_ca` <a name="reset_ssl_ca" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa"></a>

```python
def reset_ssl_ca() -> None
```

##### `reset_ssl_cert` <a name="reset_ssl_cert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert"></a>

```python
def reset_ssl_cert() -> None
```

##### `reset_ssl_client_keystash` <a name="reset_ssl_client_keystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash"></a>

```python
def reset_ssl_client_keystash() -> None
```

##### `reset_ssl_client_keystash_secret_id` <a name="reset_ssl_client_keystash_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId"></a>

```python
def reset_ssl_client_keystash_secret_id() -> None
```

##### `reset_ssl_client_keystoredb` <a name="reset_ssl_client_keystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb"></a>

```python
def reset_ssl_client_keystoredb() -> None
```

##### `reset_ssl_client_keystoredb_secret_id` <a name="reset_ssl_client_keystoredb_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId"></a>

```python
def reset_ssl_client_keystoredb_secret_id() -> None
```

##### `reset_ssl_crl` <a name="reset_ssl_crl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl"></a>

```python
def reset_ssl_crl() -> None
```

##### `reset_ssl_key` <a name="reset_ssl_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey"></a>

```python
def reset_ssl_key() -> None
```

##### `reset_ssl_key_password` <a name="reset_ssl_key_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword"></a>

```python
def reset_ssl_key_password() -> None
```

##### `reset_ssl_key_password_secret_id` <a name="reset_ssl_key_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId"></a>

```python
def reset_ssl_key_password_secret_id() -> None
```

##### `reset_ssl_key_secret_id` <a name="reset_ssl_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId"></a>

```python
def reset_ssl_key_secret_id() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```

##### `reset_ssl_server_certificate` <a name="reset_ssl_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate"></a>

```python
def reset_ssl_server_certificate() -> None
```

##### `reset_stream_pool_id` <a name="reset_stream_pool_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId"></a>

```python
def reset_stream_pool_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tenancy_id` <a name="reset_tenancy_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId"></a>

```python
def reset_tenancy_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trigger_refresh` <a name="reset_trigger_refresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh"></a>

```python
def reset_trigger_refresh() -> None
```

##### `reset_trust_store` <a name="reset_trust_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore"></a>

```python
def reset_trust_store() -> None
```

##### `reset_trust_store_password` <a name="reset_trust_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword"></a>

```python
def reset_trust_store_password() -> None
```

##### `reset_trust_store_password_secret_id` <a name="reset_trust_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId"></a>

```python
def reset_trust_store_password_secret_id() -> None
```

##### `reset_trust_store_secret_id` <a name="reset_trust_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId"></a>

```python
def reset_trust_store_secret_id() -> None
```

##### `reset_url` <a name="reset_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId"></a>

```python
def reset_vault_id() -> None
```

##### `reset_wallet` <a name="reset_wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet"></a>

```python
def reset_wallet() -> None
```

##### `reset_wallet_secret_id` <a name="reset_wallet_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId"></a>

```python
def reset_wallet_secret_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnection.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoldenGateConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes">additional_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers">bootstrap_servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps">ingress_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput">account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput">account_key_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput">additional_attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput">authentication_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput">bootstrap_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput">client_secret_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput">connection_factory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput">connection_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput">consumer_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput">core_site_xml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput">does_use_secret_ids_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput">jndi_connection_factory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput">jndi_initial_context_factory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput">jndi_provider_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput">jndi_security_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput">jndi_security_credentials_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput">jndi_security_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput">key_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput">key_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput">key_store_password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput">key_store_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput">private_key_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput">private_key_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput">private_key_passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput">private_key_passphrase_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput">producer_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput">public_key_fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput">redis_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput">routing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput">sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput">sas_token_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput">secret_access_key_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput">security_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput">servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput">service_account_key_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput">service_account_key_file_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput">session_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput">should_use_jndi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput">should_validate_server_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput">ssl_ca_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput">ssl_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput">ssl_client_keystash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput">ssl_client_keystash_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput">ssl_client_keystoredb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput">ssl_client_keystoredb_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput">ssl_crl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput">ssl_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput">ssl_key_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput">ssl_key_password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput">ssl_key_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput">ssl_server_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput">stream_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput">technology_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput">trigger_refresh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput">trust_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput">trust_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput">trust_store_password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput">trust_store_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput">wallet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput">wallet_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey">account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId">account_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId">client_secret_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory">connection_factory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl">connection_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties">consumer_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml">core_site_xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds">does_use_secret_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory">jndi_connection_factory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory">jndi_initial_context_factory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl">jndi_provider_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials">jndi_security_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId">jndi_security_credentials_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal">jndi_security_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore">key_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId">key_store_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId">key_store_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile">private_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId">private_key_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId">private_key_passphrase_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties">producer_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint">public_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId">redis_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod">routing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId">sas_token_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId">secret_access_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol">security_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers">servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile">service_account_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId">service_account_key_file_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi">should_use_jndi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate">should_validate_server_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa">ssl_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert">ssl_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash">ssl_client_keystash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId">ssl_client_keystash_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb">ssl_client_keystoredb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId">ssl_client_keystoredb_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl">ssl_crl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey">ssl_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword">ssl_key_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId">ssl_key_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId">ssl_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate">ssl_server_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId">stream_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType">technology_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh">trigger_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore">trust_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword">trust_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId">trust_store_password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId">trust_store_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet">wallet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_attributes`<sup>Required</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes"></a>

```python
additional_attributes: GoldenGateConnectionAdditionalAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a>

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers"></a>

```python
bootstrap_servers: GoldenGateConnectionBootstrapServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a>

---

##### `ingress_ips`<sup>Required</sup> <a name="ingress_ips" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps"></a>

```python
ingress_ips: GoldenGateConnectionIngressIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks"></a>

```python
locks: GoldenGateConnectionLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts"></a>

```python
timeouts: GoldenGateConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `account_key_input`<sup>Optional</sup> <a name="account_key_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput"></a>

```python
account_key_input: str
```

- *Type:* str

---

##### `account_key_secret_id_input`<sup>Optional</sup> <a name="account_key_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput"></a>

```python
account_key_secret_id_input: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `additional_attributes_input`<sup>Optional</sup> <a name="additional_attributes_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput"></a>

```python
additional_attributes_input: typing.Union[IResolvable, typing.List[GoldenGateConnectionAdditionalAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]

---

##### `authentication_mode_input`<sup>Optional</sup> <a name="authentication_mode_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput"></a>

```python
authentication_mode_input: str
```

- *Type:* str

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `bootstrap_servers_input`<sup>Optional</sup> <a name="bootstrap_servers_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput"></a>

```python
bootstrap_servers_input: typing.Union[IResolvable, typing.List[GoldenGateConnectionBootstrapServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_secret_secret_id_input`<sup>Optional</sup> <a name="client_secret_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput"></a>

```python
client_secret_secret_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `connection_factory_input`<sup>Optional</sup> <a name="connection_factory_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput"></a>

```python
connection_factory_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `connection_url_input`<sup>Optional</sup> <a name="connection_url_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput"></a>

```python
connection_url_input: str
```

- *Type:* str

---

##### `consumer_properties_input`<sup>Optional</sup> <a name="consumer_properties_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput"></a>

```python
consumer_properties_input: str
```

- *Type:* str

---

##### `core_site_xml_input`<sup>Optional</sup> <a name="core_site_xml_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput"></a>

```python
core_site_xml_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `does_use_secret_ids_input`<sup>Optional</sup> <a name="does_use_secret_ids_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput"></a>

```python
does_use_secret_ids_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jndi_connection_factory_input`<sup>Optional</sup> <a name="jndi_connection_factory_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput"></a>

```python
jndi_connection_factory_input: str
```

- *Type:* str

---

##### `jndi_initial_context_factory_input`<sup>Optional</sup> <a name="jndi_initial_context_factory_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput"></a>

```python
jndi_initial_context_factory_input: str
```

- *Type:* str

---

##### `jndi_provider_url_input`<sup>Optional</sup> <a name="jndi_provider_url_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput"></a>

```python
jndi_provider_url_input: str
```

- *Type:* str

---

##### `jndi_security_credentials_input`<sup>Optional</sup> <a name="jndi_security_credentials_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput"></a>

```python
jndi_security_credentials_input: str
```

- *Type:* str

---

##### `jndi_security_credentials_secret_id_input`<sup>Optional</sup> <a name="jndi_security_credentials_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput"></a>

```python
jndi_security_credentials_secret_id_input: str
```

- *Type:* str

---

##### `jndi_security_principal_input`<sup>Optional</sup> <a name="jndi_security_principal_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput"></a>

```python
jndi_security_principal_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_store_input`<sup>Optional</sup> <a name="key_store_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput"></a>

```python
key_store_input: str
```

- *Type:* str

---

##### `key_store_password_input`<sup>Optional</sup> <a name="key_store_password_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput"></a>

```python
key_store_password_input: str
```

- *Type:* str

---

##### `key_store_password_secret_id_input`<sup>Optional</sup> <a name="key_store_password_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput"></a>

```python
key_store_password_secret_id_input: str
```

- *Type:* str

---

##### `key_store_secret_id_input`<sup>Optional</sup> <a name="key_store_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput"></a>

```python
key_store_secret_id_input: str
```

- *Type:* str

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[GoldenGateConnectionLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `private_key_file_input`<sup>Optional</sup> <a name="private_key_file_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput"></a>

```python
private_key_file_input: str
```

- *Type:* str

---

##### `private_key_file_secret_id_input`<sup>Optional</sup> <a name="private_key_file_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput"></a>

```python
private_key_file_secret_id_input: str
```

- *Type:* str

---

##### `private_key_passphrase_input`<sup>Optional</sup> <a name="private_key_passphrase_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput"></a>

```python
private_key_passphrase_input: str
```

- *Type:* str

---

##### `private_key_passphrase_secret_id_input`<sup>Optional</sup> <a name="private_key_passphrase_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput"></a>

```python
private_key_passphrase_secret_id_input: str
```

- *Type:* str

---

##### `producer_properties_input`<sup>Optional</sup> <a name="producer_properties_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput"></a>

```python
producer_properties_input: str
```

- *Type:* str

---

##### `public_key_fingerprint_input`<sup>Optional</sup> <a name="public_key_fingerprint_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput"></a>

```python
public_key_fingerprint_input: str
```

- *Type:* str

---

##### `redis_cluster_id_input`<sup>Optional</sup> <a name="redis_cluster_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput"></a>

```python
redis_cluster_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `routing_method_input`<sup>Optional</sup> <a name="routing_method_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput"></a>

```python
routing_method_input: str
```

- *Type:* str

---

##### `sas_token_input`<sup>Optional</sup> <a name="sas_token_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput"></a>

```python
sas_token_input: str
```

- *Type:* str

---

##### `sas_token_secret_id_input`<sup>Optional</sup> <a name="sas_token_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput"></a>

```python
sas_token_secret_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `secret_access_key_secret_id_input`<sup>Optional</sup> <a name="secret_access_key_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput"></a>

```python
secret_access_key_secret_id_input: str
```

- *Type:* str

---

##### `security_protocol_input`<sup>Optional</sup> <a name="security_protocol_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput"></a>

```python
security_protocol_input: str
```

- *Type:* str

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput"></a>

```python
servers_input: str
```

- *Type:* str

---

##### `service_account_key_file_input`<sup>Optional</sup> <a name="service_account_key_file_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput"></a>

```python
service_account_key_file_input: str
```

- *Type:* str

---

##### `service_account_key_file_secret_id_input`<sup>Optional</sup> <a name="service_account_key_file_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput"></a>

```python
service_account_key_file_secret_id_input: str
```

- *Type:* str

---

##### `session_mode_input`<sup>Optional</sup> <a name="session_mode_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput"></a>

```python
session_mode_input: str
```

- *Type:* str

---

##### `should_use_jndi_input`<sup>Optional</sup> <a name="should_use_jndi_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput"></a>

```python
should_use_jndi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_validate_server_certificate_input`<sup>Optional</sup> <a name="should_validate_server_certificate_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput"></a>

```python
should_validate_server_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_ca_input`<sup>Optional</sup> <a name="ssl_ca_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput"></a>

```python
ssl_ca_input: str
```

- *Type:* str

---

##### `ssl_cert_input`<sup>Optional</sup> <a name="ssl_cert_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput"></a>

```python
ssl_cert_input: str
```

- *Type:* str

---

##### `ssl_client_keystash_input`<sup>Optional</sup> <a name="ssl_client_keystash_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput"></a>

```python
ssl_client_keystash_input: str
```

- *Type:* str

---

##### `ssl_client_keystash_secret_id_input`<sup>Optional</sup> <a name="ssl_client_keystash_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput"></a>

```python
ssl_client_keystash_secret_id_input: str
```

- *Type:* str

---

##### `ssl_client_keystoredb_input`<sup>Optional</sup> <a name="ssl_client_keystoredb_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput"></a>

```python
ssl_client_keystoredb_input: str
```

- *Type:* str

---

##### `ssl_client_keystoredb_secret_id_input`<sup>Optional</sup> <a name="ssl_client_keystoredb_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput"></a>

```python
ssl_client_keystoredb_secret_id_input: str
```

- *Type:* str

---

##### `ssl_crl_input`<sup>Optional</sup> <a name="ssl_crl_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput"></a>

```python
ssl_crl_input: str
```

- *Type:* str

---

##### `ssl_key_input`<sup>Optional</sup> <a name="ssl_key_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput"></a>

```python
ssl_key_input: str
```

- *Type:* str

---

##### `ssl_key_password_input`<sup>Optional</sup> <a name="ssl_key_password_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput"></a>

```python
ssl_key_password_input: str
```

- *Type:* str

---

##### `ssl_key_password_secret_id_input`<sup>Optional</sup> <a name="ssl_key_password_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput"></a>

```python
ssl_key_password_secret_id_input: str
```

- *Type:* str

---

##### `ssl_key_secret_id_input`<sup>Optional</sup> <a name="ssl_key_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput"></a>

```python
ssl_key_secret_id_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `ssl_server_certificate_input`<sup>Optional</sup> <a name="ssl_server_certificate_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput"></a>

```python
ssl_server_certificate_input: str
```

- *Type:* str

---

##### `stream_pool_id_input`<sup>Optional</sup> <a name="stream_pool_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput"></a>

```python
stream_pool_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `technology_type_input`<sup>Optional</sup> <a name="technology_type_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput"></a>

```python
technology_type_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoldenGateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>]

---

##### `trigger_refresh_input`<sup>Optional</sup> <a name="trigger_refresh_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput"></a>

```python
trigger_refresh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `trust_store_input`<sup>Optional</sup> <a name="trust_store_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput"></a>

```python
trust_store_input: str
```

- *Type:* str

---

##### `trust_store_password_input`<sup>Optional</sup> <a name="trust_store_password_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput"></a>

```python
trust_store_password_input: str
```

- *Type:* str

---

##### `trust_store_password_secret_id_input`<sup>Optional</sup> <a name="trust_store_password_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput"></a>

```python
trust_store_password_secret_id_input: str
```

- *Type:* str

---

##### `trust_store_secret_id_input`<sup>Optional</sup> <a name="trust_store_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput"></a>

```python
trust_store_secret_id_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `wallet_input`<sup>Optional</sup> <a name="wallet_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput"></a>

```python
wallet_input: str
```

- *Type:* str

---

##### `wallet_secret_id_input`<sup>Optional</sup> <a name="wallet_secret_id_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput"></a>

```python
wallet_secret_id_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `account_key`<sup>Required</sup> <a name="account_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

---

##### `account_key_secret_id`<sup>Required</sup> <a name="account_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId"></a>

```python
account_key_secret_id: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `authentication_mode`<sup>Required</sup> <a name="authentication_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_secret_id`<sup>Required</sup> <a name="client_secret_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId"></a>

```python
client_secret_secret_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_factory`<sup>Required</sup> <a name="connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory"></a>

```python
connection_factory: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `connection_url`<sup>Required</sup> <a name="connection_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

---

##### `consumer_properties`<sup>Required</sup> <a name="consumer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties"></a>

```python
consumer_properties: str
```

- *Type:* str

---

##### `core_site_xml`<sup>Required</sup> <a name="core_site_xml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml"></a>

```python
core_site_xml: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `does_use_secret_ids`<sup>Required</sup> <a name="does_use_secret_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds"></a>

```python
does_use_secret_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jndi_connection_factory`<sup>Required</sup> <a name="jndi_connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory"></a>

```python
jndi_connection_factory: str
```

- *Type:* str

---

##### `jndi_initial_context_factory`<sup>Required</sup> <a name="jndi_initial_context_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory"></a>

```python
jndi_initial_context_factory: str
```

- *Type:* str

---

##### `jndi_provider_url`<sup>Required</sup> <a name="jndi_provider_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl"></a>

```python
jndi_provider_url: str
```

- *Type:* str

---

##### `jndi_security_credentials`<sup>Required</sup> <a name="jndi_security_credentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials"></a>

```python
jndi_security_credentials: str
```

- *Type:* str

---

##### `jndi_security_credentials_secret_id`<sup>Required</sup> <a name="jndi_security_credentials_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```python
jndi_security_credentials_secret_id: str
```

- *Type:* str

---

##### `jndi_security_principal`<sup>Required</sup> <a name="jndi_security_principal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal"></a>

```python
jndi_security_principal: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_store`<sup>Required</sup> <a name="key_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `key_store_password_secret_id`<sup>Required</sup> <a name="key_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId"></a>

```python
key_store_password_secret_id: str
```

- *Type:* str

---

##### `key_store_secret_id`<sup>Required</sup> <a name="key_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId"></a>

```python
key_store_secret_id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `private_key_file`<sup>Required</sup> <a name="private_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile"></a>

```python
private_key_file: str
```

- *Type:* str

---

##### `private_key_file_secret_id`<sup>Required</sup> <a name="private_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId"></a>

```python
private_key_file_secret_id: str
```

- *Type:* str

---

##### `private_key_passphrase`<sup>Required</sup> <a name="private_key_passphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase"></a>

```python
private_key_passphrase: str
```

- *Type:* str

---

##### `private_key_passphrase_secret_id`<sup>Required</sup> <a name="private_key_passphrase_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```python
private_key_passphrase_secret_id: str
```

- *Type:* str

---

##### `producer_properties`<sup>Required</sup> <a name="producer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties"></a>

```python
producer_properties: str
```

- *Type:* str

---

##### `public_key_fingerprint`<sup>Required</sup> <a name="public_key_fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint"></a>

```python
public_key_fingerprint: str
```

- *Type:* str

---

##### `redis_cluster_id`<sup>Required</sup> <a name="redis_cluster_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId"></a>

```python
redis_cluster_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `routing_method`<sup>Required</sup> <a name="routing_method" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod"></a>

```python
routing_method: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `sas_token_secret_id`<sup>Required</sup> <a name="sas_token_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId"></a>

```python
sas_token_secret_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `secret_access_key_secret_id`<sup>Required</sup> <a name="secret_access_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId"></a>

```python
secret_access_key_secret_id: str
```

- *Type:* str

---

##### `security_protocol`<sup>Required</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers"></a>

```python
servers: str
```

- *Type:* str

---

##### `service_account_key_file`<sup>Required</sup> <a name="service_account_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile"></a>

```python
service_account_key_file: str
```

- *Type:* str

---

##### `service_account_key_file_secret_id`<sup>Required</sup> <a name="service_account_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```python
service_account_key_file_secret_id: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `should_use_jndi`<sup>Required</sup> <a name="should_use_jndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi"></a>

```python
should_use_jndi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_validate_server_certificate`<sup>Required</sup> <a name="should_validate_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate"></a>

```python
should_validate_server_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_ca`<sup>Required</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

---

##### `ssl_cert`<sup>Required</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert"></a>

```python
ssl_cert: str
```

- *Type:* str

---

##### `ssl_client_keystash`<sup>Required</sup> <a name="ssl_client_keystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash"></a>

```python
ssl_client_keystash: str
```

- *Type:* str

---

##### `ssl_client_keystash_secret_id`<sup>Required</sup> <a name="ssl_client_keystash_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId"></a>

```python
ssl_client_keystash_secret_id: str
```

- *Type:* str

---

##### `ssl_client_keystoredb`<sup>Required</sup> <a name="ssl_client_keystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb"></a>

```python
ssl_client_keystoredb: str
```

- *Type:* str

---

##### `ssl_client_keystoredb_secret_id`<sup>Required</sup> <a name="ssl_client_keystoredb_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```python
ssl_client_keystoredb_secret_id: str
```

- *Type:* str

---

##### `ssl_crl`<sup>Required</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl"></a>

```python
ssl_crl: str
```

- *Type:* str

---

##### `ssl_key`<sup>Required</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey"></a>

```python
ssl_key: str
```

- *Type:* str

---

##### `ssl_key_password`<sup>Required</sup> <a name="ssl_key_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword"></a>

```python
ssl_key_password: str
```

- *Type:* str

---

##### `ssl_key_password_secret_id`<sup>Required</sup> <a name="ssl_key_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```python
ssl_key_password_secret_id: str
```

- *Type:* str

---

##### `ssl_key_secret_id`<sup>Required</sup> <a name="ssl_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId"></a>

```python
ssl_key_secret_id: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `ssl_server_certificate`<sup>Required</sup> <a name="ssl_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate"></a>

```python
ssl_server_certificate: str
```

- *Type:* str

---

##### `stream_pool_id`<sup>Required</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId"></a>

```python
stream_pool_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType"></a>

```python
technology_type: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `trigger_refresh`<sup>Required</sup> <a name="trigger_refresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh"></a>

```python
trigger_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

---

##### `trust_store_password`<sup>Required</sup> <a name="trust_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword"></a>

```python
trust_store_password: str
```

- *Type:* str

---

##### `trust_store_password_secret_id`<sup>Required</sup> <a name="trust_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId"></a>

```python
trust_store_password_secret_id: str
```

- *Type:* str

---

##### `trust_store_secret_id`<sup>Required</sup> <a name="trust_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId"></a>

```python
trust_store_secret_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet"></a>

```python
wallet: str
```

- *Type:* str

---

##### `wallet_secret_id`<sup>Required</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateConnectionAdditionalAttributes <a name="GoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionAdditionalAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}.

---

### GoldenGateConnectionBootstrapServers <a name="GoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionBootstrapServers(
  host: str = None,
  port: typing.Union[int, float] = None,
  private_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

### GoldenGateConnectionConfig <a name="GoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  connection_type: str,
  display_name: str,
  technology_type: str,
  access_key_id: str = None,
  account_key: str = None,
  account_key_secret_id: str = None,
  account_name: str = None,
  additional_attributes: typing.Union[IResolvable, typing.List[GoldenGateConnectionAdditionalAttributes]] = None,
  authentication_mode: str = None,
  authentication_type: str = None,
  azure_tenant_id: str = None,
  bootstrap_servers: typing.Union[IResolvable, typing.List[GoldenGateConnectionBootstrapServers]] = None,
  client_id: str = None,
  client_secret: str = None,
  client_secret_secret_id: str = None,
  connection_factory: str = None,
  connection_string: str = None,
  connection_url: str = None,
  consumer_properties: str = None,
  core_site_xml: str = None,
  database_id: str = None,
  database_name: str = None,
  db_system_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  deployment_id: str = None,
  description: str = None,
  does_use_secret_ids: typing.Union[bool, IResolvable] = None,
  endpoint: str = None,
  fingerprint: str = None,
  freeform_tags: typing.Mapping[str] = None,
  host: str = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  jndi_connection_factory: str = None,
  jndi_initial_context_factory: str = None,
  jndi_provider_url: str = None,
  jndi_security_credentials: str = None,
  jndi_security_credentials_secret_id: str = None,
  jndi_security_principal: str = None,
  key_id: str = None,
  key_store: str = None,
  key_store_password: str = None,
  key_store_password_secret_id: str = None,
  key_store_secret_id: str = None,
  locks: typing.Union[IResolvable, typing.List[GoldenGateConnectionLocks]] = None,
  nsg_ids: typing.List[str] = None,
  password: str = None,
  password_secret_id: str = None,
  port: typing.Union[int, float] = None,
  private_ip: str = None,
  private_key_file: str = None,
  private_key_file_secret_id: str = None,
  private_key_passphrase: str = None,
  private_key_passphrase_secret_id: str = None,
  producer_properties: str = None,
  public_key_fingerprint: str = None,
  redis_cluster_id: str = None,
  region: str = None,
  routing_method: str = None,
  sas_token: str = None,
  sas_token_secret_id: str = None,
  secret_access_key: str = None,
  secret_access_key_secret_id: str = None,
  security_protocol: str = None,
  servers: str = None,
  service_account_key_file: str = None,
  service_account_key_file_secret_id: str = None,
  session_mode: str = None,
  should_use_jndi: typing.Union[bool, IResolvable] = None,
  should_validate_server_certificate: typing.Union[bool, IResolvable] = None,
  ssl_ca: str = None,
  ssl_cert: str = None,
  ssl_client_keystash: str = None,
  ssl_client_keystash_secret_id: str = None,
  ssl_client_keystoredb: str = None,
  ssl_client_keystoredb_secret_id: str = None,
  ssl_crl: str = None,
  ssl_key: str = None,
  ssl_key_password: str = None,
  ssl_key_password_secret_id: str = None,
  ssl_key_secret_id: str = None,
  ssl_mode: str = None,
  ssl_server_certificate: str = None,
  stream_pool_id: str = None,
  subnet_id: str = None,
  tenancy_id: str = None,
  timeouts: GoldenGateConnectionTimeouts = None,
  trigger_refresh: typing.Union[bool, IResolvable] = None,
  trust_store: str = None,
  trust_store_password: str = None,
  trust_store_password_secret_id: str = None,
  trust_store_secret_id: str = None,
  url: str = None,
  user_id: str = None,
  username: str = None,
  vault_id: str = None,
  wallet: str = None,
  wallet_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType">technology_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey">account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId">account_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes">additional_attributes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode">authentication_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers">bootstrap_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]</code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId">client_secret_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory">connection_factory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl">connection_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties">consumer_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml">core_site_xml</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds">does_use_secret_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint">endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint">fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory">jndi_connection_factory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory">jndi_initial_context_factory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl">jndi_provider_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials">jndi_security_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId">jndi_security_credentials_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal">jndi_security_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore">key_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId">key_store_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId">key_store_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile">private_key_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId">private_key_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId">private_key_passphrase_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties">producer_properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint">public_key_fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId">redis_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod">routing_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken">sas_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId">sas_token_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId">secret_access_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol">security_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers">servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile">service_account_key_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId">service_account_key_file_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode">session_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi">should_use_jndi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate">should_validate_server_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa">ssl_ca</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert">ssl_cert</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash">ssl_client_keystash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId">ssl_client_keystash_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb">ssl_client_keystoredb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId">ssl_client_keystoredb_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl">ssl_crl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey">ssl_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword">ssl_key_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId">ssl_key_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId">ssl_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate">ssl_server_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId">stream_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh">trigger_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore">trust_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword">trust_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId">trust_store_password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId">trust_store_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet">wallet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `technology_type`<sup>Required</sup> <a name="technology_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType"></a>

```python
technology_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `account_key`<sup>Optional</sup> <a name="account_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey"></a>

```python
account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `account_key_secret_id`<sup>Optional</sup> <a name="account_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId"></a>

```python
account_key_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `account_name`<sup>Optional</sup> <a name="account_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `additional_attributes`<sup>Optional</sup> <a name="additional_attributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes"></a>

```python
additional_attributes: typing.Union[IResolvable, typing.List[GoldenGateConnectionAdditionalAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `authentication_mode`<sup>Optional</sup> <a name="authentication_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode"></a>

```python
authentication_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `bootstrap_servers`<sup>Optional</sup> <a name="bootstrap_servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers"></a>

```python
bootstrap_servers: typing.Union[IResolvable, typing.List[GoldenGateConnectionBootstrapServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `client_secret_secret_id`<sup>Optional</sup> <a name="client_secret_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId"></a>

```python
client_secret_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `connection_factory`<sup>Optional</sup> <a name="connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory"></a>

```python
connection_factory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `connection_url`<sup>Optional</sup> <a name="connection_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl"></a>

```python
connection_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `consumer_properties`<sup>Optional</sup> <a name="consumer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties"></a>

```python
consumer_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `core_site_xml`<sup>Optional</sup> <a name="core_site_xml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml"></a>

```python
core_site_xml: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `does_use_secret_ids`<sup>Optional</sup> <a name="does_use_secret_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds"></a>

```python
does_use_secret_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `jndi_connection_factory`<sup>Optional</sup> <a name="jndi_connection_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory"></a>

```python
jndi_connection_factory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `jndi_initial_context_factory`<sup>Optional</sup> <a name="jndi_initial_context_factory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory"></a>

```python
jndi_initial_context_factory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `jndi_provider_url`<sup>Optional</sup> <a name="jndi_provider_url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl"></a>

```python
jndi_provider_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `jndi_security_credentials`<sup>Optional</sup> <a name="jndi_security_credentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials"></a>

```python
jndi_security_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `jndi_security_credentials_secret_id`<sup>Optional</sup> <a name="jndi_security_credentials_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId"></a>

```python
jndi_security_credentials_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `jndi_security_principal`<sup>Optional</sup> <a name="jndi_security_principal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal"></a>

```python
jndi_security_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `key_store`<sup>Optional</sup> <a name="key_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore"></a>

```python
key_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `key_store_password_secret_id`<sup>Optional</sup> <a name="key_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId"></a>

```python
key_store_password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `key_store_secret_id`<sup>Optional</sup> <a name="key_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId"></a>

```python
key_store_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[GoldenGateConnectionLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `private_key_file`<sup>Optional</sup> <a name="private_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile"></a>

```python
private_key_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `private_key_file_secret_id`<sup>Optional</sup> <a name="private_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId"></a>

```python
private_key_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase"></a>

```python
private_key_passphrase: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `private_key_passphrase_secret_id`<sup>Optional</sup> <a name="private_key_passphrase_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId"></a>

```python
private_key_passphrase_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `producer_properties`<sup>Optional</sup> <a name="producer_properties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties"></a>

```python
producer_properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `public_key_fingerprint`<sup>Optional</sup> <a name="public_key_fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint"></a>

```python
public_key_fingerprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `redis_cluster_id`<sup>Optional</sup> <a name="redis_cluster_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId"></a>

```python
redis_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `routing_method`<sup>Optional</sup> <a name="routing_method" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod"></a>

```python
routing_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `sas_token`<sup>Optional</sup> <a name="sas_token" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `sas_token_secret_id`<sup>Optional</sup> <a name="sas_token_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId"></a>

```python
sas_token_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `secret_access_key_secret_id`<sup>Optional</sup> <a name="secret_access_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId"></a>

```python
secret_access_key_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `security_protocol`<sup>Optional</sup> <a name="security_protocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol"></a>

```python
security_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers"></a>

```python
servers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `service_account_key_file`<sup>Optional</sup> <a name="service_account_key_file" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile"></a>

```python
service_account_key_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `service_account_key_file_secret_id`<sup>Optional</sup> <a name="service_account_key_file_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId"></a>

```python
service_account_key_file_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `session_mode`<sup>Optional</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `should_use_jndi`<sup>Optional</sup> <a name="should_use_jndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi"></a>

```python
should_use_jndi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `should_validate_server_certificate`<sup>Optional</sup> <a name="should_validate_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate"></a>

```python
should_validate_server_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `ssl_ca`<sup>Optional</sup> <a name="ssl_ca" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa"></a>

```python
ssl_ca: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `ssl_cert`<sup>Optional</sup> <a name="ssl_cert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert"></a>

```python
ssl_cert: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `ssl_client_keystash`<sup>Optional</sup> <a name="ssl_client_keystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash"></a>

```python
ssl_client_keystash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `ssl_client_keystash_secret_id`<sup>Optional</sup> <a name="ssl_client_keystash_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId"></a>

```python
ssl_client_keystash_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `ssl_client_keystoredb`<sup>Optional</sup> <a name="ssl_client_keystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb"></a>

```python
ssl_client_keystoredb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `ssl_client_keystoredb_secret_id`<sup>Optional</sup> <a name="ssl_client_keystoredb_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId"></a>

```python
ssl_client_keystoredb_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `ssl_crl`<sup>Optional</sup> <a name="ssl_crl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl"></a>

```python
ssl_crl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `ssl_key`<sup>Optional</sup> <a name="ssl_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey"></a>

```python
ssl_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `ssl_key_password`<sup>Optional</sup> <a name="ssl_key_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword"></a>

```python
ssl_key_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `ssl_key_password_secret_id`<sup>Optional</sup> <a name="ssl_key_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId"></a>

```python
ssl_key_password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `ssl_key_secret_id`<sup>Optional</sup> <a name="ssl_key_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId"></a>

```python
ssl_key_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `ssl_server_certificate`<sup>Optional</sup> <a name="ssl_server_certificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate"></a>

```python
ssl_server_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `stream_pool_id`<sup>Optional</sup> <a name="stream_pool_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId"></a>

```python
stream_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `tenancy_id`<sup>Optional</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts"></a>

```python
timeouts: GoldenGateConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `trigger_refresh`<sup>Optional</sup> <a name="trigger_refresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh"></a>

```python
trigger_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `trust_store`<sup>Optional</sup> <a name="trust_store" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore"></a>

```python
trust_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `trust_store_password`<sup>Optional</sup> <a name="trust_store_password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword"></a>

```python
trust_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `trust_store_password_secret_id`<sup>Optional</sup> <a name="trust_store_password_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId"></a>

```python
trust_store_password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `trust_store_secret_id`<sup>Optional</sup> <a name="trust_store_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId"></a>

```python
trust_store_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet"></a>

```python
wallet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `wallet_secret_id`<sup>Optional</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

### GoldenGateConnectionIngressIps <a name="GoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionIngressIps()
```


### GoldenGateConnectionLocks <a name="GoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionLocks(
  type: str,
  message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}.

---

### GoldenGateConnectionTimeouts <a name="GoldenGateConnectionTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateConnectionAdditionalAttributesList <a name="GoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionAdditionalAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoldenGateConnectionAdditionalAttributes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]]

---


### GoldenGateConnectionAdditionalAttributesOutputReference <a name="GoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoldenGateConnectionAdditionalAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>]

---


### GoldenGateConnectionBootstrapServersList <a name="GoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionBootstrapServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateConnectionBootstrapServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoldenGateConnectionBootstrapServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]]

---


### GoldenGateConnectionBootstrapServersOutputReference <a name="GoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoldenGateConnectionBootstrapServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>]

---


### GoldenGateConnectionIngressIpsList <a name="GoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionIngressIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoldenGateConnectionIngressIpsOutputReference <a name="GoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp">ingress_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_ip`<sup>Required</sup> <a name="ingress_ip" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```python
ingress_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```python
internal_value: GoldenGateConnectionIngressIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a>

---


### GoldenGateConnectionLocksList <a name="GoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoldenGateConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoldenGateConnectionLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]]

---


### GoldenGateConnectionLocksOutputReference <a name="GoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoldenGateConnectionLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>]

---


### GoldenGateConnectionTimeoutsOutputReference <a name="GoldenGateConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import golden_gate_connection

goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoldenGateConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>]

---



