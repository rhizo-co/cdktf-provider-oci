# `dataOciMediaServicesStreamPackagingConfig` Submodule <a name="`dataOciMediaServicesStreamPackagingConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamPackagingConfig <a name="DataOciMediaServicesStreamPackagingConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config oci_media_services_stream_packaging_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_packaging_config_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.streamPackagingConfigId">stream_packaging_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_packaging_config_id`<sup>Required</sup> <a name="stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.Initializer.parameter.streamPackagingConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesStreamPackagingConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesStreamPackagingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamPackagingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList">DataOciMediaServicesStreamPackagingConfigEncryptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList">DataOciMediaServicesStreamPackagingConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.segmentTimeInSeconds">segment_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingFormat">stream_packaging_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigIdInput">stream_packaging_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigId">stream_packaging_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.encryption"></a>

```python
encryption: DataOciMediaServicesStreamPackagingConfigEncryptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList">DataOciMediaServicesStreamPackagingConfigEncryptionList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.locks"></a>

```python
locks: DataOciMediaServicesStreamPackagingConfigLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList">DataOciMediaServicesStreamPackagingConfigLocksList</a>

---

##### `segment_time_in_seconds`<sup>Required</sup> <a name="segment_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.segmentTimeInSeconds"></a>

```python
segment_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `stream_packaging_format`<sup>Required</sup> <a name="stream_packaging_format" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingFormat"></a>

```python
stream_packaging_format: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `stream_packaging_config_id_input`<sup>Optional</sup> <a name="stream_packaging_config_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigIdInput"></a>

```python
stream_packaging_config_id_input: str
```

- *Type:* str

---

##### `stream_packaging_config_id`<sup>Required</sup> <a name="stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.streamPackagingConfigId"></a>

```python
stream_packaging_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamPackagingConfigConfig <a name="DataOciMediaServicesStreamPackagingConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_packaging_config_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.streamPackagingConfigId">stream_packaging_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_packaging_config_id`<sup>Required</sup> <a name="stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigConfig.property.streamPackagingConfigId"></a>

```python
stream_packaging_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_config#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfig#stream_packaging_config_id}.

---

### DataOciMediaServicesStreamPackagingConfigEncryption <a name="DataOciMediaServicesStreamPackagingConfigEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption()
```


### DataOciMediaServicesStreamPackagingConfigLocks <a name="DataOciMediaServicesStreamPackagingConfigLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamPackagingConfigEncryptionList <a name="DataOciMediaServicesStreamPackagingConfigEncryptionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption">DataOciMediaServicesStreamPackagingConfigEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamPackagingConfigEncryption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigEncryption">DataOciMediaServicesStreamPackagingConfigEncryption</a>

---


### DataOciMediaServicesStreamPackagingConfigLocksList <a name="DataOciMediaServicesStreamPackagingConfigLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamPackagingConfigLocksOutputReference <a name="DataOciMediaServicesStreamPackagingConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_config

dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks">DataOciMediaServicesStreamPackagingConfigLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamPackagingConfigLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfig.DataOciMediaServicesStreamPackagingConfigLocks">DataOciMediaServicesStreamPackagingConfigLocks</a>

---



