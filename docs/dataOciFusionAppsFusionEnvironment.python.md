# `dataOciFusionAppsFusionEnvironment` Submodule <a name="`dataOciFusionAppsFusionEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironment <a name="DataOciFusionAppsFusionEnvironment" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment oci_fusion_apps_fusion_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#fusion_environment_id DataOciFusionAppsFusionEnvironment#fusion_environment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#fusion_environment_id DataOciFusionAppsFusionEnvironment#fusion_environment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.additionalLanguagePacks">additional_language_packs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.appliedPatchBundles">applied_patch_bundles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetails">create_fusion_environment_admin_user_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dnsPrefix">dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentType">fusion_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.idcsDomainUrl">idcs_domain_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.isBreakGlassEnabled">is_break_glass_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyInfo">kms_key_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentKmsKeyInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lockboxId">lockbox_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.publicUrl">public_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.refresh">refresh</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList">DataOciFusionAppsFusionEnvironmentRefreshList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList">DataOciFusionAppsFusionEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.systemName">system_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpcomingMaintenance">time_upcoming_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_language_packs`<sup>Required</sup> <a name="additional_language_packs" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.additionalLanguagePacks"></a>

```python
additional_language_packs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `applied_patch_bundles`<sup>Required</sup> <a name="applied_patch_bundles" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.appliedPatchBundles"></a>

```python
applied_patch_bundles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `create_fusion_environment_admin_user_details`<sup>Required</sup> <a name="create_fusion_environment_admin_user_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetails"></a>

```python
create_fusion_environment_admin_user_details: DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_prefix`<sup>Required</sup> <a name="dns_prefix" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dnsPrefix"></a>

```python
dns_prefix: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

---

##### `fusion_environment_type`<sup>Required</sup> <a name="fusion_environment_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentType"></a>

```python
fusion_environment_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_domain_url`<sup>Required</sup> <a name="idcs_domain_url" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.idcsDomainUrl"></a>

```python
idcs_domain_url: str
```

- *Type:* str

---

##### `is_break_glass_enabled`<sup>Required</sup> <a name="is_break_glass_enabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.isBreakGlassEnabled"></a>

```python
is_break_glass_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_info`<sup>Required</sup> <a name="kms_key_info" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyInfo"></a>

```python
kms_key_info: DataOciFusionAppsFusionEnvironmentKmsKeyInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentKmsKeyInfoList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lockbox_id`<sup>Required</sup> <a name="lockbox_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lockboxId"></a>

```python
lockbox_id: str
```

- *Type:* str

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.maintenancePolicy"></a>

```python
maintenance_policy: DataOciFusionAppsFusionEnvironmentMaintenancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyList</a>

---

##### `public_url`<sup>Required</sup> <a name="public_url" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.publicUrl"></a>

```python
public_url: str
```

- *Type:* str

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.refresh"></a>

```python
refresh: DataOciFusionAppsFusionEnvironmentRefreshList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList">DataOciFusionAppsFusionEnvironmentRefreshList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.rules"></a>

```python
rules: DataOciFusionAppsFusionEnvironmentRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList">DataOciFusionAppsFusionEnvironmentRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.subscriptionIds"></a>

```python
subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_name`<sup>Required</sup> <a name="system_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.systemName"></a>

```python
system_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_upcoming_maintenance`<sup>Required</sup> <a name="time_upcoming_maintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpcomingMaintenance"></a>

```python
time_upcoming_maintenance: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentConfig <a name="DataOciFusionAppsFusionEnvironmentConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#fusion_environment_id DataOciFusionAppsFusionEnvironment#fusion_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#fusion_environment_id DataOciFusionAppsFusionEnvironment#fusion_environment_id}.

---

### DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails <a name="DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails()
```


### DataOciFusionAppsFusionEnvironmentKmsKeyInfo <a name="DataOciFusionAppsFusionEnvironmentKmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo()
```


### DataOciFusionAppsFusionEnvironmentMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy()
```


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes()
```


### DataOciFusionAppsFusionEnvironmentRefresh <a name="DataOciFusionAppsFusionEnvironmentRefresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh()
```


