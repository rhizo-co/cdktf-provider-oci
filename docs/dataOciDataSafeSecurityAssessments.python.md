# `dataOciDataSafeSecurityAssessments` Submodule <a name="`dataOciDataSafeSecurityAssessments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessments <a name="DataOciDataSafeSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments oci_data_safe_security_assessments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentsFilter]] = None,
  id: str = None,
  is_baseline: typing.Union[bool, IResolvable] = None,
  is_schedule_assessment: typing.Union[bool, IResolvable] = None,
  schedule_assessment_id: str = None,
  state: str = None,
  target_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  triggered_by: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.isBaseline">is_baseline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.isScheduleAssessment">is_schedule_assessment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scheduleAssessmentId">schedule_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.triggeredBy">triggered_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#filter DataOciDataSafeSecurityAssessments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_baseline`<sup>Optional</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.isBaseline"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}.

---

##### `is_schedule_assessment`<sup>Optional</sup> <a name="is_schedule_assessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.isScheduleAssessment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}.

---

##### `schedule_assessment_id`<sup>Optional</sup> <a name="schedule_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.scheduleAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}.

---

##### `triggered_by`<sup>Optional</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.triggeredBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline">reset_is_baseline</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment">reset_is_schedule_assessment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId">reset_schedule_assessment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy">reset_triggered_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_baseline` <a name="reset_is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsBaseline"></a>

```python
def reset_is_baseline() -> None
```

##### `reset_is_schedule_assessment` <a name="reset_is_schedule_assessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetIsScheduleAssessment"></a>

```python
def reset_is_schedule_assessment() -> None
```

##### `reset_schedule_assessment_id` <a name="reset_schedule_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetScheduleAssessmentId"></a>

```python
def reset_schedule_assessment_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

##### `reset_triggered_by` <a name="reset_triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetTriggeredBy"></a>

```python
def reset_triggered_by() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityAssessments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityAssessments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments">security_assessments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput">is_baseline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput">is_schedule_assessment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput">schedule_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput">triggered_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline">is_baseline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment">is_schedule_assessment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId">schedule_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy">triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filter"></a>

```python
filter: DataOciDataSafeSecurityAssessmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList">DataOciDataSafeSecurityAssessmentsFilterList</a>

---

##### `security_assessments`<sup>Required</sup> <a name="security_assessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.securityAssessments"></a>

```python
security_assessments: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_baseline_input`<sup>Optional</sup> <a name="is_baseline_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaselineInput"></a>

```python
is_baseline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_schedule_assessment_input`<sup>Optional</sup> <a name="is_schedule_assessment_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessmentInput"></a>

```python
is_schedule_assessment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schedule_assessment_id_input`<sup>Optional</sup> <a name="schedule_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentIdInput"></a>

```python
schedule_assessment_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `triggered_by_input`<sup>Optional</sup> <a name="triggered_by_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredByInput"></a>

```python
triggered_by_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_baseline`<sup>Required</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isBaseline"></a>

```python
is_baseline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_schedule_assessment`<sup>Required</sup> <a name="is_schedule_assessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.isScheduleAssessment"></a>

```python
is_schedule_assessment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schedule_assessment_id`<sup>Required</sup> <a name="schedule_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.scheduleAssessmentId"></a>

```python
schedule_assessment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

##### `triggered_by`<sup>Required</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.triggeredBy"></a>

```python
triggered_by: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentsConfig <a name="DataOciDataSafeSecurityAssessmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentsFilter]] = None,
  id: str = None,
  is_baseline: typing.Union[bool, IResolvable] = None,
  is_schedule_assessment: typing.Union[bool, IResolvable] = None,
  schedule_assessment_id: str = None,
  state: str = None,
  target_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  triggered_by: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline">is_baseline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment">is_schedule_assessment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId">schedule_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy">triggered_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id DataOciDataSafeSecurityAssessments#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#access_level DataOciDataSafeSecurityAssessments#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#compartment_id_in_subtree DataOciDataSafeSecurityAssessments#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#display_name DataOciDataSafeSecurityAssessments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#filter DataOciDataSafeSecurityAssessments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#id DataOciDataSafeSecurityAssessments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_baseline`<sup>Optional</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isBaseline"></a>

