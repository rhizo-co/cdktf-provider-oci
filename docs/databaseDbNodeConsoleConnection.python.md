# `databaseDbNodeConsoleConnection` Submodule <a name="`databaseDbNodeConsoleConnection` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbNodeConsoleConnection <a name="DatabaseDbNodeConsoleConnection" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection oci_database_db_node_console_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_node_id: str,
  public_key: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseDbNodeConsoleConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.dbNodeId">db_node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#db_node_id DatabaseDbNodeConsoleConnection#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#public_key DatabaseDbNodeConsoleConnection#public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#defined_tags DatabaseDbNodeConsoleConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#freeform_tags DatabaseDbNodeConsoleConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#id DatabaseDbNodeConsoleConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.dbNodeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#db_node_id DatabaseDbNodeConsoleConnection#db_node_id}.

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#public_key DatabaseDbNodeConsoleConnection#public_key}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#defined_tags DatabaseDbNodeConsoleConnection#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#freeform_tags DatabaseDbNodeConsoleConnection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#id DatabaseDbNodeConsoleConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#timeouts DatabaseDbNodeConsoleConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#create DatabaseDbNodeConsoleConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#delete DatabaseDbNodeConsoleConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#update DatabaseDbNodeConsoleConnection#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDbNodeConsoleConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDbNodeConsoleConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDbNodeConsoleConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDbNodeConsoleConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbNodeConsoleConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.serviceHostKeyFingerprint">service_host_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference">DatabaseDbNodeConsoleConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.dbNodeIdInput">db_node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.dbNodeId">db_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `service_host_key_fingerprint`<sup>Required</sup> <a name="service_host_key_fingerprint" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.serviceHostKeyFingerprint"></a>

```python
service_host_key_fingerprint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.timeouts"></a>

```python
timeouts: DatabaseDbNodeConsoleConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference">DatabaseDbNodeConsoleConnectionTimeoutsOutputReference</a>

---

##### `db_node_id_input`<sup>Optional</sup> <a name="db_node_id_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.dbNodeIdInput"></a>

```python
db_node_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDbNodeConsoleConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a>]

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbNodeConsoleConnectionConfig <a name="DatabaseDbNodeConsoleConnectionConfig" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_node_id: str,
  public_key: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseDbNodeConsoleConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.dbNodeId">db_node_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#db_node_id DatabaseDbNodeConsoleConnection#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#public_key DatabaseDbNodeConsoleConnection#public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#defined_tags DatabaseDbNodeConsoleConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#freeform_tags DatabaseDbNodeConsoleConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#id DatabaseDbNodeConsoleConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#db_node_id DatabaseDbNodeConsoleConnection#db_node_id}.

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#public_key DatabaseDbNodeConsoleConnection#public_key}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#defined_tags DatabaseDbNodeConsoleConnection#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#freeform_tags DatabaseDbNodeConsoleConnection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#id DatabaseDbNodeConsoleConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionConfig.property.timeouts"></a>

```python
timeouts: DatabaseDbNodeConsoleConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#timeouts DatabaseDbNodeConsoleConnection#timeouts}

---

### DatabaseDbNodeConsoleConnectionTimeouts <a name="DatabaseDbNodeConsoleConnectionTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#create DatabaseDbNodeConsoleConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#delete DatabaseDbNodeConsoleConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#update DatabaseDbNodeConsoleConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#create DatabaseDbNodeConsoleConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#delete DatabaseDbNodeConsoleConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_node_console_connection#update DatabaseDbNodeConsoleConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbNodeConsoleConnectionTimeoutsOutputReference <a name="DatabaseDbNodeConsoleConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_node_console_connection

databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbNodeConsoleConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbNodeConsoleConnection.DatabaseDbNodeConsoleConnectionTimeouts">DatabaseDbNodeConsoleConnectionTimeouts</a>]

---



