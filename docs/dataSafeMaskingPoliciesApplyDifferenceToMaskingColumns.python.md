# `dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns` Submodule <a name="`dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns oci_data_safe_masking_policies_apply_difference_to_masking_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_policy_id: str,
  sdm_masking_policy_difference_id: str,
  id: str = None,
  timeouts: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.sdmMaskingPolicyDifferenceId">sdm_masking_policy_difference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}.

---

##### `sdm_masking_policy_difference_id`<sup>Required</sup> <a name="sdm_masking_policy_difference_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.sdmMaskingPolicyDifferenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#timeouts DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceIdInput">sdm_masking_policy_difference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceId">sdm_masking_policy_difference_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeouts"></a>

```python
timeouts: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `sdm_masking_policy_difference_id_input`<sup>Optional</sup> <a name="sdm_masking_policy_difference_id_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceIdInput"></a>

```python
sdm_masking_policy_difference_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `sdm_masking_policy_difference_id`<sup>Required</sup> <a name="sdm_masking_policy_difference_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceId"></a>

```python
sdm_masking_policy_difference_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_policy_id: str,
  sdm_masking_policy_difference_id: str,
  id: str = None,
  timeouts: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.sdmMaskingPolicyDifferenceId">sdm_masking_policy_difference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}.

---

##### `sdm_masking_policy_difference_id`<sup>Required</sup> <a name="sdm_masking_policy_difference_id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.sdmMaskingPolicyDifferenceId"></a>

```python
sdm_masking_policy_difference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.timeouts"></a>

```python
timeouts: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#timeouts DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#timeouts}

---

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_masking_policies_apply_difference_to_masking_columns

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>]

---



