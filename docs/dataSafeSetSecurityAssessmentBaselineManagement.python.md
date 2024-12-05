# `dataSafeSetSecurityAssessmentBaselineManagement` Submodule <a name="`dataSafeSetSecurityAssessmentBaselineManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSetSecurityAssessmentBaselineManagement <a name="DataSafeSetSecurityAssessmentBaselineManagement" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management oci_data_safe_set_security_assessment_baseline_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement(
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
  id: str = None,
  timeouts: DataSafeSetSecurityAssessmentBaselineManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#timeouts DataSafeSetSecurityAssessmentBaselineManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeSetSecurityAssessmentBaselineManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeSetSecurityAssessmentBaselineManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeSetSecurityAssessmentBaselineManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSetSecurityAssessmentBaselineManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.assessmentIds">assessment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assessment_ids`<sup>Required</sup> <a name="assessment_ids" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.assessmentIds"></a>

```python
assessment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeouts"></a>

```python
timeouts: DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference">DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeSetSecurityAssessmentBaselineManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSetSecurityAssessmentBaselineManagementConfig <a name="DataSafeSetSecurityAssessmentBaselineManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  target_id: str,
  id: str = None,
  timeouts: DataSafeSetSecurityAssessmentBaselineManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#compartment_id DataSafeSetSecurityAssessmentBaselineManagement#compartment_id}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#target_id DataSafeSetSecurityAssessmentBaselineManagement#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#id DataSafeSetSecurityAssessmentBaselineManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementConfig.property.timeouts"></a>

```python
timeouts: DataSafeSetSecurityAssessmentBaselineManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#timeouts DataSafeSetSecurityAssessmentBaselineManagement#timeouts}

---

### DataSafeSetSecurityAssessmentBaselineManagementTimeouts <a name="DataSafeSetSecurityAssessmentBaselineManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#create DataSafeSetSecurityAssessmentBaselineManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#delete DataSafeSetSecurityAssessmentBaselineManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_set_security_assessment_baseline_management#update DataSafeSetSecurityAssessmentBaselineManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference <a name="DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_set_security_assessment_baseline_management

dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeSetSecurityAssessmentBaselineManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeSetSecurityAssessmentBaselineManagement.DataSafeSetSecurityAssessmentBaselineManagementTimeouts">DataSafeSetSecurityAssessmentBaselineManagementTimeouts</a>]

---



