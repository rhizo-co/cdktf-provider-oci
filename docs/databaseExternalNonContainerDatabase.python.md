# `databaseExternalNonContainerDatabase` Submodule <a name="`databaseExternalNonContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalNonContainerDatabase <a name="DatabaseExternalNonContainerDatabase" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database oci_database_external_non_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase(
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
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseExternalNonContainerDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#compartment_id DatabaseExternalNonContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#display_name DatabaseExternalNonContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#defined_tags DatabaseExternalNonContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#freeform_tags DatabaseExternalNonContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#id DatabaseExternalNonContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#compartment_id DatabaseExternalNonContainerDatabase#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#display_name DatabaseExternalNonContainerDatabase#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#defined_tags DatabaseExternalNonContainerDatabase#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#freeform_tags DatabaseExternalNonContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#id DatabaseExternalNonContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#timeouts DatabaseExternalNonContainerDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#create DatabaseExternalNonContainerDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#delete DatabaseExternalNonContainerDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#update DatabaseExternalNonContainerDatabase#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExternalNonContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExternalNonContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExternalNonContainerDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExternalNonContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalNonContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseConfiguration">database_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseManagementConfig">database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList">DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dbId">db_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dbPacks">db_packs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.operationsInsightsConfig">operations_insights_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList">DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.stackMonitoringConfig">stack_monitoring_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList">DatabaseExternalNonContainerDatabaseStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `database_configuration`<sup>Required</sup> <a name="database_configuration" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseConfiguration"></a>

```python
database_configuration: str
```

- *Type:* str

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_config`<sup>Required</sup> <a name="database_management_config" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseManagementConfig"></a>

```python
database_management_config: DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList">DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList</a>

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `db_id`<sup>Required</sup> <a name="db_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dbId"></a>

```python
db_id: str
```

- *Type:* str

---

##### `db_packs`<sup>Required</sup> <a name="db_packs" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dbPacks"></a>

```python
db_packs: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `operations_insights_config`<sup>Required</sup> <a name="operations_insights_config" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.operationsInsightsConfig"></a>

```python
operations_insights_config: DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList">DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList</a>

---

##### `stack_monitoring_config`<sup>Required</sup> <a name="stack_monitoring_config" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.stackMonitoringConfig"></a>

```python
stack_monitoring_config: DatabaseExternalNonContainerDatabaseStackMonitoringConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList">DatabaseExternalNonContainerDatabaseStackMonitoringConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeouts"></a>

```python
timeouts: DatabaseExternalNonContainerDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference">DatabaseExternalNonContainerDatabaseTimeoutsOutputReference</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExternalNonContainerDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalNonContainerDatabaseConfig <a name="DatabaseExternalNonContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseExternalNonContainerDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#compartment_id DatabaseExternalNonContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#display_name DatabaseExternalNonContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#defined_tags DatabaseExternalNonContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#freeform_tags DatabaseExternalNonContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#id DatabaseExternalNonContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#compartment_id DatabaseExternalNonContainerDatabase#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#display_name DatabaseExternalNonContainerDatabase#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#defined_tags DatabaseExternalNonContainerDatabase#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#freeform_tags DatabaseExternalNonContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#id DatabaseExternalNonContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseConfig.property.timeouts"></a>

```python
timeouts: DatabaseExternalNonContainerDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#timeouts DatabaseExternalNonContainerDatabase#timeouts}

---

### DatabaseExternalNonContainerDatabaseDatabaseManagementConfig <a name="DatabaseExternalNonContainerDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfig()
```


### DatabaseExternalNonContainerDatabaseOperationsInsightsConfig <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfig()
```


### DatabaseExternalNonContainerDatabaseStackMonitoringConfig <a name="DatabaseExternalNonContainerDatabaseStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfig()
```


### DatabaseExternalNonContainerDatabaseTimeouts <a name="DatabaseExternalNonContainerDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#create DatabaseExternalNonContainerDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#delete DatabaseExternalNonContainerDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#update DatabaseExternalNonContainerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#create DatabaseExternalNonContainerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#delete DatabaseExternalNonContainerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_non_container_database#update DatabaseExternalNonContainerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList <a name="DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference <a name="DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">database_management_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfig">DatabaseExternalNonContainerDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_management_connection_id`<sup>Required</sup> <a name="database_management_connection_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```python
database_management_connection_id: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExternalNonContainerDatabaseDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseDatabaseManagementConfig">DatabaseExternalNonContainerDatabaseDatabaseManagementConfig</a>

---


### DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference <a name="DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId">operations_insights_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfig">DatabaseExternalNonContainerDatabaseOperationsInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations_insights_connector_id`<sup>Required</sup> <a name="operations_insights_connector_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsConnectorId"></a>

```python
operations_insights_connector_id: str
```

- *Type:* str

---

##### `operations_insights_status`<sup>Required</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.operationsInsightsStatus"></a>

```python
operations_insights_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExternalNonContainerDatabaseOperationsInsightsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseOperationsInsightsConfig">DatabaseExternalNonContainerDatabaseOperationsInsightsConfig</a>

---


### DatabaseExternalNonContainerDatabaseStackMonitoringConfigList <a name="DatabaseExternalNonContainerDatabaseStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference <a name="DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">stack_monitoring_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus">stack_monitoring_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfig">DatabaseExternalNonContainerDatabaseStackMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_monitoring_connector_id`<sup>Required</sup> <a name="stack_monitoring_connector_id" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```python
stack_monitoring_connector_id: str
```

- *Type:* str

---

##### `stack_monitoring_status`<sup>Required</sup> <a name="stack_monitoring_status" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```python
stack_monitoring_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExternalNonContainerDatabaseStackMonitoringConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseStackMonitoringConfig">DatabaseExternalNonContainerDatabaseStackMonitoringConfig</a>

---


### DatabaseExternalNonContainerDatabaseTimeoutsOutputReference <a name="DatabaseExternalNonContainerDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_non_container_database

databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExternalNonContainerDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalNonContainerDatabase.DatabaseExternalNonContainerDatabaseTimeouts">DatabaseExternalNonContainerDatabaseTimeouts</a>]

---



