# `dataSafeSdmMaskingPolicyDifference` Submodule <a name="`dataSafeSdmMaskingPolicyDifference` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSdmMaskingPolicyDifference <a name="DataSafeSdmMaskingPolicyDifference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference(
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
  masking_policy_id: str,
  defined_tags: typing.Mapping[str] = None,
  difference_type: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DataSafeSdmMaskingPolicyDifferenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.differenceType">difference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `difference_type`<sup>Optional</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.differenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType">reset_difference_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_difference_type` <a name="reset_difference_type" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType"></a>

```python
def reset_difference_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeSdmMaskingPolicyDifference to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeSdmMaskingPolicyDifference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSdmMaskingPolicyDifference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted">time_creation_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput">difference_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType">difference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_creation_started`<sup>Required</sup> <a name="time_creation_started" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted"></a>

```python
time_creation_started: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts"></a>

```python
timeouts: DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `difference_type_input`<sup>Optional</sup> <a name="difference_type_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput"></a>

```python
difference_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeSdmMaskingPolicyDifferenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `difference_type`<sup>Required</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType"></a>

```python
difference_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSdmMaskingPolicyDifferenceConfig <a name="DataSafeSdmMaskingPolicyDifferenceConfig" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  masking_policy_id: str,
  defined_tags: typing.Mapping[str] = None,
  difference_type: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DataSafeSdmMaskingPolicyDifferenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType">difference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `difference_type`<sup>Optional</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType"></a>

```python
difference_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts"></a>

```python
timeouts: DataSafeSdmMaskingPolicyDifferenceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

### DataSafeSdmMaskingPolicyDifferenceTimeouts <a name="DataSafeSdmMaskingPolicyDifferenceTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference <a name="DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_sdm_masking_policy_difference

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeSdmMaskingPolicyDifferenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>]

---



