# `databaseToolsDatabaseToolsConnection` Submodule <a name="`databaseToolsDatabaseToolsConnection` Submodule" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseToolsDatabaseToolsConnection <a name="DatabaseToolsDatabaseToolsConnection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection oci_database_tools_database_tools_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection(
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
  display_name: str,
  type: str,
  user_name: str,
  user_password: DatabaseToolsDatabaseToolsConnectionUserPassword,
  advanced_properties: typing.Mapping[str] = None,
  connection_string: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  key_stores: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionKeyStores]] = None,
  locks: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionLocks]] = None,
  private_endpoint_id: str = None,
  proxy_client: DatabaseToolsDatabaseToolsConnectionProxyClient = None,
  related_resource: DatabaseToolsDatabaseToolsConnectionRelatedResource = None,
  runtime_support: str = None,
  timeouts: DatabaseToolsDatabaseToolsConnectionTimeouts = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | user_password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.advancedProperties">advanced_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.keyStores">key_stores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]</code> | key_stores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.proxyClient">proxy_client</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | proxy_client block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.relatedResource">related_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | related_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.runtimeSupport">runtime_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}.

---

##### `user_password`<sup>Required</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.userPassword"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

user_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}

---

##### `advanced_properties`<sup>Optional</sup> <a name="advanced_properties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.advancedProperties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_stores`<sup>Optional</sup> <a name="key_stores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.keyStores"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]

key_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_stores DatabaseToolsDatabaseToolsConnection#key_stores}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#locks DatabaseToolsDatabaseToolsConnection#locks}

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}.

---

##### `proxy_client`<sup>Optional</sup> <a name="proxy_client" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.proxyClient"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

proxy_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_client DatabaseToolsDatabaseToolsConnection#proxy_client}

---

##### `related_resource`<sup>Optional</sup> <a name="related_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.relatedResource"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

related_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource DatabaseToolsDatabaseToolsConnection#related_resource}

---

##### `runtime_support`<sup>Optional</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.runtimeSupport"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#timeouts DatabaseToolsDatabaseToolsConnection#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putKeyStores">put_key_stores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient">put_proxy_client</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource">put_related_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword">put_user_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetAdvancedProperties">reset_advanced_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetKeyStores">reset_key_stores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetPrivateEndpointId">reset_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetProxyClient">reset_proxy_client</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRelatedResource">reset_related_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRuntimeSupport">reset_runtime_support</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_stores` <a name="put_key_stores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putKeyStores"></a>

```python
def put_key_stores(
  value: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionKeyStores]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putKeyStores.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]

---

##### `put_proxy_client` <a name="put_proxy_client" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient"></a>

```python
def put_proxy_client(
  proxy_authentication_type: str,
  roles: typing.List[str] = None,
  user_name: str = None,
  user_password: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword = None
) -> None
```

###### `proxy_authentication_type`<sup>Required</sup> <a name="proxy_authentication_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient.parameter.proxyAuthenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_authentication_type DatabaseToolsDatabaseToolsConnection#proxy_authentication_type}.

---

###### `roles`<sup>Optional</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient.parameter.roles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#roles DatabaseToolsDatabaseToolsConnection#roles}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}.

---

###### `user_password`<sup>Optional</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putProxyClient.parameter.userPassword"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

user_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}

---

##### `put_related_resource` <a name="put_related_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource"></a>

```python
def put_related_resource(
  entity_type: str = None,
  identifier: str = None
) -> None
```

###### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource.parameter.entityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#entity_type DatabaseToolsDatabaseToolsConnection#entity_type}.

---

###### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putRelatedResource.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#identifier DatabaseToolsDatabaseToolsConnection#identifier}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#create DatabaseToolsDatabaseToolsConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#delete DatabaseToolsDatabaseToolsConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#update DatabaseToolsDatabaseToolsConnection#update}.

---

##### `put_user_password` <a name="put_user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword"></a>

```python
def put_user_password(
  secret_id: str,
  value_type: str
) -> None
```

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

###### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.putUserPassword.parameter.valueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

##### `reset_advanced_properties` <a name="reset_advanced_properties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetAdvancedProperties"></a>

```python
def reset_advanced_properties() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_stores` <a name="reset_key_stores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetKeyStores"></a>

```python
def reset_key_stores() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_private_endpoint_id` <a name="reset_private_endpoint_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetPrivateEndpointId"></a>

```python
def reset_private_endpoint_id() -> None
```

##### `reset_proxy_client` <a name="reset_proxy_client" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetProxyClient"></a>

```python
def reset_proxy_client() -> None
```

##### `reset_related_resource` <a name="reset_related_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRelatedResource"></a>

```python
def reset_related_resource() -> None
```

##### `reset_runtime_support` <a name="reset_runtime_support" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetRuntimeSupport"></a>

```python
def reset_runtime_support() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url` <a name="reset_url" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseToolsDatabaseToolsConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseToolsDatabaseToolsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseToolsDatabaseToolsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStores">key_stores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList">DatabaseToolsDatabaseToolsConnectionKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList">DatabaseToolsDatabaseToolsConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClient">proxy_client</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResource">related_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference">DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference">DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedPropertiesInput">advanced_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStoresInput">key_stores_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClientInput">proxy_client_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResourceInput">related_resource_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupportInput">runtime_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPasswordInput">user_password_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedProperties">advanced_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupport">runtime_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userName">user_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_stores`<sup>Required</sup> <a name="key_stores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStores"></a>

