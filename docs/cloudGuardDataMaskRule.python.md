# `cloudGuardDataMaskRule` Submodule <a name="`cloudGuardDataMaskRule` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDataMaskRule <a name="CloudGuardDataMaskRule" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule oci_cloud_guard_data_mask_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRule(
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
  data_mask_categories: typing.List[str],
  display_name: str,
  iam_group_id: str,
  target_selected: CloudGuardDataMaskRuleTargetSelected,
  data_mask_rule_status: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  state: str = None,
  timeouts: CloudGuardDataMaskRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.dataMaskCategories">data_mask_categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.iamGroupId">iam_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.targetSelected">target_selected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | target_selected block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.dataMaskRuleStatus">data_mask_rule_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}.

---

##### `data_mask_categories`<sup>Required</sup> <a name="data_mask_categories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.dataMaskCategories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}.

---

##### `iam_group_id`<sup>Required</sup> <a name="iam_group_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.iamGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}.

---

##### `target_selected`<sup>Required</sup> <a name="target_selected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.targetSelected"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

target_selected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#target_selected CloudGuardDataMaskRule#target_selected}

---

##### `data_mask_rule_status`<sup>Optional</sup> <a name="data_mask_rule_status" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.dataMaskRuleStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#timeouts CloudGuardDataMaskRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected">put_target_selected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDataMaskRuleStatus">reset_data_mask_rule_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_target_selected` <a name="put_target_selected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected"></a>

```python
def put_target_selected(
  kind: str,
  values: typing.List[str] = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}.

---

###### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}.

---

##### `reset_data_mask_rule_status` <a name="reset_data_mask_rule_status" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDataMaskRuleStatus"></a>

```python
def reset_data_mask_rule_status() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudGuardDataMaskRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudGuardDataMaskRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDataMaskRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelected">target_selected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference">CloudGuardDataMaskRuleTargetSelectedOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference">CloudGuardDataMaskRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategoriesInput">data_mask_categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatusInput">data_mask_rule_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupIdInput">iam_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelectedInput">target_selected_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategories">data_mask_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatus">data_mask_rule_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupId">iam_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_selected`<sup>Required</sup> <a name="target_selected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelected"></a>

```python
target_selected: CloudGuardDataMaskRuleTargetSelectedOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference">CloudGuardDataMaskRuleTargetSelectedOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeouts"></a>

```python
timeouts: CloudGuardDataMaskRuleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference">CloudGuardDataMaskRuleTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `data_mask_categories_input`<sup>Optional</sup> <a name="data_mask_categories_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategoriesInput"></a>

```python
data_mask_categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_mask_rule_status_input`<sup>Optional</sup> <a name="data_mask_rule_status_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatusInput"></a>

```python
data_mask_rule_status_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `iam_group_id_input`<sup>Optional</sup> <a name="iam_group_id_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupIdInput"></a>

```python
iam_group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_selected_input`<sup>Optional</sup> <a name="target_selected_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelectedInput"></a>

```python
target_selected_input: CloudGuardDataMaskRuleTargetSelected
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudGuardDataMaskRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_mask_categories`<sup>Required</sup> <a name="data_mask_categories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategories"></a>

```python
data_mask_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_mask_rule_status`<sup>Required</sup> <a name="data_mask_rule_status" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatus"></a>

```python
data_mask_rule_status: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `iam_group_id`<sup>Required</sup> <a name="iam_group_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupId"></a>

```python
iam_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDataMaskRuleConfig <a name="CloudGuardDataMaskRuleConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  data_mask_categories: typing.List[str],
  display_name: str,
  iam_group_id: str,
  target_selected: CloudGuardDataMaskRuleTargetSelected,
  data_mask_rule_status: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  state: str = None,
  timeouts: CloudGuardDataMaskRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskCategories">data_mask_categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.iamGroupId">iam_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.targetSelected">target_selected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | target_selected block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskRuleStatus">data_mask_rule_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}.

---

##### `data_mask_categories`<sup>Required</sup> <a name="data_mask_categories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskCategories"></a>

```python
data_mask_categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}.

---

##### `iam_group_id`<sup>Required</sup> <a name="iam_group_id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.iamGroupId"></a>

```python
iam_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}.

---

##### `target_selected`<sup>Required</sup> <a name="target_selected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.targetSelected"></a>

```python
target_selected: CloudGuardDataMaskRuleTargetSelected
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

target_selected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#target_selected CloudGuardDataMaskRule#target_selected}

---

##### `data_mask_rule_status`<sup>Optional</sup> <a name="data_mask_rule_status" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskRuleStatus"></a>

```python
data_mask_rule_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.timeouts"></a>

```python
timeouts: CloudGuardDataMaskRuleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#timeouts CloudGuardDataMaskRule#timeouts}

---

### CloudGuardDataMaskRuleTargetSelected <a name="CloudGuardDataMaskRuleTargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected(
  kind: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}.

---

##### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}.

---

### CloudGuardDataMaskRuleTimeouts <a name="CloudGuardDataMaskRuleTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDataMaskRuleTargetSelectedOutputReference <a name="CloudGuardDataMaskRuleTargetSelectedOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue"></a>

```python
internal_value: CloudGuardDataMaskRuleTargetSelected
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---


### CloudGuardDataMaskRuleTimeoutsOutputReference <a name="CloudGuardDataMaskRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_data_mask_rule

cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudGuardDataMaskRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>]

---