```python
is_baseline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_baseline DataOciDataSafeSecurityAssessments#is_baseline}.

---

##### `is_schedule_assessment`<sup>Optional</sup> <a name="is_schedule_assessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.isScheduleAssessment"></a>

```python
is_schedule_assessment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#is_schedule_assessment DataOciDataSafeSecurityAssessments#is_schedule_assessment}.

---

##### `schedule_assessment_id`<sup>Optional</sup> <a name="schedule_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.scheduleAssessmentId"></a>

```python
schedule_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#schedule_assessment_id DataOciDataSafeSecurityAssessments#schedule_assessment_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#state DataOciDataSafeSecurityAssessments#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#target_id DataOciDataSafeSecurityAssessments#target_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_greater_than_or_equal_to DataOciDataSafeSecurityAssessments#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#time_created_less_than DataOciDataSafeSecurityAssessments#time_created_less_than}.

---

##### `triggered_by`<sup>Optional</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.triggeredBy"></a>

```python
triggered_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#triggered_by DataOciDataSafeSecurityAssessments#triggered_by}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#type DataOciDataSafeSecurityAssessments#type}.

---

### DataOciDataSafeSecurityAssessmentsFilter <a name="DataOciDataSafeSecurityAssessmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#name DataOciDataSafeSecurityAssessments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#values DataOciDataSafeSecurityAssessments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessments#regex DataOciDataSafeSecurityAssessments#regex}.

---

### DataOciDataSafeSecurityAssessmentsSecurityAssessments <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk()
```


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentsFilterList <a name="DataOciDataSafeSecurityAssessmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]]

---


### DataOciDataSafeSecurityAssessmentsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityAssessmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsFilter">DataOciDataSafeSecurityAssessmentsFilter</a>]

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds">ignored_assessment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets">ignored_targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled">is_assessment_scheduled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline">is_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline">is_deviated_from_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId">last_compared_baseline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId">schedule_security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics">statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed">time_last_assessed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy">triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignored_assessment_ids`<sup>Required</sup> <a name="ignored_assessment_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredAssessmentIds"></a>

```python
ignored_assessment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_targets`<sup>Required</sup> <a name="ignored_targets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.ignoredTargets"></a>

```python
ignored_targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_assessment_scheduled`<sup>Required</sup> <a name="is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isAssessmentScheduled"></a>

```python
is_assessment_scheduled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_baseline`<sup>Required</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isBaseline"></a>

```python
is_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_deviated_from_baseline`<sup>Required</sup> <a name="is_deviated_from_baseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.isDeviatedFromBaseline"></a>

```python
is_deviated_from_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_compared_baseline_id`<sup>Required</sup> <a name="last_compared_baseline_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lastComparedBaselineId"></a>

```python
last_compared_baseline_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `schedule_security_assessment_id`<sup>Required</sup> <a name="schedule_security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.scheduleSecurityAssessmentId"></a>

```python
schedule_security_assessment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.statistics"></a>

```python
statistics: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_assessed`<sup>Required</sup> <a name="time_last_assessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeLastAssessed"></a>

```python
time_last_assessed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `triggered_by`<sup>Required</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.triggeredBy"></a>

```python
triggered_by: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessments">DataOciDataSafeSecurityAssessmentsSecurityAssessments</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisory</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferred</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluate</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRisk</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory">advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred">deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk">high_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk">low_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk">medium_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass">pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advisory`<sup>Required</sup> <a name="advisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.advisory"></a>

```python
advisory: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsAdvisoryList</a>

---

##### `deferred`<sup>Required</sup> <a name="deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.deferred"></a>

```python
deferred: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsDeferredList</a>

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.evaluate"></a>

```python
evaluate: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsEvaluateList</a>

---

##### `high_risk`<sup>Required</sup> <a name="high_risk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.highRisk"></a>

```python
high_risk: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsHighRiskList</a>

---

##### `low_risk`<sup>Required</sup> <a name="low_risk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.lowRisk"></a>

```python
low_risk: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsLowRiskList</a>

---

##### `medium_risk`<sup>Required</sup> <a name="medium_risk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.mediumRisk"></a>

```python
medium_risk: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsMediumRiskList</a>

---

##### `pass`<sup>Required</sup> <a name="pass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.pass"></a>

```python
pass: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList</a>

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatistics</a>

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference <a name="DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessments

dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPassOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessments.DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass">DataOciDataSafeSecurityAssessmentsSecurityAssessmentsStatisticsPass</a>

---