```python
key_stores: DatabaseToolsDatabaseToolsConnectionKeyStoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList">DatabaseToolsDatabaseToolsConnectionKeyStoresList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locks"></a>

```python
locks: DatabaseToolsDatabaseToolsConnectionLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList">DatabaseToolsDatabaseToolsConnectionLocksList</a>

---

##### `proxy_client`<sup>Required</sup> <a name="proxy_client" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClient"></a>

```python
proxy_client: DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference</a>

---

##### `related_resource`<sup>Required</sup> <a name="related_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResource"></a>

```python
related_resource: DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference">DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeouts"></a>

```python
timeouts: DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference">DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `user_password`<sup>Required</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPassword"></a>

```python
user_password: DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference</a>

---

##### `advanced_properties_input`<sup>Optional</sup> <a name="advanced_properties_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedPropertiesInput"></a>

```python
advanced_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_stores_input`<sup>Optional</sup> <a name="key_stores_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.keyStoresInput"></a>

```python
key_stores_input: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionKeyStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `proxy_client_input`<sup>Optional</sup> <a name="proxy_client_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.proxyClientInput"></a>

```python
proxy_client_input: DatabaseToolsDatabaseToolsConnectionProxyClient
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

---

##### `related_resource_input`<sup>Optional</sup> <a name="related_resource_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.relatedResourceInput"></a>

```python
related_resource_input: DatabaseToolsDatabaseToolsConnectionRelatedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

---

##### `runtime_support_input`<sup>Optional</sup> <a name="runtime_support_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupportInput"></a>

```python
runtime_support_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseToolsDatabaseToolsConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_password_input`<sup>Optional</sup> <a name="user_password_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userPasswordInput"></a>

```python
user_password_input: DatabaseToolsDatabaseToolsConnectionUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

---

##### `advanced_properties`<sup>Required</sup> <a name="advanced_properties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.advancedProperties"></a>

```python
advanced_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `runtime_support`<sup>Required</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.runtimeSupport"></a>

```python
runtime_support: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseToolsDatabaseToolsConnectionConfig <a name="DatabaseToolsDatabaseToolsConnectionConfig" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  type: str,
  user_name: str,
  user_password: DatabaseToolsDatabaseToolsConnectionUserPassword,
  advanced_properties: typing.Mapping[str] = None,
  connection_string: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  key_stores: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionKeyStores]] = None,
  locks: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionLocks]] = None,
  private_endpoint_id: str = None,
  proxy_client: DatabaseToolsDatabaseToolsConnectionProxyClient = None,
  related_resource: DatabaseToolsDatabaseToolsConnectionRelatedResource = None,
  runtime_support: str = None,
  timeouts: DatabaseToolsDatabaseToolsConnectionTimeouts = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | user_password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.advancedProperties">advanced_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.keyStores">key_stores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]</code> | key_stores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.proxyClient">proxy_client</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | proxy_client block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.relatedResource">related_resource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | related_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.runtimeSupport">runtime_support</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}.

---

##### `user_password`<sup>Required</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.userPassword"></a>

```python
user_password: DatabaseToolsDatabaseToolsConnectionUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

user_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}

---

##### `advanced_properties`<sup>Optional</sup> <a name="advanced_properties" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.advancedProperties"></a>

```python
advanced_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_stores`<sup>Optional</sup> <a name="key_stores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.keyStores"></a>

```python
key_stores: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionKeyStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]

key_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_stores DatabaseToolsDatabaseToolsConnection#key_stores}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#locks DatabaseToolsDatabaseToolsConnection#locks}

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}.

---

##### `proxy_client`<sup>Optional</sup> <a name="proxy_client" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.proxyClient"></a>

