# `databaseCloudVmClusterIormConfig` Submodule <a name="`databaseCloudVmClusterIormConfig` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudVmClusterIormConfig <a name="DatabaseCloudVmClusterIormConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config oci_database_cloud_vm_cluster_iorm_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_vm_cluster_id: str,
  db_plans: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterIormConfigDbPlans]],
  id: str = None,
  objective: str = None,
  timeouts: DatabaseCloudVmClusterIormConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dbPlans">db_plans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]</code> | db_plans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.objective">objective</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}.

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.dbPlans"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]

db_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_plans DatabaseCloudVmClusterIormConfig#db_plans}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.objective"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#timeouts DatabaseCloudVmClusterIormConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans">put_db_plans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetObjective">reset_objective</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_db_plans` <a name="put_db_plans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans"></a>

```python
def put_db_plans(
  value: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterIormConfigDbPlans]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putDbPlans.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_objective` <a name="reset_objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetObjective"></a>

```python
def reset_objective() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseCloudVmClusterIormConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseCloudVmClusterIormConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseCloudVmClusterIormConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudVmClusterIormConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlans">db_plans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList">DatabaseCloudVmClusterIormConfigDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference">DatabaseCloudVmClusterIormConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput">cloud_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlansInput">db_plans_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objectiveInput">objective_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objective">objective</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlans"></a>

```python
db_plans: DatabaseCloudVmClusterIormConfigDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList">DatabaseCloudVmClusterIormConfigDbPlansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeouts"></a>

```python
timeouts: DatabaseCloudVmClusterIormConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference">DatabaseCloudVmClusterIormConfigTimeoutsOutputReference</a>

---

##### `cloud_vm_cluster_id_input`<sup>Optional</sup> <a name="cloud_vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterIdInput"></a>

```python
cloud_vm_cluster_id_input: str
```

- *Type:* str

---

##### `db_plans_input`<sup>Optional</sup> <a name="db_plans_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.dbPlansInput"></a>

```python
db_plans_input: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterIormConfigDbPlans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `objective_input`<sup>Optional</sup> <a name="objective_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objectiveInput"></a>

```python
objective_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseCloudVmClusterIormConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudVmClusterIormConfigConfig <a name="DatabaseCloudVmClusterIormConfigConfig" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_vm_cluster_id: str,
  db_plans: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterIormConfigDbPlans]],
  id: str = None,
  objective: str = None,
  timeouts: DatabaseCloudVmClusterIormConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dbPlans">db_plans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]</code> | db_plans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.objective">objective</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#cloud_vm_cluster_id DatabaseCloudVmClusterIormConfig#cloud_vm_cluster_id}.

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.dbPlans"></a>

```python
db_plans: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterIormConfigDbPlans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]

db_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_plans DatabaseCloudVmClusterIormConfig#db_plans}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#id DatabaseCloudVmClusterIormConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objective`<sup>Optional</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.objective"></a>

```python
objective: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#objective DatabaseCloudVmClusterIormConfig#objective}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigConfig.property.timeouts"></a>

```python
timeouts: DatabaseCloudVmClusterIormConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#timeouts DatabaseCloudVmClusterIormConfig#timeouts}

---

### DatabaseCloudVmClusterIormConfigDbPlans <a name="DatabaseCloudVmClusterIormConfigDbPlans" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans(
  db_name: str,
  share: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.share">share</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}. |

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#db_name DatabaseCloudVmClusterIormConfig#db_name}.

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#share DatabaseCloudVmClusterIormConfig#share}.

---

### DatabaseCloudVmClusterIormConfigTimeouts <a name="DatabaseCloudVmClusterIormConfigTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#create DatabaseCloudVmClusterIormConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#delete DatabaseCloudVmClusterIormConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_vm_cluster_iorm_config#update DatabaseCloudVmClusterIormConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudVmClusterIormConfigDbPlansList <a name="DatabaseCloudVmClusterIormConfigDbPlansList" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseCloudVmClusterIormConfigDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseCloudVmClusterIormConfigDbPlans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]]

---


### DatabaseCloudVmClusterIormConfigDbPlansOutputReference <a name="DatabaseCloudVmClusterIormConfigDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.shareInput">share_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `share_input`<sup>Optional</sup> <a name="share_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.shareInput"></a>

```python
share_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseCloudVmClusterIormConfigDbPlans]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigDbPlans">DatabaseCloudVmClusterIormConfigDbPlans</a>]

---


### DatabaseCloudVmClusterIormConfigTimeoutsOutputReference <a name="DatabaseCloudVmClusterIormConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_cloud_vm_cluster_iorm_config

databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseCloudVmClusterIormConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseCloudVmClusterIormConfig.DatabaseCloudVmClusterIormConfigTimeouts">DatabaseCloudVmClusterIormConfigTimeouts</a>]

---



