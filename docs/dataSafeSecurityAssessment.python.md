# `dataSafeSecurityAssessment` Submodule <a name="`dataSafeSecurityAssessment` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSecurityAssessment <a name="DataSafeSecurityAssessment" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment oci_data_safe_security_assessment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessment(
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
  target_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_assessment_scheduled: typing.Union[bool, IResolvable] = None,
  schedule: str = None,
  timeouts: DataSafeSecurityAssessmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.isAssessmentScheduled">is_assessment_scheduled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_assessment_scheduled`<sup>Optional</sup> <a name="is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.isAssessmentScheduled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.schedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#timeouts DataSafeSecurityAssessment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetIsAssessmentScheduled">reset_is_assessment_scheduled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_assessment_scheduled` <a name="reset_is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetIsAssessmentScheduled"></a>

```python
def reset_is_assessment_scheduled() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeSecurityAssessment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeSecurityAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSecurityAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredAssessmentIds">ignored_assessment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredTargets">ignored_targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isBaseline">is_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isDeviatedFromBaseline">is_deviated_from_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lastComparedBaselineId">last_compared_baseline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleSecurityAssessmentId">schedule_security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.statistics">statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList">DataSafeSecurityAssessmentStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeLastAssessed">time_last_assessed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference">DataSafeSecurityAssessmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.triggeredBy">triggered_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduledInput">is_assessment_scheduled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduled">is_assessment_scheduled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ignored_assessment_ids`<sup>Required</sup> <a name="ignored_assessment_ids" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredAssessmentIds"></a>

```python
ignored_assessment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_targets`<sup>Required</sup> <a name="ignored_targets" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.ignoredTargets"></a>

```python
ignored_targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_baseline`<sup>Required</sup> <a name="is_baseline" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isBaseline"></a>

```python
is_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_deviated_from_baseline`<sup>Required</sup> <a name="is_deviated_from_baseline" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isDeviatedFromBaseline"></a>

```python
is_deviated_from_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_compared_baseline_id`<sup>Required</sup> <a name="last_compared_baseline_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lastComparedBaselineId"></a>

```python
last_compared_baseline_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `schedule_security_assessment_id`<sup>Required</sup> <a name="schedule_security_assessment_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleSecurityAssessmentId"></a>

```python
schedule_security_assessment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.statistics"></a>

```python
statistics: DataSafeSecurityAssessmentStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList">DataSafeSecurityAssessmentStatisticsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_assessed`<sup>Required</sup> <a name="time_last_assessed" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeLastAssessed"></a>

```python
time_last_assessed: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeouts"></a>

```python
timeouts: DataSafeSecurityAssessmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference">DataSafeSecurityAssessmentTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `triggered_by`<sup>Required</sup> <a name="triggered_by" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.triggeredBy"></a>

```python
triggered_by: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_assessment_scheduled_input`<sup>Optional</sup> <a name="is_assessment_scheduled_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduledInput"></a>

```python
is_assessment_scheduled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeSecurityAssessmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_assessment_scheduled`<sup>Required</sup> <a name="is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.isAssessmentScheduled"></a>

```python
is_assessment_scheduled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSecurityAssessmentConfig <a name="DataSafeSecurityAssessmentConfig" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  target_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_assessment_scheduled: typing.Union[bool, IResolvable] = None,
  schedule: str = None,
  timeouts: DataSafeSecurityAssessmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.isAssessmentScheduled">is_assessment_scheduled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#compartment_id DataSafeSecurityAssessment#compartment_id}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#target_id DataSafeSecurityAssessment#target_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#defined_tags DataSafeSecurityAssessment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#description DataSafeSecurityAssessment#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#display_name DataSafeSecurityAssessment#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#freeform_tags DataSafeSecurityAssessment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#id DataSafeSecurityAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_assessment_scheduled`<sup>Optional</sup> <a name="is_assessment_scheduled" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.isAssessmentScheduled"></a>

