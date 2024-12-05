# `disasterRecoveryDrPlan` Submodule <a name="`disasterRecoveryDrPlan` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrPlan <a name="DisasterRecoveryDrPlan" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan oci_disaster_recovery_dr_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  dr_protection_group_id: str,
  type: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DisasterRecoveryDrPlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}.

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.drProtectionGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#timeouts DisasterRecoveryDrPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DisasterRecoveryDrPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DisasterRecoveryDrPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifeCycleDetails">life_cycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerDrProtectionGroupId">peer_dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.planGroups">plan_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList">DisasterRecoveryDrPlanPlanGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference">DisasterRecoveryDrPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupIdInput">dr_protection_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `life_cycle_details`<sup>Required</sup> <a name="life_cycle_details" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifeCycleDetails"></a>

```python
life_cycle_details: str
```

- *Type:* str

---

##### `peer_dr_protection_group_id`<sup>Required</sup> <a name="peer_dr_protection_group_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerDrProtectionGroupId"></a>

```python
peer_dr_protection_group_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `plan_groups`<sup>Required</sup> <a name="plan_groups" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.planGroups"></a>

```python
plan_groups: DisasterRecoveryDrPlanPlanGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList">DisasterRecoveryDrPlanPlanGroupsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeouts"></a>

```python
timeouts: DisasterRecoveryDrPlanTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference">DisasterRecoveryDrPlanTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dr_protection_group_id_input`<sup>Optional</sup> <a name="dr_protection_group_id_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupIdInput"></a>

```python
dr_protection_group_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DisasterRecoveryDrPlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrPlanConfig <a name="DisasterRecoveryDrPlanConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  dr_protection_group_id: str,
  type: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DisasterRecoveryDrPlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}.

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.timeouts"></a>

```python
timeouts: DisasterRecoveryDrPlanTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#timeouts DisasterRecoveryDrPlan#timeouts}

---

### DisasterRecoveryDrPlanPlanGroups <a name="DisasterRecoveryDrPlanPlanGroups" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups()
```


### DisasterRecoveryDrPlanPlanGroupsSteps <a name="DisasterRecoveryDrPlanPlanGroupsSteps" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps()
```


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep()
```


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation()
```


### DisasterRecoveryDrPlanTimeouts <a name="DisasterRecoveryDrPlanTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrPlanPlanGroupsList <a name="DisasterRecoveryDrPlanPlanGroupsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisasterRecoveryDrPlanPlanGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DisasterRecoveryDrPlanPlanGroupsOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.isPauseEnabled">is_pause_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList">DisasterRecoveryDrPlanPlanGroupsStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups">DisasterRecoveryDrPlanPlanGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_pause_enabled`<sup>Required</sup> <a name="is_pause_enabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.isPauseEnabled"></a>

```python
is_pause_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.steps"></a>

```python
steps: DisasterRecoveryDrPlanPlanGroupsStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList">DisasterRecoveryDrPlanPlanGroupsStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DisasterRecoveryDrPlanPlanGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups">DisasterRecoveryDrPlanPlanGroups</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsList <a name="DisasterRecoveryDrPlanPlanGroupsStepsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisasterRecoveryDrPlanPlanGroupsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DisasterRecoveryDrPlanPlanGroupsStepsOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.errorMode">error_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.userDefinedStep">user_defined_step</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps">DisasterRecoveryDrPlanPlanGroupsSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `error_mode`<sup>Required</sup> <a name="error_mode" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.errorMode"></a>

```python
error_mode: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_step`<sup>Required</sup> <a name="user_defined_step" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.userDefinedStep"></a>

```python
user_defined_step: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.internalValue"></a>

```python
internal_value: DisasterRecoveryDrPlanPlanGroupsSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps">DisasterRecoveryDrPlanPlanGroupsSteps</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue"></a>

```python
internal_value: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion">function_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation">object_storage_script_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody">request_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser">run_as_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId">run_on_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion">run_on_instance_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand">script_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.stepType">step_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `function_region`<sup>Required</sup> <a name="function_region" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion"></a>

```python
function_region: str
```

- *Type:* str

---

##### `object_storage_script_location`<sup>Required</sup> <a name="object_storage_script_location" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation"></a>

```python
object_storage_script_location: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a>

---

##### `request_body`<sup>Required</sup> <a name="request_body" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser"></a>

```python
run_as_user: str
```

- *Type:* str

---

##### `run_on_instance_id`<sup>Required</sup> <a name="run_on_instance_id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId"></a>

```python
run_on_instance_id: str
```

- *Type:* str

---

##### `run_on_instance_region`<sup>Required</sup> <a name="run_on_instance_region" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion"></a>

```python
run_on_instance_region: str
```

- *Type:* str

---

##### `script_command`<sup>Required</sup> <a name="script_command" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand"></a>

```python
script_command: str
```

- *Type:* str

---

##### `step_type`<sup>Required</sup> <a name="step_type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.stepType"></a>

```python
step_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue"></a>

```python
internal_value: DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep</a>

---


### DisasterRecoveryDrPlanTimeoutsOutputReference <a name="DisasterRecoveryDrPlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import disaster_recovery_dr_plan

disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DisasterRecoveryDrPlanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>]

---



