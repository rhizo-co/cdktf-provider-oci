# `databaseDatabaseUpgrade` Submodule <a name="`databaseDatabaseUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseUpgrade <a name="DatabaseDatabaseUpgrade" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade oci_database_database_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgrade(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  database_id: str,
  database_upgrade_source_details: DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails = None,
  id: str = None,
  timeouts: DatabaseDatabaseUpgradeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#action DatabaseDatabaseUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_id DatabaseDatabaseUpgrade#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.databaseUpgradeSourceDetails">database_upgrade_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a></code> | database_upgrade_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#id DatabaseDatabaseUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#action DatabaseDatabaseUpgrade#action}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_id DatabaseDatabaseUpgrade#database_id}.

---

##### `database_upgrade_source_details`<sup>Optional</sup> <a name="database_upgrade_source_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.databaseUpgradeSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a>

database_upgrade_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_upgrade_source_details DatabaseDatabaseUpgrade#database_upgrade_source_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#id DatabaseDatabaseUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#timeouts DatabaseDatabaseUpgrade#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putDatabaseUpgradeSourceDetails">put_database_upgrade_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetDatabaseUpgradeSourceDetails">reset_database_upgrade_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database_upgrade_source_details` <a name="put_database_upgrade_source_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putDatabaseUpgradeSourceDetails"></a>

```python
def put_database_upgrade_source_details(
  database_software_image_id: str = None,
  db_version: str = None,
  options: str = None,
  source: str = None
) -> None
```

###### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putDatabaseUpgradeSourceDetails.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_software_image_id DatabaseDatabaseUpgrade#database_software_image_id}.

---

###### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putDatabaseUpgradeSourceDetails.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#db_version DatabaseDatabaseUpgrade#db_version}.

---

###### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putDatabaseUpgradeSourceDetails.parameter.options"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#options DatabaseDatabaseUpgrade#options}.

---

###### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putDatabaseUpgradeSourceDetails.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#source DatabaseDatabaseUpgrade#source}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#create DatabaseDatabaseUpgrade#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#delete DatabaseDatabaseUpgrade#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#update DatabaseDatabaseUpgrade#update}.

---

##### `reset_database_upgrade_source_details` <a name="reset_database_upgrade_source_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetDatabaseUpgradeSourceDetails"></a>

```python
def reset_database_upgrade_source_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDatabaseUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDatabaseUpgrade resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDatabaseUpgrade to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDatabaseUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList">DatabaseDatabaseUpgradeConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseUpgradeSourceDetails">database_upgrade_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList">DatabaseDatabaseUpgradeDbBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbHomeId">db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.isCdb">is_cdb</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lastBackupDurationInSeconds">last_backup_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lastBackupTimestamp">last_backup_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lastFailedBackupTimestamp">last_failed_backup_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.sidPrefix">sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.sourceDatabasePointInTimeRecoveryTimestamp">source_database_point_in_time_recovery_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference">DatabaseDatabaseUpgradeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseUpgradeSourceDetailsInput">database_upgrade_source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.connectionStrings"></a>

```python
connection_strings: DatabaseDatabaseUpgradeConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList">DatabaseDatabaseUpgradeConnectionStringsList</a>

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `database_upgrade_source_details`<sup>Required</sup> <a name="database_upgrade_source_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseUpgradeSourceDetails"></a>

```python
database_upgrade_source_details: DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference</a>

---

##### `db_backup_config`<sup>Required</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDatabaseUpgradeDbBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList">DatabaseDatabaseUpgradeDbBackupConfigList</a>

---

##### `db_home_id`<sup>Required</sup> <a name="db_home_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbHomeId"></a>

```python
db_home_id: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_cdb`<sup>Required</sup> <a name="is_cdb" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.isCdb"></a>

```python
is_cdb: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `last_backup_duration_in_seconds`<sup>Required</sup> <a name="last_backup_duration_in_seconds" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lastBackupDurationInSeconds"></a>

```python
last_backup_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_backup_timestamp`<sup>Required</sup> <a name="last_backup_timestamp" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lastBackupTimestamp"></a>

```python
last_backup_timestamp: str
```

- *Type:* str

---

##### `last_failed_backup_timestamp`<sup>Required</sup> <a name="last_failed_backup_timestamp" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lastFailedBackupTimestamp"></a>

```python
last_failed_backup_timestamp: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `sid_prefix`<sup>Required</sup> <a name="sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.sidPrefix"></a>

```python
sid_prefix: str
```

- *Type:* str

---

##### `source_database_point_in_time_recovery_timestamp`<sup>Required</sup> <a name="source_database_point_in_time_recovery_timestamp" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.sourceDatabasePointInTimeRecoveryTimestamp"></a>

```python
source_database_point_in_time_recovery_timestamp: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.timeouts"></a>