```python
is_assessment_scheduled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#is_assessment_scheduled DataSafeSecurityAssessment#is_assessment_scheduled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#schedule DataSafeSecurityAssessment#schedule}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentConfig.property.timeouts"></a>

```python
timeouts: DataSafeSecurityAssessmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#timeouts DataSafeSecurityAssessment#timeouts}

---

### DataSafeSecurityAssessmentStatistics <a name="DataSafeSecurityAssessmentStatistics" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics()
```


### DataSafeSecurityAssessmentStatisticsAdvisory <a name="DataSafeSecurityAssessmentStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory()
```


### DataSafeSecurityAssessmentStatisticsDeferred <a name="DataSafeSecurityAssessmentStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred()
```


### DataSafeSecurityAssessmentStatisticsEvaluate <a name="DataSafeSecurityAssessmentStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate()
```


### DataSafeSecurityAssessmentStatisticsHighRisk <a name="DataSafeSecurityAssessmentStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk()
```


### DataSafeSecurityAssessmentStatisticsLowRisk <a name="DataSafeSecurityAssessmentStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk()
```


### DataSafeSecurityAssessmentStatisticsMediumRisk <a name="DataSafeSecurityAssessmentStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk()
```


### DataSafeSecurityAssessmentStatisticsPass <a name="DataSafeSecurityAssessmentStatisticsPass" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass()
```


### DataSafeSecurityAssessmentTimeouts <a name="DataSafeSecurityAssessmentTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#create DataSafeSecurityAssessment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#delete DataSafeSecurityAssessment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_security_assessment#update DataSafeSecurityAssessment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSecurityAssessmentStatisticsAdvisoryList <a name="DataSafeSecurityAssessmentStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference <a name="DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory">DataSafeSecurityAssessmentStatisticsAdvisory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsAdvisory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisory">DataSafeSecurityAssessmentStatisticsAdvisory</a>

---


### DataSafeSecurityAssessmentStatisticsDeferredList <a name="DataSafeSecurityAssessmentStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsDeferredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsDeferredOutputReference <a name="DataSafeSecurityAssessmentStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred">DataSafeSecurityAssessmentStatisticsDeferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsDeferred
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferred">DataSafeSecurityAssessmentStatisticsDeferred</a>

---


### DataSafeSecurityAssessmentStatisticsEvaluateList <a name="DataSafeSecurityAssessmentStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsEvaluateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsEvaluateOutputReference <a name="DataSafeSecurityAssessmentStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate">DataSafeSecurityAssessmentStatisticsEvaluate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsEvaluate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluate">DataSafeSecurityAssessmentStatisticsEvaluate</a>

---


### DataSafeSecurityAssessmentStatisticsHighRiskList <a name="DataSafeSecurityAssessmentStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsHighRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsHighRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk">DataSafeSecurityAssessmentStatisticsHighRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsHighRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRisk">DataSafeSecurityAssessmentStatisticsHighRisk</a>

---


### DataSafeSecurityAssessmentStatisticsList <a name="DataSafeSecurityAssessmentStatisticsList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsLowRiskList <a name="DataSafeSecurityAssessmentStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsLowRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsLowRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk">DataSafeSecurityAssessmentStatisticsLowRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsLowRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRisk">DataSafeSecurityAssessmentStatisticsLowRisk</a>

---


### DataSafeSecurityAssessmentStatisticsMediumRiskList <a name="DataSafeSecurityAssessmentStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference <a name="DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk">DataSafeSecurityAssessmentStatisticsMediumRisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsMediumRisk
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRisk">DataSafeSecurityAssessmentStatisticsMediumRisk</a>

---


