# `dataOciMediaServicesStreamCdnConfig` Submodule <a name="`dataOciMediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamCdnConfig <a name="DataOciMediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_cdn_config_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.streamCdnConfigId">stream_cdn_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_cdn_config_id`<sup>Required</sup> <a name="stream_cdn_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.Initializer.parameter.streamCdnConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesStreamCdnConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList">DataOciMediaServicesStreamCdnConfigConfigAList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList">DataOciMediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigIdInput">stream_cdn_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigId">stream_cdn_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.config"></a>

```python
config: DataOciMediaServicesStreamCdnConfigConfigAList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList">DataOciMediaServicesStreamCdnConfigConfigAList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.locks"></a>

```python
locks: DataOciMediaServicesStreamCdnConfigLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList">DataOciMediaServicesStreamCdnConfigLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `stream_cdn_config_id_input`<sup>Optional</sup> <a name="stream_cdn_config_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigIdInput"></a>

```python
stream_cdn_config_id_input: str
```

- *Type:* str

---

##### `stream_cdn_config_id`<sup>Required</sup> <a name="stream_cdn_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.streamCdnConfigId"></a>

```python
stream_cdn_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamCdnConfigConfig <a name="DataOciMediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_cdn_config_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.streamCdnConfigId">stream_cdn_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_cdn_config_id`<sup>Required</sup> <a name="stream_cdn_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfig.property.streamCdnConfigId"></a>

```python
stream_cdn_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}.

---

### DataOciMediaServicesStreamCdnConfigConfigA <a name="DataOciMediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA()
```


### DataOciMediaServicesStreamCdnConfigLocks <a name="DataOciMediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamCdnConfigConfigAList <a name="DataOciMediaServicesStreamCdnConfigConfigAList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamCdnConfigConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamCdnConfigConfigAOutputReference <a name="DataOciMediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">edge_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">edge_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">edge_token_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">edge_token_salt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">is_edge_token_auth</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">origin_auth_secret_key_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">origin_auth_secret_key_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">origin_auth_secret_key_nonce_a</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">origin_auth_secret_key_nonce_b</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">origin_auth_sign_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">origin_auth_sign_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA">DataOciMediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_hostname`<sup>Required</sup> <a name="edge_hostname" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```python
edge_hostname: str
```

- *Type:* str

---

##### `edge_path_prefix`<sup>Required</sup> <a name="edge_path_prefix" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```python
edge_path_prefix: str
```

- *Type:* str

---

##### `edge_token_key`<sup>Required</sup> <a name="edge_token_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```python
edge_token_key: str
```

- *Type:* str

---

##### `edge_token_salt`<sup>Required</sup> <a name="edge_token_salt" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```python
edge_token_salt: str
```

- *Type:* str

---

##### `is_edge_token_auth`<sup>Required</sup> <a name="is_edge_token_auth" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```python
is_edge_token_auth: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `origin_auth_secret_key_a`<sup>Required</sup> <a name="origin_auth_secret_key_a" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```python
origin_auth_secret_key_a: str
```

- *Type:* str

---

##### `origin_auth_secret_key_b`<sup>Required</sup> <a name="origin_auth_secret_key_b" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```python
origin_auth_secret_key_b: str
```

- *Type:* str

---

##### `origin_auth_secret_key_nonce_a`<sup>Required</sup> <a name="origin_auth_secret_key_nonce_a" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```python
origin_auth_secret_key_nonce_a: str
```

- *Type:* str

---

##### `origin_auth_secret_key_nonce_b`<sup>Required</sup> <a name="origin_auth_secret_key_nonce_b" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```python
origin_auth_secret_key_nonce_b: str
```

- *Type:* str

---

##### `origin_auth_sign_encryption`<sup>Required</sup> <a name="origin_auth_sign_encryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```python
origin_auth_sign_encryption: str
```

- *Type:* str

---

##### `origin_auth_sign_type`<sup>Required</sup> <a name="origin_auth_sign_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```python
origin_auth_sign_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigConfigA">DataOciMediaServicesStreamCdnConfigConfigA</a>

---


### DataOciMediaServicesStreamCdnConfigLocksList <a name="DataOciMediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamCdnConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamCdnConfigLocksOutputReference <a name="DataOciMediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_cdn_config

dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks">DataOciMediaServicesStreamCdnConfigLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamCdnConfigLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamCdnConfig.DataOciMediaServicesStreamCdnConfigLocks">DataOciMediaServicesStreamCdnConfigLocks</a>

---