```python
timeouts: DatabaseDatabaseUpgradeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference">DatabaseDatabaseUpgradeTimeoutsOutputReference</a>

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_upgrade_source_details_input`<sup>Optional</sup> <a name="database_upgrade_source_details_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseUpgradeSourceDetailsInput"></a>

```python
database_upgrade_source_details_input: DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDatabaseUpgradeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgrade.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseUpgradeConfig <a name="DatabaseDatabaseUpgradeConfig" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  database_id: str,
  database_upgrade_source_details: DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails = None,
  id: str = None,
  timeouts: DatabaseDatabaseUpgradeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#action DatabaseDatabaseUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_id DatabaseDatabaseUpgrade#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.databaseUpgradeSourceDetails">database_upgrade_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a></code> | database_upgrade_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#id DatabaseDatabaseUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#action DatabaseDatabaseUpgrade#action}.

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_id DatabaseDatabaseUpgrade#database_id}.

---

##### `database_upgrade_source_details`<sup>Optional</sup> <a name="database_upgrade_source_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.databaseUpgradeSourceDetails"></a>

```python
database_upgrade_source_details: DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a>

database_upgrade_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_upgrade_source_details DatabaseDatabaseUpgrade#database_upgrade_source_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#id DatabaseDatabaseUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConfig.property.timeouts"></a>

```python
timeouts: DatabaseDatabaseUpgradeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#timeouts DatabaseDatabaseUpgrade#timeouts}

---

### DatabaseDatabaseUpgradeConnectionStrings <a name="DatabaseDatabaseUpgradeConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStrings()
```


### DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails <a name="DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails(
  database_software_image_id: str = None,
  db_version: str = None,
  options: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_software_image_id DatabaseDatabaseUpgrade#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#db_version DatabaseDatabaseUpgrade#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.options">options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#options DatabaseDatabaseUpgrade#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#source DatabaseDatabaseUpgrade#source}. |

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#database_software_image_id DatabaseDatabaseUpgrade#database_software_image_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#db_version DatabaseDatabaseUpgrade#db_version}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.options"></a>

```python
options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#options DatabaseDatabaseUpgrade#options}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#source DatabaseDatabaseUpgrade#source}.

---

### DatabaseDatabaseUpgradeDbBackupConfig <a name="DatabaseDatabaseUpgradeDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfig()
```


### DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails <a name="DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails()
```


### DatabaseDatabaseUpgradeTimeouts <a name="DatabaseDatabaseUpgradeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#create DatabaseDatabaseUpgrade#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#delete DatabaseDatabaseUpgrade#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#update DatabaseDatabaseUpgrade#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#create DatabaseDatabaseUpgrade#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#delete DatabaseDatabaseUpgrade#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_upgrade#update DatabaseDatabaseUpgrade#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseUpgradeConnectionStringsList <a name="DatabaseDatabaseUpgradeConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseUpgradeConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseUpgradeConnectionStringsOutputReference <a name="DatabaseDatabaseUpgradeConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.cdbDefault">cdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.cdbIpDefault">cdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStrings">DatabaseDatabaseUpgradeConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cdb_default`<sup>Required</sup> <a name="cdb_default" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.cdbDefault"></a>

```python
cdb_default: str
```

- *Type:* str

---

##### `cdb_ip_default`<sup>Required</sup> <a name="cdb_ip_default" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.cdbIpDefault"></a>

```python
cdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseUpgradeConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeConnectionStrings">DatabaseDatabaseUpgradeConnectionStrings</a>

---


### DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference <a name="DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_options` <a name="reset_options" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.optionsInput">options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.optionsInput"></a>

```python
options_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails">DatabaseDatabaseUpgradeDatabaseUpgradeSourceDetails</a>

---


### DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy">internet_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword">vpc_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails">DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_proxy`<sup>Required</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_password`<sup>Required</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails">DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetails</a>

---


### DatabaseDatabaseUpgradeDbBackupConfigList <a name="DatabaseDatabaseUpgradeDbBackupConfigList" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDatabaseUpgradeDbBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDatabaseUpgradeDbBackupConfigOutputReference <a name="DatabaseDatabaseUpgradeDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfig">DatabaseDatabaseUpgradeDbBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_backup_enabled`<sup>Required</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_backup_window`<sup>Required</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

---

##### `auto_full_backup_day`<sup>Required</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

---

##### `auto_full_backup_window`<sup>Required</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

---

##### `backup_deletion_policy`<sup>Required</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList">DatabaseDatabaseUpgradeDbBackupConfigBackupDestinationDetailsList</a>

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup`<sup>Required</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDatabaseUpgradeDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeDbBackupConfig">DatabaseDatabaseUpgradeDbBackupConfig</a>

---


### DatabaseDatabaseUpgradeTimeoutsOutputReference <a name="DatabaseDatabaseUpgradeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_database_upgrade

databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDatabaseUpgradeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseUpgrade.DatabaseDatabaseUpgradeTimeouts">DatabaseDatabaseUpgradeTimeouts</a>]

---



