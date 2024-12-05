# `dataOciAdmRemediationRunApplicationDependencyRecommendations` Submodule <a name="`dataOciAdmRemediationRunApplicationDependencyRecommendations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendations <a name="DataOciAdmRemediationRunApplicationDependencyRecommendations" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations oci_adm_remediation_run_application_dependency_recommendations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]] = None,
  gav: str = None,
  id: str = None,
  purl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.remediationRunId">remediation_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.gav">gav</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.purl">purl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.remediationRunId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#filter DataOciAdmRemediationRunApplicationDependencyRecommendations#filter}

---

##### `gav`<sup>Optional</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.gav"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purl`<sup>Optional</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.Initializer.parameter.purl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetGav">reset_gav</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetPurl">reset_purl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_gav` <a name="reset_gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetGav"></a>

```python
def reset_gav() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_purl` <a name="reset_purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.resetPurl"></a>

```python
def reset_purl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAdmRemediationRunApplicationDependencyRecommendations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAdmRemediationRunApplicationDependencyRecommendations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRunApplicationDependencyRecommendations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.applicationDependencyRecommendationCollection">application_dependency_recommendation_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gavInput">gav_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purlInput">purl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunIdInput">remediation_run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gav">gav</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purl">purl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunId">remediation_run_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_dependency_recommendation_collection`<sup>Required</sup> <a name="application_dependency_recommendation_collection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.applicationDependencyRecommendationCollection"></a>

```python
application_dependency_recommendation_collection: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filter"></a>

```python
filter: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]

---

##### `gav_input`<sup>Optional</sup> <a name="gav_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gavInput"></a>

```python
gav_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `purl_input`<sup>Optional</sup> <a name="purl_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purlInput"></a>

```python
purl_input: str
```

- *Type:* str

---

##### `remediation_run_id_input`<sup>Optional</sup> <a name="remediation_run_id_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunIdInput"></a>

```python
remediation_run_id_input: str
```

- *Type:* str

---

##### `gav`<sup>Required</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.gav"></a>

```python
gav: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `purl`<sup>Required</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.purl"></a>

```python
purl: str
```

- *Type:* str

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.remediationRunId"></a>

```python
remediation_run_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection()
```


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems()
```


### DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  remediation_run_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]] = None,
  gav: str = None,
  id: str = None,
  purl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.remediationRunId">remediation_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.gav">gav</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.purl">purl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `remediation_run_id`<sup>Required</sup> <a name="remediation_run_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.remediationRunId"></a>

```python
remediation_run_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#filter DataOciAdmRemediationRunApplicationDependencyRecommendations#filter}

---

##### `gav`<sup>Optional</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.gav"></a>

```python
gav: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purl`<sup>Optional</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig.property.purl"></a>

```python
purl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}.

---

### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.applicationDependencyNodeIds">application_dependency_node_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.gav">gav</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.purl">purl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedGav">recommended_gav</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedPurl">recommended_purl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_dependency_node_ids`<sup>Required</sup> <a name="application_dependency_node_ids" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.applicationDependencyNodeIds"></a>

```python
application_dependency_node_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gav`<sup>Required</sup> <a name="gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.gav"></a>

```python
gav: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `purl`<sup>Required</sup> <a name="purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.purl"></a>

```python
purl: str
```

- *Type:* str

---

##### `recommended_gav`<sup>Required</sup> <a name="recommended_gav" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedGav"></a>

```python
recommended_gav: str
```

- *Type:* str

---

##### `recommended_purl`<sup>Required</sup> <a name="recommended_purl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.recommendedPurl"></a>

```python
recommended_purl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems</a>

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.items"></a>

```python
items: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection">DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection</a>

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]]

---


### DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference <a name="DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_adm_remediation_run_application_dependency_recommendations

dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunApplicationDependencyRecommendations.DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter">DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter</a>]

---



