# `dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics` Submodule <a name="`dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics oci_data_safe_security_assessment_security_feature_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics(
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
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]] = None,
  id: str = None,
  target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#access_level DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#target_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#access_level DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#filter DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#target_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.resetTargetId"></a>

```python
def reset_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.securityFeatureAnalyticsCollection">security_feature_analytics_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filter"></a>

```python
filter: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList</a>

---

##### `security_feature_analytics_collection`<sup>Required</sup> <a name="security_feature_analytics_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.securityFeatureAnalyticsCollection"></a>

```python
security_feature_analytics_collection: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]] = None,
  id: str = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#access_level DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#target_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#access_level DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#filter DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#target_id DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#target_id}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#name DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#values DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#regex DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#name DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#values DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_feature_analytics#regex DataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics#regex}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection()
```


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems()
```


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]]

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsFilter</a>]

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.securityFeature">security_feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_feature`<sup>Required</sup> <a name="security_feature" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.securityFeature"></a>

```python
security_feature: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.securityAssessmentSecurityFeatureAnalyticCount">security_assessment_security_feature_analytic_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```python
dimensions: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `security_assessment_security_feature_analytic_count`<sup>Required</sup> <a name="security_assessment_security_feature_analytic_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.securityAssessmentSecurityFeatureAnalyticCount"></a>

```python
security_assessment_security_feature_analytic_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_feature_analytics

dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatureAnalytics.DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection">DataOciDataSafeSecurityAssessmentSecurityFeatureAnalyticsSecurityFeatureAnalyticsCollection</a>

---