### DataSafeSecurityAssessmentStatisticsOutputReference <a name="DataSafeSecurityAssessmentStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.advisory">advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList">DataSafeSecurityAssessmentStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.deferred">deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList">DataSafeSecurityAssessmentStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList">DataSafeSecurityAssessmentStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk">high_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList">DataSafeSecurityAssessmentStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk">low_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList">DataSafeSecurityAssessmentStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk">medium_risk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList">DataSafeSecurityAssessmentStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.pass">pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList">DataSafeSecurityAssessmentStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics">DataSafeSecurityAssessmentStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advisory`<sup>Required</sup> <a name="advisory" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.advisory"></a>

```python
advisory: DataSafeSecurityAssessmentStatisticsAdvisoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsAdvisoryList">DataSafeSecurityAssessmentStatisticsAdvisoryList</a>

---

##### `deferred`<sup>Required</sup> <a name="deferred" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.deferred"></a>

```python
deferred: DataSafeSecurityAssessmentStatisticsDeferredList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsDeferredList">DataSafeSecurityAssessmentStatisticsDeferredList</a>

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate"></a>

```python
evaluate: DataSafeSecurityAssessmentStatisticsEvaluateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsEvaluateList">DataSafeSecurityAssessmentStatisticsEvaluateList</a>

---

##### `high_risk`<sup>Required</sup> <a name="high_risk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk"></a>

```python
high_risk: DataSafeSecurityAssessmentStatisticsHighRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsHighRiskList">DataSafeSecurityAssessmentStatisticsHighRiskList</a>

---

##### `low_risk`<sup>Required</sup> <a name="low_risk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk"></a>

```python
low_risk: DataSafeSecurityAssessmentStatisticsLowRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsLowRiskList">DataSafeSecurityAssessmentStatisticsLowRiskList</a>

---

##### `medium_risk`<sup>Required</sup> <a name="medium_risk" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk"></a>

```python
medium_risk: DataSafeSecurityAssessmentStatisticsMediumRiskList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsMediumRiskList">DataSafeSecurityAssessmentStatisticsMediumRiskList</a>

---

##### `pass`<sup>Required</sup> <a name="pass" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.pass"></a>

```python
pass: DataSafeSecurityAssessmentStatisticsPassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList">DataSafeSecurityAssessmentStatisticsPassList</a>

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatistics">DataSafeSecurityAssessmentStatistics</a>

---


### DataSafeSecurityAssessmentStatisticsPassList <a name="DataSafeSecurityAssessmentStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeSecurityAssessmentStatisticsPassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeSecurityAssessmentStatisticsPassOutputReference <a name="DataSafeSecurityAssessmentStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount">auditing_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount">authorization_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount">data_encryption_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount">db_configuration_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">fine_grained_access_control_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">privileges_and_roles_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount">targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount">user_accounts_findings_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass">DataSafeSecurityAssessmentStatisticsPass</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auditing_findings_count`<sup>Required</sup> <a name="auditing_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```python
auditing_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_control_findings_count`<sup>Required</sup> <a name="authorization_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```python
authorization_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_encryption_findings_count`<sup>Required</sup> <a name="data_encryption_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```python
data_encryption_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_configuration_findings_count`<sup>Required</sup> <a name="db_configuration_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```python
db_configuration_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fine_grained_access_control_findings_count`<sup>Required</sup> <a name="fine_grained_access_control_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```python
fine_grained_access_control_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privileges_and_roles_findings_count`<sup>Required</sup> <a name="privileges_and_roles_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```python
privileges_and_roles_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_count`<sup>Required</sup> <a name="targets_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount"></a>

```python
targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_accounts_findings_count`<sup>Required</sup> <a name="user_accounts_findings_count" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```python
user_accounts_findings_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeSecurityAssessmentStatisticsPass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentStatisticsPass">DataSafeSecurityAssessmentStatisticsPass</a>

---


### DataSafeSecurityAssessmentTimeoutsOutputReference <a name="DataSafeSecurityAssessmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_security_assessment

dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeSecurityAssessmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSecurityAssessment.DataSafeSecurityAssessmentTimeouts">DataSafeSecurityAssessmentTimeouts</a>]

---