```python
proxy_client: DatabaseToolsDatabaseToolsConnectionProxyClient
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

proxy_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_client DatabaseToolsDatabaseToolsConnection#proxy_client}

---

##### `related_resource`<sup>Optional</sup> <a name="related_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.relatedResource"></a>

```python
related_resource: DatabaseToolsDatabaseToolsConnectionRelatedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

related_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource DatabaseToolsDatabaseToolsConnection#related_resource}

---

##### `runtime_support`<sup>Optional</sup> <a name="runtime_support" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.runtimeSupport"></a>

```python
runtime_support: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.timeouts"></a>

```python
timeouts: DatabaseToolsDatabaseToolsConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#timeouts DatabaseToolsDatabaseToolsConnection#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}.

---

### DatabaseToolsDatabaseToolsConnectionKeyStores <a name="DatabaseToolsDatabaseToolsConnectionKeyStores" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores(
  key_store_content: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent = None,
  key_store_password: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword = None,
  key_store_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreContent">key_store_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | key_store_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStorePassword">key_store_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | key_store_password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreType">key_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_type DatabaseToolsDatabaseToolsConnection#key_store_type}. |

---

##### `key_store_content`<sup>Optional</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreContent"></a>

```python
key_store_content: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

key_store_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_content DatabaseToolsDatabaseToolsConnection#key_store_content}

---

##### `key_store_password`<sup>Optional</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStorePassword"></a>

```python
key_store_password: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

key_store_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_password DatabaseToolsDatabaseToolsConnection#key_store_password}

---

##### `key_store_type`<sup>Optional</sup> <a name="key_store_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores.property.keyStoreType"></a>

```python
key_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#key_store_type DatabaseToolsDatabaseToolsConnection#key_store_type}.

---

### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent(
  value_type: str,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword(
  value_type: str,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

### DatabaseToolsDatabaseToolsConnectionLocks <a name="DatabaseToolsDatabaseToolsConnectionLocks" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks(
  type: str,
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#message DatabaseToolsDatabaseToolsConnection#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource_id DatabaseToolsDatabaseToolsConnection#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#time_created DatabaseToolsDatabaseToolsConnection#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#message DatabaseToolsDatabaseToolsConnection#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#related_resource_id DatabaseToolsDatabaseToolsConnection#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#time_created DatabaseToolsDatabaseToolsConnection#time_created}.

---

### DatabaseToolsDatabaseToolsConnectionProxyClient <a name="DatabaseToolsDatabaseToolsConnectionProxyClient" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient(
  proxy_authentication_type: str,
  roles: typing.List[str] = None,
  user_name: str = None,
  user_password: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.proxyAuthenticationType">proxy_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_authentication_type DatabaseToolsDatabaseToolsConnection#proxy_authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#roles DatabaseToolsDatabaseToolsConnection#roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | user_password block. |

---

##### `proxy_authentication_type`<sup>Required</sup> <a name="proxy_authentication_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.proxyAuthenticationType"></a>

```python
proxy_authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#proxy_authentication_type DatabaseToolsDatabaseToolsConnection#proxy_authentication_type}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#roles DatabaseToolsDatabaseToolsConnection#roles}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}.

---

##### `user_password`<sup>Optional</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient.property.userPassword"></a>

```python
user_password: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

user_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}

---

### DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword <a name="DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword(
  secret_id: str,
  value_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

### DatabaseToolsDatabaseToolsConnectionRelatedResource <a name="DatabaseToolsDatabaseToolsConnectionRelatedResource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource(
  entity_type: str = None,
  identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#entity_type DatabaseToolsDatabaseToolsConnection#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#identifier DatabaseToolsDatabaseToolsConnection#identifier}. |

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#entity_type DatabaseToolsDatabaseToolsConnection#entity_type}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#identifier DatabaseToolsDatabaseToolsConnection#identifier}.

---

### DatabaseToolsDatabaseToolsConnectionTimeouts <a name="DatabaseToolsDatabaseToolsConnectionTimeouts" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#create DatabaseToolsDatabaseToolsConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#delete DatabaseToolsDatabaseToolsConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#update DatabaseToolsDatabaseToolsConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#create DatabaseToolsDatabaseToolsConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#delete DatabaseToolsDatabaseToolsConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#update DatabaseToolsDatabaseToolsConnection#update}.

---

### DatabaseToolsDatabaseToolsConnectionUserPassword <a name="DatabaseToolsDatabaseToolsConnectionUserPassword" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword(
  secret_id: str,
  value_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.valueType">value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

---


### DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

---


### DatabaseToolsDatabaseToolsConnectionKeyStoresList <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionKeyStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]]

---


### DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference <a name="DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent">put_key_store_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword">put_key_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreContent">reset_key_store_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStorePassword">reset_key_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreType">reset_key_store_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_store_content` <a name="put_key_store_content" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent"></a>

