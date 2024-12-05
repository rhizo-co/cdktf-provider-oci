# `dataOciDevopsDeployStages` Submodule <a name="`dataOciDevopsDeployStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployStages <a name="DataOciDevopsDeployStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages oci_devops_deploy_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStages(
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
  deploy_pipeline_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployStagesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}.

---

##### `deploy_pipeline_id`<sup>Optional</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.deployPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId">reset_deploy_pipeline_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDevopsDeployStagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_deploy_pipeline_id` <a name="reset_deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId"></a>

```python
def reset_deploy_pipeline_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsDeployStages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsDeployStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection">deploy_stage_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput">deploy_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deploy_stage_collection`<sup>Required</sup> <a name="deploy_stage_collection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection"></a>

```python
deploy_stage_collection: DataOciDevopsDeployStagesDeployStageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter"></a>

```python
filter: DataOciDevopsDeployStagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `deploy_pipeline_id_input`<sup>Optional</sup> <a name="deploy_pipeline_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput"></a>

```python
deploy_pipeline_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDevopsDeployStagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployStagesConfig <a name="DataOciDevopsDeployStagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  deploy_pipeline_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployStagesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}.

---

##### `deploy_pipeline_id`<sup>Optional</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployStagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}.

---

### DataOciDevopsDeployStagesDeployStageCollection <a name="DataOciDevopsDeployStagesDeployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection()
```


### DataOciDevopsDeployStagesDeployStageCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetString <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig()
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria()
```


### DataOciDevopsDeployStagesFilter <a name="DataOciDevopsDeployStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType">approval_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired">number_of_approvals_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_policy_type`<sup>Required</sup> <a name="approval_policy_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```python
approval_policy_type: str
```

- *Type:* str

---

##### `number_of_approvals_required`<sup>Required</sup> <a name="number_of_approvals_required" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```python
number_of_approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName">ingress_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA">namespace_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB">namespace_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType">strategy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName"></a>

```python
ingress_name: str
```

- *Type:* str

---

##### `namespace_a`<sup>Required</sup> <a name="namespace_a" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA"></a>

```python
namespace_a: str
```

- *Type:* str

---

##### `namespace_b`<sup>Required</sup> <a name="namespace_b" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB"></a>

```python
namespace_b: str
```

- *Type:* str

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName">ingress_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType">strategy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_name`<sup>Required</sup> <a name="ingress_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName"></a>

```python
ingress_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `strategy_type`<sup>Required</sup> <a name="strategy_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType"></a>

```python
strategy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType">network_channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```python
network_channel_type: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType">container_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel">network_channel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `container_config_type`<sup>Required</sup> <a name="container_config_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType"></a>

```python
container_config_type: str
```

- *Type:* str

---

##### `network_channel`<sup>Required</sup> <a name="network_channel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel"></a>

```python
network_channel: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a>

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount">failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage">failure_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_count`<sup>Required</sup> <a name="failure_count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount"></a>

```python
failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_percentage`<sup>Required</sup> <a name="failure_percentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage"></a>

```python
failure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy">approval_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled">are_hooks_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps">blue_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy">blue_green_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy">canary_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId">command_spec_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">compute_instance_group_blue_green_deployment_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId">compute_instance_group_canary_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">compute_instance_group_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId">compute_instance_group_deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config">config</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig">container_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId">deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds">deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA">deploy_environment_id_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB">deploy_environment_id_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId">deployment_spec_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection">deploy_stage_predecessor_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType">deploy_stage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId">docker_image_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy">failure_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId">function_deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds">function_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps">green_backend_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId">helm_chart_deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds">helm_command_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync">is_async</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled">is_debug_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled">is_force_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete">is_uninstall_on_stage_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled">is_validation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds">kubernetes_manifest_deploy_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig">load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs">max_memory_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId">oke_blue_green_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId">oke_canary_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId">oke_canary_traffic_shift_deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId">oke_cluster_deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig">production_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName">release_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy">rollback_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy">rollout_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString">set_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues">set_values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail">should_cleanup_on_fail</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait">should_not_wait</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues">should_reset_values</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues">should_reuse_values</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds">should_skip_crds</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes">should_skip_render_subchart_notes</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig">test_load_balancer_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget">traffic_shift_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds">values_artifact_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria">wait_criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_policy`<sup>Required</sup> <a name="approval_policy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy"></a>

```python
approval_policy: DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a>

---

##### `are_hooks_enabled`<sup>Required</sup> <a name="are_hooks_enabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled"></a>

```python
are_hooks_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `blue_backend_ips`<sup>Required</sup> <a name="blue_backend_ips" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps"></a>

