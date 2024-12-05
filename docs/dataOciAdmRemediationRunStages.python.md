# `dataOciAdmRemediationRunStages` Submodule <a name="`dataOciAdmRemediationRunStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRunStagesA <a name="DataOciAdmRemediationRunStagesA" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages oci_adm_remediation_run_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  remediation_run_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunStagesFilter]] = None,
  id: str = None,
  status: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.remediationRunId">remediation_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#remediation_run_id DataOciAdmRemediationRunStagesA#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#id DataOciAdmRemediationRunStagesA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#status DataOciAdmRemediationRunStagesA#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#type DataOciAdmRemediationRunStagesA#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.remediationRunId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#remediation_run_id DataOciAdmRemediationRunStagesA#remediation_run_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#filter DataOciAdmRemediationRunStagesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#id DataOciAdmRemediationRunStagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#status DataOciAdmRemediationRunStagesA#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#type DataOciAdmRemediationRunStagesA#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunStagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRunStagesA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAdmRemediationRunStagesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAdmRemediationRunStagesA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAdmRemediationRunStagesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRunStagesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList">DataOciAdmRemediationRunStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.remediationRunStageCollection">remediation_run_stage_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.remediationRunIdInput">remediation_run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.remediationRunId">remediation_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.filter"></a>

```python
filter: DataOciAdmRemediationRunStagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList">DataOciAdmRemediationRunStagesFilterList</a>

---

##### `remediation_run_stage_collection`<sup>Required</sup> <a name="remediation_run_stage_collection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.remediationRunStageCollection"></a>

```python
remediation_run_stage_collection: DataOciAdmRemediationRunStagesRemediationRunStageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunStagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `remediation_run_id_input`<sup>Optional</sup> <a name="remediation_run_id_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.remediationRunIdInput"></a>

```python
remediation_run_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.remediationRunId"></a>

```python
remediation_run_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRunStagesAConfig <a name="DataOciAdmRemediationRunStagesAConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  remediation_run_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunStagesFilter]] = None,
  id: str = None,
  status: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.remediationRunId">remediation_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#remediation_run_id DataOciAdmRemediationRunStagesA#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#id DataOciAdmRemediationRunStagesA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#status DataOciAdmRemediationRunStagesA#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#type DataOciAdmRemediationRunStagesA#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.remediationRunId"></a>

```python
remediation_run_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#remediation_run_id DataOciAdmRemediationRunStagesA#remediation_run_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunStagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#filter DataOciAdmRemediationRunStagesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#id DataOciAdmRemediationRunStagesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#status DataOciAdmRemediationRunStagesA#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesAConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#type DataOciAdmRemediationRunStagesA#type}.

---

### DataOciAdmRemediationRunStagesFilter <a name="DataOciAdmRemediationRunStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#name DataOciAdmRemediationRunStagesA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#values DataOciAdmRemediationRunStagesA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#regex DataOciAdmRemediationRunStagesA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#name DataOciAdmRemediationRunStagesA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#values DataOciAdmRemediationRunStagesA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stages#regex DataOciAdmRemediationRunStagesA#regex}.

---

### DataOciAdmRemediationRunStagesRemediationRunStageCollection <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollection()
```


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems()
```


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties()
```


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRunStagesFilterList <a name="DataOciAdmRemediationRunStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunStagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunStagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]]

---


### DataOciAdmRemediationRunStagesFilterOutputReference <a name="DataOciAdmRemediationRunStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAdmRemediationRunStagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesFilter">DataOciAdmRemediationRunStagesFilter</a>]

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.auditId">audit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.nextStageType">next_stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.pipelineProperties">pipeline_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.previousStageType">previous_stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.pullRequestProperties">pull_request_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.recommendedUpdatesCount">recommended_updates_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.remediationRunId">remediation_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_id`<sup>Required</sup> <a name="audit_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.auditId"></a>

```python
audit_id: str
```

- *Type:* str

---

##### `next_stage_type`<sup>Required</sup> <a name="next_stage_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.nextStageType"></a>

```python
next_stage_type: str
```

- *Type:* str

---

##### `pipeline_properties`<sup>Required</sup> <a name="pipeline_properties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.pipelineProperties"></a>

```python
pipeline_properties: DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList</a>

---

##### `previous_stage_type`<sup>Required</sup> <a name="previous_stage_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.previousStageType"></a>

```python
previous_stage_type: str
```

- *Type:* str

---

##### `pull_request_properties`<sup>Required</sup> <a name="pull_request_properties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.pullRequestProperties"></a>

```python
pull_request_properties: DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList</a>

---

##### `recommended_updates_count`<sup>Required</sup> <a name="recommended_updates_count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.recommendedUpdatesCount"></a>

```python
recommended_updates_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.remediationRunId"></a>

```python
remediation_run_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItems</a>

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.pipelineIdentifier">pipeline_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.pipelineUrl">pipeline_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_identifier`<sup>Required</sup> <a name="pipeline_identifier" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.pipelineIdentifier"></a>

```python
pipeline_identifier: str
```

- *Type:* str

---

##### `pipeline_url`<sup>Required</sup> <a name="pipeline_url" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.pipelineUrl"></a>

```python
pipeline_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelinePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPipelineProperties</a>

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.pullRequestIdentifier">pull_request_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.pullRequestUrl">pull_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_request_identifier`<sup>Required</sup> <a name="pull_request_identifier" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.pullRequestIdentifier"></a>

```python
pull_request_identifier: str
```

- *Type:* str

---

##### `pull_request_url`<sup>Required</sup> <a name="pull_request_url" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.pullRequestUrl"></a>

```python
pull_request_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsPullRequestProperties</a>

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionList <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference <a name="DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_stages

dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollection">DataOciAdmRemediationRunStagesRemediationRunStageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.items"></a>

```python
items: DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList">DataOciAdmRemediationRunStagesRemediationRunStageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRunStagesRemediationRunStageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStages.DataOciAdmRemediationRunStagesRemediationRunStageCollection">DataOciAdmRemediationRunStagesRemediationRunStageCollection</a>

---



