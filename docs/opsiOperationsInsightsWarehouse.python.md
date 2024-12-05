# `opsiOperationsInsightsWarehouse` Submodule <a name="`opsiOperationsInsightsWarehouse` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouse <a name="OpsiOperationsInsightsWarehouse" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse(
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
  cpu_allocated: typing.Union[int, float],
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  storage_allocated_in_gbs: typing.Union[int, float] = None,
  timeouts: OpsiOperationsInsightsWarehouseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#compartment_id OpsiOperationsInsightsWarehouse#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.cpuAllocated">cpu_allocated</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#cpu_allocated OpsiOperationsInsightsWarehouse#cpu_allocated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#display_name OpsiOperationsInsightsWarehouse#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#defined_tags OpsiOperationsInsightsWarehouse#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#freeform_tags OpsiOperationsInsightsWarehouse#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#id OpsiOperationsInsightsWarehouse#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.storageAllocatedInGbs">storage_allocated_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#storage_allocated_in_gbs OpsiOperationsInsightsWarehouse#storage_allocated_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#compartment_id OpsiOperationsInsightsWarehouse#compartment_id}.

---

##### `cpu_allocated`<sup>Required</sup> <a name="cpu_allocated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.cpuAllocated"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#cpu_allocated OpsiOperationsInsightsWarehouse#cpu_allocated}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#display_name OpsiOperationsInsightsWarehouse#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#defined_tags OpsiOperationsInsightsWarehouse#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#freeform_tags OpsiOperationsInsightsWarehouse#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#id OpsiOperationsInsightsWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_allocated_in_gbs`<sup>Optional</sup> <a name="storage_allocated_in_gbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.storageAllocatedInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#storage_allocated_in_gbs OpsiOperationsInsightsWarehouse#storage_allocated_in_gbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#timeouts OpsiOperationsInsightsWarehouse#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetStorageAllocatedInGbs">reset_storage_allocated_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#create OpsiOperationsInsightsWarehouse#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#delete OpsiOperationsInsightsWarehouse#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#update OpsiOperationsInsightsWarehouse#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_allocated_in_gbs` <a name="reset_storage_allocated_in_gbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetStorageAllocatedInGbs"></a>

```python
def reset_storage_allocated_in_gbs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpsiOperationsInsightsWarehouse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpsiOperationsInsightsWarehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cpuUsed">cpu_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.dynamicGroupId">dynamic_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.operationsInsightsTenancyId">operations_insights_tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.storageUsedInGbs">storage_used_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeLastWalletRotated">time_last_wallet_rotated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference">OpsiOperationsInsightsWarehouseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cpuAllocatedInput">cpu_allocated_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.storageAllocatedInGbsInput">storage_allocated_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cpuAllocated">cpu_allocated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.storageAllocatedInGbs">storage_allocated_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_used`<sup>Required</sup> <a name="cpu_used" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cpuUsed"></a>

```python
cpu_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_group_id`<sup>Required</sup> <a name="dynamic_group_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.dynamicGroupId"></a>

```python
dynamic_group_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `operations_insights_tenancy_id`<sup>Required</sup> <a name="operations_insights_tenancy_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.operationsInsightsTenancyId"></a>

```python
operations_insights_tenancy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_used_in_gbs`<sup>Required</sup> <a name="storage_used_in_gbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.storageUsedInGbs"></a>

```python
storage_used_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_wallet_rotated`<sup>Required</sup> <a name="time_last_wallet_rotated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeLastWalletRotated"></a>

```python
time_last_wallet_rotated: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeouts"></a>

```python
timeouts: OpsiOperationsInsightsWarehouseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference">OpsiOperationsInsightsWarehouseTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cpu_allocated_input`<sup>Optional</sup> <a name="cpu_allocated_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cpuAllocatedInput"></a>

```python
cpu_allocated_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `storage_allocated_in_gbs_input`<sup>Optional</sup> <a name="storage_allocated_in_gbs_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.storageAllocatedInGbsInput"></a>

```python
storage_allocated_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OpsiOperationsInsightsWarehouseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_allocated`<sup>Required</sup> <a name="cpu_allocated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.cpuAllocated"></a>

```python
cpu_allocated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_allocated_in_gbs`<sup>Required</sup> <a name="storage_allocated_in_gbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.storageAllocatedInGbs"></a>

```python
storage_allocated_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseConfig <a name="OpsiOperationsInsightsWarehouseConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cpu_allocated: typing.Union[int, float],
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  storage_allocated_in_gbs: typing.Union[int, float] = None,
  timeouts: OpsiOperationsInsightsWarehouseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#compartment_id OpsiOperationsInsightsWarehouse#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.cpuAllocated">cpu_allocated</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#cpu_allocated OpsiOperationsInsightsWarehouse#cpu_allocated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#display_name OpsiOperationsInsightsWarehouse#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#defined_tags OpsiOperationsInsightsWarehouse#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#freeform_tags OpsiOperationsInsightsWarehouse#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#id OpsiOperationsInsightsWarehouse#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.storageAllocatedInGbs">storage_allocated_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#storage_allocated_in_gbs OpsiOperationsInsightsWarehouse#storage_allocated_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#compartment_id OpsiOperationsInsightsWarehouse#compartment_id}.

---

##### `cpu_allocated`<sup>Required</sup> <a name="cpu_allocated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.cpuAllocated"></a>

```python
cpu_allocated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#cpu_allocated OpsiOperationsInsightsWarehouse#cpu_allocated}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#display_name OpsiOperationsInsightsWarehouse#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#defined_tags OpsiOperationsInsightsWarehouse#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#freeform_tags OpsiOperationsInsightsWarehouse#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#id OpsiOperationsInsightsWarehouse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_allocated_in_gbs`<sup>Optional</sup> <a name="storage_allocated_in_gbs" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.storageAllocatedInGbs"></a>

```python
storage_allocated_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#storage_allocated_in_gbs OpsiOperationsInsightsWarehouse#storage_allocated_in_gbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseConfig.property.timeouts"></a>

```python
timeouts: OpsiOperationsInsightsWarehouseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#timeouts OpsiOperationsInsightsWarehouse#timeouts}

---

### OpsiOperationsInsightsWarehouseTimeouts <a name="OpsiOperationsInsightsWarehouseTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#create OpsiOperationsInsightsWarehouse#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#delete OpsiOperationsInsightsWarehouse#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#update OpsiOperationsInsightsWarehouse#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#create OpsiOperationsInsightsWarehouse#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#delete OpsiOperationsInsightsWarehouse#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse#update OpsiOperationsInsightsWarehouse#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import opsi_operations_insights_warehouse

opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpsiOperationsInsightsWarehouseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouse.OpsiOperationsInsightsWarehouseTimeouts">OpsiOperationsInsightsWarehouseTimeouts</a>]

---



