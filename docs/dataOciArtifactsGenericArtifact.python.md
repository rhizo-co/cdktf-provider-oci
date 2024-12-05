# `dataOciArtifactsGenericArtifact` Submodule <a name="`dataOciArtifactsGenericArtifact` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsGenericArtifact <a name="DataOciArtifactsGenericArtifact" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifact oci_artifacts_generic_artifact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifact

dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.artifactId">artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifact#artifact_id DataOciArtifactsGenericArtifact#artifact_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.Initializer.parameter.artifactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifact#artifact_id DataOciArtifactsGenericArtifact#artifact_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciArtifactsGenericArtifact resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifact

dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifact

dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifact

dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifact

dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciArtifactsGenericArtifact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciArtifactsGenericArtifact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciArtifactsGenericArtifact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsGenericArtifact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.artifactPath">artifact_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.artifactIdInput">artifact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `artifact_path`<sup>Required</sup> <a name="artifact_path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.artifactPath"></a>

```python
artifact_path: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `artifact_id_input`<sup>Optional</sup> <a name="artifact_id_input" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.artifactIdInput"></a>

```python
artifact_id_input: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsGenericArtifactConfig <a name="DataOciArtifactsGenericArtifactConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_artifacts_generic_artifact

dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.artifactId">artifact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifact#artifact_id DataOciArtifactsGenericArtifact#artifact_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsGenericArtifact.DataOciArtifactsGenericArtifactConfig.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_generic_artifact#artifact_id DataOciArtifactsGenericArtifact#artifact_id}.

---