```python
blue_backend_ips: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a>

---

##### `blue_green_strategy`<sup>Required</sup> <a name="blue_green_strategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy"></a>

```python
blue_green_strategy: DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a>

---

##### `canary_strategy`<sup>Required</sup> <a name="canary_strategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy"></a>

```python
canary_strategy: DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a>

---

##### `command_spec_deploy_artifact_id`<sup>Required</sup> <a name="command_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId"></a>

```python
command_spec_deploy_artifact_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_instance_group_blue_green_deployment_deploy_stage_id`<sup>Required</sup> <a name="compute_instance_group_blue_green_deployment_deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```python
compute_instance_group_blue_green_deployment_deploy_stage_id: str
```

- *Type:* str

---

##### `compute_instance_group_canary_deploy_stage_id`<sup>Required</sup> <a name="compute_instance_group_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId"></a>

```python
compute_instance_group_canary_deploy_stage_id: str
```

- *Type:* str

---

##### `compute_instance_group_canary_traffic_shift_deploy_stage_id`<sup>Required</sup> <a name="compute_instance_group_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```python
compute_instance_group_canary_traffic_shift_deploy_stage_id: str
```

- *Type:* str

---

##### `compute_instance_group_deploy_environment_id`<sup>Required</sup> <a name="compute_instance_group_deploy_environment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId"></a>

```python
compute_instance_group_deploy_environment_id: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config"></a>

```python
config: StringMap
```

- *Type:* cdktf.StringMap

---

##### `container_config`<sup>Required</sup> <a name="container_config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig"></a>

```python
container_config: DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deploy_artifact_id`<sup>Required</sup> <a name="deploy_artifact_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId"></a>

```python
deploy_artifact_id: str
```

- *Type:* str

---

##### `deploy_artifact_ids`<sup>Required</sup> <a name="deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds"></a>

```python
deploy_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deploy_environment_id_a`<sup>Required</sup> <a name="deploy_environment_id_a" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA"></a>

```python
deploy_environment_id_a: str
```

- *Type:* str

---

##### `deploy_environment_id_b`<sup>Required</sup> <a name="deploy_environment_id_b" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB"></a>

```python
deploy_environment_id_b: str
```

- *Type:* str

---

##### `deployment_spec_deploy_artifact_id`<sup>Required</sup> <a name="deployment_spec_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId"></a>

```python
deployment_spec_deploy_artifact_id: str
```

- *Type:* str

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

---

##### `deploy_stage_predecessor_collection`<sup>Required</sup> <a name="deploy_stage_predecessor_collection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection"></a>

```python
deploy_stage_predecessor_collection: DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a>

---

##### `deploy_stage_type`<sup>Required</sup> <a name="deploy_stage_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType"></a>

```python
deploy_stage_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `docker_image_deploy_artifact_id`<sup>Required</sup> <a name="docker_image_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId"></a>

```python
docker_image_deploy_artifact_id: str
```

- *Type:* str

---

##### `failure_policy`<sup>Required</sup> <a name="failure_policy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy"></a>

```python
failure_policy: DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `function_deploy_environment_id`<sup>Required</sup> <a name="function_deploy_environment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId"></a>

```python
function_deploy_environment_id: str
```

- *Type:* str

---

##### `function_timeout_in_seconds`<sup>Required</sup> <a name="function_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds"></a>

```python
function_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `green_backend_ips`<sup>Required</sup> <a name="green_backend_ips" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps"></a>

```python
green_backend_ips: DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a>

---

##### `helm_chart_deploy_artifact_id`<sup>Required</sup> <a name="helm_chart_deploy_artifact_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId"></a>

```python
helm_chart_deploy_artifact_id: str
```

- *Type:* str

---

##### `helm_command_artifact_ids`<sup>Required</sup> <a name="helm_command_artifact_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds"></a>

```python
helm_command_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_async`<sup>Required</sup> <a name="is_async" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync"></a>

```python
is_async: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_debug_enabled`<sup>Required</sup> <a name="is_debug_enabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled"></a>

```python
is_debug_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_force_enabled`<sup>Required</sup> <a name="is_force_enabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled"></a>

```python
is_force_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_uninstall_on_stage_delete`<sup>Required</sup> <a name="is_uninstall_on_stage_delete" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete"></a>

```python
is_uninstall_on_stage_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_validation_enabled`<sup>Required</sup> <a name="is_validation_enabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled"></a>

```python
is_validation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kubernetes_manifest_deploy_artifact_ids`<sup>Required</sup> <a name="kubernetes_manifest_deploy_artifact_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds"></a>

```python
kubernetes_manifest_deploy_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `load_balancer_config`<sup>Required</sup> <a name="load_balancer_config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig"></a>

