# `dataOciCloudBridgeAssetSource` Submodule <a name="`dataOciCloudBridgeAssetSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAssetSource <a name="DataOciCloudBridgeAssetSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source oci_cloud_bridge_asset_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_source_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.assetSourceId">asset_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#asset_source_id DataOciCloudBridgeAssetSource#asset_source_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_source_id`<sup>Required</sup> <a name="asset_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.Initializer.parameter.assetSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#asset_source_id DataOciCloudBridgeAssetSource#asset_source_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAssetSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudBridgeAssetSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudBridgeAssetSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudBridgeAssetSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAssetSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areHistoricalMetricsCollected">are_historical_metrics_collected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areRealtimeMetricsCollected">are_realtime_metrics_collected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetsCompartmentId">assets_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryCredentials">discovery_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList">DataOciCloudBridgeAssetSourceDiscoveryCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryScheduleId">discovery_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.inventoryId">inventory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.replicationCredentials">replication_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList">DataOciCloudBridgeAssetSourceReplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.vcenterEndpoint">vcenter_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceIdInput">asset_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceId">asset_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `are_historical_metrics_collected`<sup>Required</sup> <a name="are_historical_metrics_collected" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areHistoricalMetricsCollected"></a>

```python
are_historical_metrics_collected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `are_realtime_metrics_collected`<sup>Required</sup> <a name="are_realtime_metrics_collected" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.areRealtimeMetricsCollected"></a>

```python
are_realtime_metrics_collected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `assets_compartment_id`<sup>Required</sup> <a name="assets_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetsCompartmentId"></a>

```python
assets_compartment_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `discovery_credentials`<sup>Required</sup> <a name="discovery_credentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryCredentials"></a>

```python
discovery_credentials: DataOciCloudBridgeAssetSourceDiscoveryCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList">DataOciCloudBridgeAssetSourceDiscoveryCredentialsList</a>

---

##### `discovery_schedule_id`<sup>Required</sup> <a name="discovery_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.discoveryScheduleId"></a>

```python
discovery_schedule_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_id`<sup>Required</sup> <a name="inventory_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.inventoryId"></a>

```python
inventory_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `replication_credentials`<sup>Required</sup> <a name="replication_credentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.replicationCredentials"></a>

```python
replication_credentials: DataOciCloudBridgeAssetSourceReplicationCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList">DataOciCloudBridgeAssetSourceReplicationCredentialsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vcenter_endpoint`<sup>Required</sup> <a name="vcenter_endpoint" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.vcenterEndpoint"></a>

```python
vcenter_endpoint: str
```

- *Type:* str

---

##### `asset_source_id_input`<sup>Optional</sup> <a name="asset_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceIdInput"></a>

```python
asset_source_id_input: str
```

- *Type:* str

---

##### `asset_source_id`<sup>Required</sup> <a name="asset_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.assetSourceId"></a>

```python
asset_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAssetSourceConfig <a name="DataOciCloudBridgeAssetSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_source_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.assetSourceId">asset_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#asset_source_id DataOciCloudBridgeAssetSource#asset_source_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_source_id`<sup>Required</sup> <a name="asset_source_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceConfig.property.assetSourceId"></a>

```python
asset_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_asset_source#asset_source_id DataOciCloudBridgeAssetSource#asset_source_id}.

---

### DataOciCloudBridgeAssetSourceDiscoveryCredentials <a name="DataOciCloudBridgeAssetSourceDiscoveryCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials()
```


### DataOciCloudBridgeAssetSourceReplicationCredentials <a name="DataOciCloudBridgeAssetSourceReplicationCredentials" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAssetSourceDiscoveryCredentialsList <a name="DataOciCloudBridgeAssetSourceDiscoveryCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference <a name="DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials">DataOciCloudBridgeAssetSourceDiscoveryCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetSourceDiscoveryCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceDiscoveryCredentials">DataOciCloudBridgeAssetSourceDiscoveryCredentials</a>

---


### DataOciCloudBridgeAssetSourceReplicationCredentialsList <a name="DataOciCloudBridgeAssetSourceReplicationCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference <a name="DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_asset_source

dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials">DataOciCloudBridgeAssetSourceReplicationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAssetSourceReplicationCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAssetSource.DataOciCloudBridgeAssetSourceReplicationCredentials">DataOciCloudBridgeAssetSourceReplicationCredentials</a>

---



