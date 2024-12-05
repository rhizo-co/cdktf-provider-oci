# `databaseAutonomousContainerDatabaseDataguardAssociationOperation` Submodule <a name="`databaseAutonomousContainerDatabaseDataguardAssociationOperation` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperation <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation oci_database_autonomous_container_database_dataguard_association_operation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_dataguard_association_id: str,
  autonomous_container_database_id: str,
  operation: str,
  id: str = None,
  timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#operation DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.autonomousContainerDatabaseDataguardAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_dataguard_association_id}.

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_id}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.operation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#operation DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#operation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#create DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#delete DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#delete}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociationOperation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseAutonomousContainerDatabaseDataguardAssociationOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseAutonomousContainerDatabaseDataguardAssociationOperation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseAutonomousContainerDatabaseDataguardAssociationOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousContainerDatabaseDataguardAssociationOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationIdInput">autonomous_container_database_dataguard_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseIdInput">autonomous_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operation">operation</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference</a>

---

##### `autonomous_container_database_dataguard_association_id_input`<sup>Optional</sup> <a name="autonomous_container_database_dataguard_association_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationIdInput"></a>

```python
autonomous_container_database_dataguard_association_id_input: str
```

- *Type:* str

---

##### `autonomous_container_database_id_input`<sup>Optional</sup> <a name="autonomous_container_database_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseIdInput"></a>

```python
autonomous_container_database_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>]

---

##### `autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```python
autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_container_database_dataguard_association_id: str,
  autonomous_container_database_id: str,
  operation: str,
  id: str = None,
  timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseDataguardAssociationId">autonomous_container_database_dataguard_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#operation DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_container_database_dataguard_association_id`<sup>Required</sup> <a name="autonomous_container_database_dataguard_association_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseDataguardAssociationId"></a>

```python
autonomous_container_database_dataguard_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_dataguard_association_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_dataguard_association_id}.

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#autonomous_container_database_id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#autonomous_container_database_id}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#operation DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#operation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#id DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationConfig.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#timeouts DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#timeouts}

---

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#create DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#delete DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#create DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_container_database_dataguard_association_operation#delete DatabaseAutonomousContainerDatabaseDataguardAssociationOperation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference <a name="DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_container_database_dataguard_association_operation

databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousContainerDatabaseDataguardAssociationOperation.DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts">DatabaseAutonomousContainerDatabaseDataguardAssociationOperationTimeouts</a>]

---



