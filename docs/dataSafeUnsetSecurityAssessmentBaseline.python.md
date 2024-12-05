# `dataSafeUnsetSecurityAssessmentBaseline` Submodule <a name="`dataSafeUnsetSecurityAssessmentBaseline` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeUnsetSecurityAssessmentBaseline <a name="DataSafeUnsetSecurityAssessmentBaseline" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline oci_data_safe_unset_security_assessment_baseline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str,
  id: str = None,
  target_ids: typing.List[str] = None,
  timeouts: DataSafeUnsetSecurityAssessmentBaselineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.securityAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_ids`<sup>Optional</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.targetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#timeouts DataSafeUnsetSecurityAssessmentBaseline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTargetIds">reset_target_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_ids` <a name="reset_target_ids" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTargetIds"></a>

```python
def reset_target_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeUnsetSecurityAssessmentBaseline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeUnsetSecurityAssessmentBaseline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeUnsetSecurityAssessmentBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeUnsetSecurityAssessmentBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentIdInput">security_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIdsInput">target_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeouts"></a>

```python
timeouts: DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference">DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_assessment_id_input`<sup>Optional</sup> <a name="security_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentIdInput"></a>

```python
security_assessment_id_input: str
```

- *Type:* str

---

##### `target_ids_input`<sup>Optional</sup> <a name="target_ids_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIdsInput"></a>

```python
target_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeUnsetSecurityAssessmentBaselineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

---

##### `target_ids`<sup>Required</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaseline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeUnsetSecurityAssessmentBaselineConfig <a name="DataSafeUnsetSecurityAssessmentBaselineConfig" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str,
  id: str = None,
  target_ids: typing.List[str] = None,
  timeouts: DataSafeUnsetSecurityAssessmentBaselineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.targetIds">target_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#security_assessment_id DataSafeUnsetSecurityAssessmentBaseline#security_assessment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#id DataSafeUnsetSecurityAssessmentBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_ids`<sup>Optional</sup> <a name="target_ids" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.targetIds"></a>

```python
target_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#target_ids DataSafeUnsetSecurityAssessmentBaseline#target_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineConfig.property.timeouts"></a>

```python
timeouts: DataSafeUnsetSecurityAssessmentBaselineTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#timeouts DataSafeUnsetSecurityAssessmentBaseline#timeouts}

---

### DataSafeUnsetSecurityAssessmentBaselineTimeouts <a name="DataSafeUnsetSecurityAssessmentBaselineTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#create DataSafeUnsetSecurityAssessmentBaseline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#delete DataSafeUnsetSecurityAssessmentBaseline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_unset_security_assessment_baseline#update DataSafeUnsetSecurityAssessmentBaseline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference <a name="DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_unset_security_assessment_baseline

dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeUnsetSecurityAssessmentBaselineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeUnsetSecurityAssessmentBaseline.DataSafeUnsetSecurityAssessmentBaselineTimeouts">DataSafeUnsetSecurityAssessmentBaselineTimeouts</a>]

---



