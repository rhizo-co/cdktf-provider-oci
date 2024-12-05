# `dataOciDevopsDeployPipeline` Submodule <a name="`dataOciDevopsDeployPipeline` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployPipeline <a name="DataOciDevopsDeployPipeline" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipeline oci_devops_deploy_pipeline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deploy_pipeline_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipeline#deploy_pipeline_id DataOciDevopsDeployPipeline#deploy_pipeline_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.Initializer.parameter.deployPipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipeline#deploy_pipeline_id DataOciDevopsDeployPipeline#deploy_pipeline_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsDeployPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsDeployPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsDeployPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineArtifacts">deploy_pipeline_artifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList">DataOciDevopsDeployPipelineDeployPipelineArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineEnvironments">deploy_pipeline_environments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineParameters">deploy_pipeline_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList">DataOciDevopsDeployPipelineDeployPipelineParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineIdInput">deploy_pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deploy_pipeline_artifacts`<sup>Required</sup> <a name="deploy_pipeline_artifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineArtifacts"></a>

```python
deploy_pipeline_artifacts: DataOciDevopsDeployPipelineDeployPipelineArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList">DataOciDevopsDeployPipelineDeployPipelineArtifactsList</a>

---

##### `deploy_pipeline_environments`<sup>Required</sup> <a name="deploy_pipeline_environments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineEnvironments"></a>

```python
deploy_pipeline_environments: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList</a>

---

##### `deploy_pipeline_parameters`<sup>Required</sup> <a name="deploy_pipeline_parameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineParameters"></a>

```python
deploy_pipeline_parameters: DataOciDevopsDeployPipelineDeployPipelineParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList">DataOciDevopsDeployPipelineDeployPipelineParametersList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `deploy_pipeline_id_input`<sup>Optional</sup> <a name="deploy_pipeline_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineIdInput"></a>

```python
deploy_pipeline_id_input: str
```

- *Type:* str

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployPipelineConfig <a name="DataOciDevopsDeployPipelineConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deploy_pipeline_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.deployPipelineId">deploy_pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipeline#deploy_pipeline_id DataOciDevopsDeployPipeline#deploy_pipeline_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deploy_pipeline_id`<sup>Required</sup> <a name="deploy_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineConfig.property.deployPipelineId"></a>

```python
deploy_pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_pipeline#deploy_pipeline_id DataOciDevopsDeployPipeline#deploy_pipeline_id}.

---

### DataOciDevopsDeployPipelineDeployPipelineArtifacts <a name="DataOciDevopsDeployPipelineDeployPipelineArtifacts" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifacts()
```


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItems <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItems()
```


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages()
```


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems()
```


### DataOciDevopsDeployPipelineDeployPipelineEnvironments <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironments()
```


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems()
```


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages()
```


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems()
```


### DataOciDevopsDeployPipelineDeployPipelineParameters <a name="DataOciDevopsDeployPipelineDeployPipelineParameters" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParameters()
```


### DataOciDevopsDeployPipelineDeployPipelineParametersItems <a name="DataOciDevopsDeployPipelineDeployPipelineParametersItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deploy_stage_id`<sup>Required</sup> <a name="deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```python
deploy_stage_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItems</a>

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStages</a>

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId">deploy_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages">deploy_pipeline_stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItems">DataOciDevopsDeployPipelineDeployPipelineArtifactsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deploy_artifact_id`<sup>Required</sup> <a name="deploy_artifact_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployArtifactId"></a>

```python
deploy_artifact_id: str
```

- *Type:* str

---

##### `deploy_pipeline_stages`<sup>Required</sup> <a name="deploy_pipeline_stages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.deployPipelineStages"></a>

```python
deploy_pipeline_stages: DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsDeployPipelineStagesList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineArtifactsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItems">DataOciDevopsDeployPipelineDeployPipelineArtifactsItems</a>

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsList <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifacts">DataOciDevopsDeployPipelineDeployPipelineArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList">DataOciDevopsDeployPipelineDeployPipelineArtifactsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineArtifacts">DataOciDevopsDeployPipelineDeployPipelineArtifacts</a>

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId">deploy_stage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deploy_stage_id`<sup>Required</sup> <a name="deploy_stage_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.deployStageId"></a>

```python
deploy_stage_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItems</a>

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStages</a>

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId">deploy_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages">deploy_pipeline_stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deploy_environment_id`<sup>Required</sup> <a name="deploy_environment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployEnvironmentId"></a>

```python
deploy_environment_id: str
```

- *Type:* str

---

##### `deploy_pipeline_stages`<sup>Required</sup> <a name="deploy_pipeline_stages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.deployPipelineStages"></a>

```python
deploy_pipeline_stages: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsDeployPipelineStagesList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItems</a>

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironments">DataOciDevopsDeployPipelineDeployPipelineEnvironments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList">DataOciDevopsDeployPipelineDeployPipelineEnvironmentsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineEnvironments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineEnvironments">DataOciDevopsDeployPipelineDeployPipelineEnvironments</a>

---


### DataOciDevopsDeployPipelineDeployPipelineParametersItemsList <a name="DataOciDevopsDeployPipelineDeployPipelineParametersItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItems">DataOciDevopsDeployPipelineDeployPipelineParametersItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineParametersItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItems">DataOciDevopsDeployPipelineDeployPipelineParametersItems</a>

---


### DataOciDevopsDeployPipelineDeployPipelineParametersList <a name="DataOciDevopsDeployPipelineDeployPipelineParametersList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference <a name="DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_pipeline

dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList">DataOciDevopsDeployPipelineDeployPipelineParametersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParameters">DataOciDevopsDeployPipelineDeployPipelineParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployPipelineDeployPipelineParametersItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersItemsList">DataOciDevopsDeployPipelineDeployPipelineParametersItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployPipelineDeployPipelineParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployPipeline.DataOciDevopsDeployPipelineDeployPipelineParameters">DataOciDevopsDeployPipelineDeployPipelineParameters</a>

---



