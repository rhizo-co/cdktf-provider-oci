# `databaseCloudDatabaseManagement` Submodule <a name="`databaseCloudDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudDatabaseManagement <a name="DatabaseCloudDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management oci_database_cloud_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentialdetails: DatabaseCloudDatabaseManagementCredentialdetails,
  database_id: str,
  enable_management: typing.Union[bool, IResolvable],
  management_type: str,
  private_end_point_id: str,
  service_name: str,
  id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  role: str = None,
  ssl_secret_id: str = None,
  timeouts: DatabaseCloudDatabaseManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.credentialdetails">credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | credentialdetails block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.enableManagement">enable_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.managementType">management_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentialdetails`<sup>Required</sup> <a name="credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.credentialdetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

credentialdetails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#credentialdetails DatabaseCloudDatabaseManagement#credentialdetails}

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}.

---

##### `enable_management`<sup>Required</sup> <a name="enable_management" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.enableManagement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}.

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.managementType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}.

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.privateEndPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}.

---

##### `ssl_secret_id`<sup>Optional</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.sslSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#timeouts DatabaseCloudDatabaseManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails">put_credentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId">reset_ssl_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credentialdetails` <a name="put_credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails"></a>

```python
def put_credentialdetails(
  password_secret_id: str,
  user_name: str
) -> None
```

###### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}.

---

###### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_ssl_secret_id` <a name="reset_ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId"></a>

```python
def reset_ssl_secret_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseCloudDatabaseManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseCloudDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails">credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput">credentialdetails_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput">enable_management_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput">management_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput">private_end_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput">ssl_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement">enable_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType">management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentialdetails`<sup>Required</sup> <a name="credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails"></a>

```python
credentialdetails: DatabaseCloudDatabaseManagementCredentialdetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts"></a>

```python
timeouts: DatabaseCloudDatabaseManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a>

---

##### `credentialdetails_input`<sup>Optional</sup> <a name="credentialdetails_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput"></a>

```python
credentialdetails_input: DatabaseCloudDatabaseManagementCredentialdetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `enable_management_input`<sup>Optional</sup> <a name="enable_management_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput"></a>

```python
enable_management_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_type_input`<sup>Optional</sup> <a name="management_type_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput"></a>

```python
management_type_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_end_point_id_input`<sup>Optional</sup> <a name="private_end_point_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput"></a>

```python
private_end_point_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `ssl_secret_id_input`<sup>Optional</sup> <a name="ssl_secret_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput"></a>

```python
ssl_secret_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseCloudDatabaseManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `enable_management`<sup>Required</sup> <a name="enable_management" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement"></a>

```python
enable_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudDatabaseManagementConfig <a name="DatabaseCloudDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credentialdetails: DatabaseCloudDatabaseManagementCredentialdetails,
  database_id: str,
  enable_management: typing.Union[bool, IResolvable],
  management_type: str,
  private_end_point_id: str,
  service_name: str,
  id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  role: str = None,
  ssl_secret_id: str = None,
  timeouts: DatabaseCloudDatabaseManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails">credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | credentialdetails block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement">enable_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType">management_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentialdetails`<sup>Required</sup> <a name="credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails"></a>

```python
credentialdetails: DatabaseCloudDatabaseManagementCredentialdetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

credentialdetails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#credentialdetails DatabaseCloudDatabaseManagement#credentialdetails}

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}.

---

##### `enable_management`<sup>Required</sup> <a name="enable_management" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement"></a>

```python
enable_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}.

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}.

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}.

---

##### `ssl_secret_id`<sup>Optional</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts"></a>

```python
timeouts: DatabaseCloudDatabaseManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#timeouts DatabaseCloudDatabaseManagement#timeouts}

---

### DatabaseCloudDatabaseManagementCredentialdetails <a name="DatabaseCloudDatabaseManagementCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails(
  password_secret_id: str,
  user_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}. |

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}.

---

### DatabaseCloudDatabaseManagementTimeouts <a name="DatabaseCloudDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudDatabaseManagementCredentialdetailsOutputReference <a name="DatabaseCloudDatabaseManagementCredentialdetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseCloudDatabaseManagementCredentialdetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---


### DatabaseCloudDatabaseManagementTimeoutsOutputReference <a name="DatabaseCloudDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_database_management

databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseCloudDatabaseManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>]

---



