# `dataOciDevopsDeployArtifacts` Submodule <a name="`dataOciDevopsDeployArtifacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployArtifacts <a name="DataOciDevopsDeployArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts oci_devops_deploy_artifacts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployArtifactsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#filter DataOciDevopsDeployArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDevopsDeployArtifactsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployArtifacts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsDeployArtifacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsDeployArtifacts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsDeployArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.deployArtifactCollection">deploy_artifact_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList">DataOciDevopsDeployArtifactsDeployArtifactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList">DataOciDevopsDeployArtifactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deploy_artifact_collection`<sup>Required</sup> <a name="deploy_artifact_collection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.deployArtifactCollection"></a>

```python
deploy_artifact_collection: DataOciDevopsDeployArtifactsDeployArtifactCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList">DataOciDevopsDeployArtifactsDeployArtifactCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filter"></a>

```python
filter: DataOciDevopsDeployArtifactsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList">DataOciDevopsDeployArtifactsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDevopsDeployArtifactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifacts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployArtifactsConfig <a name="DataOciDevopsDeployArtifactsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployArtifactsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#compartment_id DataOciDevopsDeployArtifacts#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#display_name DataOciDevopsDeployArtifacts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployArtifactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#filter DataOciDevopsDeployArtifacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#id DataOciDevopsDeployArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#project_id DataOciDevopsDeployArtifacts#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#state DataOciDevopsDeployArtifacts#state}.

---

### DataOciDevopsDeployArtifactsDeployArtifactCollection <a name="DataOciDevopsDeployArtifactsDeployArtifactCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection()
```


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItems <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems()
```


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource()
```


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource()
```


### DataOciDevopsDeployArtifactsFilter <a name="DataOciDevopsDeployArtifactsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#name DataOciDevopsDeployArtifacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#values DataOciDevopsDeployArtifacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#regex DataOciDevopsDeployArtifacts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#name DataOciDevopsDeployArtifacts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#values DataOciDevopsDeployArtifacts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_artifacts#regex DataOciDevopsDeployArtifacts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey">current_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey">previous_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType">verification_key_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_public_key`<sup>Required</sup> <a name="current_public_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.currentPublicKey"></a>

```python
current_public_key: str
```

- *Type:* str

---

##### `previous_public_key`<sup>Required</sup> <a name="previous_public_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.previousPublicKey"></a>

```python
previous_public_key: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `verification_key_source_type`<sup>Required</sup> <a name="verification_key_source_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.verificationKeySourceType"></a>

```python
verification_key_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySource</a>

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.base64EncodedContent">base64_encoded_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.chartUrl">chart_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactPath">deploy_artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactSourceType">deploy_artifact_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactVersion">deploy_artifact_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmArtifactSourceType">helm_artifact_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmVerificationKeySource">helm_verification_key_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base64_encoded_content`<sup>Required</sup> <a name="base64_encoded_content" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.base64EncodedContent"></a>

```python
base64_encoded_content: str
```

- *Type:* str

---

##### `chart_url`<sup>Required</sup> <a name="chart_url" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.chartUrl"></a>

```python
chart_url: str
```

- *Type:* str

---

##### `deploy_artifact_path`<sup>Required</sup> <a name="deploy_artifact_path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactPath"></a>

```python
deploy_artifact_path: str
```

- *Type:* str

---

##### `deploy_artifact_source_type`<sup>Required</sup> <a name="deploy_artifact_source_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactSourceType"></a>

```python
deploy_artifact_source_type: str
```

- *Type:* str

---

##### `deploy_artifact_version`<sup>Required</sup> <a name="deploy_artifact_version" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.deployArtifactVersion"></a>

```python
deploy_artifact_version: str
```

- *Type:* str

---

##### `helm_artifact_source_type`<sup>Required</sup> <a name="helm_artifact_source_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmArtifactSourceType"></a>

```python
helm_artifact_source_type: str
```

- *Type:* str

---

##### `helm_verification_key_source`<sup>Required</sup> <a name="helm_verification_key_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.helmVerificationKeySource"></a>

```python
helm_verification_key_source: DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceHelmVerificationKeySourceList</a>

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSource</a>

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.argumentSubstitutionMode">argument_substitution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactSource">deploy_artifact_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactType">deploy_artifact_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems">DataOciDevopsDeployArtifactsDeployArtifactCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `argument_substitution_mode`<sup>Required</sup> <a name="argument_substitution_mode" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.argumentSubstitutionMode"></a>

```python
argument_substitution_mode: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deploy_artifact_source`<sup>Required</sup> <a name="deploy_artifact_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactSource"></a>

```python
deploy_artifact_source: DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsDeployArtifactSourceList</a>

---

##### `deploy_artifact_type`<sup>Required</sup> <a name="deploy_artifact_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.deployArtifactType"></a>

```python
deploy_artifact_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployArtifactsDeployArtifactCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItems">DataOciDevopsDeployArtifactsDeployArtifactCollectionItems</a>

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionList <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference <a name="DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection">DataOciDevopsDeployArtifactsDeployArtifactCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList">DataOciDevopsDeployArtifactsDeployArtifactCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployArtifactsDeployArtifactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsDeployArtifactCollection">DataOciDevopsDeployArtifactsDeployArtifactCollection</a>

---


### DataOciDevopsDeployArtifactsFilterList <a name="DataOciDevopsDeployArtifactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployArtifactsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDevopsDeployArtifactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]]

---


### DataOciDevopsDeployArtifactsFilterOutputReference <a name="DataOciDevopsDeployArtifactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_artifacts

dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDevopsDeployArtifactsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployArtifacts.DataOciDevopsDeployArtifactsFilter">DataOciDevopsDeployArtifactsFilter</a>]

---