```python
load_balancer_config: DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a>

---

##### `max_history`<sup>Required</sup> <a name="max_history" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory"></a>

```python
max_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_in_mbs`<sup>Required</sup> <a name="max_memory_in_mbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs"></a>

```python
max_memory_in_mbs: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `oke_blue_green_deploy_stage_id`<sup>Required</sup> <a name="oke_blue_green_deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId"></a>

```python
oke_blue_green_deploy_stage_id: str
```

- *Type:* str

---

##### `oke_canary_deploy_stage_id`<sup>Required</sup> <a name="oke_canary_deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId"></a>

```python
oke_canary_deploy_stage_id: str
```

- *Type:* str

---

##### `oke_canary_traffic_shift_deploy_stage_id`<sup>Required</sup> <a name="oke_canary_traffic_shift_deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId"></a>

```python
oke_canary_traffic_shift_deploy_stage_id: str
```

- *Type:* str

---

##### `oke_cluster_deploy_environment_id`<sup>Required</sup> <a name="oke_cluster_deploy_environment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId"></a>

```python
oke_cluster_deploy_environment_id: str
```

- *Type:* str

---

##### `production_load_balancer_config`<sup>Required</sup> <a name="production_load_balancer_config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig"></a>

```python
production_load_balancer_config: DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `release_name`<sup>Required</sup> <a name="release_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName"></a>

```python
release_name: str
```

- *Type:* str

---

##### `rollback_policy`<sup>Required</sup> <a name="rollback_policy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy"></a>

```python
rollback_policy: DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a>

---

##### `rollout_policy`<sup>Required</sup> <a name="rollout_policy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy"></a>

```python
rollout_policy: DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a>

---

##### `set_string`<sup>Required</sup> <a name="set_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString"></a>

```python
set_string: DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a>

---

##### `set_values`<sup>Required</sup> <a name="set_values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues"></a>

```python
set_values: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a>

---

##### `should_cleanup_on_fail`<sup>Required</sup> <a name="should_cleanup_on_fail" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail"></a>

```python
should_cleanup_on_fail: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_not_wait`<sup>Required</sup> <a name="should_not_wait" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait"></a>

```python
should_not_wait: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_reset_values`<sup>Required</sup> <a name="should_reset_values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues"></a>

```python
should_reset_values: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_reuse_values`<sup>Required</sup> <a name="should_reuse_values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues"></a>

```python
should_reuse_values: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_skip_crds`<sup>Required</sup> <a name="should_skip_crds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds"></a>

```python
should_skip_crds: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `should_skip_render_subchart_notes`<sup>Required</sup> <a name="should_skip_render_subchart_notes" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes"></a>

```python
should_skip_render_subchart_notes: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `test_load_balancer_config`<sup>Required</sup> <a name="test_load_balancer_config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig"></a>

```python
test_load_balancer_config: DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `traffic_shift_target`<sup>Required</sup> <a name="traffic_shift_target" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget"></a>

```python
traffic_shift_target: str
```

- *Type:* str

---

##### `values_artifact_ids`<sup>Required</sup> <a name="values_artifact_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds"></a>

```python
values_artifact_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_criteria`<sup>Required</sup> <a name="wait_criteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria"></a>

```python
wait_criteria: DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount">batch_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds">batch_delay_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage">batch_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent">ramp_limit_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_count`<sup>Required</sup> <a name="batch_count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount"></a>

```python
batch_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_delay_in_seconds`<sup>Required</sup> <a name="batch_delay_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```python
batch_delay_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_percentage`<sup>Required</sup> <a name="batch_percentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage"></a>

```python
batch_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `ramp_limit_percent`<sup>Required</sup> <a name="ramp_limit_percent" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```python
ramp_limit_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName">listener_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `listener_name`<sup>Required</sup> <a name="listener_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```python
listener_name: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration">wait_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType">wait_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

---

##### `wait_type`<sup>Required</sup> <a name="wait_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType"></a>

```python
wait_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesDeployStageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployStagesDeployStageCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployStagesDeployStageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployStagesDeployStageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a>

---


### DataOciDevopsDeployStagesFilterList <a name="DataOciDevopsDeployStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployStagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDevopsDeployStagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]]

---


### DataOciDevopsDeployStagesFilterOutputReference <a name="DataOciDevopsDeployStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_stages

dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDevopsDeployStagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter">DataOciDevopsDeployStagesFilter</a>]

---



