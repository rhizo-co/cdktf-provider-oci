# `dataOciBdsAutoScalingConfiguration` Submodule <a name="`dataOciBdsAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsAutoScalingConfiguration <a name="DataOciBdsAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_scaling_configuration_id: str,
  bds_instance_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.autoScalingConfigurationId">auto_scaling_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_configuration_id`<sup>Required</sup> <a name="auto_scaling_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.autoScalingConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}.

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsAutoScalingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList">DataOciBdsAutoScalingConfigurationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policyDetails">policy_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationIdInput">auto_scaling_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationId">auto_scaling_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policy"></a>

```python
policy: DataOciBdsAutoScalingConfigurationPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList">DataOciBdsAutoScalingConfigurationPolicyList</a>

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policyDetails"></a>

```python
policy_details: DataOciBdsAutoScalingConfigurationPolicyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `auto_scaling_configuration_id_input`<sup>Optional</sup> <a name="auto_scaling_configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationIdInput"></a>

```python
auto_scaling_configuration_id_input: str
```

- *Type:* str

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `auto_scaling_configuration_id`<sup>Required</sup> <a name="auto_scaling_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationId"></a>

```python
auto_scaling_configuration_id: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsAutoScalingConfigurationConfig <a name="DataOciBdsAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_scaling_configuration_id: str,
  bds_instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.autoScalingConfigurationId">auto_scaling_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_scaling_configuration_id`<sup>Required</sup> <a name="auto_scaling_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.autoScalingConfigurationId"></a>

```python
auto_scaling_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}.

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}.

---

### DataOciBdsAutoScalingConfigurationPolicy <a name="DataOciBdsAutoScalingConfigurationPolicy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy()
```


### DataOciBdsAutoScalingConfigurationPolicyDetails <a name="DataOciBdsAutoScalingConfigurationPolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig()
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig()
```


### DataOciBdsAutoScalingConfigurationPolicyRules <a name="DataOciBdsAutoScalingConfigurationPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules()
```


### DataOciBdsAutoScalingConfigurationPolicyRulesMetric <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric()
```


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsAutoScalingConfigurationPolicyDetailsList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig">scale_down_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig">scale_in_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig">scale_out_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig">scale_up_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails">schedule_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails">DataOciBdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `scale_down_config`<sup>Required</sup> <a name="scale_down_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```python
scale_down_config: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList</a>

---

##### `scale_in_config`<sup>Required</sup> <a name="scale_in_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig"></a>

```python
scale_in_config: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList</a>

---

##### `scale_out_config`<sup>Required</sup> <a name="scale_out_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```python
scale_out_config: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList</a>

---

##### `scale_up_config`<sup>Required</sup> <a name="scale_up_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```python
scale_up_config: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList</a>

---

##### `schedule_details`<sup>Required</sup> <a name="schedule_details" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails"></a>

```python
schedule_details: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails">DataOciBdsAutoScalingConfigurationPolicyDetails</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">min_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">min_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_step_size`<sup>Required</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList</a>

---

##### `min_memory_per_node`<sup>Required</sup> <a name="min_memory_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```python
min_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ocpus_per_node`<sup>Required</sup> <a name="min_ocpus_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```python
min_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_step_size`<sup>Required</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList</a>

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_size`<sup>Required</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList</a>

---

##### `step_size`<sup>Required</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">max_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">max_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_per_node`<sup>Required</sup> <a name="max_memory_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```python
max_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ocpus_per_node`<sup>Required</sup> <a name="max_ocpus_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```python
max_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_step_size`<sup>Required</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList</a>

---

##### `ocpu_step_size`<sup>Required</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">time_and_horizontal_scaling_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">time_and_vertical_scaling_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `time_and_horizontal_scaling_config`<sup>Required</sup> <a name="time_and_horizontal_scaling_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```python
time_and_horizontal_scaling_config: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `time_and_vertical_scaling_config`<sup>Required</sup> <a name="time_and_vertical_scaling_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```python
time_and_vertical_scaling_config: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">target_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_node_count`<sup>Required</sup> <a name="target_node_count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```python
target_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_recurrence`<sup>Required</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">target_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">target_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">target_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_memory_per_node`<sup>Required</sup> <a name="target_memory_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```python
target_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_ocpus_per_node`<sup>Required</sup> <a name="target_ocpus_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```python
target_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_shape`<sup>Required</sup> <a name="target_shape" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```python
target_shape: str
```

- *Type:* str

---

##### `time_recurrence`<sup>Required</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyList <a name="DataOciBdsAutoScalingConfigurationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList">DataOciBdsAutoScalingConfigurationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy">DataOciBdsAutoScalingConfigurationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.rules"></a>

```python
rules: DataOciBdsAutoScalingConfigurationPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList">DataOciBdsAutoScalingConfigurationPolicyRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy">DataOciBdsAutoScalingConfigurationPolicy</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric">DataOciBdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric">DataOciBdsAutoScalingConfigurationPolicyRulesMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configuration

dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules">DataOciBdsAutoScalingConfigurationPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationPolicyRulesMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules">DataOciBdsAutoScalingConfigurationPolicyRules</a>

---



