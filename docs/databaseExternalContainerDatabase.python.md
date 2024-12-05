# `databaseExternalContainerDatabase` Submodule <a name="`databaseExternalContainerDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalContainerDatabase <a name="DatabaseExternalContainerDatabase" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database oci_database_external_container_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabase(
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
  timeouts: DatabaseExternalContainerDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#compartment_id DatabaseExternalContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#display_name DatabaseExternalContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#defined_tags DatabaseExternalContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#freeform_tags DatabaseExternalContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#id DatabaseExternalContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#compartment_id DatabaseExternalContainerDatabase#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#display_name DatabaseExternalContainerDatabase#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#defined_tags DatabaseExternalContainerDatabase#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#freeform_tags DatabaseExternalContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#id DatabaseExternalContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#timeouts DatabaseExternalContainerDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#create DatabaseExternalContainerDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#delete DatabaseExternalContainerDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#update DatabaseExternalContainerDatabase#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExternalContainerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExternalContainerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExternalContainerDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExternalContainerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalContainerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseConfiguration">database_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseManagementConfig">database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList">DatabaseExternalContainerDatabaseDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dbId">db_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dbPacks">db_packs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.stackMonitoringConfig">stack_monitoring_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList">DatabaseExternalContainerDatabaseStackMonitoringConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference">DatabaseExternalContainerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `database_configuration`<sup>Required</sup> <a name="database_configuration" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseConfiguration"></a>

```python
database_configuration: str
```

- *Type:* str

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_config`<sup>Required</sup> <a name="database_management_config" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseManagementConfig"></a>

```python
database_management_config: DatabaseExternalContainerDatabaseDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList">DatabaseExternalContainerDatabaseDatabaseManagementConfigList</a>

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `db_id`<sup>Required</sup> <a name="db_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dbId"></a>

```python
db_id: str
```

- *Type:* str

---

##### `db_packs`<sup>Required</sup> <a name="db_packs" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dbPacks"></a>

```python
db_packs: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `stack_monitoring_config`<sup>Required</sup> <a name="stack_monitoring_config" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.stackMonitoringConfig"></a>

```python
stack_monitoring_config: DatabaseExternalContainerDatabaseStackMonitoringConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList">DatabaseExternalContainerDatabaseStackMonitoringConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeouts"></a>

```python
timeouts: DatabaseExternalContainerDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference">DatabaseExternalContainerDatabaseTimeoutsOutputReference</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExternalContainerDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalContainerDatabaseConfig <a name="DatabaseExternalContainerDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig(
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
  timeouts: DatabaseExternalContainerDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#compartment_id DatabaseExternalContainerDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#display_name DatabaseExternalContainerDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#defined_tags DatabaseExternalContainerDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#freeform_tags DatabaseExternalContainerDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#id DatabaseExternalContainerDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#compartment_id DatabaseExternalContainerDatabase#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#display_name DatabaseExternalContainerDatabase#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#defined_tags DatabaseExternalContainerDatabase#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#freeform_tags DatabaseExternalContainerDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#id DatabaseExternalContainerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseConfig.property.timeouts"></a>

```python
timeouts: DatabaseExternalContainerDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#timeouts DatabaseExternalContainerDatabase#timeouts}

---

### DatabaseExternalContainerDatabaseDatabaseManagementConfig <a name="DatabaseExternalContainerDatabaseDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfig()
```


### DatabaseExternalContainerDatabaseStackMonitoringConfig <a name="DatabaseExternalContainerDatabaseStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfig()
```


### DatabaseExternalContainerDatabaseTimeouts <a name="DatabaseExternalContainerDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#create DatabaseExternalContainerDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#delete DatabaseExternalContainerDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#update DatabaseExternalContainerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#create DatabaseExternalContainerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#delete DatabaseExternalContainerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_external_container_database#update DatabaseExternalContainerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalContainerDatabaseDatabaseManagementConfigList <a name="DatabaseExternalContainerDatabaseDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference <a name="DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId">database_management_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfig">DatabaseExternalContainerDatabaseDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_management_connection_id`<sup>Required</sup> <a name="database_management_connection_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementConnectionId"></a>

```python
database_management_connection_id: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExternalContainerDatabaseDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseDatabaseManagementConfig">DatabaseExternalContainerDatabaseDatabaseManagementConfig</a>

---


### DatabaseExternalContainerDatabaseStackMonitoringConfigList <a name="DatabaseExternalContainerDatabaseStackMonitoringConfigList" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference <a name="DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId">stack_monitoring_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus">stack_monitoring_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfig">DatabaseExternalContainerDatabaseStackMonitoringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_monitoring_connector_id`<sup>Required</sup> <a name="stack_monitoring_connector_id" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringConnectorId"></a>

```python
stack_monitoring_connector_id: str
```

- *Type:* str

---

##### `stack_monitoring_status`<sup>Required</sup> <a name="stack_monitoring_status" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.stackMonitoringStatus"></a>

```python
stack_monitoring_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExternalContainerDatabaseStackMonitoringConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseStackMonitoringConfig">DatabaseExternalContainerDatabaseStackMonitoringConfig</a>

---


### DatabaseExternalContainerDatabaseTimeoutsOutputReference <a name="DatabaseExternalContainerDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_external_container_database

databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExternalContainerDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExternalContainerDatabase.DatabaseExternalContainerDatabaseTimeouts">DatabaseExternalContainerDatabaseTimeouts</a>]

---



