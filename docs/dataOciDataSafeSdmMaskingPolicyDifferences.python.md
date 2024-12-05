# `dataOciDataSafeSdmMaskingPolicyDifferences` Submodule <a name="`dataOciDataSafeSdmMaskingPolicyDifferences` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferences <a name="DataOciDataSafeSdmMaskingPolicyDifferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences oci_data_safe_sdm_masking_policy_differences}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences(
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
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  difference_access_level: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferencesFilter]] = None,
  id: str = None,
  masking_policy_id: str = None,
  sensitive_data_model_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.differenceAccessLevel">difference_access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}.

---

##### `difference_access_level`<sup>Optional</sup> <a name="difference_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.differenceAccessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#filter DataOciDataSafeSdmMaskingPolicyDifferences#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_policy_id`<sup>Optional</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}.

---

##### `sensitive_data_model_id`<sup>Optional</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDifferenceAccessLevel">reset_difference_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetMaskingPolicyId">reset_masking_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetSensitiveDataModelId">reset_sensitive_data_model_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferencesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]

---

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_difference_access_level` <a name="reset_difference_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDifferenceAccessLevel"></a>

```python
def reset_difference_access_level() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_masking_policy_id` <a name="reset_masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetMaskingPolicyId"></a>

```python
def reset_masking_policy_id() -> None
```

##### `reset_sensitive_data_model_id` <a name="reset_sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetSensitiveDataModelId"></a>

```python
def reset_sensitive_data_model_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferences resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferences to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSdmMaskingPolicyDifferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList">DataOciDataSafeSdmMaskingPolicyDifferencesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sdmMaskingPolicyDifferenceCollection">sdm_masking_policy_difference_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevelInput">difference_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelIdInput">sensitive_data_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevel">difference_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filter"></a>

```python
filter: DataOciDataSafeSdmMaskingPolicyDifferencesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList">DataOciDataSafeSdmMaskingPolicyDifferencesFilterList</a>

---

##### `sdm_masking_policy_difference_collection`<sup>Required</sup> <a name="sdm_masking_policy_difference_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sdmMaskingPolicyDifferenceCollection"></a>

```python
sdm_masking_policy_difference_collection: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `difference_access_level_input`<sup>Optional</sup> <a name="difference_access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevelInput"></a>

```python
difference_access_level_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferencesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `sensitive_data_model_id_input`<sup>Optional</sup> <a name="sensitive_data_model_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelIdInput"></a>

```python
sensitive_data_model_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `difference_access_level`<sup>Required</sup> <a name="difference_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.differenceAccessLevel"></a>

```python
difference_access_level: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferencesConfig <a name="DataOciDataSafeSdmMaskingPolicyDifferencesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  difference_access_level: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferencesFilter]] = None,
  id: str = None,
  masking_policy_id: str = None,
  sensitive_data_model_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.differenceAccessLevel">difference_access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#compartment_id_in_subtree DataOciDataSafeSdmMaskingPolicyDifferences#compartment_id_in_subtree}.

---

##### `difference_access_level`<sup>Optional</sup> <a name="difference_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.differenceAccessLevel"></a>

```python
difference_access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#difference_access_level DataOciDataSafeSdmMaskingPolicyDifferences#difference_access_level}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#display_name DataOciDataSafeSdmMaskingPolicyDifferences#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferencesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#filter DataOciDataSafeSdmMaskingPolicyDifferences#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#id DataOciDataSafeSdmMaskingPolicyDifferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_policy_id`<sup>Optional</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#masking_policy_id DataOciDataSafeSdmMaskingPolicyDifferences#masking_policy_id}.

---

##### `sensitive_data_model_id`<sup>Optional</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#sensitive_data_model_id DataOciDataSafeSdmMaskingPolicyDifferences#sensitive_data_model_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#state DataOciDataSafeSdmMaskingPolicyDifferences#state}.

---

### DataOciDataSafeSdmMaskingPolicyDifferencesFilter <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#name DataOciDataSafeSdmMaskingPolicyDifferences#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#values DataOciDataSafeSdmMaskingPolicyDifferences#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#regex DataOciDataSafeSdmMaskingPolicyDifferences#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#name DataOciDataSafeSdmMaskingPolicyDifferences#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#values DataOciDataSafeSdmMaskingPolicyDifferences#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_differences#regex DataOciDataSafeSdmMaskingPolicyDifferences#regex}.

---

### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection()
```


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSdmMaskingPolicyDifferencesFilterList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferencesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]]

---


### DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSdmMaskingPolicyDifferencesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesFilter">DataOciDataSafeSdmMaskingPolicyDifferencesFilter</a>]

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.differenceType">difference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.sensitiveDataModelId">sensitive_data_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreationStarted">time_creation_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `difference_type`<sup>Required</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.differenceType"></a>

```python
difference_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `sensitive_data_model_id`<sup>Required</sup> <a name="sensitive_data_model_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.sensitiveDataModelId"></a>

```python
sensitive_data_model_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_creation_started`<sup>Required</sup> <a name="time_creation_started" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.timeCreationStarted"></a>

```python
time_creation_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItems</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_differences

dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferences.DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection">DataOciDataSafeSdmMaskingPolicyDifferencesSdmMaskingPolicyDifferenceCollection</a>

---



