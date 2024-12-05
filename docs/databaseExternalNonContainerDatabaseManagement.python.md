# `databaseExternalNonContainerDatabaseManagement` Submodule <a name="`databaseExternalNonContainerDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalNonContainerDatabaseManagement <a name="DatabaseExternalNonContainerDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management oci_database_external_non_container_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_management: typing.Union[bool, IResolvable],
  external_database_connector_id: str,
  external_non_container_database_id: str,
  id: str = None,
  license_model: str = None,
  timeouts: DatabaseExternalNonContainerDatabaseManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.enableManagement">enable_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#enable_management DatabaseExternalNonContainerDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.externalDatabaseConnectorId">external_database_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_database_connector_id DatabaseExternalNonContainerDatabaseManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.externalNonContainerDatabaseId">external_non_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#id DatabaseExternalNonContainerDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#license_model DatabaseExternalNonContainerDatabaseManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_management`<sup>Required</sup> <a name="enable_management" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.enableManagement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#enable_management DatabaseExternalNonContainerDatabaseManagement#enable_management}.

---

##### `external_database_connector_id`<sup>Required</sup> <a name="external_database_connector_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.externalDatabaseConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_database_connector_id DatabaseExternalNonContainerDatabaseManagement#external_database_connector_id}.

---

##### `external_non_container_database_id`<sup>Required</sup> <a name="external_non_container_database_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.externalNonContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseManagement#external_non_container_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#id DatabaseExternalNonContainerDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#license_model DatabaseExternalNonContainerDatabaseManagement#license_model}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#timeouts DatabaseExternalNonContainerDatabaseManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#create DatabaseExternalNonContainerDatabaseManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#delete DatabaseExternalNonContainerDatabaseManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#update DatabaseExternalNonContainerDatabaseManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExternalNonContainerDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExternalNonContainerDatabaseManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExternalNonContainerDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalNonContainerDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagementInput">enable_management_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorIdInput">external_database_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseIdInput">external_non_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagement">enable_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorId">external_database_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseId">external_non_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeouts"></a>

```python
timeouts: DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference</a>

---

##### `enable_management_input`<sup>Optional</sup> <a name="enable_management_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagementInput"></a>

```python
enable_management_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_database_connector_id_input`<sup>Optional</sup> <a name="external_database_connector_id_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorIdInput"></a>

```python
external_database_connector_id_input: str
```

- *Type:* str

---

##### `external_non_container_database_id_input`<sup>Optional</sup> <a name="external_non_container_database_id_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseIdInput"></a>

```python
external_non_container_database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExternalNonContainerDatabaseManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>]

---

##### `enable_management`<sup>Required</sup> <a name="enable_management" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.enableManagement"></a>

```python
enable_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_database_connector_id`<sup>Required</sup> <a name="external_database_connector_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalDatabaseConnectorId"></a>

```python
external_database_connector_id: str
```

- *Type:* str

---

##### `external_non_container_database_id`<sup>Required</sup> <a name="external_non_container_database_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.externalNonContainerDatabaseId"></a>

```python
external_non_container_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalNonContainerDatabaseManagementConfig <a name="DatabaseExternalNonContainerDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_management: typing.Union[bool, IResolvable],
  external_database_connector_id: str,
  external_non_container_database_id: str,
  id: str = None,
  license_model: str = None,
  timeouts: DatabaseExternalNonContainerDatabaseManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.enableManagement">enable_management</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#enable_management DatabaseExternalNonContainerDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalDatabaseConnectorId">external_database_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_database_connector_id DatabaseExternalNonContainerDatabaseManagement#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalNonContainerDatabaseId">external_non_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#id DatabaseExternalNonContainerDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#license_model DatabaseExternalNonContainerDatabaseManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_management`<sup>Required</sup> <a name="enable_management" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.enableManagement"></a>

```python
enable_management: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#enable_management DatabaseExternalNonContainerDatabaseManagement#enable_management}.

---

##### `external_database_connector_id`<sup>Required</sup> <a name="external_database_connector_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalDatabaseConnectorId"></a>

```python
external_database_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_database_connector_id DatabaseExternalNonContainerDatabaseManagement#external_database_connector_id}.

---

##### `external_non_container_database_id`<sup>Required</sup> <a name="external_non_container_database_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.externalNonContainerDatabaseId"></a>

```python
external_non_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#external_non_container_database_id DatabaseExternalNonContainerDatabaseManagement#external_non_container_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#id DatabaseExternalNonContainerDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#license_model DatabaseExternalNonContainerDatabaseManagement#license_model}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementConfig.property.timeouts"></a>

```python
timeouts: DatabaseExternalNonContainerDatabaseManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#timeouts DatabaseExternalNonContainerDatabaseManagement#timeouts}

---

### DatabaseExternalNonContainerDatabaseManagementTimeouts <a name="DatabaseExternalNonContainerDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#create DatabaseExternalNonContainerDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#delete DatabaseExternalNonContainerDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#update DatabaseExternalNonContainerDatabaseManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#create DatabaseExternalNonContainerDatabaseManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#delete DatabaseExternalNonContainerDatabaseManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database_management#update DatabaseExternalNonContainerDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference <a name="DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database_management

databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExternalNonContainerDatabaseManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabaseManagement.DatabaseExternalNonContainerDatabaseManagementTimeouts">DatabaseExternalNonContainerDatabaseManagementTimeouts</a>]

---