```python
def put_key_store_content(
  value_type: str,
  secret_id: str = None
) -> None
```

###### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent.parameter.valueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStoreContent.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

##### `put_key_store_password` <a name="put_key_store_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword"></a>

```python
def put_key_store_password(
  value_type: str,
  secret_id: str = None
) -> None
```

###### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword.parameter.valueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.putKeyStorePassword.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

##### `reset_key_store_content` <a name="reset_key_store_content" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreContent"></a>

```python
def reset_key_store_content() -> None
```

##### `reset_key_store_password` <a name="reset_key_store_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStorePassword"></a>

```python
def reset_key_store_password() -> None
```

##### `reset_key_store_type` <a name="reset_key_store_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.resetKeyStoreType"></a>

```python
def reset_key_store_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContent">key_store_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePassword">key_store_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContentInput">key_store_content_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePasswordInput">key_store_password_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreTypeInput">key_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreType">key_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContent"></a>

```python
key_store_content: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference</a>

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePassword"></a>

```python
key_store_password: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference</a>

---

##### `key_store_content_input`<sup>Optional</sup> <a name="key_store_content_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreContentInput"></a>

```python
key_store_content_input: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent</a>

---

##### `key_store_password_input`<sup>Optional</sup> <a name="key_store_password_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStorePasswordInput"></a>

```python
key_store_password_input: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword">DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword</a>

---

##### `key_store_type_input`<sup>Optional</sup> <a name="key_store_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreTypeInput"></a>

```python
key_store_type_input: str
```

- *Type:* str

---

##### `key_store_type`<sup>Required</sup> <a name="key_store_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.keyStoreType"></a>

```python
key_store_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseToolsDatabaseToolsConnectionKeyStores]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionKeyStores">DatabaseToolsDatabaseToolsConnectionKeyStores</a>]

---


### DatabaseToolsDatabaseToolsConnectionLocksList <a name="DatabaseToolsDatabaseToolsConnectionLocksList" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseToolsDatabaseToolsConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseToolsDatabaseToolsConnectionLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]]

---


### DatabaseToolsDatabaseToolsConnectionLocksOutputReference <a name="DatabaseToolsDatabaseToolsConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseToolsDatabaseToolsConnectionLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionLocks">DatabaseToolsDatabaseToolsConnectionLocks</a>]

---


### DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference <a name="DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword">put_user_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserPassword">reset_user_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_user_password` <a name="put_user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword"></a>

```python
def put_user_password(
  secret_id: str,
  value_type: str
) -> None
```

###### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}.

---

###### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.putUserPassword.parameter.valueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}.

---

##### `reset_roles` <a name="reset_roles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```

##### `reset_user_password` <a name="reset_user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.resetUserPassword"></a>

```python
def reset_user_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPassword">user_password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationTypeInput">proxy_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPasswordInput">user_password_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationType">proxy_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_password`<sup>Required</sup> <a name="user_password" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPassword"></a>

```python
user_password: DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference">DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference</a>

---

##### `proxy_authentication_type_input`<sup>Optional</sup> <a name="proxy_authentication_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationTypeInput"></a>

```python
proxy_authentication_type_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_password_input`<sup>Optional</sup> <a name="user_password_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userPasswordInput"></a>

```python
user_password_input: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

---

##### `proxy_authentication_type`<sup>Required</sup> <a name="proxy_authentication_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.proxyAuthenticationType"></a>

```python
proxy_authentication_type: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseToolsDatabaseToolsConnectionProxyClient
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClient">DatabaseToolsDatabaseToolsConnectionProxyClient</a>

---


### DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference <a name="DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword">DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword</a>

---


### DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference <a name="DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetEntityType">reset_entity_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetIdentifier">reset_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_type` <a name="reset_entity_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetEntityType"></a>

```python
def reset_entity_type() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.resetIdentifier"></a>

```python
def reset_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseToolsDatabaseToolsConnectionRelatedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionRelatedResource">DatabaseToolsDatabaseToolsConnectionRelatedResource</a>

---


### DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference <a name="DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseToolsDatabaseToolsConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionTimeouts">DatabaseToolsDatabaseToolsConnectionTimeouts</a>]

---


### DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference <a name="DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_tools_database_tools_connection

databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseToolsDatabaseToolsConnectionUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseToolsDatabaseToolsConnection.DatabaseToolsDatabaseToolsConnectionUserPassword">DatabaseToolsDatabaseToolsConnectionUserPassword</a>

---