### DataOciFusionAppsFusionEnvironmentRules <a name="DataOciFusionAppsFusionEnvironmentRules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules()
```


### DataOciFusionAppsFusionEnvironmentRulesConditions <a name="DataOciFusionAppsFusionEnvironmentRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList <a name="DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference <a name="DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a>

---


### DataOciFusionAppsFusionEnvironmentKmsKeyInfoList <a name="DataOciFusionAppsFusionEnvironmentKmsKeyInfoList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference <a name="DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyId">active_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.currentKeyLifecycleState">current_key_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyId">scheduled_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyStatus">scheduled_key_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyVersion">scheduled_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledLifecycleState">scheduled_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo">DataOciFusionAppsFusionEnvironmentKmsKeyInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_key_id`<sup>Required</sup> <a name="active_key_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyId"></a>

```python
active_key_id: str
```

- *Type:* str

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

---

##### `current_key_lifecycle_state`<sup>Required</sup> <a name="current_key_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.currentKeyLifecycleState"></a>

```python
current_key_lifecycle_state: str
```

- *Type:* str

---

##### `scheduled_key_id`<sup>Required</sup> <a name="scheduled_key_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyId"></a>

```python
scheduled_key_id: str
```

- *Type:* str

---

##### `scheduled_key_status`<sup>Required</sup> <a name="scheduled_key_status" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyStatus"></a>

```python
scheduled_key_status: str
```

- *Type:* str

---

##### `scheduled_key_version`<sup>Required</sup> <a name="scheduled_key_version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyVersion"></a>

```python
scheduled_key_version: str
```

- *Type:* str

---

##### `scheduled_lifecycle_state`<sup>Required</sup> <a name="scheduled_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledLifecycleState"></a>

```python
scheduled_lifecycle_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentKmsKeyInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo">DataOciFusionAppsFusionEnvironmentKmsKeyInfo</a>

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverride">environment_maintenance_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverride">monthly_patching_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterly_upgrade_begin_times</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy">DataOciFusionAppsFusionEnvironmentMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_maintenance_override`<sup>Required</sup> <a name="environment_maintenance_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverride"></a>

```python
environment_maintenance_override: str
```

- *Type:* str

---

##### `monthly_patching_override`<sup>Required</sup> <a name="monthly_patching_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverride"></a>

```python
monthly_patching_override: str
```

- *Type:* str

---

##### `quarterly_upgrade_begin_times`<sup>Required</sup> <a name="quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```python
quarterly_upgrade_begin_times: DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy">DataOciFusionAppsFusionEnvironmentMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue">begin_times_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType">override_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `begin_times_value`<sup>Required</sup> <a name="begin_times_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue"></a>

```python
begin_times_value: str
```

- *Type:* str

---

##### `override_type`<sup>Required</sup> <a name="override_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType"></a>

```python
override_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes</a>

---


### DataOciFusionAppsFusionEnvironmentRefreshList <a name="DataOciFusionAppsFusionEnvironmentRefreshList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRefreshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentRefreshOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.sourceFusionEnvironmentId">source_fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeOfRestorationPoint">time_of_restoration_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh">DataOciFusionAppsFusionEnvironmentRefresh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_fusion_environment_id`<sup>Required</sup> <a name="source_fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.sourceFusionEnvironmentId"></a>

```python
source_fusion_environment_id: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_of_restoration_point`<sup>Required</sup> <a name="time_of_restoration_point" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeOfRestorationPoint"></a>

```python
time_of_restoration_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentRefresh
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh">DataOciFusionAppsFusionEnvironmentRefresh</a>

---


### DataOciFusionAppsFusionEnvironmentRulesConditionsList <a name="DataOciFusionAppsFusionEnvironmentRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions">DataOciFusionAppsFusionEnvironmentRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentRulesConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions">DataOciFusionAppsFusionEnvironmentRulesConditions</a>

---


### DataOciFusionAppsFusionEnvironmentRulesList <a name="DataOciFusionAppsFusionEnvironmentRulesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentRulesOutputReference <a name="DataOciFusionAppsFusionEnvironmentRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList">DataOciFusionAppsFusionEnvironmentRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules">DataOciFusionAppsFusionEnvironmentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.conditions"></a>

```python
conditions: DataOciFusionAppsFusionEnvironmentRulesConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList">DataOciFusionAppsFusionEnvironmentRulesConditionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules">DataOciFusionAppsFusionEnvironmentRules</a>

---



