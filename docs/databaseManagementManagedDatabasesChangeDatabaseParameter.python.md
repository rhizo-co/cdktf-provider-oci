# `databaseManagementManagedDatabasesChangeDatabaseParameter` Submodule <a name="`databaseManagementManagedDatabasesChangeDatabaseParameter` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementManagedDatabasesChangeDatabaseParameter <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameter" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter oci_database_management_managed_databases_change_database_parameter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  parameters: typing.Union[IResolvable, typing.List[DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]],
  scope: str,
  credentials: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials = None,
  database_credential: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential = None,
  id: str = None,
  timeouts: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.databaseCredential">database_credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | database_credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.parameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#parameters DatabaseManagementManagedDatabasesChangeDatabaseParameter#parameters}

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credentials DatabaseManagementManagedDatabasesChangeDatabaseParameter#credentials}

---

##### `database_credential`<sup>Optional</sup> <a name="database_credential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.databaseCredential"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

database_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#database_credential DatabaseManagementManagedDatabasesChangeDatabaseParameter#database_credential}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#timeouts DatabaseManagementManagedDatabasesChangeDatabaseParameter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential">put_database_credential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetDatabaseCredential">reset_database_credential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials"></a>

```python
def put_credentials(
  password: str = None,
  role: str = None,
  secret_id: str = None,
  user_name: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}.

---

###### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}.

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#secret_id}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putCredentials.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#user_name DatabaseManagementManagedDatabasesChangeDatabaseParameter#user_name}.

---

##### `put_database_credential` <a name="put_database_credential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential"></a>

```python
def put_database_credential(
  credential_type: str,
  named_credential_id: str = None,
  password: str = None,
  password_secret_id: str = None,
  role: str = None,
  username: str = None
) -> None
```

###### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.credentialType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credential_type DatabaseManagementManagedDatabasesChangeDatabaseParameter#credential_type}.

---

###### `named_credential_id`<sup>Optional</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.namedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#named_credential_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#named_credential_id}.

---

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}.

---

###### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password_secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#password_secret_id}.

---

###### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}.

---

###### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putDatabaseCredential.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#username DatabaseManagementManagedDatabasesChangeDatabaseParameter#username}.

---

##### `put_parameters` <a name="put_parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#create DatabaseManagementManagedDatabasesChangeDatabaseParameter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#delete DatabaseManagementManagedDatabasesChangeDatabaseParameter#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update DatabaseManagementManagedDatabasesChangeDatabaseParameter#update}.

---

##### `reset_credentials` <a name="reset_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_database_credential` <a name="reset_database_credential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetDatabaseCredential"></a>

```python
def reset_database_credential() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseManagementManagedDatabasesChangeDatabaseParameter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseManagementManagedDatabasesChangeDatabaseParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseManagementManagedDatabasesChangeDatabaseParameter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseManagementManagedDatabasesChangeDatabaseParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementManagedDatabasesChangeDatabaseParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredential">database_credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList">DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredentialInput">database_credential_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentials"></a>

```python
credentials: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference</a>

---

##### `database_credential`<sup>Required</sup> <a name="database_credential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredential"></a>

```python
database_credential: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parameters"></a>

```python
parameters: DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList">DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeouts"></a>

```python
timeouts: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference</a>

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.credentialsInput"></a>

```python
credentials_input: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

---

##### `database_credential_input`<sup>Optional</sup> <a name="database_credential_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.databaseCredentialInput"></a>

```python
database_credential_input: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  parameters: typing.Union[IResolvable, typing.List[DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]],
  scope: str,
  credentials: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials = None,
  database_credential: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential = None,
  id: str = None,
  timeouts: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]</code> | parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.databaseCredential">database_credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | database_credential block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#parameters DatabaseManagementManagedDatabasesChangeDatabaseParameter#parameters}

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.credentials"></a>

```python
credentials: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credentials DatabaseManagementManagedDatabasesChangeDatabaseParameter#credentials}

---

##### `database_credential`<sup>Optional</sup> <a name="database_credential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.databaseCredential"></a>

```python
database_credential: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

database_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#database_credential DatabaseManagementManagedDatabasesChangeDatabaseParameter#database_credential}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig.property.timeouts"></a>

```python
timeouts: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#timeouts DatabaseManagementManagedDatabasesChangeDatabaseParameter#timeouts}

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials(
  password: str = None,
  role: str = None,
  secret_id: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#user_name DatabaseManagementManagedDatabasesChangeDatabaseParameter#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#secret_id}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#user_name DatabaseManagementManagedDatabasesChangeDatabaseParameter#user_name}.

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential(
  credential_type: str,
  named_credential_id: str = None,
  password: str = None,
  password_secret_id: str = None,
  role: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credential_type DatabaseManagementManagedDatabasesChangeDatabaseParameter#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#named_credential_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password_secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#username DatabaseManagementManagedDatabasesChangeDatabaseParameter#username}. |

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#credential_type DatabaseManagementManagedDatabasesChangeDatabaseParameter#credential_type}.

---

##### `named_credential_id`<sup>Optional</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#named_credential_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#named_credential_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#password_secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#username DatabaseManagementManagedDatabasesChangeDatabaseParameter#username}.

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters(
  name: str,
  value: str,
  update_comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#name DatabaseManagementManagedDatabasesChangeDatabaseParameter#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#value DatabaseManagementManagedDatabasesChangeDatabaseParameter#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.updateComment">update_comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update_comment DatabaseManagementManagedDatabasesChangeDatabaseParameter#update_comment}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#name DatabaseManagementManagedDatabasesChangeDatabaseParameter#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#value DatabaseManagementManagedDatabasesChangeDatabaseParameter#value}.

---

##### `update_comment`<sup>Optional</sup> <a name="update_comment" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters.property.updateComment"></a>

```python
update_comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update_comment DatabaseManagementManagedDatabasesChangeDatabaseParameter#update_comment}.

---

### DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#create DatabaseManagementManagedDatabasesChangeDatabaseParameter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#delete DatabaseManagementManagedDatabasesChangeDatabaseParameter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update DatabaseManagementManagedDatabasesChangeDatabaseParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#create DatabaseManagementManagedDatabasesChangeDatabaseParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#delete DatabaseManagementManagedDatabasesChangeDatabaseParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_managed_databases_change_database_parameter#update DatabaseManagementManagedDatabasesChangeDatabaseParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials">DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials</a>

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId">reset_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_named_credential_id` <a name="reset_named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetNamedCredentialId"></a>

```python
def reset_named_credential_id() -> None
```

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_username` <a name="reset_username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput">named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `named_credential_id_input`<sup>Optional</sup> <a name="named_credential_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialIdInput"></a>

```python
named_credential_id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential">DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential</a>

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]]

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resetUpdateComment">reset_update_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update_comment` <a name="reset_update_comment" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.resetUpdateComment"></a>

```python
def reset_update_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateCommentInput">update_comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateComment">update_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `update_comment_input`<sup>Optional</sup> <a name="update_comment_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateCommentInput"></a>

```python
update_comment_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `update_comment`<sup>Required</sup> <a name="update_comment" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.updateComment"></a>

```python
update_comment: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters">DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters</a>]

---


### DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference <a name="DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_managed_databases_change_database_parameter

databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementManagedDatabasesChangeDatabaseParameter.DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts">DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts</a>]

---



